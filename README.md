# AI Spark Homepage

AI Spark is the official website for Auto-mate Consultants, showcasing state-of-the-art AI solutions, consulting services, and a portfolio of completed projects.

## Live Demo

https://your-live-domain.com  <!-- Replace with your actual URL -->

## Features

- Interactive AI chatbot for idea generation
- Responsive design with Tailwind CSS
- Animations powered by Framer Motion
- Data fetching and state management with React Query
- Content management via Sanity CMS
- Authentication and storage with Supabase

## Technologies Used

- Vite
- TypeScript
- React
- shadcn-ui (Radix UI + Tailwind)
- Tailwind CSS
- Framer Motion
- React Query (@tanstack/react-query)
- Sanity
- Supabase

## Getting Started

### Prerequisites

- Node.js (>=16)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ai-spark-homepage.git
cd ai-spark-homepage

# Install dependencies
npm install
# or
# yarn install
```

### Development

```bash
# Start the dev server
npm run dev
```

Open http://localhost:5173 in your browser to view the site.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (runs TypeScript compile + Vite build)
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint checks

## Project Structure

```
├── public/               # Static assets
├── src/
│   ├── components/       # UI components
│   ├── hooks/            # Custom hooks
│   ├── integrations/     # Supabase, Sanity integration
│   ├── lib/              # Utility functions
│   ├── pages/            # Route components
│   ├── App.tsx           # App entry component
│   └── main.tsx          # Main entry point
├── scripts/              # Build utilities (e.g., image optimizer)
├── package.json          # NPM scripts and dependencies
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Deployment

Build the project and deploy the contents of the `dist/` folder to a static hosting service of your choice.

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
