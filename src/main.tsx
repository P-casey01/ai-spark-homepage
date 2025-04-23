import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { startMemoryMonitor } from "@/lib/memoryMonitor";

startMemoryMonitor();
createRoot(document.getElementById("root")!).render(<App />);
