import { Eye, MessageSquare } from 'lucide-react';

function AgentCard({ agent }) {
  const {
    name,
    description,
    icon: Icon,
    iconColor,
    iconBgColor,
    confidence,
    statusDot,
    badges,
    status,
    statusColor,
    currentTask,
    tasks,
    uptime,
    autonomyLevel,
    alertType = 'normal'
  } = agent;

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              {name}
              <span className={`w-2 h-2 ${statusDot} rounded-full`}></span>
            </h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold">{confidence}%</div>
          <div className="text-xs text-gray-400">Confidence</div>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        {badges.map((badge, index) => (
          <span 
            key={index}
            className={`px-2 py-1 ${badge.bgColor} ${badge.textColor} text-xs rounded`}
          >
            {badge.text}
          </span>
        ))}
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Status:</span>
          <span className={`px-2 py-1 ${statusColor} text-white text-xs rounded`}>
            {status}
          </span>
        </div>
        <div className="mb-3">
          <p className="text-sm text-gray-400 mb-1">Current Task</p>
          <p className="text-sm font-medium">{currentTask}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Tasks:</span>
            <span className="ml-2 font-semibold">{tasks}</span>
          </div>
          <div>
            <span className="text-gray-400">Uptime:</span>
            <span className="ml-2 font-semibold">{uptime}</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Autonomy Level</span>
          <span className="text-sm font-semibold">{autonomyLevel}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" 
            style={{ width: `${autonomyLevel}%` }}
          ></div>
        </div>
      </div>

      <div className={`w-full py-2 rounded-lg text-sm font-medium text-center mb-3 ${
        alertType === 'critical' 
          ? 'bg-red-500/20 text-red-400' 
          : 'bg-blue-500/20 text-blue-400'
      }`}>
        {alertType === 'critical' ? 'Critical Alert - Review Now' : 'Agent Work Review'}
      </div>

      <div className="flex justify-between">
        <button 
          onClick={() => window.open('/agent-output', '_blank')}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <Eye className="w-4 h-4" />
          View Output
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
          <MessageSquare className="w-4 h-4" />
          Feedback
        </button>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-800">
        <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
          <MessageSquare className="w-4 h-4" />
          Chat
        </button>
      </div>
    </div>
  );
}

export default AgentCard;