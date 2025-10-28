import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient + vignette overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_60%_at_50%_40%,rgba(124,58,237,0.18),transparent_60%)]" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Exploring the edge of web experiences
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Immersive, interactive websites that feel alive
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            We craft high-performance sites with cinematic 3D, crisp motion, and a meticulous eye for detail. Built for brands who want to stand out.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              See our work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
