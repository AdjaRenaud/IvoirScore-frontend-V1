import React from 'react';
import { Team } from '../types';
import { X } from 'lucide-react';

interface PlayerSelectionModalProps {
  team: Team;
  actionType: string;
  onSelectPlayer: (playerNumber: string) => void;
  onClose: () => void;
}

export const PlayerSelectionModal: React.FC<PlayerSelectionModalProps> = ({ team, actionType, onSelectPlayer, onClose }) => {
  // Generate dummy roster since we don't have deep player data for every team
  const dummyRoster = Array.from({ length: 12 }, (_, i) => ({
    number: (i + 4).toString(),
    name: `Joueur ${team.code} #${i + 4}`
  }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col max-h-[80vh]">
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-800">
          <div>
            <h3 className="font-black text-lg text-white">Qui a fait l'action ?</h3>
            <p className="text-emerald-400 font-mono text-xs font-bold uppercase">{actionType} • {team.name}</p>
          </div>
          <button onClick={onClose} className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto grid grid-cols-3 gap-3">
          {dummyRoster.map((player) => (
            <button
              key={player.number}
              onClick={() => onSelectPlayer(player.number)}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/5 hover:border-emerald-500/50 transition-colors group"
            >
              <span className="text-2xl font-black text-white group-hover:text-emerald-400">#{player.number}</span>
              <span className="text-[10px] text-slate-400 truncate w-full text-center mt-1">{player.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
