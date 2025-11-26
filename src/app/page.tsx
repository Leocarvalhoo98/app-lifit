"use client";

import { useState } from "react";
import { Dumbbell, Apple, TrendingUp, Home, User, Menu, X, ChevronRight, Zap, Target, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AuthModal } from "@/components/auth-modal";

export default function LifitApp() {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const handleCreatePlan = () => {
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Auth Modal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              LIFIT
            </h1>
          </div>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <button className="text-gray-300 hover:text-white transition-colors">Treinos</button>
            <button className="text-gray-300 hover:text-white transition-colors">Nutrição</button>
            <button className="text-gray-300 hover:text-white transition-colors">Progresso</button>
            <Button 
              onClick={handleCreatePlan}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Começar Agora
            </Button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-purple-500/20 p-4">
            <nav className="flex flex-col gap-4">
              <button className="text-gray-300 hover:text-white transition-colors text-left">Treinos</button>
              <button className="text-gray-300 hover:text-white transition-colors text-left">Nutrição</button>
              <button className="text-gray-300 hover:text-white transition-colors text-left">Progresso</button>
              <Button 
                onClick={handleCreatePlan}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full"
              >
                Começar Agora
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Powered by IA Adaptativa</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Seu corpo merece um plano
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                100% personalizado
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Treinos e dietas criados por IA que se adaptam à sua rotina, objetivos e evolução. 
              Para academia ou casa. Do iniciante ao avançado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleCreatePlan}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6"
              >
                Criar Plano
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500/50 text-white hover:bg-purple-500/10 text-lg px-8 py-6">
                Ver Como Funciona
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { value: "600+", label: "Receitas Premium" },
              { value: "108", label: "Nutrientes Rastreados" },
              { value: "∞", label: "Variações de Treino" },
              { value: "24/7", label: "IA Adaptativa" }
            ].map((stat, i) => (
              <Card key={i} className="bg-slate-900/50 border-purple-500/20 p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Tudo que você precisa em um só lugar
            </h3>
            <p className="text-xl text-gray-400">
              Tecnologia de ponta para resultados reais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Treino Card */}
            <Card className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 border-purple-500/30 p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-4">Treinos Inteligentes</h4>
              
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>IA que aprende com seu progresso e adapta os treinos</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Periodização não linear para evolução contínua</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Vídeos HD em múltiplos ângulos com instruções claras</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Para academia, casa, gestantes e idosos</span>
                </li>
              </ul>

              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Explorar Treinos
              </Button>
            </Card>

            {/* Nutrição Card */}
            <Card className="bg-gradient-to-br from-pink-900/40 to-slate-900/40 border-pink-500/30 p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center mb-6">
                <Apple className="w-8 h-8 text-white" />
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-4">Nutrição Personalizada</h4>
              
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Dietas sob medida para seus objetivos e restrições</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>600+ receitas: low-carb, keto, vegetariana e mais</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Rastreamento de 108 nutrientes e micronutrientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Jejum intermitente e ciclagem de macros</span>
                </li>
              </ul>

              <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600">
                Explorar Nutrição
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Como funciona
            </h3>
            <p className="text-xl text-gray-400">
              Seu plano personalizado em 3 passos simples
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                step: "1",
                title: "Conte-nos sobre você",
                description: "Objetivos, rotina, nível de condicionamento e disponibilidade. Envie fotos para análise corporal precisa."
              },
              {
                icon: Zap,
                step: "2",
                title: "IA cria seu plano",
                description: "Nossa inteligência artificial analisa tudo e cria treinos e dietas 100% personalizados para você."
              },
              {
                icon: TrendingUp,
                step: "3",
                title: "Evolua continuamente",
                description: "A IA aprende com você, adapta seu plano e garante progressão constante rumo aos seus objetivos."
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 relative">
                    <item.icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-pink-500 text-white text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Resultados reais de pessoas reais
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Maria Silva",
                result: "-12kg em 3 meses",
                text: "Treino em casa, sem equipamentos caros. O LIFIT adaptou tudo para minha rotina e orçamento!",
                avatar: "MS"
              },
              {
                name: "João Santos",
                result: "+8kg de massa magra",
                text: "A periodização e os treinos variados fizeram toda diferença. Nunca mais estagnei!",
                avatar: "JS"
              },
              {
                name: "Ana Costa",
                result: "De sedentária a atleta",
                text: "Comecei do zero. A IA foi aumentando a intensidade conforme eu evoluía. Incrível!",
                avatar: "AC"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-slate-900/50 border-purple-500/20 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-purple-400">{testimonial.result}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 border-purple-500/30 p-12 text-center backdrop-blur-sm">
            <Award className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pronto para transformar seu corpo?
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já estão alcançando seus objetivos com treinos e dietas personalizados por IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleCreatePlan}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6"
              >
                Começar Gratuitamente
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              Sem cartão de crédito necessário • Cancele quando quiser
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-purple-500/20 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">LIFIT</span>
              </div>
              <p className="text-gray-400 text-sm">
                Treinos e dietas personalizados por IA para resultados reais.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Treinos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nutrição</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Receitas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guias</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vídeos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 LIFIT. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-950 border-t border-purple-500/20 md:hidden z-50">
        <div className="flex items-center justify-around py-3">
          {[
            { icon: Home, label: "Início", id: "home" },
            { icon: Dumbbell, label: "Treinos", id: "workout" },
            { icon: Apple, label: "Nutrição", id: "nutrition" },
            { icon: TrendingUp, label: "Progresso", id: "progress" },
            { icon: User, label: "Perfil", id: "profile" }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                activeTab === item.id ? "text-purple-400" : "text-gray-400"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
