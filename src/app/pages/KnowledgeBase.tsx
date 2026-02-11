import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { mockKnowledgeBase } from '../data/mockData';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Upload, 
  Link as LinkIcon, 
  MessageSquare, 
  FileText, 
  ExternalLink, 
  MoreVertical,
  Plus,
  Search
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Input } from '../components/ui/input';

export default function KnowledgeBase() {
  const documents = mockKnowledgeBase.filter(item => item.type === 'document');
  const urls = mockKnowledgeBase.filter(item => item.type === 'url');
  const qas = mockKnowledgeBase.filter(item => item.type === 'qa');

  const totalChunks = mockKnowledgeBase.reduce((sum, item) => sum + item.chunks, 0);
  const activeItems = mockKnowledgeBase.filter(item => item.status === 'active').length;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'document':
        return <FileText className="w-4 h-4" />;
      case 'url':
        return <LinkIcon className="w-4 h-4" />;
      case 'qa':
        return <MessageSquare className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-700">Active</Badge>;
      case 'processing':
        return <Badge className="bg-blue-100 text-blue-700">Processing</Badge>;
      case 'error':
        return <Badge className="bg-red-100 text-red-700">Error</Badge>;
      default:
        return <Badge className="bg-slate-100 text-slate-700">{status}</Badge>;
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Knowledge Base</h1>
          <p className="text-slate-600">Manage your AI's knowledge sources and training data.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Knowledge
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Total Items</p>
                <p className="text-2xl font-semibold text-slate-900">{mockKnowledgeBase.length}</p>
              </div>
              <FileText className="w-8 h-8 text-slate-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Active Sources</p>
                <p className="text-2xl font-semibold text-green-600">{activeItems}</p>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Total Chunks</p>
                <p className="text-2xl font-semibold text-slate-900">{totalChunks}</p>
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
                <p className="text-sm text-slate-600 mb-1">Latest Version</p>
                <p className="text-2xl font-semibold text-slate-900">v{Math.max(...mockKnowledgeBase.map(i => i.version))}</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                V
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
        <Input
          placeholder="Search knowledge base..."
          className="pl-10"
        />
      </div>

      {/* Upload Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="border-2 border-dashed border-slate-300 hover:border-purple-400 hover:bg-purple-50/50 transition-all cursor-pointer">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center py-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Upload className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Upload Documents</h3>
              <p className="text-sm text-slate-600">PDF, DOCX, CSV files</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-dashed border-slate-300 hover:border-pink-400 hover:bg-pink-50/50 transition-all cursor-pointer">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center py-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3">
                <LinkIcon className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Add Website URL</h3>
              <p className="text-sm text-slate-600">Auto-scrape content</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-dashed border-slate-300 hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center py-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Manual Q&A</h3>
              <p className="text-sm text-slate-600">Add custom responses</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Knowledge Items Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All ({mockKnowledgeBase.length})</TabsTrigger>
          <TabsTrigger value="documents">Documents ({documents.length})</TabsTrigger>
          <TabsTrigger value="urls">URLs ({urls.length})</TabsTrigger>
          <TabsTrigger value="qa">Q&A ({qas.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <KnowledgeList items={mockKnowledgeBase} getTypeIcon={getTypeIcon} getStatusBadge={getStatusBadge} />
        </TabsContent>

        <TabsContent value="documents">
          <KnowledgeList items={documents} getTypeIcon={getTypeIcon} getStatusBadge={getStatusBadge} />
        </TabsContent>

        <TabsContent value="urls">
          <KnowledgeList items={urls} getTypeIcon={getTypeIcon} getStatusBadge={getStatusBadge} />
        </TabsContent>

        <TabsContent value="qa">
          <KnowledgeList items={qas} getTypeIcon={getTypeIcon} getStatusBadge={getStatusBadge} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function KnowledgeList({ 
  items, 
  getTypeIcon, 
  getStatusBadge 
}: { 
  items: any[], 
  getTypeIcon: (type: string) => JSX.Element,
  getStatusBadge: (status: string) => JSX.Element
}) {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="divide-y divide-slate-200">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="p-4 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-purple-600">
                    {getTypeIcon(item.type)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    {getStatusBadge(item.status)}
                    <Badge variant="outline" className="text-xs">
                      v{item.version}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                    <div className="flex items-center gap-1">
                      {item.type === 'url' ? (
                        <>
                          <ExternalLink className="w-3 h-3" />
                          <span className="truncate max-w-xs">{item.source}</span>
                        </>
                      ) : (
                        <>
                          <FileText className="w-3 h-3" />
                          <span>{item.source}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>{item.chunks} chunks</span>
                    <span>•</span>
                    <span>
                      Updated {new Date(item.lastUpdated).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
