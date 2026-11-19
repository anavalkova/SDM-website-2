import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// Fonts are self-hosted (bundled into dist/) so visitors' IPs are not sent to Google Fonts.
import "@fontsource/golos-text/400.css";
import "@fontsource/golos-text/500.css";
import "@fontsource/golos-text/600.css";
import "@fontsource/golos-text/700.css";
import "@fontsource/ibm-plex-serif/600.css";
import "@fontsource/ibm-plex-serif/700.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
