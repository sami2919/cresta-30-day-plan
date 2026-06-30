"use client";

import { useState } from "react";

const weeks = [
  {
    week: "Week 1",
    title: "Map the revenue engine",
    goal: "Find the manual work and decision bottlenecks.",
    actions: [
      "Audit current GTM workflows across account selection, routing, enrichment, outbound, pipeline review, and reporting",
      "Map where reps, managers, marketing, and RevOps lose time or wait on manual context",
      "Identify the highest leverage workflows that should become systems, not recurring tasks",
      "Understand which data sources matter most: CRM, sales engagement, enrichment, product usage, conversation intelligence, support signals, intent, and firmographics",
      "Separate useful dashboards from decisions the system should actively help make",
    ],
    output:
      "A revenue engine map showing where GTM work slows down, which decisions repeat, and what should be automated first.",
  },
  {
    week: "Week 2",
    title: "Build the signal layer",
    goal: "Help the team focus on the right accounts.",
    actions: [
      "Create an account scoring model using ICP fit, industry, contact center scale, hiring, funding, technology stack, growth signals, and customer experience pain",
      "Add triggers like new CX leadership, support hiring, call center expansion, AI transformation initiatives, vendor consolidation, and public customer complaints",
      "Build account briefs that explain why an account matters now",
      "Make scores explainable so reps and leaders trust the system",
      "Flag likely conversation pain, not just generic company news",
    ],
    output:
      'A ranked account engine with clear "why now" reasoning and enough context for a rep to act.',
  },
  {
    week: "Week 3",
    title: "Build action workflows",
    goal: "Turn signals into action.",
    actions: [
      "Generate account briefs for reps",
      "Recommend the next best action by account",
      "Route accounts based on segment, territory, signal type, and urgency",
      "Create outbound triggers and talk tracks based on detected pain",
      "Integrate the workflow with CRM and sales tools instead of creating another place to check",
    ],
    output:
      "A working prototype that turns account signals into rep actions inside the GTM workflow.",
  },
  {
    week: "Week 4",
    title: "Make it compound",
    goal: "Make the system learn from GTM outcomes.",
    actions: [
      "Track which signals lead to meetings, opportunities, pipeline, wins, and losses",
      "Feed outcomes back into scoring",
      "Identify which messages, segments, and triggers actually work",
      "Build a lightweight dashboard for revenue leadership",
      "Turn the first workflow into a repeatable GTM operating system",
    ],
    output:
      "A feedback loop where every GTM action improves the next decision.",
  },
];

const loopSteps = [
  {
    title: "Detect signals",
    body: "Capture account movement from market activity, hiring, tech shifts, customer experience pain, and internal GTM data.",
  },
  {
    title: "Score accounts",
    body: "Rank accounts by fit, urgency, likely pain, and strategic value.",
  },
  {
    title: "Explain why now",
    body: "Give reps and leaders the reasoning, not just a score.",
  },
  {
    title: "Route next action",
    body: "Send the right account, message, and workflow to the right owner.",
  },
  {
    title: "Learn from outcomes",
    body: "Use meetings, pipeline, wins, and losses to improve the next decision.",
  },
];

const metrics = [
  {
    title: "Efficiency",
    items: [
      "Manual hours removed",
      "Time saved per rep",
      "Faster routing",
      "Fewer duplicate or low quality workflows",
    ],
  },
  {
    title: "Focus",
    items: [
      "Higher percentage of reps working top priority accounts",
      "Increase in high intent accounts touched",
      "Better conversion from signal to meeting",
      "Cleaner account prioritization",
    ],
  },
  {
    title: "Learning",
    items: [
      "Signal to pipeline conversion",
      "Win rate by trigger type",
      "Message performance by segment",
      "Score accuracy over time",
    ],
  },
];

