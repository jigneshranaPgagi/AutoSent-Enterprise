import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { mockAnalytics } from '../data/mockData';
import { 
  TrendingUp, 
  DollarSign, 
  MessageCircle, 
  Send, 
  Bot,
  Target
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart,
  Bar,
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from 'recharts';

export default function Analytics() {
  // Calculate totals
  const totalRevenue = mockAnalytics.reduce((sum, day) => sum + day.revenue, 0);
  const totalComments = mockAnalytics.reduce((sum, day) => sum + day.comments, 0);
  const totalConversions = mockAnalytics.reduce((sum, day) => sum + day.conversions, 0);
  const avgRPC = mockAnalytics.reduce((sum, day) => sum + day.rpc, 0) / mockAnalytics.length;
  const totalAIResponses = mockAnalytics.reduce((sum, day) => sum + day.aiResponses, 0);
  const conversionRate = (totalConversions / totalComments) * 100;

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900 mb-2">Analytics</h1>
        <p className="text-slate-600">Deep dive into revenue attribution and performance metrics.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Total Revenue (15 days)</CardTitle>
            <DollarSign className="w-4 h-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-slate-900">
              ${totalRevenue.toLocaleString()}
            </div>
            <p className="text-sm text-slate-500 mt-1">
              From {totalConversions} conversions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Average RPC</CardTitle>
            <TrendingUp className="w-4 h-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-purple-600">
              ${avgRPC.toFixed(2)}
            </div>
            <p className="text-sm text-slate-500 mt-1">
              Per comment revenue
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Conversion Rate</CardTitle>
            <Target className="w-4 h-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-green-600">
              {conversionRate.toFixed(1)}%
            </div>
            <p className="text-sm text-slate-500 mt-1">
              Comments to conversions
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue & RPC Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Daily Revenue</CardTitle>
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

        <Card>
          <CardHeader>
            <CardTitle>RPC Trend</CardTitle>
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
                  strokeWidth={3}
                  dot={{ fill: '#ec4899', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Engagement Funnel */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Engagement Funnel (Daily Average)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={mockAnalytics}>
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
                labelFormatter={(label) => new Date(label).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              />
              <Legend />
              <Bar dataKey="comments" fill="#94a3b8" name="Comments" />
              <Bar dataKey="dmsSent" fill="#8b5cf6" name="DMs Sent" />
              <Bar dataKey="aiResponses" fill="#ec4899" name="AI Responses" />
              <Bar dataKey="conversions" fill="#10b981" name="Conversions" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Detailed Metrics Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Daily Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Date</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Comments</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">DMs Sent</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">AI Responses</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Conversions</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Revenue</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">RPC</th>
                </tr>
              </thead>
              <tbody>
                {mockAnalytics.slice().reverse().map((day) => (
                  <tr key={day.date} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4 text-sm text-slate-900">
                      {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-900 text-right">{day.comments}</td>
                    <td className="py-3 px-4 text-sm text-slate-900 text-right">{day.dmsSent}</td>
                    <td className="py-3 px-4 text-sm text-purple-600 text-right font-medium">{day.aiResponses}</td>
                    <td className="py-3 px-4 text-sm text-green-600 text-right font-medium">{day.conversions}</td>
                    <td className="py-3 px-4 text-sm text-slate-900 text-right font-semibold">
                      ${day.revenue.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-sm text-pink-600 text-right font-semibold">
                      ${day.rpc.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
