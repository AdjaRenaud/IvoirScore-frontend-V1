import React, { useState } from 'react';
import { Database, User, Lock, EyeOff, Eye, ArrowRight } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';

interface ScoutLoginProps {
  onLoginSuccess: () => void;
}

export const ScoutLogin: React.FC<ScoutLoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Mock login validation
      if (username === 'scout' && password === '1234') {
        onLoginSuccess();
      } else {
        setError('Identifiants incorrects. Test: scout / 1234');
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-[100px] -top-20 -right-20" />
      </div>

      <div className="relative z-10 w-full max-w-sm">
        <div className="text-center mb-8">
          <BrandLogo size="lg" className="justify-center mb-4" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono font-bold uppercase tracking-wider mb-2 bg-emerald-500/10 border-emerald-500/30 text-emerald-400">
            <Database className="w-3.5 h-3.5" />
            <span>Portail Scout • Saisie Live</span>
          </div>
          <p className="text-slate-400 text-sm mt-2">Connectez-vous pour alimenter les scores en direct.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">Identifiant</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-emerald-500 text-white transition-colors"
                placeholder="scout"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:border-emerald-500 text-white transition-colors"
                placeholder="••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && <div className="text-red-400 text-xs text-center bg-red-400/10 p-2 rounded-lg border border-red-400/20">{error}</div>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 py-3 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
          >
            {isLoading ? <span className="animate-pulse">Connexion...</span> : <>Entrer dans l'arène <ArrowRight className="w-4 h-4" /></>}
          </button>
        </form>
      </div>
    </div>
  );
};
