import { CheckSquare } from 'lucide-react';

function MyAssignedTasks({ tasks }) {
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
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
          <CheckSquare className="w-3 h-3" />
        </div>
        <h3 className="text-lg font-medium">My Assigned Tasks (4)</h3>
      </div>

      {/* Task Cards */}
      {tasks.map((task) => (
        <div 
          key={task.id} 
          className={`rounded-lg p-5 border ${
            task.status === 'high' && task.statusText === 'blocked' 
              ? 'bg-red-900/20 border-red-700' 
              : 'bg-gray-900 border-gray-700'
          }`}
        >
          <div className="flex items-start justify-between mb-3">
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
              <p className="text-gray-400 text-sm mb-3">{task.description}</p>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-gray-500">Agent:</span>
                  <span className="text-gray-300 ml-2">{task.agent}</span>
                </div>
                <div>
                  <span className="text-gray-500">Due Date:</span>
                  <span className="text-gray-300 ml-2">{task.dueDate}</span>
                </div>
                <div>
                  <span className="text-gray-500">Estimated:</span>
                  <span className="text-gray-300 ml-2">{task.estimatedTime}</span>
                </div>
                {task.actual && (
                  <div>
                    <span className="text-gray-500">Actual:</span>
                    <span className="text-green-400 ml-2">{task.actual}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Testing Features Button */}
      <div className="mt-6 flex justify-end">
        <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm flex items-center gap-2 transition-colors">
          <CheckSquare className="w-4 h-4" />
          Testing Features
        </button>
      </div>
    </div>
  );
}

export default MyAssignedTasks;