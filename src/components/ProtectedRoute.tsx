import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireRealUser?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireRealUser = false }) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const user = useAuthStore(state => state.user);
  const location = useLocation();

  // If not authenticated at all, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If a real user is required (e.g., for cloud sync) and current user is guest, redirect to login
  if (requireRealUser && user?.isGuest) {
    return <Navigate to="/login" state={{ from: location, message: 'Veuillez créer un compte pour accéder à cette fonctionnalité.' }} replace />;
  }

  return <>{children}</>;
};
