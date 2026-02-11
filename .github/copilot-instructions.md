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

## Design Guide: Geometric Memphis

**Theme:** Bold 1980s postmodern aesthetic with vibrant colors, geometric shapes, and playful asymmetry.

**Color Palette** (defined in [src/index.css](src/index.css)):
- `--color-accent`: `#ff6b9d` (hot pink) - Primary accent, buttons, highlights
- `--color-marked`: `#00d4ff` (electric cyan) - Marked squares, active states
- `--color-bingo`: `#ffd700` (bright yellow) - Win states, celebrations
- `--color-coral`: `#ff6347` - Secondary accent
- `--color-purple`: `#9d4edd` - Borders, emphasis elements

**Typography:**
- Display font: `Righteous` (Google Fonts) via `font-display` for titles and headings
- Body text: System fonts for readability
- Bold, oversized text (`text-6xl`, `text-7xl`) for impact on landing page

**Visual Style:**
- **Borders:** Thick `border-4` with varied Memphis colors rotating across squares
- **Rotation:** Playful tilts (`rotate-1`, `-rotate-2`) on squares, buttons, containers for asymmetry
- **Patterns:** Custom CSS patterns (`pattern-circles`, `pattern-zigzag`) for marked squares
- **Backgrounds:** Subtle gradients (`bg-gradient-to-br from-yellow-50 via-pink-50 to-cyan-50`)
- **Shadows:** Bold shadows (`shadow-2xl`, `shadow-lg`) for depth

**Component Guidelines:**
- **BingoSquare:** Colorful borders rotate by ID, min-height `80px` for text overflow, FREE SPACE uses dark purple bg with yellow border
- **Buttons:** Chunky style with `border-4`, rotated (`-rotate-1`, `rotate-1`), `font-display` text
- **Cards/Containers:** Rounded corners (`rounded-2xl`, `rounded-3xl`), thick borders, slight rotation
- **Decorations:** Floating geometric shapes (circles, triangles) with transparency for atmosphere

**Accessibility:** Maintain WCAG AA contrast ratios. Dark purple (#9d4edd) on white, white text on purple, avoid bright-on-bright combinations.

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
