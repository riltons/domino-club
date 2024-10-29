import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { UserDashboard } from './components/dashboard/UserDashboard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PlayerRegistration } from './pages/PlayerRegistration';
import { OrganizerRegistration } from './pages/OrganizerRegistration';
import { CommunityRegistration } from './pages/CommunityRegistration';
import { SelectTeams } from './pages/match/SelectTeams';
import { MatchInProgress } from './pages/match/MatchInProgress';
import { MatchResult } from './pages/match/MatchResult';
import { MatchResultsList } from './pages/match/MatchResultsList';
import { CompetitionsPage } from './pages/dashboard/CompetitionsPage';
import { SchedulePage } from './pages/dashboard/SchedulePage';
import { HelpPage } from './pages/dashboard/HelpPage';
import { CommunitiesPage } from './pages/dashboard/CommunitiesPage';
import { NewPlayerPage } from './pages/dashboard/NewPlayerPage';
import { SettingsPage } from './pages/dashboard/SettingsPage';
import { DashboardLayout } from './components/dashboard/DashboardLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/player" element={<PlayerRegistration />} />
        <Route path="/register/organizer" element={<OrganizerRegistration />} />
        <Route path="/register/community" element={<CommunityRegistration />} />
        
        {/* Match Routes */}
        <Route path="/match/teams" element={<SelectTeams />} />
        <Route path="/match/progress" element={<MatchInProgress />} />
        <Route path="/match/result" element={<MatchResult />} />
        <Route path="/match/results" element={<DashboardLayout><MatchResultsList /></DashboardLayout>} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout><UserDashboard /></DashboardLayout>} />
        <Route path="/dashboard/communities" element={<DashboardLayout><CommunitiesPage /></DashboardLayout>} />
        <Route path="/dashboard/competitions" element={<DashboardLayout><CompetitionsPage /></DashboardLayout>} />
        <Route path="/dashboard/schedule" element={<DashboardLayout><SchedulePage /></DashboardLayout>} />
        <Route path="/dashboard/players/new" element={<DashboardLayout><NewPlayerPage /></DashboardLayout>} />
        <Route path="/dashboard/settings" element={<DashboardLayout><SettingsPage /></DashboardLayout>} />
        <Route path="/dashboard/help" element={<DashboardLayout><HelpPage /></DashboardLayout>} />
      </Routes>
    </BrowserRouter>
  );
}