<div align="center">

# 🎲 Soc Ops

### Break the ice, make connections, have fun!

**A modern social bingo game designed to transform awkward mixers into engaging experiences.**

[🚀 Quick Start](#quick-start) • [✨ Features](#features) • [🎯 How It Works](#how-it-works) • [🛠️ Tech Stack](#tech-stack)

---

</div>

## 🎪 What is Soc Ops?

Soc Ops is a **Social Bingo** web app that turns networking events and ice-breaker sessions into an interactive game. Instead of staring at name tags, participants actively engage with each other to find people who match the prompts on their bingo card. First to get 5-in-a-row wins! 🏆

Perfect for:
- 🤝 Corporate mixers and team building events
- 🎓 Educational workshops and conferences
- 🎉 Social gatherings and parties
- 💼 Networking events

## ✨ Features

- **📱 Mobile-First Design** - Works seamlessly on any device
- **🎨 Modern UI** - Built with React 19 and Tailwind CSS v4
- **💾 Auto-Save** - Never lose your progress with localStorage persistence
- **🎯 Smart Win Detection** - Automatic detection of horizontal, vertical, and diagonal wins
- **🔀 Randomized Cards** - Each game shuffles questions for unique experiences
- **♿ Accessible** - Full keyboard navigation and screen reader support
- **🚀 Lightning Fast** - Powered by Vite for instant development and blazing-fast production builds

## 🎯 How It Works

1. **Start the Game** - Launch the app and click "Start Game"
2. **Get Your Card** - Receive a randomized 5×5 bingo card with 24 unique prompts + 1 free space
3. **Find Your Matches** - Mingle and find people who match each prompt (e.g., "has a pet", "speaks 3+ languages")
4. **Mark Your Card** - Tap a square when you find someone who matches
5. **Win!** - Complete 5-in-a-row (horizontal, vertical, or diagonal) to win!

## 🚀 Quick Start

### Prerequisites

- [Node.js 22+](https://nodejs.org/) 

### Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The app will hot-reload as you make changes!

### Build for Production

```bash
npm run build
```

The production build deploys automatically to GitHub Pages when you push to `main`.

## 🛠️ Tech Stack

Built with modern tools for a robust, maintainable codebase:

- ⚛️ **React 19** - Latest React with improved performance
- 📘 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS v4** - Cutting-edge styling with `@theme` syntax
- ⚡ **Vite** - Next-generation frontend tooling
- 🧪 **Vitest** - Blazing fast unit testing
- 🧩 **Testing Library** - User-centric component testing

## 🎨 Customization

Want to customize the game for your event? 

- **Questions**: Edit `src/data/questions.ts` to add your own icebreaker prompts
- **Styling**: Modify `src/index.css` to change colors, fonts, and themes using Tailwind v4's `@theme` directive
- **Grid Size**: While 5×5 is standard, the architecture supports different configurations

## 🧪 Testing

```bash
# Run all tests
npm test

# Run linter
npm run lint
```

## 📚 Learn More

- 📖 [Lab Guide](.lab/GUIDE.md) - Workshop materials for building this project
- 🤝 [Contributing](CONTRIBUTING.md) - How to contribute
- 🔒 [Security](SECURITY.md) - Security policies
- 💬 [Support](SUPPORT.md) - Get help

## 📄 License

MIT © Harald Kirschner

---

<div align="center">

**Made with ❤️ for better connections**

</div>
