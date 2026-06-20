import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { RefreshCw, X } from 'lucide-react';
import { useUpdateDetection } from './hooks/useUpdateDetection';
import { Dashboard } from './pages/Dashboard';
import { Onboarding } from './components/Onboarding';
import { SubjectDetail } from './pages/SubjectDetail';
import { QuizSession } from './pages/QuizSession';
import { RevisionSheet } from './pages/RevisionSheet';
import { SubjectsList } from './pages/SubjectsList';
import { Settings } from './pages/Settings';
import { ComponentShowcase } from './pages/Showcase';
import { SubjectBook } from './pages/SubjectBook';
import { Legal } from './pages/Legal';
import { Login } from './pages/Login';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { LevelUpModal } from './components/gamification/LevelUpModal';
import { BadgeUnlockedModal } from './components/gamification/BadgeUnlockedModal';
import { ProtectedRoute } from './components/ProtectedRoute';
import { STORAGE_KEYS } from './constants';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [showOnboarding, setShowOnboarding] = useState(!localStorage.getItem(STORAGE_KEYS.ONBOARDING));

  useEffect(() => {
    const handleComplete = () => setShowOnboarding(false);
    window.addEventListener('onboardingCompleted', handleComplete);
    return () => window.removeEventListener('onboardingCompleted', handleComplete);
  }, []);

  // Hide main nav on Quiz/Sheet modes for immersion
  const isImmersive = location.pathname.includes('/quiz/') || location.pathname.includes('/sheet/') || location.pathname.includes('/showcase') || location.pathname.includes('/legal') || location.pathname.includes('/book/') || location.pathname === '/login' || location.pathname === '/profile';

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {showOnboarding && <Onboarding />}
      {!isImmersive && <Header />}
      <main className={clsx("container mx-auto max-w-lg md:max-w-4xl min-h-[calc(100vh-64px)]", !isImmersive && "pb-16 sm:pb-0")}>
        {children}
      </main>
      {!isImmersive && <BottomNav />}
      <LevelUpModal />
      <BadgeUnlockedModal />
      <GlobalSwUpdateBanner />
    </div>
  );
};

/** Bandeau flottant global pour la mise à jour du Service Worker */
const GlobalSwUpdateBanner: React.FC = () => {
  const { swUpdateAvailable, applySwUpdate } = useUpdateDetection();
  const [dismissed, setDismissed] = useState(false);

  if (!swUpdateAvailable || dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 80 }}
        className="fixed bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm"
      >
        <div className="flex items-center gap-3 p-4 bg-surface border border-primary/50 rounded-2xl shadow-2xl shadow-primary/20">
          <RefreshCw className="w-5 h-5 text-primary shrink-0 animate-spin" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-foreground">Mise à jour disponible !</p>
            <p className="text-xs text-muted truncate">Recharge pour appliquer la nouvelle version.</p>
          </div>
          <button
            onClick={applySwUpdate}
            className="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-xl hover:brightness-110 transition shrink-0"
          >
            Mettre à jour
          </button>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Ignorer"
            className="text-muted hover:text-foreground transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Login />} />
          
          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/subjects" element={<ProtectedRoute><SubjectsList /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          <Route path="/subject/:id" element={<ProtectedRoute><SubjectDetail /></ProtectedRoute>} />
          <Route path="/book/:subjectId" element={<ProtectedRoute><SubjectBook /></ProtectedRoute>} />
          <Route path="/quiz/:topicId" element={<ProtectedRoute><QuizSession /></ProtectedRoute>} />
          <Route path="/sheet/:topicId" element={<ProtectedRoute><RevisionSheet /></ProtectedRoute>} />
          <Route path="/showcase" element={<ProtectedRoute><ComponentShowcase /></ProtectedRoute>} />
          <Route path="/legal" element={<ProtectedRoute><Legal /></ProtectedRoute>} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;