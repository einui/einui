## Contributing to Ein UI ✅

Thank you for your interest in contributing to Ein UI — your help makes this project better!

Please read this document to learn how to contribute, what the contribution workflow looks like, and how to set up your development environment.

### Code of conduct

This project follows a **Code of Conduct** to help keep the community safe and welcoming. By participating, you agree to the terms in `CODE_OF_CONDUCT.md`.

### Ways to contribute

- Report bugs or suggest features by opening an issue (use the templates provided).
- Fix existing issues or implement new features via Pull Requests.
- Improve documentation and examples in `app/docs`.
- Add or improve tests and tooling (linting, type coverage, CI).

### Getting started (quick)

1. Fork the repository and clone your fork.
2. Install dependencies: `pnpm install` (or `npm install` / `yarn install`).
3. Create a new branch for your changes:

```bash
git checkout -b feat/your-feature
```

4. Run the dev server: `pnpm dev` (app runs at http://localhost:3000).
5. Run lint: `pnpm lint` and run build: `pnpm build` to ensure nothing breaks.

### Contribution workflow

1. If your change fixes a bug or adds a feature, open an issue first to discuss scope and design.
2. Work on your change in a branch with a descriptive name (e.g., `fix/navbar-a11y`, `feat/button-variant`).
3. Keep commits small and focused. Rebase/squash commits before merging when appropriate.
4. Open a Pull Request and include:
   - A clear description of the change
   - Screenshots or GIFs for UI changes
   - Which issue it closes (e.g., `Closes #123`)
   - Any migration steps or breaking changes

### PR checklist

- [ ] The PR description clearly explains the change and motivation
- [ ] Any relevant tests were added or updated
- [ ] Linting (`pnpm lint`) passes locally
- [ ] Types build (`pnpm build`) without errors
- [ ] Documentation updated (if applicable)
- [ ] All CI checks pass

### Tests & quality

This repo uses TypeScript and ESLint. Please add tests when fixing bugs or adding features that affect behavior. If you are unsure where to add tests, ask on the issue thread.

### Style & accessibility

Follow existing code style and patterns used in the repo. Accessibility is important—prefer accessible markup and include keyboard navigation where relevant.

### Need help?

If you're unsure about something, create an issue describing what you'd like to do and we'll help you get started.

Thanks again — we appreciate all contributions! 🎉
