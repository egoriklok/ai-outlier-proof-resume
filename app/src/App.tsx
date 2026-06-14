import {
  AudioLinesIcon,
  Code2Icon,
  ExternalLinkIcon,
  MonitorCheckIcon,
  QrCodeIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react"
import { useEffect, useState } from "react"
import type { ComponentProps, ReactNode } from "react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type Lang = "ru" | "en"

type LinkItem = {
  value: string
  label: string
  href: string
}

type TelegramBot = {
  badge: string
  title: string
  description: string
  handle: string
  check: string
  status: string
  qr: string
  qrAlt: string
  telegramUrl: string
  telegramLabel: string
  caseUrl: string
  repoUrl: string
}

type Project = {
  id: string
  badge: string
  title: string
  description: string
  image: string
  imageFit?: "contain"
  alt: string
  caseUrl: string
  primaryUrl: string
  primaryLabel: string
  repoUrl: string
  contribution: string
  verify: string
  status: string
}

const githubProfileUrl = "https://github.com/egoriklok"
const liveCrmUrl = "https://caloristika-crm-demo.onrender.com/demo"
const russianVoiceBotUrl = "https://t.me/cjm_voice_strategy_0530_bot"
const englishVoiceBotUrl = "https://t.me/BusinessNavigatorVoiceEnBot"
const voiceBotsPageUrl = "./projects/voice-bots-product-proof/"
const languageStorageKey = "aiOutlierProofLang"

function getInitialLanguage(): Lang {
  if (typeof window === "undefined") {
    return "ru"
  }

  const queryLang = new URLSearchParams(window.location.search).get("lang")
  if (queryLang === "en" || queryLang === "ru") {
    return queryLang
  }

  const storedLang = window.localStorage.getItem(languageStorageKey)
  if (storedLang === "en" || storedLang === "ru") {
    return storedLang
  }

  return "ru"
}

function localizedHref(href: string, lang: Lang) {
  if (
    lang === "ru" ||
    href.startsWith("#") ||
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href
  }

  const [withoutHash, hash] = href.split("#")
  const separator = withoutHash.includes("?") ? "&" : "?"
  return `${withoutHash}${separator}lang=en${hash ? `#${hash}` : ""}`
}

const copy = {
  ru: {
    documentTitle: "Егор Локтионов | ИИ-прототипы, CRM и Telegram-боты",
    skip: "К основному содержанию",
    languageLabel: "Язык страницы",
    nav: {
      mark: "ИИ",
      brand: "Егор Локтионов",
      bots: "Боты",
      verification: "Проверка",
      projects: "Проекты",
      github: "GitHub",
    },
    hero: {
      badge: "ИИ-прототипы для бизнеса",
      name: "Егор Локтионов",
      lead:
        "Собираю ИИ-прототипы для бизнеса: CRM-демо с локальными B2B-лидами, Telegram-ботов и голосовые сценарии, которые можно открыть и проверить сразу.",
      goalPrefix: "Цель:",
      goal:
        "роль в продуктовой или ИИ-команде: прототипирование, автоматизация, CRM, Telegram-боты, React и TypeScript.",
      verifyButton: "Проверить за 3 минуты",
      crmButton: "Открыть CRM-демо",
      githubButton: "Посмотреть GitHub",
      alertTitle: "Проверка для рекрутера за 3 минуты",
      cardTitle: "Егор Локтионов + ИИ-агент",
      cardDescription:
        "Совместная сборка продуктов, страниц, демо и проверочных материалов",
      cardBadge: "Человек + ИИ-агент",
      notePrefix: "Для рекрутера:",
      note:
        "CRM-демо, Telegram-боты, публичный GitHub и вклад ИИ-агента в упаковку этой страницы. В CRM отдельно показан подход к базе: 2GIS, ФНС/DaData, source history и маршрутная проверка.",
      openDemo: "Открыть демо",
    },
    roleKeywords: ["CRM-прототипы", "Telegram-боты", "ИИ-сценарии"],
    stats: [
      { value: "CRM", label: "демо + локальная база лидов", href: liveCrmUrl },
      {
        value: "2",
        label: "Telegram-бота: русский и английский",
        href: "#telegram-bots",
      },
      { value: "GitHub", label: "код и инструкции", href: "#public-repos" },
    ] satisfies LinkItem[],
    checkRoute: [
      { label: "Открыть CRM-демо", detail: "воронка, клиенты, локальная база" },
      { label: "Запустить Telegram-бота", detail: "голос или текст -> структура" },
      { label: "Посмотреть GitHub", detail: "код, инструкции, история" },
    ],
    verification: {
      eyebrow: "Проверка за 3 минуты",
      title: "Что можно проверить без доступа",
      description:
        "Откройте CRM-демо без логина, запустите Telegram-бота и посмотрите код на GitHub. Так проверяются не обещания, а готовые артефакты.",
      tabs: {
        crm: "CRM-демо",
        bots: "Боты",
        github: "GitHub",
      },
      crmTitle: "CRM-демо в браузере",
      crmDescription:
        "Демоверсия открывается без логина и показывает воронку, каталог, клиентов, контекст сделки, следующие действия и логику локальной базы лидов: 2GIS search, ФНС/DaData enrichment, source history и маршрутная проверка от производства.",
      botsTitle: "Голосовой сценарий в Telegram",
      botsDescription:
        "Откройте Telegram-бота, отправьте голосовую или текстовую бизнес-идею и посмотрите, как она превращается в структуру.",
      openRuBot: "Открыть русского бота",
      openEnBot: "Открыть английского бота",
      botsDescriptionButton: "Описание ботов",
      githubTitle: "Публичный GitHub",
      githubDescription:
        "Репозитории открыты: можно проверить код, документацию, скриншоты, инструкции запуска и историю упаковки проекта.",
      openGithub: "Открыть GitHub",
    },
    telegramBotsHeading: {
      eyebrow: "Голосовые Telegram-боты",
      title: "Telegram-боты: голос -> структура -> следующий шаг",
      description:
        "Эти боты показывают, как голосовая или текстовая идея превращается в структуру: план, гипотезы и следующие действия.",
    },
    botLabels: {
      handle: "Адрес",
      link: "Ссылка",
      check: "Проверить",
      status: "Статус",
      qr: "QR-код для запуска бота",
      openBot: "Открыть бота",
      openCase: "Открыть кейс",
      viewCode: "Посмотреть код",
    },
    telegramBots: [
      {
        badge: "Русский голосовой бот",
        title: "Бизнес-Навигатор Голосом",
        description:
          "Telegram-бот принимает голосовую или текстовую бизнес-идею и возвращает структуру: путь клиента, гипотезы и следующие шаги.",
        handle: "@cjm_voice_strategy_0530_bot",
        check: "голос или текст -> путь клиента -> следующие шаги",
        status:
          "Проверено: ссылка на Telegram и публичный GitHub открываются, 14.06.2026.",
        qr: "./assets/qr-cjm-voice-strategy.svg",
        qrAlt: "QR для Telegram-бота Бизнес-Навигатор Голосом",
        telegramUrl: russianVoiceBotUrl,
        telegramLabel: "t.me/cjm_voice_strategy_0530_bot",
        caseUrl: `${voiceBotsPageUrl}#russian-bot`,
        repoUrl: "https://github.com/egoriklok/telegram-voice-cjm-bot",
      },
      {
        badge: "Английская версия",
        title: "Business Voice Navigator",
        description:
          "Англоязычная версия Telegram-бота для структурирования бизнес-заметок и следующих действий.",
        handle: "@BusinessNavigatorVoiceEnBot",
        check: "заметка -> структура -> следующий шаг",
        status:
          "Проверено: ссылка на Telegram и публичный GitHub открываются, 14.06.2026.",
        qr: "./assets/qr-business-voice-navigator.svg",
        qrAlt: "QR для английского Telegram-бота Business Voice Navigator",
        telegramUrl: englishVoiceBotUrl,
        telegramLabel: "t.me/BusinessNavigatorVoiceEnBot",
        caseUrl: `${voiceBotsPageUrl}#english-bot`,
        repoUrl:
          "https://github.com/egoriklok/telegram-voice-business-navigator-en",
      },
    ] satisfies TelegramBot[],
    projectsHeading: {
      eyebrow: "Проверяемые продукты",
      title: "Демо, боты и код, которые можно открыть",
      description:
        "Здесь не макеты, а проверяемые артефакты: демоверсии, боты, код и короткие страницы с объяснением результата.",
    },
    projectLabels: {
      contribution: "Вклад:",
      verify: "Проверить:",
      status: "Статус:",
      openCase: "Открыть кейс",
      viewCode: "Посмотреть код",
    },
    projects: [
      {
        id: "caloristika-crm",
        badge: "CRM-демо",
        title: "Caloristika CRM",
        description:
          "CRM-демо без логина: локальные B2B-лиды от производства, 2GIS search, ФНС/DaData enrichment, маршрутная проверка, клиенты, воронка и каталог.",
        image: "./assets/caloristika-crm.png",
        alt: "Экран CRM Caloristika",
        caseUrl: "./projects/caloristika-crm-render-demo/",
        primaryUrl: liveCrmUrl,
        primaryLabel: "Открыть демо",
        repoUrl: "https://github.com/egoriklok/caloristika-crm-render-demo",
        contribution:
          "собрал CRM-демо, где локальная база лидов идет через защищенный 2GIS search, ФНС/DaData enrichment, dry-run и сохранение источников",
        verify: "открыть демо и GitHub",
        status: "Проверено: демо открывается, 14.06.2026.",
      },
      {
        id: "agent-fiscal-autonomy-pack",
        badge: "Платежная готовность",
        title: "Agent Fiscal Autonomy Pack",
        description:
          "Аудит готовности сервиса к безопасной оплате ИИ-агентом: цена, лимит, чек, журнал действий и отзыв доступа.",
        image: "./assets/agent-fiscal-autonomy-pack.png",
        alt: "Скриншот Agent Fiscal Autonomy Pack",
        caseUrl: "./projects/agent-fiscal-autonomy-pack/",
        primaryUrl:
          "https://egoriklok.github.io/agent-fiscal-autonomy-pack/portfolio-r1-ru.html",
        primaryLabel: "Открыть продукт",
        repoUrl: "https://github.com/egoriklok/agent-fiscal-autonomy-pack",
        contribution:
          "упаковал R1-аудит платежного пути для сервисов, которые готовятся продавать доступ ИИ-агентам",
        verify: "открыть продукт, русскую страницу кейса и публичный GitHub",
        status:
          "Проверено: продуктовая страница и GitHub открываются, 14.06.2026.",
      },
      {
        id: "lunch-up-crm",
        badge: "CRM-контекст",
        title: "Lunch Up CRM: передача контекста",
        description:
          "CRM-контур для локальных B2B-лидов: 2GIS search от производства, ФНС/DaData enrichment, ручная маршрутная проверка и handoff в CRM/ИИ-ассистента.",
        image: "./assets/lunch-up-crm.png",
        alt: "Интерфейс Lunch Up CRM",
        caseUrl: "./projects/lunch-up-crm-agent-handoff/",
        primaryUrl: "https://github.com/egoriklok/lunch-up-crm-agent-handoff",
        primaryLabel: "Открыть GitHub",
        repoUrl: "https://github.com/egoriklok/lunch-up-crm-agent-handoff",
        contribution:
          "описал связку из документации Lunch Up: dry-run поиска лидов -> confirmed import -> source history -> CRM-состояние -> следующий шаг ИИ-ассистента",
        verify: "посмотреть кейс и публичный GitHub",
        status: "Проверено: публичный GitHub открывается, 14.06.2026.",
      },
      {
        id: "voice-cjm-bot",
        badge: "Голосовой бот",
        title: "Бизнес-Навигатор Голосом",
        description:
          "Telegram-бот для превращения голосовой заметки в путь клиента, гипотезы и следующие действия.",
        image: "./assets/voice-bot-ru-menu.png",
        imageFit: "contain",
        alt: "Интерфейс русского Telegram-бота Бизнес-Навигатор Голосом",
        caseUrl: `${voiceBotsPageUrl}#russian-bot`,
        primaryUrl: russianVoiceBotUrl,
        primaryLabel: "Открыть бота",
        repoUrl: "https://github.com/egoriklok/telegram-voice-cjm-bot",
        contribution:
          "связал голосовую заметку с картой клиента, гипотезами и планом действий",
        verify: "открыть Telegram-бота или GitHub",
        status: "Проверено: Telegram и публичный GitHub открываются, 14.06.2026.",
      },
      {
        id: "business-voice-navigator",
        badge: "Английский бот",
        title: "Английский Бизнес-Навигатор",
        description:
          "Англоязычный Telegram-бот: из бизнес-заметки в структуру, выводы и следующий шаг.",
        image: "./assets/voice-bot-en-menu.png",
        imageFit: "contain",
        alt: "Интерфейс английского Telegram-бота Business Voice Navigator",
        caseUrl: `${voiceBotsPageUrl}#english-bot`,
        primaryUrl: englishVoiceBotUrl,
        primaryLabel: "Открыть бота",
        repoUrl:
          "https://github.com/egoriklok/telegram-voice-business-navigator-en",
        contribution:
          "собрал англоязычный сценарий для структурирования бизнес-идей",
        verify: "открыть Telegram-бота или GitHub",
        status: "Проверено: Telegram и публичный GitHub открываются, 14.06.2026.",
      },
      {
        id: "voice-agent-factory",
        badge: "Шаблон ботов",
        title: "Шаблон для новых голосовых ботов",
        description:
          "Описание повторяемого подхода к созданию Telegram-ботов на базе похожих сценариев.",
        image: "./assets/voice-bot-product-interface.png",
        imageFit: "contain",
        alt: "Экран продукта с голосовым Telegram-ботом",
        caseUrl: `${voiceBotsPageUrl}#factory`,
        primaryUrl:
          "https://github.com/egoriklok/telegram-voice-agent-factory-skill",
        primaryLabel: "Открыть GitHub",
        repoUrl:
          "https://github.com/egoriklok/telegram-voice-agent-factory-skill",
        contribution:
          "оформил подход к повторяемому созданию голосовых Telegram-ботов",
        verify: "посмотреть описание и публичный GitHub",
        status: "Проверено: публичный GitHub открывается, 14.06.2026.",
      },
    ] satisfies Project[],
    agentSection: {
      eyebrow: "Упаковка ИИ-агентом",
      title: "Как ИИ-агент помог с этой страницей",
      alertTitle: "Эту страницу подготовил ИИ-агент",
      alertDescription:
        "Егор сделал продукты и решения. ИИ-агент помог собрать ссылки, QR-коды, демо и GitHub в понятный маршрут проверки для рекрутера.",
      egorTitle: "Егор",
      egorDescription:
        "Превращает идею в веб-интерфейс, CRM-прототип, Telegram-бота или сценарий с ИИ-ассистентом.",
      agentTitle: "ИИ-агент",
      agentDescription:
        "Упаковал открытые ссылки, QR-коды, демо, GitHub и короткие проверки в одну страницу для рекрутера.",
    },
    workHeading: {
      eyebrow: "Что я делаю",
      title: "Какие задачи закрываю",
    },
    verificationSteps: [
      {
        title: "CRM и веб-интерфейсы",
        description:
          "Собираю рабочие экраны, где видно клиентов, сделки, каталог и следующий шаг.",
      },
      {
        title: "Голосовые Telegram-боты",
        description:
          "Проектирую сценарий, где голосовая или текстовая идея превращается в понятную структуру.",
      },
      {
        title: "Публичная упаковка проекта",
        description:
          "Готовлю страницу, ссылки, QR-коды, краткое описание, GitHub и маршрут проверки.",
      },
      {
        title: "Честные границы",
        description:
          "Не заявляю выручку, внедрение или партнерства без отдельного подтверждения.",
      },
    ],
    reposHeading: {
      eyebrow: "Код, демо и прямые ссылки",
      title: "Все ссылки для проверки",
      description:
        "Все ссылки открываются без внутреннего доступа. Страница дает короткий путь от резюме к демо, ботам, GitHub и страницам проектов.",
      projectPages: "Страницы проектов",
      projectPagesDescription:
        "Отдельные страницы с коротким описанием каждого артефакта.",
      repositories: "GitHub-репозитории",
      repositoriesDescription:
        "Код, документация и инструкции запуска для технической проверки.",
    },
    footer: {
      text:
        "Страница подготовлена ИИ-агентом, которому Егор Локтионов делегировал упаковку доказательств. Продукты и решения принадлежат Егору.",
      proof: "Публичная проверка",
      bots: "Голосовые боты",
    },
  },
  en: {
    documentTitle:
      "Egor Loktionov | AI Product Engineer, CRM Automation and Telegram Voice AI",
    skip: "Skip to main content",
    languageLabel: "Page language",
    nav: {
      mark: "AI",
      brand: "Egor Loktionov",
      bots: "Bots",
      verification: "Proof",
      projects: "Projects",
      github: "GitHub",
    },
    hero: {
      badge: "AI-native product proof",
      name: "Egor Loktionov",
      lead:
        "I build AI-native product prototypes for CRM, local B2B lead sourcing, Telegram voice agents and workflow automation, with public demos and source trails.",
      goalPrefix: "Target:",
      goal:
        "AI Product Engineer / AI Agent Builder roles focused on rapid prototyping, CRM automation, Telegram AI, React and TypeScript.",
      verifyButton: "3-minute proof check",
      crmButton: "Open CRM demo",
      githubButton: "View GitHub",
      alertTitle: "3-minute proof path for recruiters",
      cardTitle: "Egor Loktionov + AI Agent",
      cardDescription:
        "A human-and-agent collaboration across products, demos, pages and verification assets",
      cardBadge: "Human + AI agent",
      notePrefix: "For recruiters:",
      note:
        "Live CRM demo, Telegram voice bots, public GitHub and a transparent AI-agent packaging workflow. The CRM proof includes local lead sourcing via 2GIS, FNS/DaData, source history and route checks.",
      openDemo: "Open demo",
    },
    roleKeywords: [
      "AI Product Engineering",
      "CRM Automation",
      "Telegram Voice AI",
    ],
    stats: [
      { value: "CRM", label: "demo + local lead base", href: liveCrmUrl },
      {
        value: "2",
        label: "Telegram voice agents: RU + EN",
        href: "#telegram-bots",
      },
      { value: "GitHub", label: "source, docs and setup traces", href: "#public-repos" },
    ] satisfies LinkItem[],
    checkRoute: [
      { label: "Open CRM demo", detail: "pipeline, clients, local lead base" },
      { label: "Run Telegram bot", detail: "voice or text -> structured output" },
      { label: "Inspect GitHub", detail: "source, docs, implementation history" },
    ],
    verification: {
      eyebrow: "3-minute verification",
      title: "What a hiring team can verify without private access",
      description:
        "Open the live CRM demo, run the Telegram voice bot and inspect public GitHub repositories. The page is built around artifacts, not claims.",
      tabs: {
        crm: "CRM demo",
        bots: "Bots",
        github: "GitHub",
      },
      crmTitle: "Browser-based CRM demo",
      crmDescription:
        "A no-login CRM demo showing pipeline, catalog, client context, deal state, next actions and local lead-sourcing logic: 2GIS search, FNS/DaData enrichment, source history and route checks from production.",
      botsTitle: "Telegram voice workflow",
      botsDescription:
        "Open the bot, send a voice or text business note, and review how it becomes structured product context.",
      openRuBot: "Open Russian bot",
      openEnBot: "Open English bot",
      botsDescriptionButton: "Voice bot product page",
      githubTitle: "Public GitHub",
      githubDescription:
        "Repositories expose source code, documentation, screenshots, setup notes and product packaging history.",
      openGithub: "Open GitHub",
    },
    telegramBotsHeading: {
      eyebrow: "Telegram Voice AI",
      title: "Voice -> structure -> next action",
      description:
        "These Telegram agents turn a spoken or typed business idea into customer context, hypotheses and actionable next steps.",
    },
    botLabels: {
      handle: "Handle",
      link: "Link",
      check: "How to test",
      status: "Status",
      qr: "QR code to launch the bot",
      openBot: "Open bot",
      openCase: "Open case",
      viewCode: "View code",
    },
    telegramBots: [
      {
        badge: "Russian voice agent",
        title: "Business Navigator by Voice",
        description:
          "Telegram bot that turns a voice or text business idea into customer journey context, hypotheses and next actions.",
        handle: "@cjm_voice_strategy_0530_bot",
        check: "voice or text -> customer journey -> next steps",
        status:
          "Verified: Telegram link and public GitHub are accessible, 14 Jun 2026.",
        qr: "./assets/qr-cjm-voice-strategy.svg",
        qrAlt: "QR code for Business Navigator by Voice Telegram bot",
        telegramUrl: russianVoiceBotUrl,
        telegramLabel: "t.me/cjm_voice_strategy_0530_bot",
        caseUrl: `${voiceBotsPageUrl}#russian-bot`,
        repoUrl: "https://github.com/egoriklok/telegram-voice-cjm-bot",
      },
      {
        badge: "English version",
        title: "Business Voice Navigator",
        description:
          "English Telegram voice agent for business-note discovery, structured outputs and next-step planning.",
        handle: "@BusinessNavigatorVoiceEnBot",
        check: "note -> structure -> next action",
        status:
          "Verified: Telegram link and public GitHub are accessible, 14 Jun 2026.",
        qr: "./assets/qr-business-voice-navigator.svg",
        qrAlt: "QR code for Business Voice Navigator Telegram bot",
        telegramUrl: englishVoiceBotUrl,
        telegramLabel: "t.me/BusinessNavigatorVoiceEnBot",
        caseUrl: `${voiceBotsPageUrl}#english-bot`,
        repoUrl:
          "https://github.com/egoriklok/telegram-voice-business-navigator-en",
      },
    ] satisfies TelegramBot[],
    projectsHeading: {
      eyebrow: "Proof-backed products",
      title: "Demos, bots and repositories a hiring team can open",
      description:
        "This is a portfolio of working artifacts: live demos, Telegram bots, source code and concise product pages explaining the result.",
    },
    projectLabels: {
      contribution: "Contribution:",
      verify: "Verify:",
      status: "Status:",
      openCase: "Open case",
      viewCode: "View code",
    },
    projects: [
      {
        id: "caloristika-crm",
        badge: "CRM demo",
        title: "Caloristika CRM",
        description:
          "No-login CRM demo with local B2B leads from production, 2GIS search, FNS/DaData enrichment, route checks, clients, pipeline and catalog.",
        image: "./assets/caloristika-crm.png",
        alt: "Caloristika CRM screen",
        caseUrl: "./projects/caloristika-crm-render-demo/",
        primaryUrl: liveCrmUrl,
        primaryLabel: "Open demo",
        repoUrl: "https://github.com/egoriklok/caloristika-crm-render-demo",
        contribution:
          "built a CRM demo where local lead sourcing uses protected 2GIS search, FNS/DaData enrichment, dry-run and source records",
        verify: "open the live demo and public GitHub repository",
        status: "Verified: demo opens, 14 Jun 2026.",
      },
      {
        id: "agent-fiscal-autonomy-pack",
        badge: "Agent payments readiness",
        title: "Agent Fiscal Autonomy Pack",
        description:
          "Readiness audit for safe AI-agent payments: price, budget limit, receipt/status, action log and revocation path.",
        image: "./assets/agent-fiscal-autonomy-pack.png",
        alt: "Agent Fiscal Autonomy Pack screenshot",
        caseUrl: "./projects/agent-fiscal-autonomy-pack/",
        primaryUrl:
          "https://egoriklok.github.io/agent-fiscal-autonomy-pack/portfolio-r1-ru.html",
        primaryLabel: "Open product",
        repoUrl: "https://github.com/egoriklok/agent-fiscal-autonomy-pack",
        contribution:
          "packaged an R1 payment-path audit for services preparing to sell access to AI agents",
        verify: "open the product page, bilingual case page and public GitHub",
        status: "Verified: product page and GitHub open, 14 Jun 2026.",
      },
      {
        id: "lunch-up-crm",
        badge: "CRM context handoff",
        title: "Lunch Up CRM: Agent Handoff",
        description:
          "CRM workflow for local B2B leads: production-based 2GIS search, FNS/DaData enrichment, route checks, then CRM and AI-agent handoff.",
        image: "./assets/lunch-up-crm.png",
        alt: "Lunch Up CRM interface",
        caseUrl: "./projects/lunch-up-crm-agent-handoff/",
        primaryUrl: "https://github.com/egoriklok/lunch-up-crm-agent-handoff",
        primaryLabel: "Open GitHub",
        repoUrl: "https://github.com/egoriklok/lunch-up-crm-agent-handoff",
        contribution:
          "defined the documented Lunch Up chain: lead-search dry-run, confirmed import, source history, CRM state and AI-assistant next action",
        verify: "open the case page and public GitHub",
        status: "Verified: public GitHub opens, 14 Jun 2026.",
      },
      {
        id: "voice-cjm-bot",
        badge: "Voice bot",
        title: "Business Navigator by Voice",
        description:
          "Telegram voice agent that turns a spoken business note into customer journey context, hypotheses and next actions.",
        image: "./assets/voice-bot-ru-menu.png",
        imageFit: "contain",
        alt: "Russian Telegram voice bot interface",
        caseUrl: `${voiceBotsPageUrl}#russian-bot`,
        primaryUrl: russianVoiceBotUrl,
        primaryLabel: "Open bot",
        repoUrl: "https://github.com/egoriklok/telegram-voice-cjm-bot",
        contribution:
          "connected voice input with customer journey mapping, hypotheses and action planning",
        verify: "open the Telegram bot or GitHub repository",
        status: "Verified: Telegram and public GitHub open, 14 Jun 2026.",
      },
      {
        id: "business-voice-navigator",
        badge: "English bot",
        title: "Business Voice Navigator",
        description:
          "English Telegram bot that turns a business note into structured output, review and next steps.",
        image: "./assets/voice-bot-en-menu.png",
        imageFit: "contain",
        alt: "English Telegram bot interface",
        caseUrl: `${voiceBotsPageUrl}#english-bot`,
        primaryUrl: englishVoiceBotUrl,
        primaryLabel: "Open bot",
        repoUrl:
          "https://github.com/egoriklok/telegram-voice-business-navigator-en",
        contribution:
          "built the English product discovery workflow for business-note structuring",
        verify: "open the Telegram bot or GitHub repository",
        status: "Verified: Telegram and public GitHub open, 14 Jun 2026.",
      },
      {
        id: "voice-agent-factory",
        badge: "Bot factory pattern",
        title: "Voice Agent Factory Skill",
        description:
          "Reusable approach for creating new Telegram voice bots from similar interview and output patterns.",
        image: "./assets/voice-bot-product-interface.png",
        imageFit: "contain",
        alt: "Voice bot product proof screen",
        caseUrl: `${voiceBotsPageUrl}#factory`,
        primaryUrl:
          "https://github.com/egoriklok/telegram-voice-agent-factory-skill",
        primaryLabel: "Open GitHub",
        repoUrl:
          "https://github.com/egoriklok/telegram-voice-agent-factory-skill",
        contribution:
          "converted one-off voice bot delivery into a reusable agent skill and project intake pattern",
        verify: "review the product description and public GitHub",
        status: "Verified: public GitHub opens, 14 Jun 2026.",
      },
    ] satisfies Project[],
    agentSection: {
      eyebrow: "AI-agent packaging",
      title: "How the AI agent helped package this page",
      alertTitle: "This page was prepared by an AI agent",
      alertDescription:
        "Egor built the products and product decisions. The AI agent packaged links, QR codes, demos and GitHub evidence into a clean verification path.",
      egorTitle: "Egor",
      egorDescription:
        "Turns an idea into a web interface, CRM prototype, Telegram bot or AI-assisted workflow.",
      agentTitle: "AI agent",
      agentDescription:
        "Packaged open links, QR codes, demos, GitHub repositories and short checks into one recruiter-friendly proof page.",
    },
    workHeading: {
      eyebrow: "Work surface",
      title: "Problems I can own",
    },
    verificationSteps: [
      {
        title: "CRM and web interfaces",
        description:
          "Build working screens that expose clients, deals, catalog state and next actions.",
      },
      {
        title: "Telegram voice agents",
        description:
          "Design flows where voice or text input becomes structured business context.",
      },
      {
        title: "Public product packaging",
        description:
          "Prepare pages, links, QR codes, concise product framing, GitHub and verification routes.",
      },
      {
        title: "Honest boundaries",
        description:
          "Avoid revenue, deployment or partnership claims without direct proof.",
      },
    ],
    reposHeading: {
      eyebrow: "Code, demos and direct links",
      title: "All verification links",
      description:
        "All links are public or no-login. The page gives a short path from resume to demo, bots, GitHub and product pages.",
      projectPages: "Project pages",
      projectPagesDescription:
        "Concise bilingual pages explaining each artifact and its product value.",
      repositories: "GitHub repositories",
      repositoriesDescription:
        "Source code, documentation and launch instructions for technical review.",
    },
    footer: {
      text:
        "This page was prepared by an AI agent delegated by Egor Loktionov to package proof artifacts. Products and product decisions belong to Egor.",
      proof: "Public proof",
      bots: "Voice bots",
    },
  },
} as const

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4">
      <Badge
        variant="outline"
        className="w-fit border-primary/30 bg-background text-primary"
      >
        {eyebrow}
      </Badge>
      <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

function ExternalButton({
  href,
  children,
  variant = "outline",
}: {
  href: string
  children: ReactNode
  variant?: ComponentProps<typeof Button>["variant"]
}) {
  const isExternal = href.startsWith("http")

  return (
    <Button asChild variant={variant}>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {children}
        <ExternalLinkIcon aria-hidden="true" data-icon="inline-end" />
      </a>
    </Button>
  )
}

function LanguageToggle({
  lang,
  setLang,
  label,
}: {
  lang: Lang
  setLang: (lang: Lang) => void
  label: string
}) {
  return (
    <div
      className="inline-flex rounded-lg border bg-background p-1"
      role="group"
      aria-label={label}
    >
      {(["ru", "en"] as const).map((item) => (
        <Button
          key={item}
          type="button"
          size="sm"
          variant={lang === item ? "default" : "ghost"}
          aria-pressed={lang === item}
          onClick={() => setLang(item)}
        >
          {item.toUpperCase()}
        </Button>
      ))}
    </div>
  )
}

function App() {
  const [lang, setLang] = useState<Lang>(getInitialLanguage)
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.documentTitle
    window.localStorage.setItem(languageStorageKey, lang)

    const url = new URL(window.location.href)
    if (lang === "en") {
      url.searchParams.set("lang", "en")
    } else {
      url.searchParams.delete("lang")
    }
    window.history.replaceState(null, "", url)
  }, [lang, t.documentTitle])

  return (
    <div className="it-shell min-h-svh bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        {t.skip}
      </a>
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <nav className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 lg:px-6">
          <a
            href="#top"
            className="flex items-center gap-3 font-semibold no-underline"
          >
            <span className="grid size-9 place-items-center rounded-md border border-primary/30 bg-secondary text-sm text-primary">
              {t.nav.mark}
            </span>
            <span className="hidden sm:inline">{t.nav.brand}</span>
          </a>
          <div className="flex flex-wrap items-center gap-1">
            <Button asChild variant="ghost" size="sm">
              <a href="#telegram-bots">{t.nav.bots}</a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a href="#verification">{t.nav.verification}</a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a href="#projects">{t.nav.projects}</a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a href="#public-repos">{t.nav.github}</a>
            </Button>
            <LanguageToggle
              lang={lang}
              setLang={setLang}
              label={t.languageLabel}
            />
          </div>
        </nav>
      </header>

      <main id="main">
        <section id="top" className="border-b px-4 py-12 lg:px-6 lg:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1.12fr_0.88fr]">
            <div className="flex flex-col justify-center gap-7">
              <div className="flex flex-col gap-4">
                <Badge
                  variant="outline"
                  className="w-fit border-primary/30 bg-background text-primary"
                >
                  {t.hero.badge}
                </Badge>
                <h1 className="max-w-5xl text-5xl leading-none font-semibold tracking-normal text-balance md:text-7xl">
                  {t.hero.name}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-700 md:text-2xl">
                  {t.hero.lead}
                </p>
                <div className="flex max-w-3xl flex-wrap gap-2">
                  {t.roleKeywords.map((keyword) => (
                    <Badge key={keyword} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>
                <p className="max-w-3xl text-sm leading-6 text-slate-700">
                  <b className="text-foreground">{t.hero.goalPrefix}</b>{" "}
                  {t.hero.goal}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button asChild variant="default">
                  <a href="#verification">
                    <ShieldCheckIcon
                      aria-hidden="true"
                      data-icon="inline-start"
                    />
                    {t.hero.verifyButton}
                  </a>
                </Button>
                <ExternalButton href={liveCrmUrl} variant="secondary">
                  <MonitorCheckIcon
                    aria-hidden="true"
                    data-icon="inline-start"
                  />
                  {t.hero.crmButton}
                </ExternalButton>
                <ExternalButton href={githubProfileUrl}>
                  <Code2Icon aria-hidden="true" data-icon="inline-start" />
                  {t.hero.githubButton}
                </ExternalButton>
              </div>

              <Alert className="border-lime-300 bg-lime-50 text-slate-950 [&>svg]:text-primary">
                <ShieldCheckIcon aria-hidden="true" />
                <AlertTitle>{t.hero.alertTitle}</AlertTitle>
                <AlertDescription className="text-slate-700">
                  <ol className="mt-2 grid gap-1 sm:grid-cols-3">
                    {t.checkRoute.map((item, index) => (
                      <li key={item.label}>
                        {index + 1}. {item.label}:{" "}
                        <span className="text-slate-700">{item.detail}</span>
                      </li>
                    ))}
                  </ol>
                </AlertDescription>
              </Alert>
            </div>

            <Card className="overflow-hidden border-primary/30">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex shrink-0 -space-x-4">
                    <Avatar className="size-24 border-2 border-background">
                      <AvatarImage
                        src="./assets/egor-loktionov-photo.jpg"
                        alt={t.hero.name}
                        width={96}
                        height={96}
                        fetchPriority="high"
                      />
                      <AvatarFallback>ЕЛ</AvatarFallback>
                    </Avatar>
                    <Avatar className="size-24 border-2 border-background bg-secondary">
                      <AvatarImage
                        src="./assets/ai-agent-avatar.svg"
                        alt="Codex AI agent avatar"
                        width={96}
                        height={96}
                        fetchPriority="high"
                      />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex min-w-0 flex-col gap-2">
                    <CardTitle>{t.hero.cardTitle}</CardTitle>
                    <CardDescription>{t.hero.cardDescription}</CardDescription>
                    <Badge variant="outline" className="w-fit">
                      {t.hero.cardBadge}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Separator />
                <div className="grid gap-3 sm:grid-cols-2">
                  {t.stats.map((item) => (
                    <a
                      key={item.label}
                      href={localizedHref(item.href, lang)}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="rounded-md border bg-muted/45 p-4 no-underline transition-colors hover:bg-muted"
                    >
                      <span className="text-4xl font-semibold tracking-normal">
                        {item.value}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
                <div className="rounded-md border border-lime-300 bg-lime-50 p-4 text-sm leading-6 text-slate-700">
                  <b className="text-foreground">{t.hero.notePrefix}</b>{" "}
                  {t.hero.note}
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <ExternalButton href={liveCrmUrl} variant="secondary">
                  {t.hero.openDemo}
                </ExternalButton>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="verification" className="border-y bg-secondary/60 py-12">
          <SectionHeading
            eyebrow={t.verification.eyebrow}
            title={t.verification.title}
            description={t.verification.description}
          />
          <div className="mx-auto mt-6 w-full max-w-6xl px-4">
            <Tabs defaultValue="crm">
              <TabsList className="flex h-auto flex-wrap justify-start">
                <TabsTrigger value="crm">{t.verification.tabs.crm}</TabsTrigger>
                <TabsTrigger value="bots">{t.verification.tabs.bots}</TabsTrigger>
                <TabsTrigger value="github">
                  {t.verification.tabs.github}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="crm">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.verification.crmTitle}</CardTitle>
                    <CardDescription>
                      {t.verification.crmDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <ExternalButton href={liveCrmUrl}>
                      {t.hero.crmButton}
                    </ExternalButton>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="bots">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.verification.botsTitle}</CardTitle>
                    <CardDescription>
                      {t.verification.botsDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-wrap gap-2">
                    <ExternalButton href={russianVoiceBotUrl}>
                      {t.verification.openRuBot}
                    </ExternalButton>
                    <ExternalButton href={englishVoiceBotUrl}>
                      {t.verification.openEnBot}
                    </ExternalButton>
                    <ExternalButton href={localizedHref(voiceBotsPageUrl, lang)}>
                      {t.verification.botsDescriptionButton}
                    </ExternalButton>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="github">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.verification.githubTitle}</CardTitle>
                    <CardDescription>
                      {t.verification.githubDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <ExternalButton href={githubProfileUrl}>
                      {t.verification.openGithub}
                    </ExternalButton>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="telegram-bots" className="py-12">
          <SectionHeading
            eyebrow={t.telegramBotsHeading.eyebrow}
            title={t.telegramBotsHeading.title}
            description={t.telegramBotsHeading.description}
          />
          <div className="mx-auto mt-6 grid w-full max-w-6xl gap-4 px-4">
            {t.telegramBots.map((bot) => (
              <Card key={bot.handle}>
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex max-w-3xl flex-col gap-2">
                      <Badge
                        variant="outline"
                        className="w-fit border-primary/30 bg-background text-primary"
                      >
                        {bot.badge}
                      </Badge>
                      <CardTitle>{bot.title}</CardTitle>
                      <CardDescription>{bot.description}</CardDescription>
                    </div>
                    <CardAction>
                      <QrCodeIcon aria-hidden="true" />
                    </CardAction>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-[1fr_190px]">
                  <div className="grid gap-3 text-sm">
                    <div className="grid gap-1 md:grid-cols-[140px_1fr]">
                      <span className="font-medium">{t.botLabels.handle}</span>
                      <span className="break-words text-muted-foreground">
                        {bot.handle}
                      </span>
                    </div>
                    <Separator />
                    <div className="grid gap-1 md:grid-cols-[140px_1fr]">
                      <span className="font-medium">{t.botLabels.link}</span>
                      <a
                        href={bot.telegramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="break-words text-primary underline-offset-4 hover:underline"
                      >
                        {bot.telegramLabel}
                      </a>
                    </div>
                    <Separator />
                    <div className="grid gap-1 md:grid-cols-[140px_1fr]">
                      <span className="font-medium">{t.botLabels.check}</span>
                      <span className="text-muted-foreground">{bot.check}</span>
                    </div>
                    <Separator />
                    <div className="grid gap-1 md:grid-cols-[140px_1fr]">
                      <span className="font-medium">{t.botLabels.status}</span>
                      <span className="text-muted-foreground">
                        {bot.status}
                      </span>
                    </div>
                  </div>
                  <figure className="m-0 hidden justify-items-center gap-3 sm:grid">
                    <img
                      className="size-40 rounded-lg border bg-card object-contain p-3"
                      src={bot.qr}
                      alt={bot.qrAlt}
                      width={160}
                      height={160}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="text-sm text-muted-foreground">
                      {t.botLabels.qr}
                    </figcaption>
                  </figure>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <ExternalButton href={bot.telegramUrl}>
                    {t.botLabels.openBot}
                  </ExternalButton>
                  <ExternalButton href={localizedHref(bot.caseUrl, lang)}>
                    {t.botLabels.openCase}
                  </ExternalButton>
                  <ExternalButton href={bot.repoUrl}>
                    {t.botLabels.viewCode}
                  </ExternalButton>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="py-12">
          <SectionHeading
            eyebrow={t.projectsHeading.eyebrow}
            title={t.projectsHeading.title}
            description={t.projectsHeading.description}
          />
          <div className="mx-auto mt-6 grid w-full max-w-6xl gap-4 px-4 md:grid-cols-2">
            {t.projects.map((project, index) => (
              <Card
                key={project.id}
                className={cn(
                  "overflow-hidden",
                  index === 0 && "border-primary/30 md:col-span-2"
                )}
              >
                <CardContent className="grid gap-5 pt-0 md:grid-cols-[0.9fr_1fr]">
                  <img
                    className={cn(
                      "w-full rounded-lg border object-cover",
                      project.imageFit === "contain" &&
                        "bg-muted object-contain p-2",
                      index === 0
                        ? "h-44 sm:h-64 md:h-96"
                        : "h-44 sm:h-56 md:h-72"
                    )}
                    src={project.image}
                    alt={project.alt}
                    width={index === 0 ? 900 : 520}
                    height={index === 0 ? 520 : 360}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="flex min-w-0 flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <Badge
                        variant="outline"
                        className="w-fit border-primary/30 bg-background text-primary"
                      >
                        {project.badge}
                      </Badge>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </div>
                    <div className="rounded-md border bg-muted/45 p-3 text-sm leading-6 text-muted-foreground">
                      <b className="text-foreground">
                        {t.projectLabels.contribution}
                      </b>{" "}
                      {project.contribution}
                      <br />
                      <b className="text-foreground">
                        {t.projectLabels.verify}
                      </b>{" "}
                      {project.verify}
                      <br />
                      <b className="text-foreground">
                        {t.projectLabels.status}
                      </b>{" "}
                      {project.status}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <ExternalButton href={project.primaryUrl}>
                        {project.primaryLabel}
                      </ExternalButton>
                      <ExternalButton href={localizedHref(project.caseUrl, lang)}>
                        {t.projectLabels.openCase}
                      </ExternalButton>
                      {project.primaryUrl !== project.repoUrl ? (
                        <ExternalButton href={project.repoUrl}>
                          {t.projectLabels.viewCode}
                        </ExternalButton>
                      ) : null}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-y bg-secondary/60 py-12">
          <SectionHeading
            eyebrow={t.agentSection.eyebrow}
            title={t.agentSection.title}
          />
          <div className="mx-auto mt-6 flex w-full max-w-6xl flex-col gap-4 px-4">
            <Alert className="border-primary/30 bg-accent/15 [&>svg]:text-primary">
              <SparklesIcon aria-hidden="true" />
              <AlertTitle>{t.agentSection.alertTitle}</AlertTitle>
              <AlertDescription>
                {t.agentSection.alertDescription}
              </AlertDescription>
            </Alert>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t.agentSection.egorTitle}</CardTitle>
                  <CardDescription>
                    {t.agentSection.egorDescription}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t.agentSection.agentTitle}</CardTitle>
                  <CardDescription>
                    {t.agentSection.agentDescription}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="work" className="py-12">
          <SectionHeading
            eyebrow={t.workHeading.eyebrow}
            title={t.workHeading.title}
          />
          <div className="mx-auto mt-6 grid w-full max-w-6xl gap-4 px-4 md:grid-cols-4">
            {t.verificationSteps.map((step, index) => (
              <Card key={step.title}>
                <CardHeader>
                  <Badge variant="outline" className="w-fit">
                    {index + 1}
                  </Badge>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="public-repos" className="border-t bg-secondary/60 py-12">
          <SectionHeading
            eyebrow={t.reposHeading.eyebrow}
            title={t.reposHeading.title}
            description={t.reposHeading.description}
          />
          <div className="mx-auto mt-6 grid w-full max-w-6xl gap-4 px-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{t.reposHeading.projectPages}</CardTitle>
                <CardDescription>
                  {t.reposHeading.projectPagesDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {t.projects.map((project) => (
                  <Button key={project.caseUrl} asChild variant="outline">
                    <a href={localizedHref(project.caseUrl, lang)}>
                      {project.title}
                    </a>
                  </Button>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t.reposHeading.repositories}</CardTitle>
                <CardDescription>
                  {t.reposHeading.repositoriesDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {t.projects.map((project) => (
                  <ExternalButton key={project.repoUrl} href={project.repoUrl}>
                    {project.badge}
                  </ExternalButton>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>{t.footer.text}</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">
              <ShieldCheckIcon aria-hidden="true" />
              {t.footer.proof}
            </Badge>
            <Badge variant="outline">
              <AudioLinesIcon aria-hidden="true" />
              {t.footer.bots}
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
