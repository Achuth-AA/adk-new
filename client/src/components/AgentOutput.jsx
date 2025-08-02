import { useState } from 'react';
import { X, Eye, MessageSquare, Clock, Download, Copy, ThumbsUp, Edit3, XCircle, Send, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function AgentOutput() {
  const [activeTab, setActiveTab] = useState('output');
  const [feedbackOption, setFeedbackOption] = useState('approve');
  const [comments, setComments] = useState('');
  const navigate = useNavigate();

  const historyData = [
    {
      id: 1,
      user: 'Sarah Chen',
      type: 'revision',
      date: '8/2/2025, 9:27:56 AM',
      comment: 'Please add more edge cases for password validation. The current test cases miss scenarios for special characters and length requirements.'
    },
    {
      id: 2,
      user: 'Michael Rodriguez',
      type: 'approval',
      date: '8/2/2025, 8:57:56 AM',
      comment: 'Great work on the user registration flows. The test coverage looks comprehensive.'
    },
    {
      id: 3,
      user: 'Sarah Chen',
      type: 'comment',
      date: '8/2/2025, 7:57:56 AM',
      comment: 'Consider adding performance test cases for high-load scenarios.'
    }
  ];

  const getHistoryTypeStyle = (type) => {
    switch(type) {
      case 'approval':
        return 'bg-green-500 text-white';
      case 'revision':
        return 'bg-yellow-500 text-white';
      case 'comment':
        return 'bg-gray-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-white">Test Case Generator Agent Output Review</h1>
            <button 
              onClick={() => navigate(-1)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Agent</span>
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">94%</div>
              <div className="text-xs text-gray-400">Confidence</div>
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-sm px-4 pb-4">Review agent work and provide feedback</p>
      </div>

      {/* Tabs */}
      <div className="bg-gray-900 px-4">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('output')}
            className={`flex items-center gap-2 px-6 py-3 rounded-t-lg transition-colors ${
              activeTab === 'output'
                ? 'bg-gray-800 text-white'
                : 'bg-transparent text-gray-400 hover:text-white'
            }`}
          >
            <Eye className="w-4 h-4" />
            Output
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`flex items-center gap-2 px-6 py-3 rounded-t-lg transition-colors ${
              activeTab === 'feedback'
                ? 'bg-gray-800 text-white'
                : 'bg-transparent text-gray-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Feedback
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex items-center gap-2 px-6 py-3 rounded-t-lg transition-colors ${
              activeTab === 'history'
                ? 'bg-gray-800 text-white'
                : 'bg-transparent text-gray-400 hover:text-white'
            }`}
          >
            <Clock className="w-4 h-4" />
            History
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-950 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-6">
          {activeTab === 'output' && (
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-white">Test Case Generator Agent Output</h2>
                  <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                    pending review
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span>Generated 8/2/2025, 9:55:13 AM</span>
                  <span className="text-blue-400">Confidence: 85%</span>
                </div>

                {/* Placeholder for agent output */}
                <div className="bg-gray-800/50 rounded-lg p-12 text-center">
                  <p className="text-gray-400 text-lg">
                    Agent analysis and recommendations will appear here.
                  </p>
                </div>

                {/* Progress bar */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Status: In Progress</span>
                    <span className="text-sm text-white font-semibold">75%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 mt-6">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
                    <Copy className="w-4 h-4" />
                    Copy
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-2">Provide Feedback</h2>
                <p className="text-gray-400 text-sm mb-6">
                  Review the agent's work and provide guidance for improvement
                </p>

                {/* Feedback options */}
                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => setFeedbackOption('approve')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                      feedbackOption === 'approve'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    Approve
                  </button>
                  <button
                    onClick={() => setFeedbackOption('revision')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                      feedbackOption === 'revision'
                        ? 'bg-yellow-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <Edit3 className="w-4 h-4" />
                    Request Revision
                  </button>
                  <button
                    onClick={() => setFeedbackOption('reject')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                      feedbackOption === 'reject'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <XCircle className="w-4 h-4" />
                    Reject
                  </button>
                </div>

                {/* Comments section */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Comments (Optional)
                  </label>
                  <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Add any comments or approval notes..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
                    rows={6}
                  />
                </div>

                {/* Submit button */}
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  <Send className="w-4 h-4" />
                  Submit Approval
                </button>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-4">
              {historyData.map((item) => (
                <div key={item.id} className="bg-gray-900 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-medium">
                        {item.user.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-white">{item.user}</h3>
                        <span className={`px-2 py-1 text-xs rounded ${getHistoryTypeStyle(item.type)}`}>
                          {item.type}
                        </span>
                        <span className="text-sm text-gray-400">{item.date}</span>
                      </div>
                      <p className="text-gray-300">{item.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AgentOutput;