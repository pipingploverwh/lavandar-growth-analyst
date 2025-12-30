import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Principles from "./pages/Principles";
import OfferDesign from "./pages/OfferDesign";
import Growth from "./pages/Growth";
import Tools from "./pages/Tools";
import AI from "./pages/AI";
import Templates from "./pages/Templates";
import FAQ from "./pages/FAQ";
import Resources from "./pages/Resources";
import Changelog from "./pages/Changelog";
import NotFound from "./pages/NotFound";
import BreadenPresentation from "./pages/BreadenPresentation";
import TCEAnalyzer from "./pages/TCEAnalyzer";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/principles" element={<Principles />} />
              <Route path="/offer-design" element={<OfferDesign />} />
              <Route path="/growth" element={<Growth />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/ai" element={<AI />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/changelog" element={<Changelog />} />
              <Route path="/tce-analyzer" element={<TCEAnalyzer />} />
              <Route path="/breaden-presentation" element={<BreadenPresentation />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
