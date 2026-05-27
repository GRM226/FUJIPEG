"use client";

import { useState, useMemo } from "react";

// ─── Mock data ──────────────────────────────────────────────────────────────

const FILM_SIMULATIONS = [
  "Classic Chrome",
  "Classic Neg.",
  "Velvia",
  "Provia",
  "Astia",
  "Eterna",
  "Nostalgic Neg.",
  "Pro Neg. Hi",
  "Reala Ace",
];

const CAMERA_MODELS = [
  "X-T5",
  "X-T4",
  "X-T3",
  "X100VI",
  "X100V",
  "X-S20",
  "X-Pro3",
  "X-Pro4",
  "GFX100S",
];

const COLOR_PALETTES = [
  { name: "Warm", hex: "#C8845A" },
  { name: "Cool", hex: "#5A7EC8" },
  { name: "Teal", hex: "#4AADA8" },
  { name: "Green", hex: "#6BA86B" },
  { name: "Muted", hex: "#9E9386" },
  { name: "Vivid", hex: "#D94F4F" },
  { name: "Neutral", hex: "#B0A99A" },
  { name: "Dark", hex: "#3A3A3A" },
];

const RECIPES = [
  {
    id: 1,
    name: "Kodak Gold 400",
    author: "grm",
    film: "Classic Chrome",
    cameras: ["X-T5", "X-T4", "X100VI"],
    color: "Warm",
    image:
      "https://images.unsplash.com/photo-1533256619225-8d93f78260c0?q=80&w=800&auto=format&fit=crop",
    date: "2024-01-15",
    likes: 234,
  },
  {
    id: 2,
    name: "Fuji 400H Summer",
    author: "anais_v",
    film: "Astia",
    cameras: ["X100V", "X-Pro3"],
    color: "Cool",
    image:
      "https://images.unsplash.com/photo-1775563655673-c28ac3802166?q=80&w=800&auto=format&fit=crop",
    date: "2024-02-03",
    likes: 187,
  },
  {
    id: 3,
    name: "Tokyo Nights",
    author: "riku_m",
    film: "Eterna",
    cameras: ["X-T5", "GFX100S"],
    color: "Dark",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
    date: "2024-02-18",
    likes: 412,
  },
  {
    id: 4,
    name: "Cinematic Fade",
    author: "lena_p",
    film: "Nostalgic Neg.",
    cameras: ["X-T4", "X-S20"],
    color: "Muted",
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=800&auto=format&fit=crop",
    date: "2024-03-01",
    likes: 305,
  },
  {
    id: 5,
    name: "Velvia Summer Pop",
    author: "oscar_r",
    film: "Velvia",
    cameras: ["X100VI", "X-T3"],
    color: "Vivid",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    date: "2024-03-14",
    likes: 521,
  },
  {
    id: 6,
    name: "Forest Morning",
    author: "mei_t",
    film: "Pro Neg. Hi",
    cameras: ["X-Pro3", "X-T5"],
    color: "Green",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
    date: "2024-03-22",
    likes: 198,
  },
  {
    id: 7,
    name: "Pacific Haze",
    author: "grm",
    film: "Classic Neg.",
    cameras: ["X100V", "X-T4"],
    color: "Teal",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=800&auto=format&fit=crop",
    date: "2024-04-05",
    likes: 289,
  },
  {
    id: 8,
    name: "Reala Street",
    author: "dim_b",
    film: "Reala Ace",
    cameras: ["X-Pro4", "X100VI"],
    color: "Neutral",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
    date: "2024-04-19",
    likes: 143,
  },
  {
    id: 9,
    name: "Provia Clean",
    author: "sophie_l",
    film: "Provia",
    cameras: ["X-T5", "GFX100S", "X-T4"],
    color: "Cool",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop",
    date: "2024-05-01",
    likes: 376,
  },
];