function SectionHeader({
  label,
  title,
}: {
  label?: string;
  title: string;
}) {
  return (
    <div className="mb-7">
      {label ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {label}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-sm leading-6 text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    const fallback = "https://cresta-30-day-plan.vercel.app";
    const url = typeof window === "undefined" ? fallback : window.location.href;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copyLink}
      className="mt-6 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-soft"
    >
      {copied ? "Copied" : "Copy plan link"}
    </button>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-[900px]">
        <header className="mb-16 rounded-lg border border-line bg-paper/85 p-6 shadow-memo sm:p-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Built for Stephen
            </p>
            <a
              href="https://github.com/sami2919"
              className="text-sm font-medium text-muted underline decoration-line underline-offset-4 transition hover:text-ink"
            >
              github.com/sami2919
            </a>
          </div>

          <div className="max-w-[790px]">
            <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
              How I'd Build Cresta's AI-Native Revenue Engine in 30 Days
            </h1>
            <p className="mt-6 max-w-[700px] text-lg leading-8 text-muted sm:text-xl">
              A practical plan for turning GTM strategy into systems, signals,
              workflows, and compounding infrastructure.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#plan"
              className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent"
            >
              View the plan
            </a>
            <a
              href="https://github.com/sami2919"
              className="inline-flex items-center justify-center rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink"
            >
              GitHub
            </a>
          </div>
        </header>

        <div className="space-y-16">
          <section>
            <SectionHeader title="Why this role clicked" />
            <div className="space-y-4 text-lg leading-8 text-muted">
              <p>
                Stephen's post stood out because it did not sound like a normal
                RevOps role.
              </p>
              <p>
                "Not ops-as-usual" is the right framing. The opportunity is not
                to add more dashboards or clean up reports. It is to build
                systems that help the revenue team focus on the right accounts,
                understand why now, take the next best action, and learn from
                what happens.
              </p>
              <p>That is the kind of GTM engineering problem I like.</p>
            </div>
          </section>

          <section>
            <SectionHeader title="My read on Cresta's GTM opportunity" />
            <p className="mb-6 text-lg leading-8 text-ink">
              Cresta sells AI for customer conversations. The GTM motion should
              be just as AI-native as the product.
            </p>
            <p className="mb-6 rounded-lg border border-line bg-white p-5 text-base font-medium leading-7 text-ink shadow-memo">
              Cresta is sitting on a sharper GTM wedge than generic AI sales
              automation: contact centers produce real customer pain every day.
              The revenue engine should help the team connect those pains to
              the accounts most likely to care now.
            </p>
            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              {[
                "Which accounts matter",
                "Why they matter now",
                "What pain is likely showing up in their customer conversations",
                "Who should act",
                "What action should happen next",
                "What the system should learn from the result",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-line bg-white p-4 text-sm font-medium leading-6 text-ink shadow-memo"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-lg leading-8 text-ink">
              The goal is not more RevOps automation. The goal is a system where
              every signal, call, win, loss, and account movement makes the next
              GTM decision better.
            </p>
          </section>

          <section id="plan" className="scroll-mt-8">
            <SectionHeader label="First 30 days" title="The plan" />
            <div className="grid gap-4">
              {weeks.map((week) => (
                <article
                  key={week.week}
                  className="rounded-lg border border-line bg-white p-5 shadow-memo sm:p-6"
                >
                  <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                        {week.week}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">
                        {week.title}
                      </h3>
                    </div>
                    <p className="max-w-[310px] text-sm leading-6 text-muted">
                      <span className="font-semibold text-ink">Goal:</span>{" "}
                      {week.goal}
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-[1fr_260px]">
                    <div>
                      <p className="mb-3 text-sm font-semibold text-ink">
                        Actions
                      </p>
                      <CheckList items={week.actions} />
                    </div>
                    <div className="rounded-md border border-line bg-soft p-4">
                      <p className="text-sm leading-6 text-muted">
                        <span className="font-semibold text-ink">Output:</span>{" "}
                        {week.output}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="The system I'd try to build" />
            <div className="rounded-lg border border-line bg-white p-5 shadow-memo sm:p-6">
              <ol className="grid gap-3 sm:grid-cols-5">
                {loopSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="min-h-[170px] rounded-md border border-line bg-paper p-4"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      Step {index + 1}
                    </span>
                    <p className="mt-3 text-sm font-medium leading-6 text-ink">
                      {step.title}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-muted">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-line pt-5 text-lg leading-8 text-ink">
                A good revenue engine should not just report what happened. It
                should help the team decide what to do next.
              </p>
            </div>
          </section>

          <section>
            <SectionHeader title="How I'd measure it" />
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((group) => (
                <article
                  key={group.title}
                  className="rounded-lg border border-line bg-white p-5 shadow-memo"
                >
                  <h3 className="mb-4 text-base font-semibold text-ink">
                    {group.title}
                  </h3>
                  <CheckList items={group.items} />
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="Why I can help" />
            <div className="space-y-4 text-lg leading-8 text-muted">
              <p>I have been building pieces of this already.</p>
              <p>
                With SignalForce, I built around buying signals, account
                scoring, and outbound workflows. At Circuit AI, I worked across
                product, demos, customer discovery, GTM workflows, and AI
                systems. At AWS, I worked on applied AI and RAG systems that
                connected technical architecture to business outcomes.
              </p>
              <p>
                Cresta's GTM Engineer role feels like the same kind of problem:
                technical enough to require real engineering, close enough to
                revenue to require judgment, and early enough to reward speed.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-line bg-ink p-6 text-white shadow-memo sm:p-8">
            <p className="text-2xl font-semibold tracking-tight">
              If this is even directionally right, I'd love to talk.
            </p>
            <CopyLinkButton />
          </section>
        </div>

        <footer className="py-10 text-center text-sm text-muted">
          Sami Rahman · GTM engineering, AI systems, and revenue infrastructure
        </footer>
      </div>
    </main>
  );
}
