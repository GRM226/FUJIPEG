import Link from "next/link";

// Données temporaires en dur — plus tard elles viendront de PostgreSQL
const recipes = [
  {
    id: 1,
    name: "Kodak Portra 400",
    simulation: "Classic Negative",
    author: "fujipeg",
    date: "March 12, 2026",
    image: "https://images.unsplash.com/photo-1504700610630-ac6aecd0e003?w=600&q=80",
  },
  {
    id: 2,
    name: "CineStill 800T",
    simulation: "Classic Chrome",
    author: "grm",
    date: "February 28, 2026",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=600&q=80",
  },
  {
    id: 3,
    name: "Ilford HP5 Plus",
    simulation: "Acros",
    author: "tokyofilm",
    date: "February 15, 2026",
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?w=600&q=80",
  },
  {
    id: 4,
    name: "Fuji Superia 400",
    simulation: "Nostalgic Neg.",
    author: "analog_soul",
    date: "January 30, 2026",
    image: "https://images.unsplash.com/photo-1494797262163-102fae527f47?w=600&q=80",
  },
];

const popularRecipes = [
  { name: "Kodak Portra 400", simulation: "Classic Negative", author: "fujipeg", forks: 124 },
  { name: "CineStill 800T", simulation: "Classic Chrome", author: "grm", forks: 98 },
  { name: "Kodak Gold 200", simulation: "Astia", author: "warmtones", forks: 87 },
  { name: "Ilford HP5 Plus", simulation: "Acros", author: "tokyofilm", forks: 76 },
  { name: "Fuji Pro 400H", simulation: "Pro Neg. Hi", author: "pastel.lab", forks: 65 },
  { name: "Kodak Ektar 100", simulation: "Velvia", author: "saturated", forks: 54 },
  { name: "Fuji Superia 400", simulation: "Nostalgic Neg.", author: "analog_soul", forks: 48 },
  { name: "Lomography 800", simulation: "Classic Negative", author: "lofi.grain", forks: 41 },
];

const featuredRecipe = {
  name: "Kodak Portra 400",
  author: "fujipeg",
  simulation: "Classic Negative",
  settings: [
    { param: "Dynamic Range", value: "DR-Auto" },
    { param: "Grain Effect", value: "Weak, Small" },
    { param: "Color Chrome", value: "Strong" },
    { param: "White Balance", value: "Auto, +2R / -4B" },
    { param: "Highlight", value: "-1" },
    { param: "Shadow", value: "+2" },
    { param: "Color", value: "+3" },
    { param: "Sharpness", value: "-2" },
  ],
  image: "https://images.unsplash.com/photo-1504700610630-ac6aecd0e003?w=600&q=80",
};

export default function Home() {
  return (
    <main>
      {/* ───────── HERO ───────── */}
      <section className="border-b border-neutral-800 px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">FUJIPEG</h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-neutral-400">
          Community-driven Fujifilm film simulation recipes.
          <br />
          Browse, fork, and share — no paywall.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/recipes"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            Browse recipes
          </Link>
          <Link
            href="/submit"
            className="rounded-full border border-neutral-700 px-6 py-2.5 text-sm font-medium text-neutral-300 transition hover:border-neutral-500 hover:text-white"
          >
            Submit yours
          </Link>
        </div>
      </section>

      {/* ───────── LATEST RECIPES GRID ───────── */}
      <section className="border-b border-neutral-800 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-2xl font-semibold">Latest recipes</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recipes.map((r) => (
              <Link
                key={r.id}
                href={`/recipes/${r.id}`}
                className="group overflow-hidden rounded-xl border border-neutral-800 transition hover:border-neutral-600"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-neutral-300">{r.name}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-neutral-500">
                    <span className="rounded-full bg-neutral-800 px-2.5 py-0.5 text-xs text-neutral-300">
                      {r.simulation}
                    </span>
                    <span>·</span>
                    <span>{r.date}</span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-600">by {r.author}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/recipes"
              className="text-sm font-medium text-neutral-400 transition hover:text-white"
            >
              View all →
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── FEATURED RECIPE ───────── */}
      <section className="border-b border-neutral-800 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-2xl font-semibold">Featured recipe</h2>

          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl">
              <img
                src={featuredRecipe.image}
                alt={featuredRecipe.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm text-neutral-500">
                Based on <span className="text-neutral-300">{featuredRecipe.simulation}</span>
              </p>
              <h3 className="mt-1 text-3xl font-bold">{featuredRecipe.name}</h3>
              <p className="mt-1 text-sm text-neutral-500">by {featuredRecipe.author}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {featuredRecipe.settings.map((s) => (
                  <div key={s.param} className="rounded-lg bg-neutral-900 px-4 py-3">
                    <p className="text-xs text-neutral-500">{s.param}</p>
                    <p className="mt-0.5 text-sm font-medium">{s.value}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/recipes/1"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-300 transition hover:text-white"
              >
                View full recipe →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── POPULAR RECIPES TABLE ───────── */}
      <section className="border-b border-neutral-800 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-2xl font-semibold">Popular recipes</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-800 text-neutral-500">
                  <th className="pb-3 font-medium">Recipe</th>
                  <th className="pb-3 font-medium">Base simulation</th>
                  <th className="pb-3 font-medium">Author</th>
                  <th className="pb-3 text-right font-medium">Forks</th>
                </tr>
              </thead>
              <tbody>
                {popularRecipes.map((r, i) => (
                  <tr
                    key={i}
                    className="border-b border-neutral-800/50 transition hover:bg-neutral-900"
                  >
                    <td className="py-3 font-medium">{r.name}</td>
                    <td className="py-3 text-neutral-400">{r.simulation}</td>
                    <td className="py-3 text-neutral-400">{r.author}</td>
                    <td className="py-3 text-right text-neutral-400">{r.forks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ───────── NEWSLETTER / COMMUNITY CTA ───────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-semibold">Join the community</h2>
          <p className="mt-3 text-neutral-400">
            Get notified when new recipes drop. No spam — just film simulations.
          </p>
          <div className="mt-6 flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-neutral-700 bg-transparent px-5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-neutral-500"
            />
            <button className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}