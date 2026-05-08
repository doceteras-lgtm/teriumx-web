import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Eye,
  Gauge,
  Layers,
  Loader2,
  Repeat,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { submitContact } from '@/lib/api'

export function MarketingLanding() {
  useRevealOnScroll()
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBand />
      <Problem />
      <VisualStatement />
      <Results />
      <HowItWorks />
      <ContactSection />
      <Footer />
    </div>
  )
}

/* ============================================================
   useRevealOnScroll — adds .is-visible to .reveal elements
============================================================ */
function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ============================================================
   Header
============================================================ */
function Header() {
  return (
    <header className="border-b border-border/50 bg-white/75 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#problema" className="hover:text-foreground transition-colors">El problema</a>
          <a href="#producto" className="hover:text-foreground transition-colors">Cómo funciona</a>
          <a href="#resultados" className="hover:text-foreground transition-colors">Resultados</a>
        </nav>
        <a href="#contacto">
          <Button
            size="sm"
            className="bg-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-ink))] text-white"
          >
            Solicitar demo
            <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </header>
  )
}

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5">
      <BrandMark size={32} />
      <span className="font-display text-xl font-bold text-[hsl(var(--brand-orange))]">
        teriumx
      </span>
    </a>
  )
}

function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" aria-label="TeriumX">
      <rect x="0" y="0" width="180" height="180" rx="32" fill="hsl(var(--brand-orange))" />
      <rect x="52" y="34" width="24" height="112" rx="6" fill="hsl(var(--brand-dark))" />
      <rect x="30" y="60" width="68" height="22" rx="6" fill="hsl(var(--brand-dark))" />
      <line x1="104" y1="34" x2="172" y2="146" stroke="hsl(var(--brand-dark))" strokeWidth="24" strokeLinecap="round" />
      <line x1="172" y1="34" x2="104" y2="146" stroke="hsl(var(--brand-dark))" strokeWidth="24" strokeLinecap="round" />
    </svg>
  )
}

/* ============================================================
   Hero
============================================================ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--brand-dark))] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-50"
        style={{ backgroundImage: 'url(/img/teriumx-2.jpg)' }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(120deg, hsl(var(--brand-ink) / 0.92) 0%, hsl(var(--brand-dark) / 0.55) 50%, hsl(var(--brand-dark) / 0.94) 100%)',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 text-[11px] uppercase tracking-wider mb-8 reveal">
            <Sparkles className="h-3 w-3 text-[hsl(var(--brand-orange))]" />
            Sistema operativo de ventas — México
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[88px] font-bold leading-[0.98] reveal">
            Tu equipo no es el problema.
          </h1>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[88px] font-bold leading-[0.98] mt-2 text-[hsl(var(--brand-orange))] reveal delay-1">
            Tu sistema sí.
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mt-8 leading-relaxed reveal delay-2">
            Convierte tu operación comercial en un sistema predecible, medible y escalable. Estandariza la ejecución, gana visibilidad sobre el funnel y replica lo que funciona — sin pedirle reportes a cada vendedor cada semana.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-10 reveal delay-3">
            <a href="#contacto">
              <Button
                size="lg"
                className="text-base h-12 px-7 bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold shadow-lg shadow-[hsl(var(--brand-orange))]/20"
              >
                Solicitar demo personalizado
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href="#producto">
              <Button
                variant="outline"
                size="lg"
                className="text-base h-12 px-7 bg-transparent border-white/25 text-white hover:bg-white/10 hover:text-white"
              >
                Ver cómo funciona
              </Button>
            </a>
          </div>

          <div className="text-xs text-white/55 mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 reveal delay-3">
            <span>+17% en conversión promedio</span>
            <span aria-hidden>·</span>
            <span>Setup &lt; 30 días</span>
            <span aria-hidden>·</span>
            <span>Hecho en México</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Trust band — stats
============================================================ */
function TrustBand() {
  return (
    <section className="border-b bg-card">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
        <Stat icon={<TrendingUp className="h-4 w-4" />} value="+17%" label="Conversión" sub="Mejora promedio en funnel post-implementación" />
        <Stat icon={<Repeat className="h-4 w-4" />} value="100%" label="Consistencia" sub="Cada vendedor ejecuta el mismo proceso" />
        <Stat icon={<Eye className="h-4 w-4" />} value="Tiempo real" label="Visibilidad" sub="Funnel completo sin pedir reportes" />
        <Stat icon={<Gauge className="h-4 w-4" />} value="< 30 días" label="Setup" sub="Operativo con tu data y procesos" />
      </div>
    </section>
  )
}

