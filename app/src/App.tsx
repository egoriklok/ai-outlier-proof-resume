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

const roleKeywords = [
  "AI Product Engineer",
  "AI Agent Builder",
  "CRM Automation",
  "Telegram Voice AI",
  "WebUI Prototyping",
]

const stats = [
  { value: "5", label: "публичных repo и кейсов", href: "#public-repos" },
  {
    value: "2",
    label: "Telegram voice agents: RU + EN",
    href: "#telegram-bots",
  },
  { value: "1", label: "live CRM demo без логина", href: liveCrmUrl },
]

const telegramBots = [
  {
    badge: "Russian voice agent",
    title: "Бизнес-Навигатор Голосом",
    description:
      "Проговорите идею и получите CJM-план: самый быстрый тест voice-first мышления и AI-native упаковки.",
    handle: "@cjm_voice_strategy_0530_bot",
    check: "голосовая заметка -> CJM -> действия",
    status: "Last verified: Telegram page reachable 2026-06-14",
    qr: "./assets/qr-cjm-voice-strategy.svg",
    qrAlt: "QR для Telegram-бота Бизнес-Навигатор Голосом",
    telegramUrl: russianVoiceBotUrl,
    telegramLabel: "t.me/cjm_voice_strategy_0530_bot",
    caseUrl: "./projects/telegram-voice-cjm-bot/",
    repoUrl: "https://github.com/egoriklok/telegram-voice-cjm-bot",
  },
  {
    badge: "English voice agent",
    title: "Business Voice Navigator",
    description:
      "Англоязычный voice-first бот для business notes, structured output and next step.",
    handle: "@BusinessNavigatorVoiceEnBot",
    check: "business question -> structured recommendation",
    status: "Last verified: Telegram page and public repo reachable 2026-06-14",
    qr: "./assets/qr-business-voice-navigator.svg",
    qrAlt: "QR для Business Voice Navigator Telegram bot",
    telegramUrl: englishVoiceBotUrl,
    telegramLabel: "t.me/BusinessNavigatorVoiceEnBot",
    caseUrl: "./projects/telegram-voice-business-navigator-en/",
    repoUrl:
      "https://github.com/egoriklok/telegram-voice-business-navigator-en",
  },
]

const projects = [
  {
    badge: "Live CRM",
    title: "Caloristika CRM Render Demo",
    description:
      "B2B CRM demo для проверки в браузере: воронка, клиенты, каталог, состояние сделки и продуктовая упаковка под продажи.",
    image: "./assets/caloristika-crm.png",
    alt: "Caloristika CRM dashboard",
    caseUrl: "./projects/caloristika-crm-render-demo/",
    primaryUrl: liveCrmUrl,
    primaryLabel: "Open live demo",
    repoUrl: "https://github.com/egoriklok/caloristika-crm-render-demo",
    contribution: "упаковал CRM demo с pipeline, каталогом и next actions",
    verify: "открыть live demo и repo",
    status: "Last verified: live demo reachable 2026-06-14",
  },
  {
    badge: "Agent handoff",
    title: "Lunch Up CRM Agent Handoff",
    description:
      "CRM-логика для передачи контекста между human, sales workflow и AI agent: pipeline, next actions, коммерческие сценарии.",
    image: "./assets/lunch-up-crm.png",
    alt: "Lunch Up CRM interface",
    caseUrl: "./projects/lunch-up-crm-agent-handoff/",
    primaryUrl: "https://github.com/egoriklok/lunch-up-crm-agent-handoff",
    primaryLabel: "Inspect source",
    repoUrl: "https://github.com/egoriklok/lunch-up-crm-agent-handoff",
    contribution:
      "собрал CRM handoff-логику между заказом, контекстом и agent flow",
    verify: "посмотреть кейс и публичный GitHub",
    status: "Last verified: public repo reachable 2026-06-14",
  },
  {
    badge: "Voice CJM",
    title: "Telegram Voice CJM Bot",
    description:
      "Telegram voice bot для превращения голосовых заметок в customer journey, гипотезы и действия.",
    image: "./assets/telegram-api-setup.png",
    alt: "Telegram voice CJM bot setup",
    caseUrl: "./projects/telegram-voice-cjm-bot/",
    primaryUrl: russianVoiceBotUrl,
    primaryLabel: "Try Telegram bot",
    repoUrl: "https://github.com/egoriklok/telegram-voice-cjm-bot",
    contribution: "связал голосовую заметку с CJM, гипотезами и действиями",
    verify: "открыть Telegram bot или repo",
    status: "Last verified: Telegram page and public repo reachable 2026-06-14",
  },
  {
    badge: "Business navigator",
    title: "Telegram Voice Business Navigator EN",
    description:
      "Англоязычный voice-first навигатор: из разговора в структурированное решение, notes and next step.",
    image: "./assets/miniapp-cabinet.png",
    alt: "Telegram business navigator mini-app cabinet",
    caseUrl: "./projects/telegram-voice-business-navigator-en/",
    primaryUrl: englishVoiceBotUrl,
    primaryLabel: "Try Telegram bot",
    repoUrl:
      "https://github.com/egoriklok/telegram-voice-business-navigator-en",
    contribution: "собрал англоязычный voice-first business navigator",
    verify: "открыть Telegram bot или repo",
    status: "Last verified: Telegram page and public repo reachable 2026-06-14",
  },
  {
    badge: "Reusable skill",
    title: "Telegram Voice Agent Factory Skill",
    description:
      "Skill-подход к созданию voice agents: не один бот, а воспроизводимая фабрика сценариев и ассистентов.",
    image: "./assets/portfolio-demo.png",
    alt: "AI portfolio proof interface",
    caseUrl: "./projects/telegram-voice-agent-factory-skill/",
    primaryUrl:
      "https://github.com/egoriklok/telegram-voice-agent-factory-skill",
    primaryLabel: "Inspect source",
    repoUrl: "https://github.com/egoriklok/telegram-voice-agent-factory-skill",
    contribution:
      "оформил подход к повторяемому созданию Telegram voice agents",
    verify: "посмотреть skill repo",
    status: "Last verified: public repo reachable 2026-06-14",
  },
]

