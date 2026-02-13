import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const bgMusic = document.getElementById('bgMusic') as HTMLAudioElement;
    
    if (bgMusic) {
      const playAudio = async () => {
        bgMusic.volume = 0.6;
        try {
          await bgMusic.play();
          console.log('Background music playing...');
        } catch (error) {
          // Autoplay blocked - will play on first user interaction
          console.log('Autoplay blocked, waiting for user interaction...');
          document.addEventListener('click', () => {
            bgMusic.play().then(() => console.log('Music started on user click'));
          }, { once: true });
        }
      };
      
      playAudio();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
