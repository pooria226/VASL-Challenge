# 🎮 VASL Game Challenge - Pooria Mohammadi

This project was created for the VASL challenge.

## 📋 Challenge

**Minesweeper (Mine-Sweeper Game)** - The hardest challenge selected

A classic logic game where you must find mines without detonating them.

## 🛠 Tech Stack

- **React 19** - Main UI library
- **TypeScript** - For type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - For styling
- **ESLint** - For code quality

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # Base UI components (Button, etc.)
│   ├── layout/         # Layout components (Container, etc.)
│   └── minesweeper/    # Minesweeper-specific components (Cell, GameStats, GameStatus)
├── features/           # Feature-based structure
│   ├── game/           # Entry point for the game
│   └── minesweeper/    # Main Minesweeper logic and component
├── hooks/              # Custom React hooks
│   └── useMinesweeper.ts # Game logic hook
├── utils/              # Utility functions
│   └── minesweeper.ts  # Game logic (flood fill, mine placement, etc.)
├── types/              # TypeScript type definitions
├── constants/          # Application constants (difficulty configs, cell colors)
└── styles/             # Additional styles
```

## 🚀 Installation & Run

```bash
# Install dependencies
npm install

# Run project in development mode
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

## 🎮 Game Features

### Core Features

- ✅ **Three Difficulty Levels**: Beginner (9x9, 10 mines), Intermediate (16x16, 40 mines), Expert (16x30, 99 mines)
- ✅ **Flood Fill Algorithm**: Empty cells are automatically revealed
- ✅ **Flag System**: Right-click to flag suspected mines
- ✅ **Timer**: Game time from start to finish
- ✅ **Move Counter**: Counts the number of moves
- ✅ **Mine Counter**: Displays remaining mines count
- ✅ **Win/Loss Detection**: Automatic detection of win and loss conditions
- ✅ **First Click Safety**: The first click is always safe (mines are placed after the first click)

### UI/UX Features

- ✅ **Responsive Design**: Compatible with mobile and desktop
- ✅ **Dark Mode Support**: Dark mode support
- ✅ **Visual Feedback**: Number coloring and smooth animations
- ✅ **Game Status Messages**: Clear messages for win, loss, and instructions
- ✅ **Difficulty Selector**: Ability to change difficulty level (only before starting the game)

## 📝 Assumptions & Decisions

### Design Decisions

1. **First Click Safety**: The first click is always safe. Mines are placed after the first click to provide a better experience.

2. **Flood Fill**: Uses the Flood Fill algorithm to automatically reveal empty cells.

3. **Flag Toggle**: Right-clicking on a flagged cell removes the flag.

4. **Game Over Behavior**: After losing, all mines are displayed.

5. **Difficulty Change**: Changing difficulty is only possible when the game is in idle state (before starting).

### Technical Decisions

- Using **TypeScript** for type safety and cleaner code
- **Feature-based** structure for better code organization
- Using **React Hooks** for state management
- **Tailwind CSS** for fast and responsive styling
- Separating game logic in `utils/minesweeper.ts` for reusability
- **Custom Hook** (`useMinesweeper`) for clean separation of logic and UI
- **React.memo** and **useMemo** for performance optimization
- **Iterative Flood Fill** algorithm (queue-based) for better performance on large grids

## 🔮 Future Improvements

With more time, these features could be added:

1. **Best Score Tracking**: Save best time for each difficulty level (localStorage)
2. **Sound Effects**: Audio effects for clicks, explosions, and wins
3. **Animation Improvements**: Better animations for cell reveals
4. **Custom Difficulty**: Ability to define custom difficulty level
5. **Hints System**: Hint system to help the player
6. **Statistics**: Display statistics from previous games
7. **Keyboard Navigation**: Keyboard support for gameplay
8. **Accessibility**: Improved accessibility (better ARIA labels, keyboard support)
9. **Unit Tests**: Unit tests for game logic
10. **Mobile Optimizations**: Further mobile optimizations (touch gestures)

## 🚀 Performance Optimizations

The implementation includes several performance optimizations:

- **React.memo** for Cell components to prevent unnecessary re-renders
- **useMemo** for expensive computations (mines remaining, cell styles, colors)
- **useCallback** for event handlers to maintain referential equality
- **Iterative Flood Fill** algorithm using a queue instead of recursion for better performance on large grids
- **Component splitting** for better code organization and smaller bundle sizes

## 👤 Author

**Pooria Mohammadi**
