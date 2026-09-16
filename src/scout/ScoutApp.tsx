import React, { useState } from 'react';
import { ScoutLogin } from './ScoutLogin';
import { ScoutDashboard } from './ScoutDashboard';
import { LiveScoutingBoard } from './LiveScoutingBoard';
import { INITIAL_MATCHES } from '../data/mockData';
import { Match } from '../types';

interface ScoutAppProps {
  onExitScout: () => void;
}

export const ScoutApp: React.FC<ScoutAppProps> = ({ onExitScout }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);

  // We use the INITIAL_MATCHES from mockData for demo purposes
  const matches = INITIAL_MATCHES;

  if (!isAuthenticated) {
    return <ScoutLogin onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  if (selectedMatchId) {
    const selectedMatch = matches.find(m => m.id === selectedMatchId) as Match;
    return (
      <LiveScoutingBoard
        match={selectedMatch}
        onExit={() => setSelectedMatchId(null)}
      />
    );
  }

  return (
    <ScoutDashboard
      matches={matches}
      onSelectMatch={setSelectedMatchId}
      onLogout={() => {
        setIsAuthenticated(false);
        onExitScout();
      }}
    />
  );
};
