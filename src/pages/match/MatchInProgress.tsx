import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Timer, Flag, Users, Trophy } from 'lucide-react';

interface MatchState {
  teams: {
    team1: string[];
    team2: string[];
  };
  startTime?: Date;
}

export function MatchInProgress() {
  const location = useLocation();
  const navigate = useNavigate();
  const [elapsedTime, setElapsedTime] = useState(0);
  const [matchState, setMatchState] = useState<MatchState>({
    teams: {
      team1: [],
      team2: []
    },
    startTime: new Date()
  });

  useEffect(() => {
    if (location.state?.teams) {
      setMatchState({
        teams: location.state.teams,
        startTime: new Date()
      });
    }
  }, [location]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (matchState.startTime) {
        const elapsed = Math.floor((new Date().getTime() - matchState.startTime.getTime()) / 1000);
        setElapsedTime(elapsed);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [matchState.startTime]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleFinishMatch = () => {
    navigate('/match/result', {
      state: {
        ...matchState,
        duration: elapsedTime
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <Trophy className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Partida em Andamento</h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          {/* Timer */}
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-50">
              <Timer className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-xl font-mono font-medium text-blue-600">
                {formatTime(elapsedTime)}
              </span>
            </div>
          </div>

          {/* Teams */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-5 w-5 text-gray-600 mr-2" />
                <h3 className="text-sm font-medium text-gray-900">Time 1</h3>
              </div>
              <div className="text-center text-sm text-gray-600">
                {matchState.teams.team1.join(' & ')}
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-5 w-5 text-gray-600 mr-2" />
                <h3 className="text-sm font-medium text-gray-900">Time 2</h3>
              </div>
              <div className="text-center text-sm text-gray-600">
                {matchState.teams.team2.join(' & ')}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={handleFinishMatch}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              <Flag className="h-5 w-5 mr-2" />
              Finalizar Partida
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}