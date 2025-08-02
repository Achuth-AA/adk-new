import { Activity } from 'lucide-react';

function AgentPerformanceCard({ agent }) {
  const {
    name,
    icon: Icon,
    iconColor,
    successRate,
    transactions,
    avgResponse,
    barColor = 'green'
  } = agent;

  const getBarColorClass = (color) => {
    switch(color) {
      case 'green':
        return 'bg-green-500';
      case 'yellow':
        return 'bg-yellow-500';
      default:
        return 'bg-green-500';
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-5 border border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        <Icon className={`w-5 h-5 ${iconColor}`} />
        <h4 className="font-medium">{name}</h4>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Success Rate</span>
          <span className="text-xl font-semibold">{successRate}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div 
            className={`${getBarColorClass(barColor)} h-2 rounded-full`} 
            style={{ width: `${successRate}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-gray-400">Transactions</p>
          <p className="font-semibold">{transactions}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Avg Response</p>
          <p className="font-semibold">{avgResponse}</p>
        </div>
      </div>

      <button className="w-full text-center text-sm text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-1">
        <Activity className="w-3 h-3" />
        View Details
      </button>
    </div>
  );
}

export default AgentPerformanceCard;