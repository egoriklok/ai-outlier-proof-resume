import {
  AudioLinesIcon,
  BotIcon,
  CheckCircle2Icon,
  Code2Icon,
  ExternalLinkIcon,
  FileCheck2Icon,
  LayoutDashboardIcon,
  MonitorCheckIcon,
  PanelTopIcon,
  QrCodeIcon,
  RefreshCcwIcon,
  RocketIcon,
  ScanQrCodeIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
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

const telegramBots = [
  {
    badge: "RU voice agent",
    title: "Бизнес-Навигатор Голосом",
    description:
      "Голосовая бизнес-идея превращается в CJM, гипотезы и следующий шаг.",
    handle: "@cjm_voice_strategy_0530_bot",
    check: "voice note -> CJM -> action items",
    status: "Telegram page verified 2026-06-14",
    qr: "./assets/qr-cjm-voice-strategy.svg",
    qrAlt: "QR для Telegram-бота Бизнес-Навигатор Голосом",
    telegramUrl: "https://t.me/cjm_voice_strategy_0530_bot",
    caseUrl: "./projects/telegram-voice-cjm-bot/",
    repoUrl: "https://github.com/egoriklok/telegram-voice-cjm-bot",
  },
  {
    badge: "EN voice agent",
    title: "Business Voice Navigator",
    description:
      "English voice-first bot для business notes, structured output and next step.",
    handle: "@business_voice_navigator_bot",
    check: "business question -> recommendation",
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
      "B2B CRM demo: pipeline, клиенты, каталог, состояние сделки и next actions.",
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
      "Передача контекста между human, sales workflow и AI agent.",
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
      "Telegram voice bot для превращения заметок в customer journey.",
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
      "Англоязычный voice-first навигатор: из разговора в структурированное решение.",
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
      "Skill-подход к созданию voice agents: воспроизводимая фабрика сценариев.",
    image: "./assets/portfolio-demo.png",
    alt: "AI portfolio proof interface",
    caseUrl: "./projects/telegram-voice-agent-factory-skill/",
    primaryUrl:
      "https://github.com/egoriklok/telegram-voice-agent-factory-skill",
    primaryLabel: "GitHub",
    repoUrl: "https://github.com/egoriklok/telegram-voice-agent-factory-skill",
  },
]

const kpis = [
  {
    label: "Профиль",
    value: "Егор",
    note: "AI-native product builder",
    icon: UsersIcon,
  },
  {
    label: "Voice agents",
    value: "2",
    note: "RU + EN Telegram bots",
    icon: AudioLinesIcon,
  },
  {
    label: "Public repos",
    value: "5",
    note: "GitHub artifact trail",
    icon: Code2Icon,
  },
  {
    label: "Live demo",
    value: "1",
    note: "CRM opens without login",
    icon: MonitorCheckIcon,
  },
  {
    label: "QR tests",
    value: "2",
    note: "scan and run bots",
    icon: QrCodeIcon,
  },
]

const verificationSteps = [
  {
    title: "Откройте бота",
    description:
      "Сканируйте QR, нажмите Start и проверьте, как идея превращается в структуру.",
  },
  {
    title: "Откройте CRM demo",
    description:
      "Посмотрите pipeline, клиентов, каталог, контекст сделки и next actions.",
  },
  {
    title: "Откройте GitHub",
    description:
      "Проверьте source, docs, smoke tests, setup flow и историю артефактов.",
  },
  {
    title: "Разделите вклад",
    description:
      "Human сделал продукты. AI agent помог собрать, проверить и упаковать доказательства.",
  },
]

const pipelineColumns = [
  {
    title: "Новый просмотр",
    count: "1 профиль",
    cards: [
      {
        badge: "Owner",
        title: "Егор Локтионов",
        description:
          "AI-native специалист: WebUI, CRM, Telegram voice agents, agent workflow.",
        meta: "Telegram ID: 209498707",
        actions: [
          { href: proofPageUrl, label: "Proof-page" },
          { href: githubProfileUrl, label: "GitHub" },
        ],
      },
      {
        badge: "Agent prepared",
        title: "Резюме подготовил AI agent",
        description:
          "Это часть демонстрации: Егор делегировал агенту упаковку ссылок, QR и проверяемых артефактов.",
        meta: "Human owns the work. Agent owns packaging discipline.",
        actions: [{ href: "#proof", label: "Маршрут проверки" }],
      },
    ],
  },
  {
    title: "Voice agents",
    count: "2 бота",
    cards: telegramBots.map((bot) => ({
      badge: bot.badge,
      title: bot.title,
      description: bot.description,
      meta: bot.handle,
      qr: bot.qr,
      qrAlt: bot.qrAlt,
      actions: [
        { href: bot.telegramUrl, label: "Telegram" },
        { href: bot.caseUrl, label: "Кейс" },
      ],
    })),
  },
  {
    title: "Product proof",
    count: "5 артефактов",
    cards: projects.slice(0, 3).map((project) => ({
      badge: project.badge,
      title: project.title,
      description: project.description,
      meta: project.primaryLabel,
      image: project.image,
      imageAlt: project.alt,
      actions: [
        { href: project.caseUrl, label: "Кейс" },
        { href: project.primaryUrl, label: project.primaryLabel },
      ],
    })),
  },
  {
    title: "Technical validation",
    count: "repo + checks",
    cards: [
      {
        badge: "Public index",
        title: "GitHub repositories",
        description:
          "Публичные repo для проверки source, docs, setup traces и продуктовых решений.",
        meta: "5 repositories",
        actions: [{ href: githubProfileUrl, label: "GitHub profile" }],
      },
      {
        badge: "Live surface",
        title: "CRM demo без логина",
        description:
          "Браузерный продукт открывается сразу и показывает реальную логику pipeline.",
        meta: "caloristika-crm-demo.onrender.com",
        actions: [{ href: liveCrmUrl, label: "Live CRM" }],
      },
    ],
  },
]

function ExternalButton({
  href,
  children,
  variant = "outline",
  size,
}: {
  href: string
  children: ReactNode
  variant?: ComponentProps<typeof Button>["variant"]
  size?: ComponentProps<typeof Button>["size"]
}) {
  const isExternal = href.startsWith("http")

  return (
    <Button asChild variant={variant} size={size}>
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

function KpiCard({
  label,
  value,
  note,
  icon: Icon,
}: {
  label: string
  value: string
  note: string
  icon: typeof UsersIcon
}) {
  return (
    <Card className="crm-kpi-card">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-col gap-2">
            <CardDescription className="dense-label">{label}</CardDescription>
            <CardTitle className="text-2xl tracking-normal md:text-3xl">
              {value}
            </CardTitle>
          </div>
          <CardAction>
            <Icon aria-hidden="true" />
          </CardAction>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{note}</p>
      </CardContent>
    </Card>
  )
}

function EvidenceCard({
  badge,
  title,
  description,
  meta,
  image,
  imageAlt,
  qr,
  qrAlt,
  actions,
}: {
  badge: string
  title: string
  description: string
  meta: string
  image?: string
  imageAlt?: string
  qr?: string
  qrAlt?: string
  actions: Array<{ href: string; label: string }>
}) {
  return (
    <Card className="crm-proof-card">
      {image ? (
        <img
          className="h-32 w-full rounded-t-lg border-b object-cover"
          src={image}
          alt={imageAlt}
        />
      ) : null}
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-col gap-2">
            <Badge variant="outline" className="w-fit">
              {badge}
            </Badge>
            <CardTitle className="text-base">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          {qr ? (
            <CardAction className="shrink-0">
              <img
                className="size-16 shrink-0 rounded-md border bg-card object-contain p-1"
                src={qr}
                alt={qrAlt}
              />
            </CardAction>
          ) : null}
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border bg-muted/50 p-3 text-xs text-muted-foreground">
          {meta}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {actions.map((action) => (
          <ExternalButton key={action.href} href={action.href} size="sm">
            {action.label}
          </ExternalButton>
        ))}
      </CardFooter>
    </Card>
  )
}

function PipelineBoard() {
  return (
    <div className="crm-pipeline-board">
      {pipelineColumns.map((column) => (
        <section key={column.title} className="crm-pipeline-column">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 flex-col gap-1">
              <h2 className="text-base font-semibold">{column.title}</h2>
              <p className="text-sm text-muted-foreground">{column.count}</p>
            </div>
            <Badge variant="secondary">{column.cards.length}</Badge>
          </div>
          <div className="flex flex-col gap-3">
            {column.cards.map((card) => (
              <EvidenceCard key={`${column.title}-${card.title}`} {...card} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function BotTable() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {telegramBots.map((bot) => (
        <Card key={bot.handle}>
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 flex-col gap-2">
                <Badge variant="outline" className="w-fit">
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
          <CardContent className="grid gap-4 sm:grid-cols-[1fr_144px]">
            <div className="flex flex-col gap-3 text-sm">
              <div className="grid gap-1 sm:grid-cols-[110px_1fr]">
                <span className="font-medium">Handle</span>
                <span className="text-muted-foreground">{bot.handle}</span>
              </div>
              <Separator />
              <div className="grid gap-1 sm:grid-cols-[110px_1fr]">
                <span className="font-medium">Проверить</span>
                <span className="text-muted-foreground">{bot.check}</span>
              </div>
              <Separator />
              <div className="grid gap-1 sm:grid-cols-[110px_1fr]">
                <span className="font-medium">Статус</span>
                <span className="text-muted-foreground">{bot.status}</span>
              </div>
            </div>
            <figure className="m-0 grid justify-items-center gap-2">
              <img
                className="size-36 rounded-lg border bg-card object-contain p-3"
                src={bot.qr}
                alt={bot.qrAlt}
              />
              <figcaption className="text-xs text-muted-foreground">
                QR to Telegram
              </figcaption>
            </figure>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2">
            <ExternalButton href={bot.telegramUrl}>
              <BotIcon data-icon="inline-start" />
              Telegram
            </ExternalButton>
            <ExternalButton href={bot.caseUrl}>Кейс</ExternalButton>
            <ExternalButton href={bot.repoUrl}>GitHub</ExternalButton>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

function ProjectGrid() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {projects.map((project, index) => (
        <Card
          key={project.title}
          className={cn(
            "overflow-hidden",
            index === 0 && "border-primary/30 lg:col-span-2"
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
            <div className="flex min-w-0 flex-col justify-between gap-4">
              <div className="flex flex-col gap-3">
                <Badge variant="outline" className="w-fit">
                  {project.badge}
                </Badge>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <ExternalButton href={project.caseUrl}>Кейс</ExternalButton>
                <ExternalButton href={project.primaryUrl}>
                  {project.primaryLabel}
                </ExternalButton>
                <ExternalButton href={project.repoUrl}>GitHub</ExternalButton>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function RepoIndex() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
      <Card>
        <CardHeader>
          <CardTitle>Маршрут проверки</CardTitle>
          <CardDescription>
            Четыре коротких шага для human, который смотрит профиль и резюме.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3">
          {verificationSteps.map((step, index) => (
            <div key={step.title} className="flex gap-3 rounded-md border p-3">
              <Badge variant="secondary" className="h-fit">
                {index + 1}
              </Badge>
              <div className="flex min-w-0 flex-col gap-1">
                <h3 className="font-medium">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Прямые ссылки</CardTitle>
          <CardDescription>
            Все repo и demo surfaces открываются без внутреннего доступа.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {projects.map((project) => (
            <ExternalButton key={project.repoUrl} href={project.repoUrl}>
              {project.badge}
            </ExternalButton>
          ))}
          <ExternalButton href={proofPageUrl} variant="secondary">
            Proof-page
          </ExternalButton>
        </CardContent>
      </Card>
    </div>
  )
}

function App() {
  return (
    <main className="crm-shell min-h-svh bg-background text-foreground">
      <div className="crm-workspace">
        <Card className="crm-command-bar">
          <CardHeader>
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex min-w-0 gap-4">
                <Avatar className="size-16 border">
                  <AvatarImage
                    src="./assets/egor-loktionov-photo.jpg"
                    alt="Портрет Егора Локтионова"
                  />
                  <AvatarFallback>ЕЛ</AvatarFallback>
                </Avatar>
                <div className="flex min-w-0 flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-3xl font-semibold tracking-normal md:text-4xl">
                      Воронка проверки: Егор Локтионов
                    </h1>
                    <Badge variant="secondary">AI outlier</Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="outline">Demo resume CRM</Badge>
                    <span>AI-native product builder</span>
                    <span>Telegram ID: 209498707</span>
                  </div>
                  <p className="max-w-4xl text-sm leading-6 text-muted-foreground md:text-base">
                    Страница собрана как CRM pipeline для работодателя: открыть
                    ботов, проверить live WebUI, посмотреть repo и увидеть, что
                    AI agent реально работает как персональный ассистент.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                <ExternalButton href={liveCrmUrl} variant="secondary">
                  <MonitorCheckIcon data-icon="inline-start" />
                  CRM demo
                </ExternalButton>
                <ExternalButton href="https://t.me/cjm_voice_strategy_0530_bot">
                  <BotIcon data-icon="inline-start" />
                  RU bot
                </ExternalButton>
                <ExternalButton href="https://t.me/business_voice_navigator_bot">
                  <AudioLinesIcon data-icon="inline-start" />
                  EN bot
                </ExternalButton>
                <ExternalButton href={githubProfileUrl}>
                  <Code2Icon data-icon="inline-start" />
                  GitHub
                </ExternalButton>
              </div>
            </div>
          </CardHeader>
        </Card>

        <section className="crm-kpi-grid" aria-label="Proof metrics">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.label} {...kpi} />
          ))}
        </section>

        <Tabs defaultValue="pipeline" className="crm-tabs">
          <TabsList className="crm-tabs-list flex w-full group-data-horizontal/tabs:h-auto">
            <TabsTrigger value="pipeline">
              <PanelTopIcon aria-hidden="true" />
              Проверка
            </TabsTrigger>
            <TabsTrigger value="bots">
              <ScanQrCodeIcon aria-hidden="true" />
              Боты
            </TabsTrigger>
            <TabsTrigger value="projects">
              <LayoutDashboardIcon aria-hidden="true" />
              Проекты
            </TabsTrigger>
            <TabsTrigger value="repos">
              <FileCheck2Icon aria-hidden="true" />
              GitHub
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pipeline">
            <div className="grid gap-4 xl:grid-cols-[1fr_320px]">
              <PipelineBoard />
              <aside className="crm-side-panel">
                <Alert className="border-primary/30 bg-accent/20 [&>svg]:text-primary">
                  <SparklesIcon />
                  <AlertTitle>Резюме подготовил AI agent</AlertTitle>
                  <AlertDescription>
                    Это демонстрация делегирования: агент собрал страницу,
                    ссылки, QR, repo и route проверки для human.
                  </AlertDescription>
                </Alert>
                <Card>
                  <CardHeader>
                    <CardTitle>Agent handoff</CardTitle>
                    <CardDescription>
                      Что должен получить работодатель за 3 минуты.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <CheckCircle2Icon aria-hidden="true" />
                      <p className="text-sm text-muted-foreground">
                        Понимание, что Егор работает как AI-native builder.
                      </p>
                    </div>
                    <Separator />
                    <div className="flex gap-3">
                      <CheckCircle2Icon aria-hidden="true" />
                      <p className="text-sm text-muted-foreground">
                        Прямой доступ к ботам, QR и live CRM.
                      </p>
                    </div>
                    <Separator />
                    <div className="flex gap-3">
                      <CheckCircle2Icon aria-hidden="true" />
                      <p className="text-sm text-muted-foreground">
                        Публичные repo для технической проверки.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Live status</CardTitle>
                    <CardDescription>
                      Последнее действие proof pipeline.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-wrap gap-2">
                    <Badge variant="secondary">
                      <ShieldCheckIcon aria-hidden="true" />
                      Public proof
                    </Badge>
                    <Badge variant="outline">
                      <RefreshCcwIcon aria-hidden="true" />
                      Updated 2026-06-14
                    </Badge>
                  </CardFooter>
                </Card>
              </aside>
            </div>
          </TabsContent>

          <TabsContent value="bots">
            <BotTable />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectGrid />
          </TabsContent>

          <TabsContent value="repos">
            <RepoIndex />
          </TabsContent>
        </Tabs>

        <footer id="proof" className="crm-footer">
          <p>
            Resume proof page prepared by an AI agent delegated by Egor
            Loktionov. Human owns the work. Agent owns the packaging discipline.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">
              <RocketIcon aria-hidden="true" />
              Digital life 3.0
            </Badge>
            <Badge variant="outline">
              <Code2Icon aria-hidden="true" />
              Public artifact trail
            </Badge>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App