function Stat({ icon, value, label, sub }: { icon: React.ReactNode; value: string; label: string; sub: string }) {
  return (
    <div className="reveal">
      <div className="flex items-center gap-1.5 text-[hsl(var(--brand-orange))] mb-2">
        {icon}
        <span className="text-[10px] uppercase tracking-wider font-semibold">{label}</span>
      </div>
      <div className="font-display text-2xl md:text-3xl font-bold tracking-tight">{value}</div>
      <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{sub}</div>
    </div>
  )
}

/* ============================================================
   Problem
============================================================ */
function Problem() {
  return (
    <section id="problema" className="py-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[hsl(var(--brand-orange))] font-semibold mb-3">
            <X className="h-3.5 w-3.5" />
            El problema
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Hoy tu operación
            <br />
            <span className="text-muted-foreground">depende de personas.</span>
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed text-lg max-w-2xl">
            Cuando el sistema vive en cabezas y archivos sueltos, la ejecución es tan buena como tu mejor vendedor en su mejor día. Y tan mala como tu peor vendedor en su peor día.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          <ProblemCard
            icon={<Layers className="h-5 w-5" />}
            title="Inconsistencia"
            text="Cada vendedor opera distinto. El mismo cliente recibe pitches diferentes según quién lo atienda."
            delay={0}
          />
          <ProblemCard
            icon={<Eye className="h-5 w-5" />}
            title="Falta de control"
            text="No sabes qué pasa en tu funnel hasta el reporte de fin de mes. Cuando te enteras, ya es tarde."
            delay={1}
          />
          <ProblemCard
            icon={<TrendingUp className="h-5 w-5" />}
            title="No escalable"
            text="Lo que funciona en un vendedor estrella no se replica. Contratas más, no produces más."
            delay={2}
          />
        </div>
      </div>
    </section>
  )
}

function ProblemCard({
  icon,
  title,
  text,
  delay,
}: {
  icon: React.ReactNode
  title: string
  text: string
  delay: number
}) {
  return (
    <div className={`reveal delay-${delay} rounded-2xl border bg-card p-7 hover:border-[hsl(var(--brand-orange))]/40 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300`}>
      <div className="h-11 w-11 rounded-xl bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] grid place-items-center">
        {icon}
      </div>
      <h3 className="font-display font-semibold mt-5 text-lg text-[hsl(var(--brand-dark))]">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{text}</p>
    </div>
  )
}

/* ============================================================
   Visual Statement — split
============================================================ */
function VisualStatement() {
  return (
    <section className="py-28 px-6 bg-card border-y">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal order-2 lg:order-1">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-2xl shadow-black/10 bg-[hsl(var(--brand-dark))]">
            <img
              src="/img/teriumx-1.jpg"
              alt="Vista corporativa al amanecer — operación que opera con orden"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, transparent 55%, hsl(var(--brand-dark) / 0.45) 100%)',
              }}
              aria-hidden
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 reveal delay-1">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[hsl(var(--brand-orange))] font-semibold mb-3">
            <Target className="h-3.5 w-3.5" />
            Lo que cambia
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            No necesitas más leads.
            <br />
            <span className="text-[hsl(var(--brand-orange))]">Necesitas control.</span>
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed text-lg">
            El problema rara vez es volumen. Es ejecución. TeriumX convierte tu proceso comercial en un sistema operable: cada vendedor ejecuta igual, cada lead pasa por las mismas fases, cada conversión se atribuye a una causa medible.
          </p>
          <ul className="mt-8 space-y-3.5 text-sm">
            <SplitBenefit text="Pipeline estandarizado en lugar de N pipelines en N cabezas" />
            <SplitBenefit text="Métricas sobre ejecución, no solo sobre resultados" />
            <SplitBenefit text="Onboarding de un vendedor nuevo en días, no en meses" />
            <SplitBenefit text="Decisiones del director basadas en datos, no en anécdotas" />
          </ul>
        </div>
      </div>
    </section>
  )
}

function SplitBenefit({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 h-2 w-2 rounded-full bg-[hsl(var(--brand-orange))] shrink-0" />
      <span className="text-foreground/85 leading-relaxed">{text}</span>
    </li>
  )
}

/* ============================================================
   Results
============================================================ */
function Results() {
  return (
    <section id="resultados" className="py-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[hsl(var(--brand-orange))] font-semibold mb-3">
            <BarChart3 className="h-3.5 w-3.5" />
            Resultados
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Lo que pasa cuando
            <br />
            <span className="text-muted-foreground">el sistema toma el volante.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <ResultCard
            metric="+17%"
            title="Incremento en conversión"
            text="Mejora promedio en tasa de cierre del funnel después de los primeros 90 días con el sistema operando."
            delay={0}
          />
          <ResultCard
            metric="100%"
            title="Consistencia total"
            text="Todos los vendedores siguen el mismo proceso. Lo que ejecuta tu mejor cerrador se vuelve el estándar."
            delay={1}
          />
          <ResultCard
            metric="10×"
            title="Escalabilidad"
            text="Contratas un vendedor nuevo y produce desde la semana dos. El sistema enseña; no dependes de mentores."
            delay={2}
          />
        </div>
      </div>
    </section>
  )
}

