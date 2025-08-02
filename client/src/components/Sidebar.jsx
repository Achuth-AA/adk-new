/**
 * Sidebar Navigation Component
 * 
 * Provides the main navigation interface for the application.
 * Contains user profile, project status, navigation items, and system status.
 * 
 * Features:
 * - User profile with team member dropdown
 * - Current project status and progress
 * - Navigation buttons for different sections
 * - AI briefing with system status
 * - Real-time status indicators
 * 
 * @param {Object} props - Component properties
 * @param {string} props.activeSection - Currently active section ID
 * @param {function} props.setActiveSection - Function to change active section
 */

import { useState } from 'react';
import { 
  FolderOpen, 
  Users, 
  Settings,
  ChevronDown,
  MessageSquare,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

function Sidebar({ activeSection, setActiveSection }) {
  // State for managing user dropdown visibility
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    // Main sidebar container with backdrop blur and proper scrolling
    <div className="w-64 bg-gray-900/50 backdrop-blur-sm flex flex-col h-full overflow-y-auto p-3 space-y-3">
      {/* User Profile Section */}
      <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4 relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-sm font-medium">
            SC
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-white">Sarah Chen</h3>
            <p className="text-sm text-gray-400">Senior Test Engineer</p>
          </div>
          <button 
            onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
            className="p-1 hover:bg-gray-700/50 rounded transition-colors"
          >
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {isUserDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-lg z-50 overflow-hidden">
            <div className="p-2 space-y-1">
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium text-blue-600">
                  SC
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-900">Sarah Chen</p>
                  <p className="text-xs text-gray-500">Senior Test Engineer</p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-xs font-medium text-green-600">
                  MR
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-900">Mike Rodriguez</p>
                  <p className="text-xs text-gray-500">Test Lead</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Current Project Section */}
      <div className="block" style={{zIndex: -999999}}>
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4">
          <div className="mb-3">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Current Project</p>
            <div className="flex items-center gap-2 mb-1">
              <FolderOpen className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-sm text-white">E-Commerce Platform v3.2</span>
            </div>
            <span className="text-xs text-green-400">● Active</span>
          </div>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Test Progress</span>
                <span className="text-white">67%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>
            </div>
            
            <div className="text-xs space-y-2">
              <p className="text-gray-400">Your Tests: <span className="text-white">23/45 Complete</span></p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                  <span className="text-gray-300">Environment</span>
                </div>
                <span className="text-gray-400">staging</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 text-yellow-500" />
                  <span className="text-gray-300">Sprint End</span>
                </div>
                <span className="text-gray-400">9d left</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Button */}
      <button 
        onClick={() => setActiveSection('ai-assistant')}
        className={`w-full p-3 text-left transition-colors ${
          activeSection === 'ai-assistant' 
            ? 'bg-gray-200/90 border border-gray-300/60 text-gray-900 backdrop-blur-sm rounded-lg' 
            : 'hover:bg-gray-600/20'
        }`}
      >
        <div className="flex items-center gap-2">
          <MessageSquare className={`w-4 h-4 ${
            activeSection === 'ai-assistant' ? 'text-gray-700' : 'text-gray-300'
          }`} />
          <div>
            <p className={`text-sm font-medium ${
              activeSection === 'ai-assistant' ? 'text-gray-900' : 'text-white'
            }`}>AI Assistant</p>
            <p className={`text-xs ${
              activeSection === 'ai-assistant' ? 'text-gray-600' : 'text-gray-400'
            }`}>Chat with your AI testing assistant</p>
          </div>
        </div>
      </button>

      {/* Agent Control Button */}
      <button 
        onClick={() => setActiveSection('agent-control')}
        className={`w-full p-3 text-left transition-colors ${
          activeSection === 'agent-control' 
            ? 'bg-gray-200/90 border border-gray-300/60 text-gray-900 backdrop-blur-sm rounded-lg' 
            : 'hover:bg-gray-600/20'
        }`}
      >
        <div className="flex items-center gap-2">
          <Settings className={`w-4 h-4 ${
            activeSection === 'agent-control' ? 'text-gray-700' : 'text-gray-300'
          }`} />
          <div>
            <p className={`text-sm font-medium ${
              activeSection === 'agent-control' ? 'text-gray-900' : 'text-white'
            }`}>Agent Control</p>
            <p className={`text-xs ${
              activeSection === 'agent-control' ? 'text-gray-600' : 'text-gray-400'
            }`}>Monitor your assigned agents</p>
          </div>
        </div>
      </button>
      

      {/* AI Briefing - System Status */}
      <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center">
            <AlertCircle className="w-4 h-4 text-gray-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">AI Briefing</p>
            <p className="text-xs text-gray-400">System Status</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">Active Agents</span>
            <span className="text-sm font-medium text-white">11</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">Pending Tasks</span>
            <span className="text-sm font-medium text-white">2</span>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-2 mt-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-xs text-red-400">1 critical issue detected</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Status</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-green-400">Online</span>
          </div>
          <div className="text-xs text-gray-400">
            <span className="text-gray-300">Agents</span> 11/12
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;