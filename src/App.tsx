import { BrowserRouter, Route, Routes } from "react-router-dom";

import CollectionPage from "@/pages/CollectionPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TosPage from "@/pages/TosPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-full bg-black text-white antialiased">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections/:slug" element={<CollectionPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/tos" element={<TosPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