function ResultCard({
  metric,
  title,
  text,
  delay,
}: {
  metric: string
  title: string
  text: string
  delay: number
}) {
  return (
    <div className={`reveal delay-${delay} rounded-2xl border bg-card p-8 hover:border-[hsl(var(--brand-orange))]/40 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300`}>
      <div className="font-display text-5xl font-bold text-[hsl(var(--brand-orange))] tracking-tight">
        {metric}
      </div>
      <h3 className="font-display font-semibold mt-4 text-lg text-[hsl(var(--brand-dark))]">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{text}</p>
    </div>
  )
}

/* ============================================================
   How it works
============================================================ */
function HowItWorks() {
  return (
    <section id="producto" className="py-28 px-6 bg-card border-y">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[hsl(var(--brand-orange))] font-semibold mb-3">
            <Workflow className="h-3.5 w-3.5" />
            Cómo funciona
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-[hsl(var(--brand-dark))]">
            Tres movimientos.
            <br />
            <span className="text-[hsl(var(--brand-dark))]/55">Un sistema.</span>
          </h2>
          <p className="text-[hsl(var(--brand-dark))]/70 mt-5 leading-relaxed">
            No es un CRM más. Es la capa operativa que toma tu proceso comercial y lo vuelve ejecutable, medible y replicable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <Step
            n="01"
            title="Mapeamos tu operación"
            text="Tu mejor vendedor + tu director comercial + nosotros, en una semana. Convertimos lo que funciona en un proceso explícito y modelado."
            delay={0}
          />
          <Step
            n="02"
            title="Lo metemos al sistema"
            text="Pipeline, fases, métricas de ejecución, automatizaciones. Cada vendedor opera con la misma vista, las mismas reglas y el mismo coaching contextual."
            delay={1}
          />
          <Step
            n="03"
            title="Replicas y escalas"
            text="Vendedor nuevo entra y produce desde la semana dos. Métricas reales en tiempo real. Decisiones basadas en datos, no en anécdotas."
            delay={2}
          />
        </div>
      </div>
    </section>
  )
}

function Step({ n, title, text, delay }: { n: string; title: string; text: string; delay: number }) {
  return (
    <div className={`reveal delay-${delay} relative rounded-2xl bg-background p-8 border hover:border-[hsl(var(--brand-orange))]/40 hover:shadow-xl transition-all duration-300`}>
      <div className="font-display text-[10px] tracking-[0.3em] uppercase text-[hsl(var(--brand-orange))] font-bold mb-4">
        {n}
      </div>
      <h3 className="font-display font-semibold text-xl text-[hsl(var(--brand-dark))]">{title}</h3>
      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{text}</p>
    </div>
  )
}

/* ============================================================
   Contact
============================================================ */
function ContactSection() {
  return (
    <section id="contacto" className="py-28 px-6 bg-[hsl(var(--brand-dark))] text-white border-t">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
        <div className="reveal">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[hsl(var(--brand-orange))] font-semibold mb-3">
            <Send className="h-3.5 w-3.5" />
            Hablemos
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Demo con tu
            <br />
            <span className="text-[hsl(var(--brand-orange))]">propio funnel.</span>
          </h2>
          <p className="text-white/75 mt-6 leading-relaxed text-lg">
            Cuéntanos cómo opera tu equipo hoy. Te mostramos en vivo cómo se vería tu operación con TeriumX corriendo — sin slide deck ni promesas vagas.
          </p>
          <ul className="mt-8 space-y-3.5 text-sm">
            <ContactPromise text="Respuesta en menos de 24h hábiles" />
            <ContactPromise text="Demo en vivo con tu pipeline real, no mockups" />
            <ContactPromise text="Sin contrato ni compromiso de compra" />
            <ContactPromise text="Conversación directa con el equipo de producto" />
          </ul>
        </div>
        <div className="reveal delay-1">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function ContactPromise({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--brand-orange))] shrink-0 mt-0.5" />
      <span className="text-white/85">{text}</span>
    </li>
  )
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

