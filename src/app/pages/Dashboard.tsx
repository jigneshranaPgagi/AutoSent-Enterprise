import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowUp, ArrowDown, DollarSign, MessageCircle, Bot, Target, TrendingUp, AlertCircle } from 'lucide-react';
import { overviewStats, mockAnalytics, mockConversations } from '../data/mockData';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Badge } from '../components/ui/badge';

export default function Dashboard() {
  // Calculate trends
  const recentRevenue = mockAnalytics.slice(-7).reduce((sum, day) => sum + day.revenue, 0);
  const previousRevenue = mockAnalytics.slice(-14, -7).reduce((sum, day) => sum + day.revenue, 0);
  const revenueTrend = ((recentRevenue - previousRevenue) / previousRevenue) * 100;

  const recentRPC = mockAnalytics.slice(-7).reduce((sum, day) => sum + day.rpc, 0) / 7;
  const previousRPC = mockAnalytics.slice(-14, -7).reduce((sum, day) => sum + day.rpc, 0) / 7;
  const rpcTrend = ((recentRPC - previousRPC) / previousRPC) * 100;

  const hotLeads = mockConversations.filter(c => c.status === 'hot-lead');

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900 mb-2">Overview</h1>
        <p className="text-slate-600">Welcome back! Here's what's happening with your Instagram automation.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Total Revenue</CardTitle>
            <DollarSign className="w-4 h-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-slate-900">
              ${overviewStats.totalRevenue.toLocaleString()}
            </div>
            <div className="flex items-center gap-1 mt-1">
              {revenueTrend > 0 ? (
                <>
                  <ArrowUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">+{revenueTrend.toFixed(1)}%</span>
                </>
              ) : (
                <>
                  <ArrowDown className="w-4 h-4 text-red-600" />
                  <span className="text-sm text-red-600">{revenueTrend.toFixed(1)}%</span>
                </>
              )}
              <span className="text-sm text-slate-500 ml-1">vs last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Avg RPC</CardTitle>
            <TrendingUp className="w-4 h-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-slate-900">
              ${overviewStats.avgRPC.toFixed(2)}
            </div>
            <div className="flex items-center gap-1 mt-1">
              {rpcTrend > 0 ? (
                <>
                  <ArrowUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">+{rpcTrend.toFixed(1)}%</span>
                </>
              ) : (
                <>
                  <ArrowDown className="w-4 h-4 text-red-600" />
                  <span className="text-sm text-red-600">{rpcTrend.toFixed(1)}%</span>
                </>
              )}
              <span className="text-sm text-slate-500 ml-1">vs last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Total Conversations</CardTitle>
            <MessageCircle className="w-4 h-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-slate-900">
              {overviewStats.totalConversations.toLocaleString()}
            </div>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-sm text-slate-600">{hotLeads.length} hot leads</span>
              <span className="text-sm text-slate-400">right now</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">AI Confidence</CardTitle>
            <Bot className="w-4 h-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-slate-900">
              {(overviewStats.aiConfidenceAvg * 100).toFixed(0)}%
            </div>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-sm text-green-600">Excellent</span>
              <span className="text-sm text-slate-400">quality</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={mockAnalytics}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="date" 
                  stroke="#64748b"
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                />
                <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  formatter={(value: number) => `$${value.toLocaleString()}`}
                  labelFormatter={(label) => new Date(label).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* RPC Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Per Comment (RPC)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockAnalytics}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="date" 
                  stroke="#64748b"
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                />
                <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  formatter={(value: number) => `$${value.toFixed(2)}`}
                  labelFormatter={(label) => new Date(label).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                />
                <Line 
                  type="monotone" 
                  dataKey="rpc" 
                  stroke="#ec4899" 
                  strokeWidth={2}
                  dot={{ fill: '#ec4899', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Hot Leads & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hot Leads */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Hot Leads</CardTitle>
            <Target className="w-5 h-5 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {hotLeads.slice(0, 5).map((conversation) => (
                <div key={conversation.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <img 
                    src={conversation.avatar} 
                    alt={conversation.username}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-sm text-slate-900">{conversation.username}</p>
                      <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                        Hot
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.revenueAttribution > 0 && (
                    <div className="text-right">
                      <p className="text-sm font-semibold text-green-600">
                        ${conversation.revenueAttribution}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>AI Insights & Recommendations</CardTitle>
            <AlertCircle className="w-5 h-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-green-900 mb-1">Strong Performance</h4>
                    <p className="text-sm text-green-700">Your RPC increased by 8.2% this week. Posts with product photos perform 34% better.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900 mb-1">AI Training Opportunity</h4>
                    <p className="text-sm text-blue-700">23 high-confidence responses ready to expand your knowledge base. Review now to improve AI quality.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-900 mb-1">Engagement Spike Detected</h4>
                    <p className="text-sm text-amber-700">Comments on "Spring essentials" post are 2.3x higher than average. Consider similar content.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
