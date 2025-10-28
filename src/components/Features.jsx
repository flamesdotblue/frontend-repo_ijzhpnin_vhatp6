import { Rocket, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Performance-first',
    desc: 'Optimized rendering, code-splitting, and asset pipelines so your site loads fast everywhere.',
  },
  {
    icon: Shield,
    title: 'Robust & reliable',
    desc: 'Battle-tested architecture with security best practices to keep your experience stable and safe.',
  },
  {
    icon: Sparkles,
    title: 'Polished interactions',
    desc: 'Micro-animations and fluid motion that elevate brand perception without sacrificing usability.',
  },
];

export default function Features() {
  return (
    <section id="work" className="relative z-10 bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Design with depth, built with precision
          </h2>
          <p className="mt-3 text-white/70">
            From concept to launch, we blend art direction with engineering to deliver truly memorable websites.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-white/20"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="mt-4 text-sm text-white/60">
                Real-time collaboration, responsive layouts, and accessibility baked in.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
