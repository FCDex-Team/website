import { createRoot } from "react-dom/client";

import "@fontsource/bebas-neue";

import App from "@/App";
import ErrorBoundary from "@/components/ErrorBoundary";
import "@/index.css";
import { ensureParticlesEngine } from "@/lib/particles";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

void ensureParticlesEngine();

createRoot(rootElement).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
