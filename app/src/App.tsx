import {
  AudioLinesIcon,
  BotIcon,
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

const proofPageUrl = "https://egoriklok.github.io/ai-outlier-proof-resume/"
const githubProfileUrl = "https://github.com/egoriklok"
const liveCrmUrl = "https://caloristika-crm-demo.onrender.com/demo"

const stats = [
  { value: "5", label: "public AI / CRM / Telegram repos" },
  { value: "2", label: "voice Business Navigator languages" },
  { value: "1", label: "live CRM demo without login" },
]

const telegramBots = [
  {
    badge: "Russian voice agent",
    title: "Бизнес-Навигатор Голосом",
    description:
      "Проговорите идею и получите CJM-план: самый быстрый тест voice-first мышления и AI-native упаковки.",
    handle: "@cjm_voice_strategy_0530_bot",
    check: "voice note -> CJM -> hypotheses/action items",
    status: "Telegram page verified 2026-06-14",
    qr: "./assets/qr-cjm-voice-strategy.svg",
    qrAlt: "QR для Telegram-бота Бизнес-Навигатор Голосом",
    telegramUrl: "https://t.me/cjm_voice_strategy_0530_bot",
    caseUrl: "./projects/telegram-voice-cjm-bot/",
    repoUrl: "https://github.com/egoriklok/telegram-voice-cjm-bot",
  },
  {
    badge: "English voice agent",
    title: "Business Voice Navigator",
    description:
      "Англоязычный voice-first бот для business notes, structured output and next step.",
    handle: "@business_voice_navigator_bot",
    check: "business question -> structured recommendation",
    status: "Public repo + setup docs",
    qr: "./assets/qr-business-voice-navigator.svg",
    qrAlt: "QR для Business Voice Navigator Telegram bot",
    telegramUrl: "https://t.me/business_voice_navigator_bot",
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
    primaryLabel: "Live demo",
    repoUrl: "https://github.com/egoriklok/caloristika-crm-render-demo",
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
    primaryLabel: "GitHub",
    repoUrl: "https://github.com/egoriklok/lunch-up-crm-agent-handoff",
  },
  {
    badge: "Voice CJM",
    title: "Telegram Voice CJM Bot",
    description:
      "Telegram voice bot для превращения голосовых заметок в customer journey, гипотезы и действия.",
    image: "./assets/telegram-api-setup.png",
    alt: "Telegram voice CJM bot setup",
    caseUrl: "./projects/telegram-voice-cjm-bot/",
    primaryUrl: "https://t.me/cjm_voice_strategy_0530_bot",
    primaryLabel: "Telegram",
    repoUrl: "https://github.com/egoriklok/telegram-voice-cjm-bot",
  },
  {
    badge: "Business navigator",
    title: "Telegram Voice Business Navigator EN",
    description:
      "Англоязычный voice-first навигатор: из разговора в структурированное решение, notes and next step.",
    image: "./assets/miniapp-cabinet.png",
    alt: "Telegram business navigator mini-app cabinet",
    caseUrl: "./projects/telegram-voice-business-navigator-en/",
    primaryUrl: "https://t.me/business_voice_navigator_bot",
    primaryLabel: "Telegram",
    repoUrl:
      "https://github.com/egoriklok/telegram-voice-business-navigator-en",
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
    primaryLabel: "GitHub",
    repoUrl: "https://github.com/egoriklok/telegram-voice-agent-factory-skill",
  },
]

const verificationSteps = [
  {
    title: "Откройте бота",
    description:
      "Сканируйте QR, нажмите Start и проверьте, как голосовая или текстовая идея превращается в структуру.",
  },
  {
    title: "Откройте CRM demo",
    description:
      "Посмотрите WebUI: pipeline, клиенты, каталог, next actions и продуктовую упаковку для продаж.",
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
        <ExternalLinkIcon data-icon="inline-end" />
      </a>
    </Button>
  )
}

function App() {
  return (
    <div className="caloristika-shell min-h-svh bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <nav className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 lg:px-6">
          <a
            href="#top"
            className="flex items-center gap-3 font-semibold no-underline"
          >
            <span className="grid size-9 place-items-center rounded-md bg-primary text-sm text-primary-foreground">
              AI
            </span>
            <span>Егор Локтионов</span>
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

      <main>
        <section id="top" className="border-b px-4 py-12 lg:px-6 lg:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1.12fr_0.88fr]">
            <div className="flex flex-col justify-center gap-7">
              <div className="flex flex-col gap-4">
                <Badge
                  variant="outline"
                  className="w-fit border-primary/30 bg-background text-primary"
                >
                  AI-native product builder
                </Badge>
                <h1 className="max-w-5xl text-5xl leading-none font-semibold tracking-normal text-balance md:text-7xl">
                  Егор Локтионов
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-2xl">
                  AI-native специалист: собираю WebUI, CRM и Telegram-ботов,
                  делегирую рутину агентам и довожу идеи до работающих демо.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button asChild>
                  <a href="#telegram-bots">
                    <BotIcon data-icon="inline-start" />
                    Проверить ботов
                  </a>
                </Button>
                <ExternalButton href={githubProfileUrl}>
                  <Code2Icon data-icon="inline-start" />
                  GitHub профиль
                </ExternalButton>
                <ExternalButton href={liveCrmUrl}>
                  <MonitorCheckIcon data-icon="inline-start" />
                  Live CRM demo
                </ExternalButton>
              </div>

              <Alert className="border-primary/30 bg-accent/15 [&>svg]:text-primary">
                <SparklesIcon />
                <AlertTitle>Это proof-page подготовил AI agent</AlertTitle>
                <AlertDescription>
                  Не вместо работы, а чтобы собрать ссылки, QR и проверяемые
                  артефакты в один маршрут для работодателя.
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
                    />
                    <AvatarFallback>ЕЛ</AvatarFallback>
                  </Avatar>
                  <div className="flex min-w-0 flex-col gap-2">
                    <CardTitle>Егор Локтионов</CardTitle>
                    <CardDescription>AI-native product builder</CardDescription>
                    <Badge variant="outline" className="w-fit">
                      Telegram ID: 209498707
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Separator />
                <div className="grid gap-3 sm:grid-cols-2">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-md border bg-muted/45 p-4"
                    >
                      <span className="text-4xl font-semibold tracking-normal">
                        {item.value}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="rounded-md border bg-accent/25 p-4 text-sm leading-6 text-muted-foreground">
                  <b className="text-foreground">Что проверить:</b> Telegram
                  voice agents, CRM demo, публичные repo и агентскую упаковку
                  proof-page.
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <ExternalButton href={proofPageUrl} variant="secondary">
                  Proof-page
                </ExternalButton>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-3 px-4 pb-12 md:grid-cols-3 lg:px-6">
          {stats.map((item) => (
            <Card key={item.label}>
              <CardHeader>
                <CardTitle>{item.value}</CardTitle>
                <CardDescription>{item.label}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>

        <section id="verification" className="border-y bg-secondary/60 py-12">
          <SectionHeading
            eyebrow="3-minute check"
            title="Как проверить, что Егор AI-native"
            description="Страница спроектирована как короткий маршрут проверки: бот, CRM, repo, затем разбор вклада human и AI agent."
          />
          <div className="mx-auto mt-6 w-full max-w-6xl px-4">
            <Tabs defaultValue="bots">
              <TabsList className="flex h-auto flex-wrap justify-start">
                <TabsTrigger value="bots">Боты</TabsTrigger>
                <TabsTrigger value="crm">CRM demo</TabsTrigger>
                <TabsTrigger value="github">GitHub</TabsTrigger>
              </TabsList>
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
                    <ExternalButton href="https://t.me/cjm_voice_strategy_0530_bot">
                      Русский бот
                    </ExternalButton>
                    <ExternalButton href="https://t.me/business_voice_navigator_bot">
                      English bot
                    </ExternalButton>
                  </CardFooter>
                </Card>
              </TabsContent>
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
                      Открыть CRM
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
                      <span className="text-muted-foreground">
                        {bot.handle}
                      </span>
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
                  <figure className="m-0 grid justify-items-center gap-3">
                    <img
                      className="size-40 rounded-lg border bg-card object-contain p-3"
                      src={bot.qr}
                      alt={bot.qrAlt}
                    />
                    <figcaption className="text-sm text-muted-foreground">
                      QR to Telegram bot
                    </figcaption>
                  </figure>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <ExternalButton href={bot.telegramUrl}>
                    Открыть в Telegram
                  </ExternalButton>
                  <ExternalButton href={bot.caseUrl}>Кейс</ExternalButton>
                  <ExternalButton href={bot.repoUrl}>GitHub</ExternalButton>
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
          <div className="mx-auto mt-6 grid w-full max-w-6xl gap-4 px-4 md:grid-cols-2">
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
                      index === 0 ? "h-80 md:h-96" : "h-64 md:h-72"
                    )}
                    src={project.image}
                    alt={project.alt}
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
                    <div className="flex flex-wrap gap-2">
                      <ExternalButton href={project.caseUrl}>
                        Кейс
                      </ExternalButton>
                      <ExternalButton href={project.primaryUrl}>
                        {project.primaryLabel}
                      </ExternalButton>
                      <ExternalButton href={project.repoUrl}>
                        GitHub
                      </ExternalButton>
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
