import {
  AudioLinesIcon,
  Code2Icon,
  ExternalLinkIcon,
  MonitorCheckIcon,
  QrCodeIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react"
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

const githubProfileUrl = "https://github.com/egoriklok"
const liveCrmUrl = "https://caloristika-crm-demo.onrender.com/demo"
const russianVoiceBotUrl = "https://t.me/cjm_voice_strategy_0530_bot"
const englishVoiceBotUrl = "https://t.me/BusinessNavigatorVoiceEnBot"
const voiceBotsPageUrl = "./projects/voice-bots-product-proof/"

const roleKeywords = [
  "CRM-прототипы",
  "Telegram-боты",
  "ИИ-сценарии",
]

const stats = [
  { value: "CRM", label: "демо без логина", href: liveCrmUrl },
  {
    value: "2",
    label: "Telegram-бота: русский и английский",
    href: "#telegram-bots",
  },
  { value: "GitHub", label: "код и инструкции", href: "#public-repos" },
]

const telegramBots = [
  {
    badge: "Русский голосовой бот",
    title: "Бизнес-Навигатор Голосом",
    description:
      "Telegram-бот принимает голосовую или текстовую бизнес-идею и возвращает структуру: путь клиента, гипотезы и следующие шаги.",
    handle: "@cjm_voice_strategy_0530_bot",
    check: "голос или текст -> путь клиента -> следующие шаги",
    status: "Проверено: ссылка на Telegram и публичный GitHub открываются, 14.06.2026.",
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
    status: "Проверено: ссылка на Telegram и публичный GitHub открываются, 14.06.2026.",
    qr: "./assets/qr-business-voice-navigator.svg",
    qrAlt: "QR для английского Telegram-бота Business Voice Navigator",
    telegramUrl: englishVoiceBotUrl,
    telegramLabel: "t.me/BusinessNavigatorVoiceEnBot",
    caseUrl: `${voiceBotsPageUrl}#english-bot`,
    repoUrl:
      "https://github.com/egoriklok/telegram-voice-business-navigator-en",
  },
]

const projects = [
  {
    badge: "CRM-демо",
    title: "Caloristika CRM",
    description:
      "CRM-демо без логина: клиенты, воронка, каталог и состояние сделки. Можно открыть в браузере.",
    image: "./assets/caloristika-crm.png",
    alt: "Экран CRM Caloristika",
    caseUrl: "./projects/caloristika-crm-render-demo/",
    primaryUrl: liveCrmUrl,
    primaryLabel: "Открыть демо",
    repoUrl: "https://github.com/egoriklok/caloristika-crm-render-demo",
    contribution: "собрал CRM-демо с воронкой, каталогом и следующими действиями по сделке",
    verify: "открыть демо и GitHub",
    status: "Проверено: демо открывается, 14.06.2026.",
  },
  {
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
    status: "Проверено: продуктовая страница и GitHub открываются, 14.06.2026.",
  },
  {
    badge: "CRM-контекст",
    title: "Lunch Up CRM: передача контекста",
    description:
      "Прототип передачи контекста между заказом, клиентом, CRM и ИИ-ассистентом. Код доступен на GitHub.",
    image: "./assets/lunch-up-crm.png",
    alt: "Интерфейс Lunch Up CRM",
    caseUrl: "./projects/lunch-up-crm-agent-handoff/",
    primaryUrl: "https://github.com/egoriklok/lunch-up-crm-agent-handoff",
    primaryLabel: "Открыть GitHub",
    repoUrl: "https://github.com/egoriklok/lunch-up-crm-agent-handoff",
    contribution:
      "описал передачу контекста между заказом, CRM и ИИ-ассистентом",
    verify: "посмотреть кейс и публичный GitHub",
    status: "Проверено: публичный GitHub открывается, 14.06.2026.",
  },
  {
    badge: "Голосовой бот",
    title: "Бизнес-Навигатор Голосом",
    description:
      "Telegram-бот для превращения голосовой заметки в путь клиента, гипотезы и следующие действия.",
    image: "./assets/telegram-api-setup.png",
    alt: "Настройка Telegram-бота",
    caseUrl: `${voiceBotsPageUrl}#russian-bot`,
    primaryUrl: russianVoiceBotUrl,
    primaryLabel: "Открыть бота",
    repoUrl: "https://github.com/egoriklok/telegram-voice-cjm-bot",
    contribution: "связал голосовую заметку с картой клиента, гипотезами и планом действий",
    verify: "открыть Telegram-бота или GitHub",
    status: "Проверено: Telegram и публичный GitHub открываются, 14.06.2026.",
  },
  {
    badge: "Английский бот",
    title: "Английский Бизнес-Навигатор",
    description:
      "Англоязычный Telegram-бот: из бизнес-заметки в структуру, выводы и следующий шаг.",
    image: "./assets/miniapp-cabinet.png",
    alt: "Мобильная страница Business Voice Navigator",
    caseUrl: `${voiceBotsPageUrl}#english-bot`,
    primaryUrl: englishVoiceBotUrl,
    primaryLabel: "Открыть бота",
    repoUrl:
      "https://github.com/egoriklok/telegram-voice-business-navigator-en",
    contribution: "собрал англоязычный сценарий для структурирования бизнес-идей",
    verify: "открыть Telegram-бота или GitHub",
    status: "Проверено: Telegram и публичный GitHub открываются, 14.06.2026.",
  },
  {
    badge: "Шаблон ботов",
    title: "Шаблон для новых голосовых ботов",
    description:
      "Описание повторяемого подхода к созданию Telegram-ботов на базе похожих сценариев.",
    image: "./assets/portfolio-demo.png",
    alt: "Страница портфолио с проектами",
    caseUrl: `${voiceBotsPageUrl}#factory`,
    primaryUrl:
      "https://github.com/egoriklok/telegram-voice-agent-factory-skill",
    primaryLabel: "Открыть GitHub",
    repoUrl: "https://github.com/egoriklok/telegram-voice-agent-factory-skill",
    contribution:
      "оформил подход к повторяемому созданию голосовых Telegram-ботов",
    verify: "посмотреть описание и публичный GitHub",
    status: "Проверено: публичный GitHub открывается, 14.06.2026.",
  },
]

const checkRoute = [
  {
    label: "Открыть CRM-демо",
    detail: "воронка, клиенты, каталог",
  },
  {
    label: "Запустить Telegram-бота",
    detail: "голос или текст -> структура",
  },
  {
    label: "Посмотреть GitHub",
    detail: "код, инструкции, история",
  },
]

const verificationSteps = [
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
]

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

function App() {
  return (
    <div className="it-shell min-h-svh bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        К основному содержанию
      </a>
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <nav className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 lg:px-6">
          <a
            href="#top"
            className="flex items-center gap-3 font-semibold no-underline"
          >
            <span className="grid size-9 place-items-center rounded-md border border-primary/30 bg-secondary text-sm text-primary">
              ИИ
            </span>
            <span className="hidden sm:inline">Егор Локтионов</span>
          </a>
          <div className="flex flex-wrap items-center gap-1">
            <Button asChild variant="ghost" size="sm">
              <a href="#telegram-bots">Боты</a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a href="#verification">Проверка</a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a href="#projects">Проекты</a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a href="#public-repos">GitHub</a>
            </Button>
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
                  ИИ-прототипы для бизнеса
                </Badge>
                <h1 className="max-w-5xl text-5xl leading-none font-semibold tracking-normal text-balance md:text-7xl">
                  Егор Локтионов
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-700 md:text-2xl">
                  Собираю ИИ-прототипы для бизнеса: CRM-демо,
                  Telegram-ботов и голосовые сценарии, которые можно открыть и
                  проверить сразу.
                </p>
                <div className="flex max-w-3xl flex-wrap gap-2">
                  {roleKeywords.map((keyword) => (
                    <Badge key={keyword} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>
                <p className="max-w-3xl text-sm leading-6 text-slate-700">
                  <b className="text-foreground">Цель:</b> роль в продуктовой
                  или ИИ-команде: прототипирование, автоматизация, CRM,
                  Telegram-боты, React и TypeScript.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button asChild variant="default">
                  <a href="#verification">
                    <ShieldCheckIcon
                      aria-hidden="true"
                      data-icon="inline-start"
                    />
                    Проверить за 3 минуты
                  </a>
                </Button>
                <ExternalButton href={liveCrmUrl} variant="secondary">
                  <MonitorCheckIcon
                    aria-hidden="true"
                    data-icon="inline-start"
                  />
                  Открыть CRM-демо
                </ExternalButton>
                <ExternalButton href={githubProfileUrl}>
                  <Code2Icon aria-hidden="true" data-icon="inline-start" />
                  Посмотреть GitHub
                </ExternalButton>
              </div>

              <Alert className="border-lime-300 bg-lime-50 text-slate-950 [&>svg]:text-primary">
                <ShieldCheckIcon aria-hidden="true" />
                <AlertTitle>Проверка для работодателя за 3 минуты</AlertTitle>
                <AlertDescription className="text-slate-700">
                  <ol className="mt-2 grid gap-1 sm:grid-cols-3">
                    {checkRoute.map((item, index) => (
                      <li key={item.label}>
                        {index + 1}. {item.label}:{" "}
                        <span className="text-slate-700">
                          {item.detail}
                        </span>
                      </li>
                    ))}
                  </ol>
                </AlertDescription>
              </Alert>
            </div>

            <Card className="overflow-hidden border-primary/30">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="size-24">
                    <AvatarImage
                      src="./assets/egor-loktionov-photo.jpg"
                      alt="Портрет Егора Локтионова"
                      width={96}
                      height={96}
                      fetchPriority="high"
                    />
                    <AvatarFallback>ЕЛ</AvatarFallback>
                  </Avatar>
                  <div className="flex min-w-0 flex-col gap-2">
                    <CardTitle>Егор Локтионов</CardTitle>
                    <CardDescription>
                      Разработчик ИИ-прототипов, CRM и Telegram-ботов
                    </CardDescription>
                    <Badge variant="outline" className="w-fit">
                      Публичное портфолио
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Separator />
                <div className="grid gap-3 sm:grid-cols-2">
                  {stats.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
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
                  <b className="text-foreground">Для работодателя:</b>{" "}
                  CRM-демо, Telegram-боты, публичный GitHub и вклад
                  ИИ-агента в упаковку этой страницы.
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <ExternalButton href={liveCrmUrl} variant="secondary">
                  Открыть демо
                </ExternalButton>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="verification" className="border-y bg-secondary/60 py-12">
          <SectionHeading
            eyebrow="Проверка за 3 минуты"
            title="Что можно проверить без доступа"
            description="Откройте CRM-демо без логина, запустите Telegram-бота и посмотрите код на GitHub. Так проверяются не обещания, а готовые артефакты."
          />
          <div className="mx-auto mt-6 w-full max-w-6xl px-4">
            <Tabs defaultValue="crm">
              <TabsList className="flex h-auto flex-wrap justify-start">
                <TabsTrigger value="crm">CRM-демо</TabsTrigger>
                <TabsTrigger value="bots">Боты</TabsTrigger>
                <TabsTrigger value="github">GitHub</TabsTrigger>
              </TabsList>
              <TabsContent value="crm">
                <Card>
                  <CardHeader>
                    <CardTitle>CRM-демо в браузере</CardTitle>
                    <CardDescription>
                      Демоверсия открывается без логина и показывает воронку,
                      каталог, клиентов, контекст сделки и следующие действия.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <ExternalButton href={liveCrmUrl}>
                      Открыть CRM-демо
                    </ExternalButton>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="bots">
                <Card>
                  <CardHeader>
                    <CardTitle>Голосовой сценарий в Telegram</CardTitle>
                    <CardDescription>
                      Откройте Telegram-бота, отправьте голосовую или текстовую
                      бизнес-идею и посмотрите, как она превращается в
                      структуру.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-wrap gap-2">
                    <ExternalButton href={russianVoiceBotUrl}>
                      Открыть русского бота
                    </ExternalButton>
                    <ExternalButton href={englishVoiceBotUrl}>
                      Открыть английского бота
                    </ExternalButton>
                    <ExternalButton href={voiceBotsPageUrl}>
                      Описание ботов
                    </ExternalButton>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="github">
                <Card>
                  <CardHeader>
                    <CardTitle>Публичный GitHub</CardTitle>
                    <CardDescription>
                      Репозитории открыты: можно проверить код, документацию,
                      скриншоты, инструкции запуска и историю упаковки проекта.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <ExternalButton href={githubProfileUrl}>
                      Открыть GitHub
                    </ExternalButton>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="telegram-bots" className="py-12">
          <SectionHeading
            eyebrow="Голосовые Telegram-боты"
            title="Telegram-боты: голос -> структура -> следующий шаг"
            description="Эти боты показывают, как голосовая или текстовая идея превращается в структуру: план, гипотезы и следующие действия."
          />
          <div className="mx-auto mt-6 grid w-full max-w-6xl gap-4 px-4">
            {telegramBots.map((bot) => (
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
                      <span className="font-medium">Адрес</span>
                      <span className="break-words text-muted-foreground">
                        {bot.handle}
                      </span>
                    </div>
                    <Separator />
                    <div className="grid gap-1 md:grid-cols-[140px_1fr]">
                      <span className="font-medium">Ссылка</span>
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
                      <span className="font-medium">Проверить</span>
                      <span className="text-muted-foreground">{bot.check}</span>
                    </div>
                    <Separator />
                    <div className="grid gap-1 md:grid-cols-[140px_1fr]">
                      <span className="font-medium">Статус</span>
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
                      QR-код для запуска бота
                    </figcaption>
                  </figure>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <ExternalButton href={bot.telegramUrl}>
                    Открыть бота
                  </ExternalButton>
                  <ExternalButton href={bot.caseUrl}>
                    Открыть кейс
                  </ExternalButton>
                  <ExternalButton href={bot.repoUrl}>
                    Посмотреть код
                  </ExternalButton>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="py-12">
          <SectionHeading
            eyebrow="Проверяемые продукты"
            title="Демо, боты и код, которые можно открыть"
            description="Здесь не макеты, а проверяемые артефакты: демоверсии, боты, код и короткие страницы с объяснением результата."
          />
          <div className="mx-auto mt-6 grid w-full max-w-6xl gap-4 px-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={cn(
                  "overflow-hidden",
                  index === 0 && "border-primary/30 md:col-span-2"
                )}
              >
                <CardContent className="grid gap-5 pt-0 md:grid-cols-[0.9fr_1fr]">
                  <img
                    className={cn(
                      "w-full rounded-lg border object-cover",
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
                      <b className="text-foreground">Вклад:</b>{" "}
                      {project.contribution}
                      <br />
                      <b className="text-foreground">Проверить:</b>{" "}
                      {project.verify}
                      <br />
                      <b className="text-foreground">Статус:</b>{" "}
                      {project.status}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <ExternalButton href={project.primaryUrl}>
                        {project.primaryLabel}
                      </ExternalButton>
                      <ExternalButton href={project.caseUrl}>
                        Открыть кейс
                      </ExternalButton>
                      {project.primaryUrl !== project.repoUrl ? (
                        <ExternalButton href={project.repoUrl}>
                          Посмотреть код
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
            eyebrow="Упаковка ИИ-агентом"
            title="Как ИИ-агент помог с этой страницей"
          />
          <div className="mx-auto mt-6 flex w-full max-w-6xl flex-col gap-4 px-4">
            <Alert className="border-primary/30 bg-accent/15 [&>svg]:text-primary">
              <SparklesIcon aria-hidden="true" />
              <AlertTitle>Эту страницу подготовил ИИ-агент</AlertTitle>
              <AlertDescription>
                Егор сделал продукты и решения. ИИ-агент помог собрать ссылки,
                QR-коды, демо и GitHub в понятный маршрут проверки для
                работодателя.
              </AlertDescription>
            </Alert>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Егор</CardTitle>
                  <CardDescription>
                    Превращает идею в веб-интерфейс, CRM-прототип,
                    Telegram-бота или сценарий с ИИ-ассистентом.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>ИИ-агент</CardTitle>
                  <CardDescription>
                    Упаковал открытые ссылки, QR-коды, демо, GitHub и короткие
                    проверки в одну страницу для работодателя.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="work" className="py-12">
          <SectionHeading
            eyebrow="Что я делаю"
            title="Какие задачи закрываю"
          />
          <div className="mx-auto mt-6 grid w-full max-w-6xl gap-4 px-4 md:grid-cols-4">
            {verificationSteps.map((step, index) => (
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
            eyebrow="Код, демо и прямые ссылки"
            title="Все ссылки для проверки"
            description="Все ссылки открываются без внутреннего доступа. Страница оставляет работодателю короткий путь от резюме к демо, ботам, GitHub и страницам проектов."
          />
          <div className="mx-auto mt-6 grid w-full max-w-6xl gap-4 px-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Страницы проектов</CardTitle>
                <CardDescription>
                  Отдельные страницы с коротким описанием каждого артефакта.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {projects.map((project) => (
                  <Button key={project.caseUrl} asChild variant="outline">
                    <a href={project.caseUrl}>{project.title}</a>
                  </Button>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>GitHub-репозитории</CardTitle>
                <CardDescription>
                  Код, документация и инструкции запуска для технической
                  проверки.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {projects.map((project) => (
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
          <p>
            Страница подготовлена ИИ-агентом, которому Егор Локтионов
            делегировал упаковку доказательств. Продукты и решения принадлежат
            Егору.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">
              <ShieldCheckIcon aria-hidden="true" />
              Публичная проверка
            </Badge>
            <Badge variant="outline">
              <AudioLinesIcon aria-hidden="true" />
              Голосовые боты
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
