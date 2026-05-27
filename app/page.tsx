import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative flex h-[60vh] items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1533256619225-8d93f78260c0?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
          className="absolute h-full w-full rounded-2xl p-1 object-cover"
        />
        <div className="relative z-10 px-7 p-5">
          <h1
            className="font-bold leading-none text-white"
            style={{ fontSize: "clamp(72px, 12vw, 160px)", letterSpacing: "-0.05em" }}
          >
            Fujipeg
          </h1>
        </div>
        <div className="relative z-10 px-7 p-5">
          <h2
            className="text-right font-light leading-10 text-white"
            style={{ fontSize: "clamp(15px, 4vw, 40px)", letterSpacing: "-0.05em" }}
          >
            Collaborative and beautiful Fujifilm recipes database.
          </h2>
        </div>
      </section>

      {/* ── BENTO GRID ───────────────────────────────────────────────────── */}
      <section
        className="grid grid-cols-1 gap-1 p-1 md:grid-cols-4"
        style={{ gridAutoRows: "240px" }}
      >
        {/* Browse & Search — 2×2 dark featured */}
        <div className="relative overflow-hidden rounded-2xl bg-neutral-900 md:col-span-2 md:row-span-2">
          <div
            className="absolute inset-0 opacity-40"
            style={{ backgroundImage: "radial-gradient(ellipse at 25% 85%, #525252, transparent)" }}
          />
          <div className="relative flex h-full flex-col justify-between p-7">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Search
            </span>
            <div className="flex flex-col gap-5">
              <div>
                <h3
                  className="text-3xl font-bold text-white"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  Explore & search
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-400">
                  Filter by film simulation, camera model, color palette and more.
                </p>
              </div>
              <form
                action="/explore"
                className="flex items-center gap-2 rounded-xl bg-white/10 p-1.5 ring-1 ring-white/10 transition-all focus-within:ring-white/30"
              >
                <svg className="ml-2 h-4 w-4 shrink-0 text-neutral-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input
                  name="q"
                  type="text"
                  placeholder="Recipe name, film simulation, author…"
                  className="flex-1 bg-transparent px-2 text-sm text-white placeholder-neutral-600 outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-neutral-900 transition hover:bg-neutral-200"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Discover — image */}
        <Link href="/explore" className="group relative overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1775563655673-c28ac3802166?q=80&w=800&auto=format&fit=crop"
            alt="Discover"
            className="absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Discover
            </span>
            <div>
              <h3 className="text-xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
                Curated picks
              </h3>
              <p className="mt-0.5 text-sm text-neutral-400">
                Handpicked community favorites.
              </p>
            </div>
          </div>
        </Link>

        {/* Submit a recipe — amber */}
        <Link
          href="/submit"
          className="group relative overflow-hidden rounded-2xl bg-amber-100 flex flex-col justify-between p-6"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600/60">
            Contribute
          </span>
          <div>
            <h3 className="text-xl font-bold text-neutral-900" style={{ letterSpacing: "-0.02em" }}>
              Share your recipe
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Post your own film simulation settings.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 transition-all duration-200 group-hover:gap-2.5">
              Get started
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </div>
        </Link>

        {/* Film simulations */}
        <div className="relative overflow-hidden rounded-2xl bg-neutral-100 flex flex-col justify-between p-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Simulations
          </span>
          <div>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {[
                "#C8845A", "#5A7EC8", "#4AADA8",
                "#6BA86B", "#D94F4F", "#9E9386",
                "#B0A99A", "#3A3A3A", "#C4A882",
              ].map((hex) => (
                <span
                  key={hex}
                  className="h-5 w-5 rounded-full ring-1 ring-black/10"
                  style={{ backgroundColor: hex }}
                />
              ))}
            </div>
            <h3 className="text-xl font-bold text-neutral-900" style={{ letterSpacing: "-0.02em" }}>
              9 simulations
            </h3>
            <p className="text-sm text-neutral-400">All official Fujifilm recipes.</p>
          </div>
        </div>

        {/* Community — dark */}
        <div className="relative overflow-hidden rounded-2xl bg-neutral-900 flex flex-col justify-between p-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-600">
            Community
          </span>
          <div>
            <h3 className="text-xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
              Open &amp; collaborative
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Built by Fujifilm enthusiasts, for Fujifilm enthusiasts.
            </p>
          </div>
        </div>

        {/* Stats — amber */}
        <div className="relative overflow-hidden rounded-2xl bg-amber-100 flex flex-col justify-between p-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600/60">
            Database
          </span>
          <div>
            <p
              className="text-6xl font-bold text-neutral-900"
              style={{ letterSpacing: "-0.04em" }}
            >
              500+
            </p>
            <p className="mt-1 text-sm text-neutral-500">community recipes</p>
          </div>
        </div>

        {/* Open source — 2×1 */}
        <a
          href="https://github.com/TON-PSEUDO/fujipeg"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl bg-neutral-200 flex items-center gap-6 px-8 md:col-span-2"
        >
          <svg className="h-10 w-10 shrink-0 text-neutral-900" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
          </svg>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-neutral-900" style={{ letterSpacing: "-0.02em" }}>
              100% open source
            </h3>
            <p className="text-sm text-neutral-500">Fork it, star it, contribute on GitHub.</p>
          </div>
          <svg
            className="h-5 w-5 text-neutral-400 transition-transform duration-200 group-hover:translate-x-1"
            fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>

        {/* Camera compatibility */}
        <div className="relative overflow-hidden rounded-2xl bg-neutral-200 flex flex-col justify-between p-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Cameras
          </span>
          <div>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {["X-T5", "X100VI", "X-Pro3", "GFX"].map((cam) => (
                <span
                  key={cam}
                  className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-600"
                >
                  {cam}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-neutral-900" style={{ letterSpacing: "-0.02em" }}>
              X-series ready
            </h3>
            <p className="text-sm text-neutral-400">Filter recipes by your exact camera model.</p>
          </div>
        </div>
      </section>

      {/* ── LATEST RECIPES ───────────────────────────────────────────────── */}
      <section className="border-b border-neutral-200 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-2xl font-semibold text-neutral-900">Latest recipes</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "https://images.unsplash.com/photo-1533256619225-8d93f78260c0?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1775563655673-c28ac3802166?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
            ].map((src, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <img src={src} alt="Recipe" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Kodak Gold 400</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-neutral-400">
                    <span>@grm</span>
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600">
                      Classic Chrome
                    </span>
                    <span>·</span>
                    <span>06/01/2025</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
