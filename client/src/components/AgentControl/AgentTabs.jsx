import { Users, Zap, GitBranch, BarChart3 } from 'lucide-react';

function AgentTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'all', label: 'All Agents', count: 12, icon: null },
    { id: 'orchestration', label: 'Orchestration', count: 1, icon: Users },
    { id: 'core-testing', label: 'Core Testing', count: 5, icon: Zap },
    { id: 'integration', label: 'Integration', count: 2, icon: GitBranch },
    { id: 'analysis', label: 'Analysis', count: 4, icon: BarChart3 }
  ];

  return (
    <div className="flex items-center gap-8 border-b border-gray-800">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 pb-3 px-1 text-sm font-medium transition-colors border-b-2 ${
              activeTab === tab.id
                ? 'text-white border-blue-500'
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            {Icon && <Icon className="w-4 h-4" />}
            {tab.label} ({tab.count})
          </button>
        );
      })}
    </div>
  );
}

export default AgentTabs;