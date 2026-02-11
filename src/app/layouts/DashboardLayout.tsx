import { Outlet, Link, useLocation } from 'react-router';
import { 
  LayoutDashboard, 
  MessageSquare, 
  BookOpen, 
  Image, 
  TrendingUp, 
  Settings,
  Instagram,
  Zap
} from 'lucide-react';

export default function DashboardLayout() {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { path: '/dashboard/conversations', label: 'Conversations', icon: MessageSquare },
    { path: '/dashboard/knowledge', label: 'Knowledge Base', icon: BookOpen },
    { path: '/dashboard/gallery', label: 'Living Gallery', icon: Image },
    { path: '/dashboard/analytics', label: 'Analytics', icon: TrendingUp },
    { path: '/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-slate-900">AutoSent</h1>
              <p className="text-xs text-slate-500">Enterprise</p>
            </div>
          </div>
        </div>

        {/* Instagram Account */}
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
            <Instagram className="w-5 h-5 text-purple-600" />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-slate-900 truncate">@fashionbrand</p>
              <p className="text-xs text-slate-500">Connected</p>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                  ${active 
                    ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-900' 
                    : 'text-slate-600 hover:bg-slate-50'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              FB
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">Fashion Brand</p>
              <p className="text-xs text-slate-500">Pro Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}