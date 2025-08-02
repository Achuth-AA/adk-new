import { Target, CheckSquare, Eye, MessageSquare, Play } from 'lucide-react';

function TaskOverview({ tasks }) {
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'critical':
        return 'bg-red-500 text-white';
      case 'high':
        return 'bg-gray-700 text-white';
      case 'medium':
        return 'bg-gray-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getStatusTextBadgeClass = (statusText) => {
    switch (statusText) {
      case 'needs approval':
        return 'bg-red-500 text-white';
      case 'blocked':
        return 'bg-red-600 text-white';
      case 'pending':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Target className="w-5 h-5" />
        <h3 className="text-lg font-medium">My Task Overview</h3>
      </div>

      {/* Task Overview Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-900 rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-blue-400 mb-2">1</p>
          <p className="text-gray-400 text-sm">Pending Tasks</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-orange-400 mb-2">1</p>
          <p className="text-gray-400 text-sm">In Progress</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-red-400 mb-2">1</p>
          <p className="text-gray-400 text-sm">Blocked</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-green-400 mb-2">0</p>
          <p className="text-gray-400 text-sm">Completed</p>
        </div>
      </div>

      {/* Task Cards */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div 
            key={task.id} 
            className={`rounded-lg p-5 border ${
              task.status === 'high' && task.statusText === 'blocked' 
                ? 'bg-red-900/20 border-red-700' 
                : 'bg-gray-900 border-gray-700'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-medium">{task.title}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeClass(task.status)}`}>
                    {task.status}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusTextBadgeClass(task.statusText)}`}>
                    {task.statusText}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{task.description}</p>
                
                <div className="grid grid-cols-4 gap-6 text-sm">
                  <div>
                    <p className="text-gray-500">Agent:</p>
                    <p className="text-gray-300">{task.agent}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Due Date:</p>
                    <p className={task.statusText === 'blocked' ? "text-red-300" : "text-gray-300"}>
                      {task.dueDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Estimated:</p>
                    <p className="text-gray-300">{task.estimatedTime}</p>
                  </div>
                  {task.actual && (
                    <div>
                      <p className="text-gray-500">Actual:</p>
                      <p className="text-green-400">{task.actual}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-2 ml-4">
                {/* Conditional buttons based on task status */}
                {task.statusText === 'needs approval' && (
                  <>
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm flex items-center gap-2 transition-colors">
                      <CheckSquare className="w-4 h-4" />
                      Approve
                    </button>
                    <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors">
                      Request Changes
                    </button>
                  </>
                )}
                
                {task.statusText === 'pending' && (
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm flex items-center gap-2 transition-colors">
                    <Play className="w-4 h-4" />
                    Start
                  </button>
                )}
                
                <button className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm flex items-center gap-2 transition-colors">
                  <Eye className="w-4 h-4" />
                  View Output
                </button>
                <button className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm flex items-center gap-2 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  Feedback
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Empty task placeholder */}
        <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-700/50 h-24">
          {/* Empty task placeholder */}
        </div>
      </div>
    </div>
  );
}

export default TaskOverview;