/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, MemberDirectoryItem, VettingSubmission, UserProfile } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { CoreCompetenciesPage } from './pages/CoreCompetenciesPage';
import { ArchitectureDeploymentsPage } from './pages/ArchitectureDeploymentsPage';
import { LiveNexusPage } from './pages/LiveNexusPage';
import { GuildsDeveloperPage } from './pages/GuildsDeveloperPage';
import { TechnicalLeadershipPage } from './pages/TechnicalLeadershipPage';
import { NationalCvPage } from './pages/NationalCvPage';
import { StartupsPage } from './pages/StartupsPage';
import { MembersDirectoryPage } from './pages/MembersDirectoryPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { NeuralMatcherPage } from './pages/NeuralMatcherPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { PolicyResearchPage } from './pages/PolicyResearchPage';
import { AiCoursesPage } from './pages/AiCoursesPage';

import { SEED_YELLOW_PAGES_MEMBERS, SEED_VETTING_APPLICATIONS } from './data/yellowPagesData';

export default function App() {
  // Determine initial page from URL path or hash (e.g. /Maan70939779, /neural-matcher, /register)
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('maan70939779') || hash.includes('maan70939779')) {
        return 'admin-maan';
      }
      if (path.includes('yellow-pages') || hash.includes('yellow-pages')) {
        return 'yellow-pages';
      }
      if (path.includes('policy') || hash.includes('policy')) {
        return 'policy-papers';
      }
      if (path.includes('courses') || hash.includes('courses') || path.includes('academy') || hash.includes('academy')) {
        return 'ai-courses';
      }
      if (path.includes('neural-matcher') || hash.includes('neural-matcher')) {
        return 'neural-matcher';
      }
      if (path.includes('register') || hash.includes('register') || path.includes('auth') || hash.includes('auth')) {
        return 'register';
      }
    }
    return 'home';
  });

  // Active tab inside Registration Page ('signup' | 'signin' | 'sandbox')
  const [registrationTab, setRegistrationTab] = useState<'signup' | 'signin' | 'sandbox'>('signup');

  // Authenticated user state
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('961ai_active_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Persistent Member Directory (Yellow Pages)
  const [members, setMembers] = useState<MemberDirectoryItem[]>(() => {
    try {
      const saved = localStorage.getItem('961ai_yellow_pages_members');
      return saved ? JSON.parse(saved) : SEED_YELLOW_PAGES_MEMBERS;
    } catch {
      return SEED_YELLOW_PAGES_MEMBERS;
    }
  });

  // Persistent Vetting Applications
  const [vettingApps, setVettingApps] = useState<VettingSubmission[]>(() => {
    try {
      const saved = localStorage.getItem('961ai_vetting_applications');
      return saved ? JSON.parse(saved) : SEED_VETTING_APPLICATIONS;
    } catch {
      return SEED_VETTING_APPLICATIONS;
    }
  });

  // Keep URL path in sync with currentPage for direct access like /Maan70939779, /neural-matcher, /register
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (typeof window !== 'undefined') {
      if (page === 'admin-maan') {
        window.history.pushState({}, '', '/Maan70939779');
      } else if (page === 'yellow-pages') {
        window.history.pushState({}, '', '/yellow-pages');
      } else if (page === 'policy-papers') {
        window.history.pushState({}, '', '/policy-papers');
      } else if (page === 'ai-courses') {
        window.history.pushState({}, '', '/ai-courses');
      } else if (page === 'neural-matcher') {
        window.history.pushState({}, '', '/neural-matcher');
      } else if (page === 'register') {
        window.history.pushState({}, '', '/register');
      } else if (page === 'home') {
        window.history.pushState({}, '', '/');
      } else {
        window.history.pushState({}, '', `/#${page}`);
      }
    }
  };

  // Full-page triggers for Matcher and Registration
  const handleOpenMatcher = () => {
    handleNavigate('neural-matcher');
  };

  const handleOpenRegister = (tab: 'signup' | 'signin' | 'sandbox' = 'signup') => {
    setRegistrationTab(tab);
    handleNavigate('register');
  };

  const handleOpenGetAccess = () => {
    setRegistrationTab('sandbox');
    handleNavigate('register');
  };

  const handleOpenAuth = (mode: 'signin' | 'signup' = 'signin') => {
    setRegistrationTab(mode);
    handleNavigate('register');
  };

  // Listen to popstate (e.g. browser back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('maan70939779') || hash.includes('maan70939779')) {
        setCurrentPage('admin-maan');
      } else if (path.includes('yellow-pages') || hash.includes('yellow-pages')) {
        setCurrentPage('yellow-pages');
      } else if (path.includes('policy') || hash.includes('policy')) {
        setCurrentPage('policy-papers');
      } else if (path.includes('courses') || hash.includes('courses') || path.includes('academy') || hash.includes('academy')) {
        setCurrentPage('ai-courses');
      } else if (path.includes('neural-matcher') || hash.includes('neural-matcher')) {
        setCurrentPage('neural-matcher');
      } else if (path.includes('register') || hash.includes('register') || path.includes('auth') || hash.includes('auth')) {
        setCurrentPage('register');
      } else if (path === '/' && !hash) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Save members on change
  const handleUpdateMembers = (newMembers: MemberDirectoryItem[]) => {
    setMembers(newMembers);
    try {
      localStorage.setItem('961ai_yellow_pages_members', JSON.stringify(newMembers));
    } catch (e) {
      console.error('Failed to persist members:', e);
    }
  };

  // Save vetting apps on change
  const handleUpdateVettingApps = (newApps: VettingSubmission[]) => {
    setVettingApps(newApps);
    try {
      localStorage.setItem('961ai_vetting_applications', JSON.stringify(newApps));
    } catch (e) {
      console.error('Failed to persist vetting apps:', e);
    }
  };

  // Sign In / Sign Out handlers
  const handleSignIn = (user: UserProfile) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('961ai_active_user', JSON.stringify(user));
    } catch (e) {
      console.error('Failed to persist active user:', e);
    }
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('961ai_active_user');
      sessionStorage.removeItem('admin_maan_authenticated');
    } catch (e) {
      console.error('Failed to sign out:', e);
    }
  };

  const handleRegisterMemberListing = (newListing: MemberDirectoryItem) => {
    const updated = [newListing, ...members];
    handleUpdateMembers(updated);
  };

  const handleRegisterVettingApp = (newApp: VettingSubmission) => {
    const updated = [newApp, ...vettingApps];
    handleUpdateVettingApps(updated);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-cyan-200 selection:text-cyan-900">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        currentUser={currentUser}
        onNavigate={handleNavigate}
        onOpenMatcher={handleOpenMatcher}
        onOpenGetAccess={handleOpenGetAccess}
        onOpenAuth={handleOpenAuth}
        onSignOut={handleSignOut}
      />

      {/* Main Routed Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenMatcher={handleOpenMatcher}
            onOpenGetAccess={handleOpenGetAccess}
          />
        )}

        {currentPage === 'neural-matcher' && (
          <NeuralMatcherPage
            onNavigate={handleNavigate}
            members={members}
            onOpenRegister={handleOpenRegister}
          />
        )}

        {currentPage === 'register' && (
          <RegistrationPage
            currentUser={currentUser}
            onSignIn={handleSignIn}
            onSignOut={handleSignOut}
            onRegisterMemberListing={handleRegisterMemberListing}
            onRegisterVettingApp={handleRegisterVettingApp}
            onNavigate={handleNavigate}
            initialTab={registrationTab}
          />
        )}

        {currentPage === 'yellow-pages' && (
          <MembersDirectoryPage
            members={members}
            currentUser={currentUser}
            onOpenAuth={handleOpenAuth}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'policy-papers' && (
          <PolicyResearchPage
            onNavigate={handleNavigate}
            onOpenMatcher={handleOpenMatcher}
            onOpenGetAccess={handleOpenGetAccess}
          />
        )}

        {currentPage === 'ai-courses' && (
          <AiCoursesPage
            onNavigate={handleNavigate}
            onOpenMatcher={handleOpenMatcher}
          />
        )}

        {currentPage === 'admin-maan' && (
          <AdminDashboardPage
            members={members}
            vettingApps={vettingApps}
            currentUser={currentUser}
            onUpdateMembers={handleUpdateMembers}
            onUpdateVettingApps={handleUpdateVettingApps}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'competencies' && (
          <CoreCompetenciesPage
            onNavigate={handleNavigate}
            onOpenMatcher={handleOpenMatcher}
            onOpenGetAccess={handleOpenGetAccess}
          />
        )}

        {currentPage === 'architecture' && (
          <ArchitectureDeploymentsPage
            onNavigate={handleNavigate}
            onOpenMatcher={handleOpenMatcher}
          />
        )}

        {currentPage === 'livenexus' && (
          <LiveNexusPage
            onNavigate={handleNavigate}
            onOpenMatcher={handleOpenMatcher}
            onOpenGetAccess={handleOpenGetAccess}
          />
        )}

        {currentPage === 'guilds-dev' && (
          <GuildsDeveloperPage
            onNavigate={handleNavigate}
            onOpenMatcher={handleOpenMatcher}
            onOpenGetAccess={handleOpenGetAccess}
          />
        )}

        {currentPage === 'leadership' && (
          <TechnicalLeadershipPage
            onNavigate={handleNavigate}
            onOpenMatcher={handleOpenMatcher}
          />
        )}

        {currentPage === 'national-cv' && (
          <NationalCvPage
            onNavigate={handleNavigate}
            onOpenMatcher={handleOpenMatcher}
            onOpenGetAccess={handleOpenGetAccess}
          />
        )}

        {currentPage === 'startups' && (
          <StartupsPage
            onNavigate={handleNavigate}
            onOpenMatcher={handleOpenMatcher}
            onOpenGetAccess={handleOpenGetAccess}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenMatcher={handleOpenMatcher}
        onOpenGetAccess={handleOpenGetAccess}
      />
    </div>
  );
}
