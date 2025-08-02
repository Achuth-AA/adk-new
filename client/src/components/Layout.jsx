import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AlertTriangle, Clock, Users, BarChart3, Users2, MessageSquare, Send } from 'lucide-react';
import Sidebar from './Sidebar';
import Header from './Header';
import AgentControlRefactored from './AgentControlRefactored';

function Layout() {
  const [activeSection, setActiveSection] = useState('ai-assistant');

  const renderSectionContent = (section) => {
    switch (section) {
      case 'ai-assistant':
        return (
          <div className="p-6 max-w-6xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
              </div>
              <h1 className="text-2xl font-semibold mb-3">Good morning, Sarah</h1>
              <p className="text-gray-400 text-base">
                I'm ready to collaborate with you on testing decisions. Let's work together to achieve the best results.
              </p>
            </div>


            {/* Chat Input */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="How can I help you with testing today?"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pr-28 text-base focus:outline-none focus:border-blue-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg text-base flex items-center gap-2 transition-colors">
                  <span>Send</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Action Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Critical Issues */}
              <div className="bg-gray-800 rounded-lg p-5 hover:bg-gray-750 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-blue-400" />
                  <h3 className="text-base font-medium">1 Critical Issues</h3>
                </div>
                <p className="text-gray-400 text-sm">Immediate attention required</p>
              </div>

              {/* Pending Tasks */}
              <div className="bg-gray-800 rounded-lg p-5 hover:bg-gray-750 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <h3 className="text-base font-medium">2 Pending Tasks</h3>
                </div>
                <p className="text-gray-400 text-sm">Your tasks need attention</p>
              </div>

              {/* Active Agents */}
              <div className="bg-gray-800 rounded-lg p-5 hover:bg-gray-750 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-blue-400" />
                  <h3 className="text-base font-medium">11 Active Agents</h3>
                </div>
                <p className="text-gray-400 text-sm">Monitor your assigned AI agents</p>
              </div>

              {/* Performance Metrics */}
              <div className="bg-gray-800 rounded-lg p-5 hover:bg-gray-750 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  <h3 className="text-base font-medium">Performance Metrics</h3>
                </div>
                <p className="text-gray-400 text-sm">View testing performance and analytics</p>
              </div>

              {/* Collaboration Hub */}
              <div className="bg-gray-800 rounded-lg p-5 hover:bg-gray-750 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <Users2 className="w-5 h-5 text-blue-400" />
                  <h3 className="text-base font-medium">Collaboration Hub</h3>
                </div>
                <p className="text-gray-400 text-sm">Access pending approvals and AI recommendations</p>
              </div>

              {/* Chat with Test Case Generator */}
              <div className="bg-gray-800 rounded-lg p-5 hover:bg-gray-750 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  <h3 className="text-base font-medium">Chat with Test Case Generator Agent</h3>
                </div>
                <p className="text-gray-400 text-sm">Collaborate on current testing tasks</p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Working with 12 assigned agents in AI-assisted mode</p>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-blue-400">👤 AI-Assisted mode: Human + AI collaboration active</span>
              </div>
              <button className="mt-2 text-blue-400 hover:text-blue-300 text-sm">
                🏢 TestQ AI-First Testing Platform →
              </button>
            </div>
          </div>
        );
      case 'agent-control':
        return <AgentControlRefactored setActiveSection={setActiveSection} />;
      case 'agent-gallery':
        return (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-white mb-6">Agent Gallery</h1>
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
              <p className="text-gray-300 mb-6">Browse and deploy available AI agents for your testing workflows.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-900/60 rounded-lg p-4 border border-gray-600/50">
                  <h3 className="text-lg font-semibold text-white mb-2">Test Automation Agent</h3>
                  <p className="text-sm text-gray-400 mb-3">Automated test case execution and reporting</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-lg transition-colors">
                    Deploy Agent
                  </button>
                </div>
                <div className="bg-gray-900/60 rounded-lg p-4 border border-gray-600/50">
                  <h3 className="text-lg font-semibold text-white mb-2">Performance Monitor</h3>
                  <p className="text-sm text-gray-400 mb-3">Real-time performance tracking and alerts</p>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-4 rounded-lg transition-colors">
                    Deploy Agent
                  </button>
                </div>
                <div className="bg-gray-900/60 rounded-lg p-4 border border-gray-600/50">
                  <h3 className="text-lg font-semibold text-white mb-2">Bug Detector</h3>
                  <p className="text-sm text-gray-400 mb-3">Intelligent bug detection and classification</p>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm py-2 px-4 rounded-lg transition-colors">
                    Deploy Agent
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Select a section from the sidebar</div>;
    }
  };
  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      {/* Header - Full Width */}
      <Header />
      
      {/* Main Content Area with Sidebar */}
      <div className="flex flex-1 overflow-hidden bg-gray-950">
        {/* Sidebar */}
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Page Content with Gradient Background */}
        <main className="flex-1 relative overflow-hidden bg-gray-950">
          {/* Multiple Gradient Layers for depth */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-gray-900/50 to-gray-950"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/5 via-transparent to-gray-950/80"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full overflow-y-auto">
            {activeSection ? (
              renderSectionContent(activeSection)
            ) : (
              <Outlet />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;