function ContactForm() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [organizacion, setOrganizacion] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    setErrorMsg('')
    try {
      await submitContact({ nombre, email, telefono, organizacion, mensaje, honeypot })
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Error de red. Verifica tu conexión.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white text-[hsl(var(--brand-dark))] p-8 md:p-10 shadow-2xl">
        <div className="h-12 w-12 rounded-full bg-[hsl(var(--brand-orange))]/15 text-[hsl(var(--brand-orange))] grid place-items-center mb-5">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl font-bold tracking-tight">Recibimos tu mensaje.</h3>
        <p className="text-[hsl(var(--brand-dark))]/75 mt-3 leading-relaxed">
          Te contactamos en menos de 24h hábiles al correo que nos diste. Si tu operación está corriendo, vamos a poder mostrarte el demo con tu propio data en menos de una semana.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-white text-[hsl(var(--brand-dark))] p-7 md:p-9 space-y-4 shadow-2xl"
    >
      <FormField label="Nombre completo" required>
        <Input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          placeholder="Lic. Juan Pérez"
          className="bg-white border-[hsl(var(--brand-dark))]/15 text-[hsl(var(--brand-dark))] placeholder:text-[hsl(var(--brand-dark))]/35 focus-visible:ring-[hsl(var(--brand-orange))]"
        />
      </FormField>
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="Correo electrónico" required>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="tu@empresa.com"
            className="bg-white border-[hsl(var(--brand-dark))]/15 text-[hsl(var(--brand-dark))] placeholder:text-[hsl(var(--brand-dark))]/35 focus-visible:ring-[hsl(var(--brand-orange))]"
          />
        </FormField>
        <FormField label="Teléfono / WhatsApp">
          <Input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="+52 ..."
            className="bg-white border-[hsl(var(--brand-dark))]/15 text-[hsl(var(--brand-dark))] placeholder:text-[hsl(var(--brand-dark))]/35 focus-visible:ring-[hsl(var(--brand-orange))]"
          />
        </FormField>
      </div>
      <FormField label="Empresa">
        <Input
          value={organizacion}
          onChange={(e) => setOrganizacion(e.target.value)}
          placeholder="Nombre de tu empresa"
          className="bg-white border-[hsl(var(--brand-dark))]/15 text-[hsl(var(--brand-dark))] placeholder:text-[hsl(var(--brand-dark))]/35 focus-visible:ring-[hsl(var(--brand-orange))]"
        />
      </FormField>
      <FormField label="Cuéntanos cómo opera tu equipo hoy">
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows={4}
          placeholder="Cuántos vendedores, qué herramientas usan, qué les duele de la operación actual..."
          className="flex w-full rounded-md border border-[hsl(var(--brand-dark))]/15 bg-white px-3 py-2 text-sm text-[hsl(var(--brand-dark))] placeholder:text-[hsl(var(--brand-dark))]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-orange))] focus-visible:ring-offset-2 resize-none"
        />
      </FormField>

      <div aria-hidden className="hidden">
        <label>
          No llenar — campo trampa
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      {status === 'error' && (
        <div className="rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm px-4 py-3">
          {errorMsg}
        </div>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        className="w-full h-12 text-base bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold shadow-lg shadow-[hsl(var(--brand-orange))]/20"
      >
        {status === 'loading' ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        {status === 'loading' ? 'Enviando...' : 'Solicitar demo'}
      </Button>

      <p className="text-[11px] text-[hsl(var(--brand-dark))]/50 text-center pt-1">
        Al enviar aceptas nuestro Aviso de Privacidad. Cumplimos LFPDPPP.
      </p>
    </form>
  )
}

function FormField({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-[11px] uppercase tracking-wider text-[hsl(var(--brand-dark))]/65 font-semibold">
        {label}
        {required && <span className="text-[hsl(var(--brand-orange))] ml-1">*</span>}
      </Label>
      {children}
    </div>
  )
}

/* ============================================================
   Footer
============================================================ */
function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-10 md:gap-8">
          <div className="space-y-3">
            <Logo />
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              Sistema operativo para equipos comerciales. Estandariza ejecución, gana visibilidad y escala lo que funciona.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-semibold">Contacto</div>
            <a
              href="mailto:hola@teriumx.com"
              className="block text-xs text-foreground hover:text-[hsl(var(--brand-orange))] transition-colors"
            >
              hola@teriumx.com
            </a>
            <div className="text-xs text-muted-foreground">Ciudad de México, México</div>
          </div>

          <div className="space-y-2.5">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-semibold">Producto</div>
            <a href="#problema" className="block text-xs text-foreground hover:text-[hsl(var(--brand-orange))] transition-colors">
              El problema
            </a>
            <a href="#producto" className="block text-xs text-foreground hover:text-[hsl(var(--brand-orange))] transition-colors">
              Cómo funciona
            </a>
            <a href="#contacto" className="block text-xs text-foreground hover:text-[hsl(var(--brand-orange))] transition-colors">
              Solicitar demo
            </a>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-muted-foreground">
          <div>© {new Date().getFullYear()} TeriumX · Todos los derechos reservados</div>
          <div>Hecho en México</div>
        </div>
      </div>
    </footer>
  )
}
