import { Card, CardContent } from '../components/ui/card';
import { mockPosts } from '../data/mockData';
import { Badge } from '../components/ui/badge';
import { 
  MessageCircle, 
  Send, 
  MousePointer, 
  ShoppingCart, 
  TrendingUp,
  Zap,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Progress } from '../components/ui/progress';

export default function LivingGallery() {
  const avgRPC = mockPosts.reduce((sum, post) => sum + post.rpc, 0) / mockPosts.length;

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900 mb-2">Living Gallery</h1>
        <p className="text-slate-600">Post-level engagement visualization with revenue attribution.</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPosts.map((post) => {
          const rpcPerformance = ((post.rpc - avgRPC) / avgRPC) * 100;
          const conversionRate = (post.conversions / post.comments) * 100;

          return (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* Post Image */}
              <div className="relative h-64 bg-slate-100">
                <img 
                  src={post.imageUrl} 
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
                {/* Performance Badge */}
                {rpcPerformance > 10 && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Top Performer
                    </Badge>
                  </div>
                )}
                {post.engagementVelocity > 8 && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                      <Zap className="w-3 h-3 mr-1" />
                      High Velocity
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-4 space-y-4">
                {/* Caption */}
                <p className="text-sm text-slate-700 line-clamp-2">{post.caption}</p>

                {/* Revenue Metrics */}
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Revenue Generated</p>
                    <p className="text-xl font-semibold text-slate-900">${post.revenue.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-600 mb-1">RPC</p>
                    <div className="flex items-center gap-1">
                      <p className="text-xl font-semibold text-purple-600">${post.rpc.toFixed(2)}</p>
                      {rpcPerformance > 0 ? (
                        <ArrowUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Engagement Funnel */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-600">Comments</span>
                    </div>
                    <span className="font-semibold text-slate-900">{post.comments}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-600">DMs Sent</span>
                    </div>
                    <span className="font-semibold text-slate-900">{post.dmsSent}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-100 rounded flex items-center justify-center">
                        <span className="text-purple-600 font-semibold text-[10px]">AI</span>
                      </div>
                      <span className="text-slate-600">AI Responses</span>
                    </div>
                    <span className="font-semibold text-slate-900">{post.aiResponses}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <MousePointer className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-600">Clicks</span>
                    </div>
                    <span className="font-semibold text-slate-900">{post.clicks}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-green-600" />
                      <span className="text-slate-600">Conversions</span>
                    </div>
                    <span className="font-semibold text-green-600">{post.conversions}</span>
                  </div>
                </div>

                {/* AI Confidence */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>AI Confidence</span>
                    <span className="font-semibold">{(post.avgConfidence * 100).toFixed(0)}%</span>
                  </div>
                  <Progress value={post.avgConfidence * 100} className="h-2" />
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200">
                  <div className="text-center">
                    <p className="text-xs text-slate-500 mb-1">Conv. Rate</p>
                    <p className="text-sm font-semibold text-slate-900">{conversionRate.toFixed(1)}%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-500 mb-1">Avg Depth</p>
                    <p className="text-sm font-semibold text-slate-900">{post.avgDepth}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-500 mb-1">Velocity</p>
                    <p className="text-sm font-semibold text-slate-900">{post.engagementVelocity.toFixed(1)}</p>
                  </div>
                </div>

                {/* Timestamp */}
                <p className="text-xs text-slate-400 text-center">
                  {new Date(post.timestamp).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Summary Stats */}
      <Card className="mt-8">
        <CardContent className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Gallery Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div>
              <p className="text-sm text-slate-600 mb-1">Total Posts</p>
              <p className="text-2xl font-semibold text-slate-900">{mockPosts.length}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Total Comments</p>
              <p className="text-2xl font-semibold text-slate-900">
                {mockPosts.reduce((sum, p) => sum + p.comments, 0)}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Total DMs</p>
              <p className="text-2xl font-semibold text-slate-900">
                {mockPosts.reduce((sum, p) => sum + p.dmsSent, 0)}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">AI Responses</p>
              <p className="text-2xl font-semibold text-purple-600">
                {mockPosts.reduce((sum, p) => sum + p.aiResponses, 0)}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Conversions</p>
              <p className="text-2xl font-semibold text-green-600">
                {mockPosts.reduce((sum, p) => sum + p.conversions, 0)}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Total Revenue</p>
              <p className="text-2xl font-semibold text-green-600">
                ${mockPosts.reduce((sum, p) => sum + p.revenue, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
