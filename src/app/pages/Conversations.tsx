import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { mockConversations } from '../data/mockData';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Search, Filter, Instagram, MessageCircle, TrendingUp, DollarSign } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useState } from 'react';
import { Progress } from '../components/ui/progress';

export default function Conversations() {
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'hot-lead':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'engaged':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'new':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'cold':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getSourceIcon = (source: string) => {
    return <Instagram className="w-3 h-3" />;
  };

  const filteredConversations = mockConversations.filter(conv =>
    conv.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hotLeads = filteredConversations.filter(c => c.status === 'hot-lead');
  const engaged = filteredConversations.filter(c => c.status === 'engaged');
  const newConvs = filteredConversations.filter(c => c.status === 'new');

  const totalRevenue = mockConversations
    .reduce((sum, conv) => sum + conv.revenueAttribution, 0);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900 mb-2">Conversations</h1>
        <p className="text-slate-600">Manage and track all Instagram conversations and hot leads.</p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Total Conversations</p>
                <p className="text-2xl font-semibold text-slate-900">{mockConversations.length}</p>
              </div>
              <MessageCircle className="w-8 h-8 text-slate-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Hot Leads</p>
                <p className="text-2xl font-semibold text-orange-600">{hotLeads.length}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Avg AI Confidence</p>
                <p className="text-2xl font-semibold text-slate-900">
                  {(mockConversations.reduce((sum, c) => sum + c.aiConfidence, 0) / mockConversations.length * 100).toFixed(0)}%
                </p>
              </div>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold text-sm">AI</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Revenue Attributed</p>
                <p className="text-2xl font-semibold text-green-600">${totalRevenue}</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filters</span>
        </button>
      </div>

      {/* Conversations Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All ({filteredConversations.length})</TabsTrigger>
          <TabsTrigger value="hot-leads">Hot Leads ({hotLeads.length})</TabsTrigger>
          <TabsTrigger value="engaged">Engaged ({engaged.length})</TabsTrigger>
          <TabsTrigger value="new">New ({newConvs.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <ConversationList conversations={filteredConversations} getStatusColor={getStatusColor} getSourceIcon={getSourceIcon} />
        </TabsContent>

        <TabsContent value="hot-leads">
          <ConversationList conversations={hotLeads} getStatusColor={getStatusColor} getSourceIcon={getSourceIcon} />
        </TabsContent>

        <TabsContent value="engaged">
          <ConversationList conversations={engaged} getStatusColor={getStatusColor} getSourceIcon={getSourceIcon} />
        </TabsContent>

        <TabsContent value="new">
          <ConversationList conversations={newConvs} getStatusColor={getStatusColor} getSourceIcon={getSourceIcon} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ConversationList({ 
  conversations, 
  getStatusColor, 
  getSourceIcon 
}: { 
  conversations: any[], 
  getStatusColor: (status: string) => string,
  getSourceIcon: (source: string) => JSX.Element
}) {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="divide-y divide-slate-200">
          {conversations.map((conversation) => (
            <div 
              key={conversation.id} 
              className="p-4 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <img 
                  src={conversation.avatar} 
                  alt={conversation.username}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-slate-900">{conversation.username}</h3>
                    <Badge className={getStatusColor(conversation.status)}>
                      {conversation.status.replace('-', ' ')}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      {getSourceIcon(conversation.source)}
                      <span className="capitalize">{conversation.source.replace('-', ' ')}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-3">{conversation.lastMessage}</p>

                  {/* Metrics */}
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500">AI Confidence:</span>
                      <div className="flex items-center gap-2">
                        <Progress 
                          value={conversation.aiConfidence * 100} 
                          className="w-16 h-2"
                        />
                        <span className="text-xs font-medium text-slate-700">
                          {(conversation.aiConfidence * 100).toFixed(0)}%
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500">Depth:</span>
                      <span className="text-xs font-medium text-slate-700">{conversation.depth} messages</span>
                    </div>

                    {conversation.revenueAttribution > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500">Revenue:</span>
                        <span className="text-xs font-semibold text-green-600">
                          ${conversation.revenueAttribution}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timestamp */}
                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-slate-500">
                    {new Date(conversation.timestamp).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
