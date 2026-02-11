// Mock data for AutoSent_Enterprise

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  timestamp: Date;
  comments: number;
  dmsSent: number;
  aiResponses: number;
  clicks: number;
  conversions: number;
  revenue: number;
  rpc: number;
  avgConfidence: number;
  avgDepth: number;
  engagementVelocity: number;
}

export interface Conversation {
  id: string;
  username: string;
  avatar: string;
  lastMessage: string;
  timestamp: Date;
  status: 'hot-lead' | 'engaged' | 'new' | 'cold';
  aiConfidence: number;
  depth: number;
  revenueAttribution: number;
  platform: 'instagram';
  source: 'comment' | 'dm' | 'story-reply';
}

export interface KnowledgeBaseItem {
  id: string;
  type: 'document' | 'url' | 'qa';
  title: string;
  source: string;
  lastUpdated: Date;
  chunks: number;
  version: number;
  status: 'active' | 'processing' | 'error';
}

export interface AnalyticsMetric {
  date: string;
  comments: number;
  dmsSent: number;
  aiResponses: number;
  conversions: number;
  revenue: number;
  rpc: number;
}

export const mockPosts: InstagramPost[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    caption: 'New collection drop! 🔥 Limited edition pieces available now.',
    timestamp: new Date('2026-02-08T14:30:00'),
    comments: 247,
    dmsSent: 189,
    aiResponses: 142,
    clicks: 89,
    conversions: 23,
    revenue: 3450,
    rpc: 13.97,
    avgConfidence: 0.87,
    avgDepth: 4.2,
    engagementVelocity: 8.5,
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500',
    caption: 'Behind the scenes of our latest photoshoot 📸',
    timestamp: new Date('2026-02-07T10:15:00'),
    comments: 156,
    dmsSent: 124,
    aiResponses: 98,
    clicks: 67,
    conversions: 18,
    revenue: 2700,
    rpc: 17.31,
    avgConfidence: 0.92,
    avgDepth: 3.8,
    engagementVelocity: 6.2,
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500',
    caption: 'Weekend vibes ✨ What are you wearing today?',
    timestamp: new Date('2026-02-06T16:45:00'),
    comments: 198,
    dmsSent: 145,
    aiResponses: 112,
    clicks: 54,
    conversions: 12,
    revenue: 1800,
    rpc: 9.09,
    avgConfidence: 0.79,
    avgDepth: 3.5,
    engagementVelocity: 7.8,
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500',
    caption: 'Spring essentials you need in your wardrobe 🌸',
    timestamp: new Date('2026-02-05T12:00:00'),
    comments: 312,
    dmsSent: 267,
    aiResponses: 201,
    clicks: 134,
    conversions: 34,
    revenue: 5100,
    rpc: 16.35,
    avgConfidence: 0.88,
    avgDepth: 4.6,
    engagementVelocity: 9.2,
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500',
    caption: 'Customer favorites from last month 💕',
    timestamp: new Date('2026-02-04T09:30:00'),
    comments: 89,
    dmsSent: 71,
    aiResponses: 58,
    clicks: 38,
    conversions: 9,
    revenue: 1350,
    rpc: 15.17,
    avgConfidence: 0.85,
    avgDepth: 3.2,
    engagementVelocity: 4.5,
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500',
    caption: 'Style tips for the modern woman 👗',
    timestamp: new Date('2026-02-03T15:20:00'),
    comments: 134,
    dmsSent: 98,
    aiResponses: 76,
    clicks: 45,
    conversions: 11,
    revenue: 1650,
    rpc: 12.31,
    avgConfidence: 0.81,
    avgDepth: 3.9,
    engagementVelocity: 5.6,
  },
];

export const mockConversations: Conversation[] = [
  {
    id: '1',
    username: '@sarah_jones',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    lastMessage: "I'm interested in the blue dress! What sizes do you have available?",
    timestamp: new Date('2026-02-10T11:23:00'),
    status: 'hot-lead',
    aiConfidence: 0.94,
    depth: 5,
    revenueAttribution: 150,
    platform: 'instagram',
    source: 'comment',
  },
  {
    id: '2',
    username: '@emma_style',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    lastMessage: 'Can you send me more photos of the collection?',
    timestamp: new Date('2026-02-10T11:15:00'),
    status: 'hot-lead',
    aiConfidence: 0.89,
    depth: 4,
    revenueAttribution: 0,
    platform: 'instagram',
    source: 'dm',
  },
  {
    id: '3',
    username: '@fashion_lover23',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
    lastMessage: 'Do you ship internationally?',
    timestamp: new Date('2026-02-10T10:58:00'),
    status: 'engaged',
    aiConfidence: 0.92,
    depth: 3,
    revenueAttribution: 0,
    platform: 'instagram',
    source: 'comment',
  },
  {
    id: '4',
    username: '@mia_boutique',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100',
    lastMessage: 'Love this! When will you restock?',
    timestamp: new Date('2026-02-10T10:42:00'),
    status: 'hot-lead',
    aiConfidence: 0.87,
    depth: 4,
    revenueAttribution: 220,
    platform: 'instagram',
    source: 'story-reply',
  },
  {
    id: '5',
    username: '@olivia_chic',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100',
    lastMessage: 'Thanks for the info!',
    timestamp: new Date('2026-02-10T10:15:00'),
    status: 'engaged',
    aiConfidence: 0.78,
    depth: 2,
    revenueAttribution: 0,
    platform: 'instagram',
    source: 'comment',
  },
  {
    id: '6',
    username: '@style_queen',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100',
    lastMessage: 'What payment methods do you accept?',
    timestamp: new Date('2026-02-10T09:47:00'),
    status: 'engaged',
    aiConfidence: 0.91,
    depth: 3,
    revenueAttribution: 0,
    platform: 'instagram',
    source: 'dm',
  },
  {
    id: '7',
    username: '@fashionista_emily',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100',
    lastMessage: 'Beautiful collection! 😍',
    timestamp: new Date('2026-02-10T09:20:00'),
    status: 'new',
    aiConfidence: 0.65,
    depth: 1,
    revenueAttribution: 0,
    platform: 'instagram',
    source: 'comment',
  },
  {
    id: '8',
    username: '@grace_fashion',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
    lastMessage: 'Is the red jacket still available?',
    timestamp: new Date('2026-02-10T08:55:00'),
    status: 'hot-lead',
    aiConfidence: 0.93,
    depth: 6,
    revenueAttribution: 340,
    platform: 'instagram',
    source: 'comment',
  },
];

