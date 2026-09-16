import React from 'react';
import { Match } from '../types';
import { ClubLogo } from '../components/ClubLogo';
import { LogOut, Calendar } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';

interface ScoutDashboardProps {
  matches: Match[];
  onSelectMatch: (matchId: string) => void;
  onLogout: () => void;
}

export const ScoutDashboard: React.FC<ScoutDashboardProps> = ({ matches, onSelectMatch, onLogout }) => {
  return (
    <div className="min-h-screen bg-[#090D14] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-900/80 backdrop-blur-md px-4 py-3 flex items-center justify-between">
        <BrandLogo size="md" />
        <div className="flex items-center gap-4">
          <span className="text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider hidden sm:block">
            Opérateur Scout
          </span>
          <button
            onClick={onLogout}
            className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition"
            title="Déconnexion"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 sm:p-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black mb-2">Matchs Assignés</h1>
          <p className="text-slate-400 text-sm">Sélectionnez un match pour démarrer la saisie en direct.</p>
        </div>

        <div className="grid gap-4">
          {matches.map(match => (
            <div
              key={match.id}
              onClick={() => onSelectMatch(match.id)}
              className="bg-slate-900 border border-white/5 hover:border-emerald-500/50 rounded-2xl p-4 sm:p-6 cursor-pointer transition-all hover:shadow-lg hover:shadow-emerald-500/5 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                  {match.leagueName}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {match.status}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 w-5/12">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${match.homeTeam.badgeBg} flex items-center justify-center shrink-0`}>
                    <ClubLogo code={match.homeTeam.code} name={match.homeTeam.name} />
                  </div>
                  <span className="font-bold text-sm sm:text-lg line-clamp-1">{match.homeTeam.name}</span>
                </div>

                <div className="w-2/12 flex justify-center">
                  <span className="text-slate-600 font-bold text-sm">VS</span>
                </div>

                <div className="flex items-center justify-end gap-3 w-5/12 text-right">
                  <span className="font-bold text-sm sm:text-lg line-clamp-1">{match.awayTeam.name}</span>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${match.awayTeam.badgeBg} flex items-center justify-center shrink-0`}>
                    <ClubLogo code={match.awayTeam.code} name={match.awayTeam.name} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
