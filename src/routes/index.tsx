import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site, nav, services, expertise, experience, projects, reasons, process } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jhony — Web Developer | Professional Website Development" },
      { name: "description", content: "Jhony designs and develops modern, responsive websites for businesses, professionals and personal brands." },
      { property: "og:title", content: "Jhony — Web Developer" },
      { property: "og:description", content: "Modern, responsive websites for businesses, professionals and personal brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pad = (n: number) => String(n).padStart(2, "0");

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .img-reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Btn({ href, children, variant = "solid" }: { href: string; children: ReactNode; variant?: "solid" | "outline" | "accent" | "ghost-ink" }) {
  const styles = {
    solid: "bg-primary text-primary-foreground hover:bg-accent",
    accent: "bg-accent text-accent-foreground hover:bg-ink-foreground hover:text-ink",
    outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
    "ghost-ink": "border border-ink-border text-ink-foreground hover:bg-ink-foreground hover:text-ink",
  }[variant];
  return (
    <a href={href} className={`label group inline-flex min-h-12 items-center gap-3 rounded-sm px-6 transition-colors duration-300 ${styles}`}>
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
    </a>
  );
}

function SectionHead({ index, label, title, sub }: { index: string; label: string; title: ReactNode; sub?: string }) {
  return (
    <div className="reveal mb-14 grid gap-6 border-t border-current/15 pt-6 md:mb-20 md:grid-cols-12">
      <p className="label md:col-span-3"><span className="text-accent">{index}</span> — {label}</p>
      <div className="md:col-span-9">
        <h2 className="text-4xl font-bold tracking-tight md:text-6xl">{title}</h2>
        {sub && <p className="mt-4 max-w-xl text-lg opacity-60">{sub}</p>}
      </div>
    </div>
  );
}

function PortraitPlaceholder({ className = "", note = "Replace with Jhony's photo" }: { className?: string; note?: string }) {
  return (
    <div className={`placeholder-hatch relative flex border items-end overflow-hidden rounded-sm ${className}`} role="img" aria-label="Portrait placeholder">
      <span className="display pointer-events-none absolute -right-4 top-4 text-[9rem] text-foreground/5">J</span>
      <p className="label m-5 text-muted-foreground">{note}</p>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b bg-background/90 backdrop-blur" : ""}`}>
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#top" className="font-display text-xl font-extrabold tracking-tight">JHONY<span className="text-accent">.</span></a>
        <nav className="hidden gap-8 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="label relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full">{n.label}</a>
          ))}
        </nav>
        <a href="#contact" className="label hidden items-center gap-2 lg:inline-flex hover:text-accent transition-colors">
          <span className="size-2 rounded-full bg-accent" aria-hidden /> Let's talk
        </a>
        <button className="lg:hidden p-2 -mr-2" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t bg-background px-5 pb-8 pt-4 lg:hidden" aria-label="Mobile">
          {[...nav, { id: "contact", label: "Let's talk" }].map((n, i) => (
            <a key={n.label} href={`#${n.id}`} onClick={() => setOpen(false)} className="flex items-baseline gap-4 border-b py-4 font-display text-3xl font-bold uppercase tracking-tight">
              <span className="label text-accent">{pad(i + 1)}</span>{n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-28 md:px-10 md:pt-36">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="min-w-0 lg:col-span-8">
          <p className="label reveal mb-8 flex items-center gap-3 text-muted-foreground">
            <span className="size-2 rounded-full bg-accent" aria-hidden /> Available for new projects
          </p>
          <h1 className="display reveal text-[clamp(2.4rem,12.5vw,11.5rem)] lg:text-[min(8.6vw,10rem)]">
            Building<br />Digital<br />Experiences<span className="text-accent">.</span>
          </h1>
        </div>
        <div className="flex flex-col justify-end gap-8 lg:col-span-4">
          <PortraitPlaceholder className="img-reveal aspect-[4/5] w-full max-w-sm lg:max-w-none" />
        </div>
      </div>
      <div className="mt-14 grid gap-8 border-t pt-8 md:grid-cols-12">
        <p className="label reveal md:col-span-4">{site.name} — {site.title}</p>
        <p className="reveal text-lg leading-relaxed text-muted-foreground md:col-span-4">
          I design and develop modern websites that help businesses, professionals, and personal brands build a stronger presence online.
        </p>
        <div className="reveal flex flex-wrap gap-3 md:col-span-4 md:justify-end">
          <Btn href="#works">View my work</Btn>
          <Btn href="#contact" variant="outline">Let's work together</Btn>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
      <SectionHead index="01" label="About me" title="Hi, I'm Jhony." />
      <div className="grid gap-12 md:grid-cols-12">
        <PortraitPlaceholder className="img-reveal aspect-[3/4] md:col-span-4" />
        <div className="md:col-span-7 md:col-start-6">
          <p className="reveal text-2xl leading-snug md:text-4xl md:leading-tight">
            I'm a Web Developer focused on creating modern, responsive, and professional websites. I combine clean development, thoughtful design, and modern tools to create digital experiences that are <span className="text-accent">functional and visually strong.</span>
          </p>
          <dl className="reveal mt-14 grid grid-cols-3 border-t pt-8">
            {site.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="label mt-2 text-muted-foreground">{s.label}</dt>
                <dd className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="reveal mt-12"><Btn href="#experience" variant="outline">More about me</Btn></div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-ink py-24 text-ink-foreground md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHead index="02" label="What I do" title="Web solutions designed around your goals." />
        <ul>
          {services.map((s, i) => (
            <li key={s.title} className="reveal group grid grid-cols-12 items-baseline gap-4 border-t border-ink-border py-8 transition-colors last:border-b md:py-10">
              <span className="label col-span-2 text-accent md:col-span-1">{pad(i + 1)}</span>
              <h3 className="col-span-10 text-3xl font-bold uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-3 md:col-span-6 md:text-5xl">{s.title}</h3>
              <p className="col-span-10 col-start-3 text-ink-muted md:col-span-4 md:col-start-auto">{s.text}</p>
              <ArrowUpRight className="hidden size-6 justify-self-end text-ink-muted transition-all duration-300 group-hover:rotate-45 group-hover:text-accent md:col-span-1 md:block" aria-hidden />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
      <SectionHead index="03" label="Expertise" title="Tools & skills." />
      <ul className="reveal flex flex-wrap gap-x-6 gap-y-2 md:gap-x-10">
        {expertise.map((e, i) => (
          <li key={e} className="font-display text-3xl font-bold tracking-tight text-foreground/25 transition-colors duration-300 hover:text-foreground md:text-6xl">
            {e}<sup className="label ml-1 align-super text-accent">{pad(i + 1)}</sup>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Works() {
  return (
    <section id="works" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
      <SectionHead index="04" label="Selected work" title="Selected Work" sub="A selection of websites and digital experiences." />
      <div className="grid gap-x-8 gap-y-20 md:grid-cols-12">
        {projects.map((p, i) => {
          const layout = ["md:col-span-8", "md:col-span-4 md:mt-40", "md:col-span-5", "md:col-span-7 md:mt-24"][i];
          return (
            <article key={p.title} className={`group ${layout}`}>
              <a href={p.href} className="block overflow-hidden rounded-sm bg-muted" aria-label={`View project: ${p.title}`}>
                <img src={p.image} alt={`${p.title} project preview`} width={p.w} height={p.h} loading="lazy"
                  className="img-reveal h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </a>
              <div className="mt-6 grid grid-cols-12 gap-4 border-t pt-5">
                <p className="label col-span-12 text-accent sm:col-span-3">Project {pad(i + 1)}</p>
                <div className="col-span-12 sm:col-span-9">
                  <h3 className="text-2xl font-bold uppercase tracking-tight md:text-3xl">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground">{p.text}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    <p className="label text-muted-foreground">{p.tech}</p>
                    <a href={p.href} className="label inline-flex items-center gap-2 border-b border-foreground pb-1 transition-colors hover:border-accent hover:text-accent">
                      View project <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHead index="05" label="Experience" title="What I've been building." />
        <ol>
          {experience.map((e, i) => (
            <li key={e.area} className="reveal grid grid-cols-12 gap-4 border-t border-foreground/15 py-8 last:border-b">
              <span className="label col-span-2 text-accent md:col-span-3">{pad(i + 1)}</span>
              <h3 className="col-span-10 text-2xl font-bold tracking-tight md:col-span-4 md:text-3xl">{e.area}</h3>
              <p className="col-span-10 col-start-3 text-muted-foreground md:col-span-5 md:col-start-auto md:text-lg">{e.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
      <SectionHead index="06" label="Why work with me" title="Why work with me." />
      <div className="grid gap-px overflow-hidden rounded-sm border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <div key={r.title} className="reveal group bg-background p-8 transition-colors duration-300 hover:bg-muted md:p-10">
            <span className="label text-accent">{pad(i + 1)}</span>
            <h3 className="mt-12 text-xl font-bold uppercase tracking-tight md:text-2xl">{r.title}</h3>
            <p className="mt-3 text-muted-foreground">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 pb-24 md:px-10 md:pb-32">
      <SectionHead index="07" label="Process" title="How I work." />
      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {process.map((p, i) => (
          <li key={p.title} className="reveal border-t-2 border-foreground pt-6" style={{ transitionDelay: `${i * 90}ms` }}>
            <span className="display block text-6xl text-foreground/10 md:text-7xl">{pad(i + 1)}</span>
            <h3 className="mt-4 text-xl font-bold uppercase tracking-tight">{p.title}</h3>
            <p className="mt-2 text-muted-foreground">{p.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <p className="label reveal mb-10 text-accent">Have a project in mind?</p>
        <h2 className="display reveal text-[clamp(2.2rem,11vw,10rem)]">Let's build<br />something great<span className="text-accent">.</span></h2>
        <div className="mt-14 grid gap-8 border-t border-ink-border pt-8 md:grid-cols-2">
          <p className="reveal max-w-md text-lg text-ink-muted">Have a website project in mind? Let's turn your idea into a professional digital experience.</p>
          <div className="reveal flex flex-wrap gap-3 md:justify-end">
            <Btn href="#contact" variant="accent">Start a project</Btn>
            <Btn href="#works" variant="ghost-ink">View my work</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setSent(true); e.currentTarget.reset(); };
  const field = "w-full border-0 border-b border-input bg-transparent py-3 text-lg outline-none transition-colors focus:border-accent placeholder:text-muted-foreground/60";
  return (
    <section id="contact" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
      <SectionHead index="08" label="Contact" title="Let's talk." sub="Tell me about your project and I'll get back to you." />
      <div className="grid gap-16 md:grid-cols-12">
        <form onSubmit={onSubmit} className="reveal space-y-8 md:col-span-7">
          <div className="grid gap-8 sm:grid-cols-2">
            <label className="block"><span className="label text-muted-foreground">Name</span>
              <input required name="name" autoComplete="name" className={field} placeholder="Your name" /></label>
            <label className="block"><span className="label text-muted-foreground">Email</span>
              <input required type="email" name="email" autoComplete="email" className={field} placeholder="you@example.com" /></label>
          </div>
          <label className="block"><span className="label text-muted-foreground">Project type</span>
            <select required name="type" defaultValue="" className={field}>
              <option value="" disabled>Select a project type</option>
              {services.map((s) => <option key={s.title}>{s.title}</option>)}
              <option>Other</option>
            </select></label>
          <label className="block"><span className="label text-muted-foreground">Message</span>
            <textarea required name="message" rows={4} className={`${field} resize-none`} placeholder="A few words about your project" /></label>
          <div className="flex flex-wrap items-center gap-6">
            <button type="submit" className="label group inline-flex min-h-12 items-center gap-3 rounded-sm bg-primary px-8 text-primary-foreground transition-colors hover:bg-accent">
              Send message <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </button>
            {sent && <p role="status" className="text-sm text-accent">Thanks! Your message has been noted.</p>}
          </div>
        </form>
        <ul className="reveal md:col-span-4 md:col-start-9">
          {site.contact.map((c) => (
            <li key={c.label} className="border-t py-5 last:border-b">
              <p className="label text-muted-foreground">{c.label}</p>
              <a href={c.href} className="mt-1 inline-block text-lg transition-colors hover:text-accent">{c.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">JHONY<span className="text-accent">.</span></p>
            <p className="label mt-4 text-ink-muted">Web Developer</p>
            <p className="mt-4 max-w-sm text-ink-muted">Designing and developing modern digital experiences.</p>
          </div>
          <nav className="md:col-span-3" aria-label="Footer">
            <p className="label mb-4 text-accent">Menu</p>
            {nav.map((n) => <a key={n.id} href={`#${n.id}`} className="block py-1 text-ink-muted transition-colors hover:text-ink-foreground">{n.label}</a>)}
          </nav>
          <div className="md:col-span-3">
            <p className="label mb-4 text-accent">Social</p>
            {site.contact.slice(1).map((c) => <a key={c.label} href={c.href} className="block py-1 text-ink-muted transition-colors hover:text-ink-foreground">{c.label}</a>)}
          </div>
        </div>
        <div className="label mt-20 flex flex-wrap justify-between gap-4 border-t border-ink-border pt-6 text-ink-muted">
          <p>© 2026 Jhony. All rights reserved.</p>
          <a href="#top" className="hover:text-ink-foreground">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero /><About /><Services /><Expertise /><Works /><Experience /><Why /><Process /><FinalCta /><Contact />
      </main>
      <Footer />
    </>
  );
}
