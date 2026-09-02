import Image from "next/image";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deer Robot, Inc.',
};


const features = [
  {
    title: "Gentle, quality-first picking",
    desc: "Designed to reduce bruising and preserve fruit quality with controlled handling from pick to staging.",
  },
  {
    title: "Ripe detection in the real world",
    desc: "Vision-guided selection tuned for outdoor variability—light changes, occlusion, and dense foliage.",
  },
  {
    title: "Built for field operations",
    desc: "Engineered for long days, uneven terrain, and practical workflows—so crews can rely on it.",
  },
];

const steps = [
  { title: "Detect", desc: "Identify ripe strawberries and plan an efficient picking path." },
  { title: "Pick", desc: "Approach and harvest with controlled motion and careful end-effector handling." },
  { title: "Stage", desc: "Place fruit for downstream packing workflows with consistent orientation and flow." },
];

const faqs = [
  {
    q: "Does it work in different lighting conditions?",
    a: "Yes—outdoor variability is a core design constraint. We optimize for changing sun angle, shadows, and partial occlusion.",
  },
  {
    q: "What farm layouts does it support?",
    a: "Row-based strawberry systems are the primary target. We’ll share fit guidelines (row spacing, terrain, workflow) during a demo.",
  },
  {
    q: "How do operators interact with it?",
    a: "A simple operator workflow: start/stop, monitor status, and handle edge cases. The robot does the picking work.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            {/*<div className="h-8 w-8 rounded-xl border border-zinc-200 bg-zinc-50" />
            <span className="font-semibold tracking-tight">Deer Robot</span>*/}
            <Image
              src="/logo.png"
              alt="Deer Robot Logo"
              width={256}
              height={256}
              className="h-33 w-33 rounded-xl object-contain"
            />
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
            <a className="hover:text-zinc-900" href="#product">Product</a>
            <a className="hover:text-zinc-900" href="#how">How it works</a>
            <a className="hover:text-zinc-900" href="#faq">FAQ</a>
            <a className="hover:text-zinc-900" href="#contact">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Request a demo
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
          <div>
            {/*<div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700">*/}
              {/*<span className="h-2 w-2 rounded-full bg-red-500" />*/}
              {/*Strawberry harvesting robots*/}
            {/*</div>*/}

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Autonomous strawberry harvesting,
              <span className="text-red-600"> built for real fields</span>.
            </h1>

            <p className="mt-4 text-lg text-zinc-700">
              DeerRobot develops harvesting robots that help growers pick more fruit with
              consistent quality and less labor strain—throughout the season.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Request a demo
              </a>
              <a
                href="#how"
                className="rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                See how it works
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-zinc-200 bg-white p-4">
              <Stat label="Target uptime" value="All-day ops" />
              <Stat label="Handling" value="Gentle pick" />
              <Stat label="Focus" value="Strawberries" />
            </div>

            <p className="mt-3 text-xs text-zinc-500">
              {/*Replace these with real metrics once you have pilot data.*/}
            </p>
          </div>

          {/* Visual */}
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white">
            <div className="absolute inset-0 opacity-[0.08]" />
            <div className="p-6">
              {/*<div className="rounded-2xl border border-zinc-200 bg-white p-4">*/}
                {/*<div className="text-sm font-medium">Placeholder hero visual</div>
                <div className="mt-1 text-sm text-zinc-600">
                  Swap this for a photo/video of the robot in strawberry rows.
                </div>*/}
              {/*</div>*/}

               {/*Optional: add a real image later*/}
              <Image
                src="/Robot_hero.png"
                alt="DeerRobot harvesting in strawberry rows"
                width={1200}
                height={900}
                className="mt-6 rounded-2xl"
                priority
              />

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <InfoCard title="Ripe detection" desc="Vision-guided selection in dense foliage." />
                <InfoCard title="Careful handling" desc="Designed to protect fruit quality." />
                <InfoCard title="Operator workflow" desc="Simple controls + clear status." />
                <InfoCard title="Field-ready" desc="Built for outdoor variability." />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="product" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Built for growers who need consistency
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-700">
            Our systems focus on practical harvesting: picking efficiency, fruit quality,
            and field operations that work with your crew.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6"
              >
                <div className="text-base font-semibold">{f.title}</div>
                <div className="mt-2 text-sm text-zinc-700">{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-medium text-red-600">DeerRobot Harvester</div>
                <div className="mt-1 text-xl font-semibold tracking-tight">
                  A strawberry-first harvesting platform
                </div>
                <p className="mt-2 max-w-2xl text-sm text-zinc-700">
                  Designed around the realities of strawberry harvesting: delicate fruit,
                  dense canopies, and time-sensitive picking windows.
                </p>
              </div>
              <a
                href="#contact"
                className="w-fit rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Talk to us
              </a>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <Bullet>Vision-guided ripe selection</Bullet>
              <Bullet>Controlled end-effector handling</Bullet>
              <Bullet>Operator-friendly interface</Bullet>
              <Bullet>Designed for outdoor variability</Bullet>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">How it works</h2>
          <p className="mt-2 max-w-2xl text-zinc-700">
            A practical workflow: detect ripe berries, pick gently, and stage fruit for packing.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-medium text-zinc-500">Step {i + 1}</div>
                <div className="mt-1 text-lg font-semibold">{s.title}</div>
                <div className="mt-2 text-sm text-zinc-700">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
                <div className="font-semibold">{f.q}</div>
                <div className="mt-2 text-sm text-zinc-700">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-10">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Let’s talk harvesting
                </h2>
                <p className="mt-2 text-zinc-700">
                  Share a bit about your farm and we’ll follow up with fit, timelines, and a demo.
                </p>

                <div className="mt-6 space-y-2 text-sm text-zinc-700">
                  <div><span className="font-medium text-zinc-900">Email:</span> saurabhsharma@ucsb.edu</div>
                  <div><span className="font-medium text-zinc-900">Location:</span> Santa Barbara</div>
                </div>
              </div>

              <form className="space-y-3">
                <Field label="Name" placeholder="Your name" />
                <Field label="Email" placeholder="you@farm.com" type="email" />
                <Field label="Farm / Company" placeholder="Farm name" />
                <Field label="Message" placeholder="Row spacing, acreage, location, season timing…" textarea />
                <button
                  type="button"
                  className="w-full rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Send
                </button>
                <p className="text-xs text-zinc-500">
                  {/*(Hook this up to a form endpoint later—Vercel, Formspree, Resend, etc.)*/}
                </p>
              </form>
            </div>
          </div>

          <footer className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-zinc-200 pt-6 text-sm text-zinc-600 md:flex-row">
            <div>© {new Date().getFullYear()} DeerRobot</div>
            <div className="flex gap-4">
              <a className="hover:text-zinc-900" href="#">Privacy</a>
              <a className="hover:text-zinc-900" href="#">Terms</a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-3">
      <div className="text-xs text-zinc-500">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-zinc-700">{desc}</div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-800">
      <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-red-500" />
      <div>{children}</div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  textarea = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-sm font-medium text-zinc-900">{label}</div>
      {textarea ? (
        <textarea
          className="h-28 w-full resize-none rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400"
          placeholder={placeholder}
        />
      ) : (
        <input
          className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400"
          placeholder={placeholder}
          type={type}
        />
      )}
    </label>
  );
}
