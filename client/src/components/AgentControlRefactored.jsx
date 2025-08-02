import { useState } from 'react';
import { ArrowLeft, Users, BarChart3, CheckSquare, AlertTriangle, TrendingUp, MessageSquare } from 'lucide-react';

// Import smaller components
import MyAssignedTasks from './AgentControl/MyAssignedTasks';
import AgentTabs from './AgentControl/AgentTabs';
import AgentCard from './AgentControl/AgentCard';
import AgentPerformanceCard from './AgentControl/AgentPerformanceCard';
import TaskOverview from './AgentControl/TaskOverview';

// Import data
import { agentData, performanceData } from './AgentControl/agentData';

function AgentControlRefactored({ setActiveSection }) {
  const [activeTab, setActiveTab] = useState('agents');
  const [activeAgentTab, setActiveAgentTab] = useState('all');

  // Sample task data
  const tasks = [
    {
      id: 1,
      title: 'Review Payment Gateway Security Test Results',
      description: 'Critical security vulnerabilities detected in payment flow - requires immediate review and sign-off',
      agent: 'Test Failure Analysis Agent',
      status: 'critical',
      statusText: 'needs approval',
      dueDate: '8/3/2025',
      estimatedTime: '4h',
      actual: '2.5h'
    },
    {
      id: 2,
      title: 'Configure Load Testing Environment',
      description: 'Setup and configuration of load testing environment - blocked by security review completion',
      agent: 'Environment Readiness Agent',
      status: 'high',
      statusText: 'blocked',
      dueDate: '3/2/2025',
      estimatedTime: '6h',
      actual: ''
    },
    {
      id: 3,
      title: 'Validate Mobile Regression Test Cases',
      description: 'Review and validate generated test cases for mobile application regression testing',
      agent: 'Smart Test Review Agent',
      status: 'medium',
      statusText: 'pending',
      dueDate: '8/6/2025',
      estimatedTime: '8h',
      actual: ''
    }
  ];

  return (
    <div className="h-full bg-gray-950 text-white">
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <button 
          onClick={() => setActiveSection('ai-assistant')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Chat</span>
        </button>

        <h1 className="text-2xl font-semibold mb-2">AI Agents</h1>
        <p className="text-gray-400">Work with your assigned AI testing agents and view active testing tasks</p>
      </div>

      {/* Enhanced AI Agent Ecosystem Card */}
      <div className="p-6">
        <div className="bg-gray-900 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">Enhanced AI Agent Ecosystem</h2>
              <p className="text-gray-400 mt-1">Advanced multi-agent testing team with 12 accessible agents and 4 assigned tasks</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full flex items-center gap-1">
                <Users className="w-3 h-3" />
                Engineer Access
              </span>
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                Testing Features
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation Tabs */}
        <div className="flex gap-6 mb-6">
          <button 
            onClick={() => setActiveTab('agents')}
            className={`flex items-center gap-2 pb-3 border-b-2 transition-colors ${
              activeTab === 'agents' 
                ? 'text-blue-400 border-blue-400' 
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Agents</span>
          </button>
          <button 
            onClick={() => setActiveTab('performance')}
            className={`flex items-center gap-2 pb-3 border-b-2 transition-colors ${
              activeTab === 'performance' 
                ? 'text-blue-400 border-blue-400' 
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Performance</span>
          </button>
          <button 
            onClick={() => {}} 
            disabled
            className="flex items-center gap-2 pb-3 border-b-2 text-gray-600 border-transparent cursor-not-allowed opacity-50"
          >
            <CheckSquare className="w-4 h-4" />
            <span>My Tasks</span>
          </button>
          <button 
            onClick={() => setActiveTab('exceptions')}
            className={`flex items-center gap-2 pb-3 border-b-2 transition-colors ${
              activeTab === 'exceptions' 
                ? 'text-blue-400 border-blue-400' 
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Exceptions (1)</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'agents' && (
          <div className="space-y-6">
            {/* My Assigned Tasks Section */}
            <MyAssignedTasks tasks={tasks} />

            {/* Divider */}
            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-lg font-medium mb-6">AI Agent Ecosystem</h3>
            </div>

            {/* Agent Sub-tabs */}
            <AgentTabs activeTab={activeAgentTab} setActiveTab={setActiveAgentTab} />

            {/* Agent Cards Grid - Scrollable */}
            <div className="max-h-[600px] overflow-y-auto pr-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {agentData.map((agent) => (
                  <AgentCard key={agent.id} agent={agent} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5" />
              <h3 className="text-lg font-medium">Agent Performance Overview</h3>
            </div>

            {/* Performance Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {performanceData.map((agent, index) => (
                <AgentPerformanceCard key={index} agent={agent} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <TaskOverview tasks={tasks} />
        )}

        {activeTab === 'exceptions' && (
          <div className="space-y-6">
            {/* Exception Notifications Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Exception Notifications</h3>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors">
                  All (4)
                </button>
                <button className="px-4 py-2 bg-transparent text-gray-400 rounded-lg text-sm hover:bg-gray-800 hover:text-white transition-colors">
                  Agent Issues (1)
                </button>
                <button className="px-4 py-2 bg-transparent text-gray-400 rounded-lg text-sm hover:bg-gray-800 hover:text-white transition-colors">
                  Test Failures (1)
                </button>
              </div>
            </div>

            {/* Critical Test Failure Card */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                {/* Error Icon */}
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h4 className="text-lg font-medium text-white">Critical Test Failure</h4>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">test failure</span>
                        <span className="px-2 py-1 bg-red-500 text-white text-xs rounded">critical</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-gray-400">8/2/2025, 9:23:18 AM</span>
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Unacknowledged</span>
                    </div>
                  </div>

                  <p className="text-red-400 mb-4">
                    Payment gateway integration tests are failing with 80% failure rate in production-like environment
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-4 text-sm">
                    <div>
                      <span className="text-gray-400">Agent:</span>
                      <p className="text-red-400 font-medium">Test Execution Agent</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Task:</span>
                      <p className="text-red-400 font-medium">task-001</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Assigned To:</span>
                      <p className="text-yellow-400 font-medium">sarah-chen</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors">
                      <CheckSquare className="w-4 h-4" />
                      Acknowledge
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors">
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                      Take Action
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      Chat with Agent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AgentControlRefactored;