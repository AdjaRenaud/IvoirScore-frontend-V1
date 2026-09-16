import React, { useState } from 'react';
import { Match, Team } from '../types';
import { ClubLogo } from '../components/ClubLogo';
import { PlayerSelectionModal } from './PlayerSelectionModal';
import { Play, ArrowLeft } from 'lucide-react';

interface LiveScoutingBoardProps {
  match: Match;
  onExit: () => void;
}

export const LiveScoutingBoard: React.FC<LiveScoutingBoardProps> = ({ match, onExit }) => {
  const [matchStarted, setMatchStarted] = useState(false);
  const [activeModal, setActiveModal] = useState<{ team: Team, action: string } | null>(null);

  // Local state to simulate score updates
  const [homeScore, setHomeScore] = useState(Number(match.homeScore) || 0);
  const [awayScore, setAwayScore] = useState(Number(match.awayScore) || 0);

  const handleAction = (team: Team, action: string) => {
    setActiveModal({ team, action });
  };

  const handlePlayerSelected = (playerNumber: string) => {
    if (activeModal) {
      console.log(`Action: ${activeModal.action} par ${activeModal.team.name} (Joueur #${playerNumber})`);

      // Update local score for demonstration
      if (activeModal.action === '+1' || activeModal.action === '+2' || activeModal.action === '+3') {
        const points = parseInt(activeModal.action.replace('+', ''), 10);
        if (activeModal.team.id === match.homeTeam.id) {
          setHomeScore(prev => prev + points);
        } else {
          setAwayScore(prev => prev + points);
        }
      }
    }
    setActiveModal(null);
  };

  const renderTeamBoard = (team: Team, score: number, isHome: boolean) => (
    <div className={`flex flex-col h-full ${isHome ? 'border-r border-white/10' : ''}`}>
      {/* Team Header */}
      <div className="flex flex-col items-center p-6 bg-slate-900 border-b border-white/5">
        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${team.badgeBg} flex items-center justify-center shadow-lg mb-4`}>
          <ClubLogo code={team.code} name={team.name} />
        </div>
        <h2 className="text-xl font-black text-white">{team.name}</h2>
        <div className="text-6xl font-mono font-black mt-2 text-white">{score}</div>
      </div>

      {/* Action Buttons */}
      <div className={`flex-1 p-4 grid grid-cols-1 gap-4 ${!matchStarted ? 'opacity-50 pointer-events-none' : ''}`}>
        <div className="grid grid-cols-3 gap-3">
          <button onClick={() => handleAction(team, '+1')} className="py-6 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-black text-2xl shadow-lg transition-transform active:scale-95">+1</button>
          <button onClick={() => handleAction(team, '+2')} className="py-6 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-black text-2xl shadow-lg transition-transform active:scale-95">+2</button>
          <button onClick={() => handleAction(team, '+3')} className="py-6 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-black text-2xl shadow-lg transition-transform active:scale-95">+3</button>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-auto mb-4">
          <button onClick={() => handleAction(team, 'Faute')} className="py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-red-400 font-bold border border-red-500/20">Faute</button>
          <button onClick={() => handleAction(team, 'Rebond')} className="py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-400 font-bold border border-blue-500/20">Reb</button>
          <button onClick={() => handleAction(team, 'Passe D')} className="py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold border border-emerald-500/20">Passe D</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col z-50 overflow-hidden">
      {/* Header */}
      <div className="h-16 border-b border-white/10 bg-slate-900 flex items-center justify-between px-4 shrink-0">
        <button onClick={onExit} className="flex items-center gap-2 text-slate-400 hover:text-white transition">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-bold text-sm">Quitter</span>
        </button>
        <div className="font-mono font-bold text-slate-300">
          Q1 • 10:00
        </div>
        <div className="w-20" /> {/* Spacer */}
      </div>

      {/* Main Split Board */}
      <div className="flex-1 grid grid-cols-2 relative">
        {renderTeamBoard(match.homeTeam, homeScore, true)}
        {renderTeamBoard(match.awayTeam, awayScore, false)}

        {/* Start Button Overlay */}
        {!matchStarted && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm z-20">
            <button
              onClick={() => setMatchStarted(true)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-2xl py-6 px-12 rounded-full shadow-[0_0_40px_rgba(5,150,105,0.4)] flex items-center gap-4 transition-transform hover:scale-105 active:scale-95"
            >
              <Play className="w-8 h-8 fill-current" />
              COMMENCER LE MATCH
            </button>
          </div>
        )}
      </div>

      {/* Player Selection Modal */}
      {activeModal && (
        <PlayerSelectionModal
          team={activeModal.team}
          actionType={activeModal.action}
          onSelectPlayer={handlePlayerSelected}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
};
