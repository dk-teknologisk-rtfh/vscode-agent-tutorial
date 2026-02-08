# Copilot Instructions: Soc Ops

## Pre-Flight Checklist
Before committing changes, verify:
- [ ] `npm run lint` passes (no unused vars/awaits)
- [ ] `npm run build` succeeds 
- [ ] `npm test` all tests pass

## Overview
Social Bingo (5-in-a-row) for in-person mixers. React 19 + TypeScript + Tailwind v4.

## Architecture
Clean separation with immutable state:
- **[src/utils/](src/utils/)** - Pure business logic, fully tested. **Never mix React APIs here.**
- **[src/hooks/](src/hooks/)** - State management (see [useBingoGame.ts](src/hooks/useBingoGame.ts))
- **[src/components/](src/components/)** - Pure UI receiving props
- **[src/types/](src/types/)** - Shared interfaces

## Key Rules

**State:** Immutable updates via spread: `board.map(sq => sq.id === id ? {...sq, isMarked: !sq.isMarked} : sq)`. localStorage with versioned validation + SSR guards.

**Components:** Named exports, props interfaces, Tailwind only (no CSS modules). Accessibility: `aria-pressed`, `aria-label`.

**Tailwind v4:** Use `@theme` syntax in [src/index.css](src/index.css) for custom colors like `bg-marked`. See [.github/instructions/tailwind-4.instructions.md](.github/instructions/tailwind-4.instructions.md).

**Testing:** Vitest + Testing Library. Utils require comprehensive unit tests (see [bingoLogic.test.ts](src/utils/bingoLogic.test.ts)).

## Domain Knowledge
- 5×5 grid (25 squares), center index **12 = FREE SPACE** (pre-marked)
- Win: 5-in-a-row (h/v/d) via `checkBingo()` in [bingoLogic.ts](src/utils/bingoLogic.ts)
- 24 shuffled questions from [questions.ts](src/data/questions.ts) + 1 free space

## Commands
```bash
npm run dev    # Vite dev server
npm test       # Run Vitest
npm run build  # Production (auto-deploys to GitHub Pages)
```

**Off-Limits:** Do not reference `.lab/` (workshop materials only)