const proofRoute = [
  {
    label: "Open CRM demo",
    proof: "pipeline, clients, catalog",
  },
  {
    label: "Try voice bot",
    proof: "CJM or recommendation output",
  },
  {
    label: "Inspect GitHub",
    proof: "source, docs, setup traces",
  },
]

const verificationSteps = [
  {
    title: "Откройте CRM demo",
    description:
      "Проверьте no-login WebUI: pipeline, клиенты, каталог, контекст сделки и next actions.",
  },
  {
    title: "Откройте бота",
    description:
      "Нажмите Start и проверьте, как голосовая или текстовая идея превращается в структуру.",
  },
  {
    title: "Откройте GitHub",
    description:
      "Repo публичные: можно проверить source, docs, smoke tests, setup flow и историю артефактов.",
  },
  {
    title: "Разделите вклад",
    description:
      "Human сделал продукты и решения. AI agent помог собрать, проверить и упаковать доказательства.",
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
              AI
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
                  AI Product Engineer / AI Agent Builder
                </Badge>
                <h1 className="max-w-5xl text-5xl leading-none font-semibold tracking-normal text-balance md:text-7xl">
                  Егор Локтионов
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-2xl">
                  Собираю browser CRM demos и Telegram voice agents, которые
                  превращают бизнес-заметки в структурированные workflows.
                  Проверяется через live demo, бота и публичные repo.
                </p>
                <div className="flex max-w-3xl flex-wrap gap-2">
                  {roleKeywords.map((keyword) => (
                    <Badge key={keyword} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>
                <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                  <b className="text-foreground">Цель:</b> AI Product Engineer /
                  AI Automation role для B2B, CRM, Telegram/voice agents и
                  быстрых продуктовых прототипов на React/Vite + TypeScript.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <ExternalButton href={liveCrmUrl} variant="default">
                  <MonitorCheckIcon
                    aria-hidden="true"
                    data-icon="inline-start"
                  />
                  Live CRM demo
                </ExternalButton>
                <Button asChild variant="secondary">
                  <a href="#verification">
                    <ShieldCheckIcon
                      aria-hidden="true"
                      data-icon="inline-start"
                    />
                    3-минутная проверка
                  </a>
                </Button>
                <ExternalButton href={githubProfileUrl}>
                  <Code2Icon aria-hidden="true" data-icon="inline-start" />
                  GitHub профиль
                </ExternalButton>
              </div>

              <Alert className="border-primary/30 bg-accent/15 [&>svg]:text-primary">
                <ShieldCheckIcon aria-hidden="true" />
                <AlertTitle>3-minute recruiter check</AlertTitle>
                <AlertDescription>
                  <ol className="mt-2 grid gap-1 sm:grid-cols-3">
                    {proofRoute.map((item, index) => (
                      <li key={item.label}>
                        {index + 1}. {item.label}:{" "}
                        <span className="text-muted-foreground">
                          {item.proof}
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
                      AI Product Engineer / AI Agent Builder
                    </CardDescription>
                    <Badge variant="outline" className="w-fit">
                      Public proof portfolio
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
                <div className="rounded-md border bg-accent/25 p-4 text-sm leading-6 text-muted-foreground">
                  <b className="text-foreground">Для рекрутера:</b> роль,
                  Telegram voice agents, live CRM demo, публичные repo и вклад
                  AI agent в упаковку proof-page.
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <ExternalButton href={liveCrmUrl} variant="secondary">
                  Open live proof
                </ExternalButton>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="verification" className="border-y bg-secondary/60 py-12">
          <SectionHeading
            eyebrow="3-minute check"
            title="Как проверить, что Егор AI-native"
            description="Страница спроектирована как короткий маршрут проверки: CRM demo, бот, repo, затем разбор вклада human и AI agent."
          />
          <div className="mx-auto mt-6 w-full max-w-6xl px-4">
            <Tabs defaultValue="crm">
              <TabsList className="flex h-auto flex-wrap justify-start">
                <TabsTrigger value="crm">CRM demo</TabsTrigger>
                <TabsTrigger value="bots">Боты</TabsTrigger>
                <TabsTrigger value="github">GitHub</TabsTrigger>
              </TabsList>
              <TabsContent value="crm">
                <Card>
                  <CardHeader>
                    <CardTitle>Browser-first продукт</CardTitle>
                    <CardDescription>
                      CRM demo открывается без логина и показывает pipeline,
                      каталог, клиентов, контекст сделки и next actions.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <ExternalButton href={liveCrmUrl}>
                      Open live demo
                    </ExternalButton>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="bots">
                <Card>
                  <CardHeader>
                    <CardTitle>Voice-first проверка</CardTitle>
                    <CardDescription>
                      Откройте Telegram-бота, отправьте голосовую или текстовую
                      бизнес-идею и посмотрите, как она превращается в
                      структуру.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-wrap gap-2">
                    <ExternalButton href={russianVoiceBotUrl}>
                      Try Russian bot
                    </ExternalButton>
                    <ExternalButton href={englishVoiceBotUrl}>
                      Try English bot
                    </ExternalButton>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="github">
                <Card>
                  <CardHeader>
                    <CardTitle>Public artifact trail</CardTitle>
                    <CardDescription>
                      Repo публичные: можно проверить source, docs, screenshots,
                      setup flow и историю продуктовой упаковки.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <ExternalButton href={githubProfileUrl}>
                      Inspect GitHub
                    </ExternalButton>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="telegram-bots" className="py-12">
          <SectionHeading
            eyebrow="Telegram voice agents"
            title="Боты, которые можно открыть и проверить"
            description="У Егора две версии Business Voice Navigator: русская и английская. Откройте ссылку или отсканируйте QR-код."
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
                      <span className="font-medium">Handle</span>
                      <span className="break-words text-muted-foreground">
                        {bot.handle}
                      </span>
                    </div>
                    <Separator />
                    <div className="grid gap-1 md:grid-cols-[140px_1fr]">
                      <span className="font-medium">Telegram page</span>
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
                      QR to Telegram bot
                    </figcaption>
                  </figure>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <ExternalButton href={bot.telegramUrl}>
                    Try Telegram bot
                  </ExternalButton>
                  <ExternalButton href={bot.caseUrl}>
                    Read proof page
                  </ExternalButton>
                  <ExternalButton href={bot.repoUrl}>
                    Inspect source
                  </ExternalButton>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-y bg-secondary/60 py-12">
          <SectionHeading
            eyebrow="Agent note"
            title="Что здесь сделал AI agent"
          />
          <div className="mx-auto mt-6 flex w-full max-w-6xl flex-col gap-4 px-4">
            <Alert className="border-primary/30 bg-accent/15 [&>svg]:text-primary">
              <SparklesIcon aria-hidden="true" />
              <AlertTitle>AI agent подготовил эту proof-page</AlertTitle>
              <AlertDescription>
                Это демонстрация делегирования: human сделал продукты, agent
                собрал ссылки, QR, demo и repo в проверяемый маршрут.
              </AlertDescription>
            </Alert>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Human</CardTitle>
                  <CardDescription>
                    Егор Локтионов. Быстро превращает идею в WebUI, CRM,
                    Telegram-flow или agent workflow.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AI agent</CardTitle>
                  <CardDescription>
                    Собрал ссылки, QR, repo, demo и короткий маршрут проверки,
                    чтобы работодатель смотрел открываемые артефакты.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12">
          <SectionHeading
            eyebrow="Project evidence"
            title="Продуктовые артефакты без логина"
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
                      <ExternalButton href={project.caseUrl}>
                        Read proof page
                      </ExternalButton>
                      <ExternalButton href={project.primaryUrl}>
                        {project.primaryLabel}
                      </ExternalButton>
                      {project.primaryUrl !== project.repoUrl ? (
                        <ExternalButton href={project.repoUrl}>
                          Inspect source
                        </ExternalButton>
                      ) : null}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="proof" className="py-12">
          <SectionHeading
            eyebrow="What this proves"
            title="Что здесь стоит проверять работодателю"
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
            eyebrow="Public repo index"
            title="Прямые ссылки для проверки"
            description="Все ссылки открываются без внутреннего доступа. Страница оставляет работодателю короткий путь от резюме к proof artifacts."
          />
          <div className="mx-auto mt-6 grid w-full max-w-6xl gap-4 px-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Project pages</CardTitle>
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
                <CardTitle>GitHub repositories</CardTitle>
                <CardDescription>
                  Source, docs and setup traces for technical validation.
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
            Resume proof page prepared by an AI agent delegated by Egor
            Loktionov. Human owns the work. Agent owns the packaging discipline.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">
              <ShieldCheckIcon aria-hidden="true" />
              Public proof
            </Badge>
            <Badge variant="outline">
              <AudioLinesIcon aria-hidden="true" />
              Voice agents
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
