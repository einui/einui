# Ein UI — Liquid Glass Components (Shadcn Registry)

[![Demo](https://img.shields.io/badge/demo-Demo%20Site-brightgreen)](https://ui.eindev.ir)
[![Registry](https://img.shields.io/badge/registry-JSON-brightgreen?style=flat)](/r/registry.json)
[![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat)](#key-features)
[![License](https://img.shields.io/badge/license-ISC-blue?style=flat)](/LICENCE)
[![TypeScript](https://img.shields.io/badge/TypeScript-✔-blue?style=flat)](https://www.typescriptlang.org/)
[![Next.js%2016](https://img.shields.io/badge/Next.js-v16-black?style=flat)](https://nextjs.org/docs)
[![Tailwind%20CSS](https://img.shields.io/badge/Tailwind%20v4-%20%20-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<img src="public/screenshot.png" alt="Next.js 16 Starter"  style="display: block; margin: 0 auto; border-radius: 15px; max-width: 80%;" />
<br/>

Welcome! Ein UI is a collection of beautiful, ready-made "liquid glass" components that you can preview, copy, and use in your website or app. This guide explains how to preview the components, get code snippets, and add a component to your project — no developer knowledge required.

✅ Great for: designers and frontend developers who want shareable, copy-and-paste UI components
with consistent design patterns and built-in accessibility.

---

## Key features

- Collection of handcrafted, accessible components built on top of Radix UI primitives and
  Tailwind CSS v4 (TypeScript + React 19).
- Components are distributed using the shadcn registry format — components are easy to install
  into other projects using the `shadcn` CLI.
- Built-in documentation site and component previews (Next.js 16 + app router)
- Example page templates / blocks (e.g., Admin Panel) to showcase layout patterns.
- Zod validation examples and server/client component patterns for modern full-stack apps.

---

## Quick links

- **Preview docs**: [Live preview](https://ui.eindev.ir)
- **Registry JSON**: [Registry JSON](/r/registry.json)
- **Try components**: For details, see `app/docs/components/*`

---

## Get started (local development)

Requirements: Node.js 20+ (recommended), pnpm (optional but used in this repo), or npm/yarn.

1. Clone the repo

```bash
git clone https://github.com/ehsanghaffar/ein-ui.git
cd ein-ui-shadcn-register
```

2 Install dependencies

```bash
# using pnpm
pnpm install

# or using npm
npm install

# or yarn
yarn install
```

3 Run development server

```bash
pnpm dev
# or npm run dev
# App runs on http://localhost:3000
```

## Contributing

Contributions welcome! Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) and follow the issue and PR templates when submitting work.

- Run `pnpm lint` to check code style
- New components should include comprehensive examples under `app/docs/components/*` and should declare any required `dependencies` in `registry.json`

Where to find guidance:

- Docs pages in the repo (`https://ui.eindev.ir/docs`) include live previews and code snippets.
- Use `shadcn` registry format to make your component discoverable via the CLI.

Please also see `CODE_OF_CONDUCT.md` and `SECURITY.md` for reporting guidelines.

---

## Support and help

- If the repository is hosted on GitHub, open an issue on the repo or create a Pull Request to propose changes
- For general usage of shadcn CLI ui.shadcn.com

---

## Maintainers

- Maintained by Ehsan Ghaffar.
- Contributions are welcome — please open PRs and issues on the repo.

---

Happy building! 💡