export const mockKnowledgeBase: KnowledgeBaseItem[] = [
  {
    id: '1',
    type: 'document',
    title: 'Product Catalog 2026',
    source: 'product-catalog-2026.pdf',
    lastUpdated: new Date('2026-02-01T10:00:00'),
    chunks: 47,
    version: 3,
    status: 'active',
  },
  {
    id: '2',
    type: 'url',
    title: 'Shipping & Returns Policy',
    source: 'https://yourstore.com/shipping-returns',
    lastUpdated: new Date('2026-01-28T14:30:00'),
    chunks: 12,
    version: 2,
    status: 'active',
  },
  {
    id: '3',
    type: 'qa',
    title: 'International Shipping FAQ',
    source: 'Manual Entry',
    lastUpdated: new Date('2026-02-05T09:15:00'),
    chunks: 8,
    version: 1,
    status: 'active',
  },
  {
    id: '4',
    type: 'document',
    title: 'Brand Voice Guidelines',
    source: 'brand-voice-2026.docx',
    lastUpdated: new Date('2026-01-15T11:20:00'),
    chunks: 23,
    version: 1,
    status: 'active',
  },
  {
    id: '5',
    type: 'url',
    title: 'Size Guide',
    source: 'https://yourstore.com/size-guide',
    lastUpdated: new Date('2026-02-08T16:45:00'),
    chunks: 15,
    version: 4,
    status: 'active',
  },
  {
    id: '6',
    type: 'document',
    title: 'Q1 2026 Collection Info',
    source: 'q1-collection-info.pdf',
    lastUpdated: new Date('2026-02-09T13:00:00'),
    chunks: 34,
    version: 1,
    status: 'processing',
  },
  {
    id: '7',
    type: 'qa',
    title: 'Payment Methods',
    source: 'Manual Entry',
    lastUpdated: new Date('2026-01-20T10:30:00'),
    chunks: 5,
    version: 1,
    status: 'active',
  },
];

export const mockAnalytics: AnalyticsMetric[] = [
  { date: '2026-01-27', comments: 412, dmsSent: 324, aiResponses: 256, conversions: 58, revenue: 8700, rpc: 21.12 },
  { date: '2026-01-28', comments: 389, dmsSent: 298, aiResponses: 241, conversions: 52, revenue: 7800, rpc: 20.05 },
  { date: '2026-01-29', comments: 445, dmsSent: 356, aiResponses: 289, conversions: 64, revenue: 9600, rpc: 21.57 },
  { date: '2026-01-30', comments: 398, dmsSent: 312, aiResponses: 267, conversions: 61, revenue: 9150, rpc: 22.99 },
  { date: '2026-01-31', comments: 467, dmsSent: 378, aiResponses: 301, conversions: 71, revenue: 10650, rpc: 22.80 },
  { date: '2026-02-01', comments: 502, dmsSent: 421, aiResponses: 334, conversions: 78, revenue: 11700, rpc: 23.31 },
  { date: '2026-02-02', comments: 478, dmsSent: 389, aiResponses: 312, conversions: 69, revenue: 10350, rpc: 21.65 },
  { date: '2026-02-03', comments: 434, dmsSent: 367, aiResponses: 289, conversions: 63, revenue: 9450, rpc: 21.77 },
  { date: '2026-02-04', comments: 389, dmsSent: 312, aiResponses: 254, conversions: 57, revenue: 8550, rpc: 21.98 },
  { date: '2026-02-05', comments: 512, dmsSent: 445, aiResponses: 356, conversions: 82, revenue: 12300, rpc: 24.02 },
  { date: '2026-02-06', comments: 498, dmsSent: 412, aiResponses: 334, conversions: 76, revenue: 11400, rpc: 22.89 },
  { date: '2026-02-07', comments: 456, dmsSent: 378, aiResponses: 301, conversions: 68, revenue: 10200, rpc: 22.37 },
  { date: '2026-02-08', comments: 547, dmsSent: 467, aiResponses: 389, conversions: 89, revenue: 13350, rpc: 24.40 },
  { date: '2026-02-09', comments: 523, dmsSent: 445, aiResponses: 367, conversions: 84, revenue: 12600, rpc: 24.09 },
  { date: '2026-02-10', comments: 436, dmsSent: 356, aiResponses: 289, conversions: 67, revenue: 10050, rpc: 23.05 },
];

export const overviewStats = {
  totalRevenue: 156750,
  avgRPC: 22.87,
  totalConversations: 6847,
  hotLeads: 234,
  aiConfidenceAvg: 0.86,
  conversionRate: 14.8,
  activeKnowledgeChunks: 144,
};
