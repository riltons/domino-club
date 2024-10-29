import React, { useState } from 'react';
import { Calendar, Users, Trophy, Filter, Search, ArrowRight } from 'lucide-react';
import { MatchDetails } from './MatchDetails';

interface MatchResult {
  id: string;
  date: string;
  teams: {
    team1: { 
      players: string[]; 
      victories: number;
      points: number[];
    };
    team2: { 
      players: string[]; 
      victories: number;
      points: number[];
    };
  };
  community: string;
  duration: string;
  winner: 'team1' | 'team2';
  victoryType: 'VITÓRIA SIMPLES' | 'BUCHUDA' | 'BUCHUDA DE RÉ';
}

const mockResults: MatchResult[] = [
  {
    id: '1',
    date: '24 Mar 2024',
    teams: {
      team1: { 
        players: ['João Silva', 'Maria Santos'], 
        victories: 6,
        points: [1, 2, 3, 4, 1, 2]
      },
      team2: { 
        players: ['Pedro Lima', 'Ana Costa'], 
        victories: 2,
        points: [1, 2]
      }
    },
    community: 'Liga Master de Dominó',
    duration: '2h 15min',
    winner: 'team1',
    victoryType: 'VITÓRIA SIMPLES'
  },
  {
    id: '2',
    date: '23 Mar 2024',
    teams: {
      team1: { 
        players: ['Carlos Oliveira', 'Lucia Ferreira'], 
        victories: 0,
        points: []
      },
      team2: { 
        players: ['Roberto Santos', 'Julia Lima'], 
        victories: 6,
        points: [1, 3, 2, 4, 1, 2]
      },
    },
    community: 'Dominó dos Amigos',
    duration: '1h 45min',
    winner: 'team2',
    victoryType: 'BUCHUDA DE RÉ'
  }
];

export function MatchResultsList() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null);

  const filteredResults = mockResults.filter(result => {
    const matchesSearch = 
      result.teams.team1.players.some(player => 
        player.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      result.teams.team2.players.some(player => 
        player.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      result.community.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === 'all') return matchesSearch;
    return matchesSearch && (
      (filter === 'buchuda' && result.victoryType.includes('BUCHUDA')) ||
      (filter === 'simples' && result.victoryType === 'VITÓRIA SIMPLES')
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Resultados das Partidas</h1>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Buscar por jogador ou comunidade..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Todos os jogos</option>
              <option value="buchuda">Buchudas</option>
              <option value="simples">Vitórias Simples</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((result) => (
            <div key={result.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{result.date}</span>
                </div>
                <span className="text-sm text-gray-600">{result.duration}</span>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{result.community}</h3>
                <div className="space-y-4">
                  <div className={`p-3 rounded-lg ${
                    result.winner === 'team1' ? 'bg-green-50' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center mb-2">
                      <Users className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm font-medium text-gray-900">
                        Time 1 {result.winner === 'team1' && '(Vencedor)'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        {result.teams.team1.players.join(' & ')}
                      </span>
                      <span className="text-lg font-semibold text-gray-900">
                        {result.teams.team1.victories} vitórias
                      </span>
                    </div>
                  </div>

                  <div className={`p-3 rounded-lg ${
                    result.winner === 'team2' ? 'bg-green-50' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center mb-2">
                      <Users className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm font-medium text-gray-900">
                        Time 2 {result.winner === 'team2' && '(Vencedor)'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        {result.teams.team2.players.join(' & ')}
                      </span>
                      <span className="text-lg font-semibold text-gray-900">
                        {result.teams.team2.victories} vitórias
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  result.victoryType === 'BUCHUDA' || result.victoryType === 'BUCHUDA DE RÉ'
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {result.victoryType}
                </span>
                <button 
                  onClick={() => setSelectedMatch(result.id)}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-700"
                >
                  <Trophy className="h-4 w-4 mr-1" />
                  Ver detalhes
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMatch && (
        <MatchDetails 
          match={mockResults.find(m => m.id === selectedMatch)!}
          onClose={() => setSelectedMatch(null)}
        />
      )}
    </div>
  );
}