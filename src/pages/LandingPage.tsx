import React from 'react';
import { Link } from 'react-router-dom';
import { Boxes, Users, Trophy, Star, ArrowRight } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Boxes className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-4">
              DominóClub
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              A plataforma definitiva para organizar suas partidas de dominó, 
              gerenciar comunidades e acompanhar estatísticas dos jogadores.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/register"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700"
              >
                Começar agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50"
              >
                Já tenho conta
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Users className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Gerencie Comunidades
            </h3>
            <p className="text-gray-600">
              Crie e gerencie comunidades de jogadores, organize partidas e mantenha todos conectados.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Trophy className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Acompanhe Rankings
            </h3>
            <p className="text-gray-600">
              Mantenha rankings atualizados, estatísticas de jogadores e histórico de partidas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Star className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Organize Competições
            </h3>
            <p className="text-gray-600">
              Crie torneios, defina regras e acompanhe o desempenho dos participantes.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para organizar suas partidas?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a milhares de jogadores e organizadores.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50"
          >
            Criar minha conta
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}