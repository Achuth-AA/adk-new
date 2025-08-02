import { useState } from 'react';
import { ArrowLeft, Users, BarChart3, CheckSquare, AlertTriangle, TrendingUp } from 'lucide-react';

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
            <h2 className="text-xl font-semibold">Enhanced AI Agent Ecosystem</h2>
            <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full flex items-center gap-1">
              <Users className="w-3 h-3" />
              Engineer Access
            </span>
          </div>
          <p className="text-gray-400">Advanced multi-agent testing team with 12 accessible agents and 4 assigned tasks</p>
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
            onClick={() => setActiveTab('tasks')}
            className={`flex items-center gap-2 pb-3 border-b-2 transition-colors ${
              activeTab === 'tasks' 
                ? 'text-blue-400 border-blue-400' 
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
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
      </div>
    </div>
  );
}

export default AgentControlRefactored;