// ─── Chip ────────────────────────────────────────────────────────────────────

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
        active
          ? "bg-neutral-900 text-white"
          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
      }`}
    >
      {label}
    </button>
  );
}

// ─── Recipe card ─────────────────────────────────────────────────────────────

function RecipeCard({ recipe }: { recipe: (typeof RECIPES)[0] }) {
  const colorPalette = COLOR_PALETTES.find((c) => c.name === recipe.color);

  return (
    <article className="group flex flex-col gap-3">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {recipe.film}
          </span>
          <span className="rounded-full bg-black/60 px-3 py-1 text-xs text-neutral-300 backdrop-blur-sm">
            ♥ {recipe.likes}
          </span>
        </div>
      </div>

      <div className="flex items-start gap-2">
        {colorPalette && (
          <span
            className="mt-1 h-3 w-3 shrink-0 rounded-full ring-1 ring-neutral-200"
            style={{ backgroundColor: colorPalette.hex }}
          />
        )}
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold text-neutral-900 leading-tight">
            {recipe.name}
          </h3>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-400">
            <span className="text-neutral-500">@{recipe.author}</span>
            <span>·</span>
            <span>{recipe.cameras[0]}</span>
            {recipe.cameras.length > 1 && (
              <span className="rounded-full bg-neutral-100 px-1.5 py-0.5 text-neutral-400">
                +{recipe.cameras.length - 1}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ExplorePage() {
  const [query, setQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedFilm, setSelectedFilm] = useState<string | null>(null);
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);
  const [usernameFilter, setUsernameFilter] = useState("");

  const activeFilterCount = [
    selectedColor,
    selectedFilm,
    selectedCamera,
    usernameFilter,
  ].filter(Boolean).length;

  // Virgin state: user hasn't typed anything and no filters are active
  const isVirgin = query === "" && activeFilterCount === 0;

  // Filters are always visible in virgin state; otherwise controlled by the toggle
  const showFilters = isVirgin || filtersOpen;

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    // Collapse filters as soon as the user starts typing
    if (e.target.value !== "") setFiltersOpen(false);
  }

  function clearFilters() {
    setSelectedColor(null);
    setSelectedFilm(null);
    setSelectedCamera(null);
    setUsernameFilter("");
  }

  const filtered = useMemo(() => {
    if (isVirgin) return [];
    return RECIPES.filter((r) => {
      const q = query.toLowerCase();
      if (
        q &&
        !r.name.toLowerCase().includes(q) &&
        !r.film.toLowerCase().includes(q) &&
        !r.author.toLowerCase().includes(q)
      )
        return false;
      if (selectedColor && r.color !== selectedColor) return false;
      if (selectedFilm && r.film !== selectedFilm) return false;
      if (selectedCamera && !r.cameras.includes(selectedCamera)) return false;
      if (
        usernameFilter &&
        !r.author.toLowerCase().includes(usernameFilter.toLowerCase())
      )
        return false;
      return true;
    });
  }, [query, selectedColor, selectedFilm, selectedCamera, usernameFilter, isVirgin]);

  return (
    <main className="min-h-screen bg-white px-4 pt-24 pb-20">
      <div className="mx-auto max-w-6xl">
        {/* Page title */}
        <div className="mb-10">
          <h1
            className="font-bold leading-none text-neutral-900"
            style={{
              fontSize: "clamp(48px, 8vw, 100px)",
              letterSpacing: "-0.05em",
            }}
          >
            Explore
          </h1>
          <p className="mt-2 text-neutral-400" style={{ letterSpacing: "-0.02em" }}>
            {isVirgin
              ? "Search or filter to explore recipes"
              : `${filtered.length} recipe${filtered.length !== 1 ? "s" : ""} found`}
          </p>
        </div>

        {/* Search + filter bar */}
        <div className="mb-8">
          {/* Search bar */}
          <div
            className={`flex items-center gap-3 rounded-2xl bg-neutral-100 px-5 py-4 ring-1 transition-all duration-300 ${
              showFilters && !isVirgin
                ? "ring-neutral-300"
                : "ring-neutral-200 hover:ring-neutral-300"
            }`}
          >
            <svg
              className="h-5 w-5 shrink-0 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              value={query}
              onChange={handleQueryChange}
              placeholder="Search by name, film simulation, author…"
              className="flex-1 bg-transparent text-neutral-900 placeholder-neutral-400 outline-none"
              style={{ fontSize: "clamp(15px, 2vw, 18px)" }}
            />

            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-neutral-400 transition hover:text-neutral-900"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}

            <div className="h-5 w-px bg-neutral-200" />

            {/* Filter toggle — hidden in virgin state since filters are always open */}
            {!isVirgin && (
              <button
                onClick={() => setFiltersOpen((v) => !v)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                  filtersOpen || activeFilterCount > 0
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900"
                }`}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
                Filters
                {activeFilterCount > 0 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-neutral-900">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            )}
          </div>

          {/* Filter panel */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              showFilters ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-2 rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Dominant color */}
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Dominant Color
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {COLOR_PALETTES.map((c) => (
                      <button
                        key={c.name}
                        onClick={() =>
                          setSelectedColor(selectedColor === c.name ? null : c.name)
                        }
                        title={c.name}
                        className={`h-7 w-7 rounded-full ring-2 ring-offset-2 ring-offset-neutral-50 transition-transform hover:scale-110 ${
                          selectedColor === c.name
                            ? "scale-110 ring-neutral-900"
                            : "ring-transparent"
                        }`}
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                  {selectedColor && (
                    <p className="text-xs text-neutral-500">{selectedColor}</p>
                  )}
                </div>

                {/* Film simulation */}
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Film Simulation
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {FILM_SIMULATIONS.map((f) => (
                      <Chip
                        key={f}
                        label={f}
                        active={selectedFilm === f}
                        onClick={() => setSelectedFilm(selectedFilm === f ? null : f)}
                      />
                    ))}
                  </div>
                </div>

                {/* Camera model */}
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Camera Model
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {CAMERA_MODELS.map((cam) => (
                      <Chip
                        key={cam}
                        label={cam}
                        active={selectedCamera === cam}
                        onClick={() =>
                          setSelectedCamera(selectedCamera === cam ? null : cam)
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Author
                  </p>
                  <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 ring-1 ring-neutral-200 transition-all focus-within:ring-neutral-400">
                    <span className="text-sm text-neutral-400">@</span>
                    <input
                      type="text"
                      value={usernameFilter}
                      onChange={(e) => setUsernameFilter(e.target.value)}
                      placeholder="username"
                      className="flex-1 bg-transparent text-sm text-neutral-900 placeholder-neutral-400 outline-none"
                    />
                  </div>
                </div>
              </div>

              {activeFilterCount > 0 && (
                <div className="mt-5 border-t border-neutral-200 pt-4">
                  <button
                    onClick={clearFilters}
                    className="text-sm text-neutral-400 transition hover:text-neutral-900"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results */}
        {!isVirgin && (
          filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <p className="text-5xl">🎞</p>
              <p className="mt-4 text-lg font-semibold text-neutral-900">No recipes found</p>
              <p className="mt-1 text-sm text-neutral-400">
                Try a different search or adjust your filters.
              </p>
              <button
                onClick={() => { setQuery(""); clearFilters(); }}
                className="mt-6 rounded-full bg-neutral-100 px-5 py-2 text-sm text-neutral-600 transition hover:bg-neutral-200"
              >
                Reset search
              </button>
            </div>
          ) : (
            <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )
        )}
      </div>
    </main>
  );
}
