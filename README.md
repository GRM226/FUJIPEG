# FUJIPEG — _Collaborative and beautiful Fujifilm recipes app._

FUJIPEG is an open-source, community-driven web platform for browsing, sharing, and managing analog film simulations for Fujifilm cameras.
Built as a modern alternative to Fuji X Weekly, the site aims to offer:

- a clean recipe browser,
- a versioning and forking system inspired by GitHub,
- an AI-powered recommendation engine (text-based search and image analysis),
- multi-format export support for Lightroom, Capture One, and in-app use.

> ⚠️ This project is currently in early development. Contributions and feedback are welcome.

---

## Features

- 📷 **Recipe browser** — browse and search community-submitted Fujifilm film simulation recipes
- 🧬 **Versioning & forks** — track changes over time and fork any recipe as a new base
- 🤝 **Suggestions** — submit improvement suggestions to any recipe owner
- 🤖 **AI recommendation** — find recipes by text description or by uploading a photo
- 📤 **Multi-format export** — export recipes as `.xmp` (Lightroom), `.costyle` (Capture One), or in-app readable format
- 🔓 **No paywall** — all recipes are freely accessible without an account

---

## Tech stack

| Layer | Technology |
| --- | --- |
| Front-end & Back-end | [Next.js](https://nextjs.org/docs) |
| Database | [PostgreSQL](https://www.postgresql.org/docs/) |
| ORM | [Prisma](https://www.prisma.io/docs) _(planned)_ |
| Authentication | [NextAuth.js](https://next-auth.js.org) _(planned)_ |
| AI | [OpenAI API](https://platform.openai.com/docs) _(planned)_ |
| Deployment | [Vercel](https://vercel.com) _(planned)_ |

---

## Roadmap

### v0.1 — Foundation

- [ ] Project setup (Next.js + PostgreSQL + Prisma)
- [ ] Database schema (recipes, users, parameters)
- [ ] Basic recipe listing page
- [ ] Recipe detail page

### v0.2 — Community

- [ ] User authentication (NextAuth.js)
- [ ] Recipe submission form
- [ ] Recipe versioning
- [ ] Suggestions system
- [ ] Forks

### v0.3 — AI & Export

- [ ] Text-based AI recipe search
- [ ] Image analysis & recipe recommendation
- [ ] Export to `.xmp` (Lightroom)
- [ ] Export to `.costyle` (Capture One)

### v0.4 — Advanced _(exploratory)_

- [ ] Automatic camera configuration via USB / PTP-MTP protocol.
