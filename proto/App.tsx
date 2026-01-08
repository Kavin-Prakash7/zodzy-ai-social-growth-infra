import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import Content from './views/Content';
import Analytics from './views/Analytics';
import Intelligence from './views/Intelligence';
import VideoAnalyzer from './views/VideoAnalyzer';
import Settings from './views/Settings';
import { DataProvider } from './contexts/DataContext';
import { Search, Bell, Mail } from 'lucide-react';

const PlaceholderView = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400 animate-fadeInUp">
    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    <p className="mt-2 text-sm">This module is currently under development.</p>
  </div>
);

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'content': return <Content />;
      case 'analytics': return <Analytics />;
      case 'strategy': return <Intelligence />;
      case 'intelligence': return <VideoAnalyzer />;
      case 'settings': return <Settings />;
      default: return <PlaceholderView title={currentView.charAt(0).toUpperCase() + currentView.slice(1)} />;
    }
  };

  return (
    <DataProvider>
      <div className="min-h-screen bg-[#F4F5F7] text-[#1F2937] font-sans flex">
        
        {/* Sidebar */}
        <Sidebar 
            currentView={currentView} 
            setCurrentView={setCurrentView} 
            isOpen={sidebarOpen}
            setIsOpen={setSidebarOpen}
        />

        {/* Main Content */}
        <main className="flex-1 lg:ml-[260px] p-6 lg:p-10 overflow-y-auto h-screen">
            <div className="max-w-[1400px] mx-auto">
                
                {/* Top Bar - Hide on Settings page for cleaner look matching mockup */}
                {currentView !== 'settings' && (
                    <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                      
                      {/* Search */}
                      <div className="relative w-full md:w-96">
                          <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
                          <input 
                            type="text" 
                            placeholder="Search videos, insights..." 
                            className="w-full bg-white border-none rounded-full pl-12 pr-12 py-3 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-100"
                          />
                          <div className="absolute right-4 top-3.5">
                              <span className="px-1.5 py-0.5 rounded bg-gray-100 text-[10px] text-gray-500 font-bold border border-gray-200">⌘ K</span>
                          </div>
                      </div>

                      {/* Right Side: Notifications & Profile */}
                      <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                          <button className="p-3 rounded-full bg-white text-gray-500 hover:text-gray-800 shadow-sm hover:shadow transition-all border border-transparent hover:border-gray-100">
                              <Mail size={18} />
                          </button>
                          <button className="p-3 rounded-full bg-white text-gray-500 hover:text-gray-800 shadow-sm hover:shadow transition-all border border-transparent hover:border-gray-100">
                              <Bell size={18} />
                          </button>
                          
                          <div className="flex items-center gap-3 pl-2">
                              <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Profile" />
                              <div className="hidden md:flex flex-col">
                                  <span className="text-sm font-bold text-gray-900 leading-none">Totok Michael</span>
                                  <span className="text-xs text-gray-400 mt-1">Growth Lead</span>
                              </div>
                          </div>
                      </div>
                    </header>
                )}

                {/* View Content */}
                {renderView()}

            </div>
        </main>
      </div>
    </DataProvider>
  );
}

export default App;