import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { 
  Instagram, 
  Zap, 
  CreditCard, 
  Bell, 
  Shield, 
  Users,
  CheckCircle
} from 'lucide-react';

export default function Settings() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900 mb-2">Settings</h1>
        <p className="text-slate-600">Manage your account, integrations, and preferences.</p>
      </div>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="instagram">Instagram</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        {/* Account Tab */}
        <TabsContent value="account">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Fashion" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Brand" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="hello@fashionbrand.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" defaultValue="Fashion Brand LLC" />
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Button variant="outline">
                  Update Password
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Instagram Tab */}
        <TabsContent value="instagram">
          <Card>
            <CardHeader>
              <CardTitle>Connected Instagram Accounts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">@fashionbrand</h3>
                    <p className="text-sm text-slate-600">Connected on Feb 1, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Active
                  </Badge>
                  <Button variant="outline" size="sm">
                    Disconnect
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Button variant="outline" className="w-full">
                  <Instagram className="w-4 h-4 mr-2" />
                  Connect Another Account
                </Button>
              </div>

              <div className="space-y-3 pt-4">
                <h4 className="font-medium text-slate-900">Permissions</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Read comments and DMs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Send direct messages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Access story replies</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Automation Tab */}
        <TabsContent value="automation">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Automation Rules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <div>
                    <h4 className="font-medium text-slate-900">Auto-respond to comments</h4>
                    <p className="text-sm text-slate-600">Automatically trigger DMs when users comment on posts</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <div>
                    <h4 className="font-medium text-slate-900">AI-powered responses</h4>
                    <p className="text-sm text-slate-600">Use RAG AI bot for intelligent conversation handling</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <div>
                    <h4 className="font-medium text-slate-900">Auto-learning from high-confidence responses</h4>
                    <p className="text-sm text-slate-600">Automatically expand knowledge base with verified responses</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <div>
                    <h4 className="font-medium text-slate-900">Hot lead notifications</h4>
                    <p className="text-sm text-slate-600">Get notified when high-value conversations are detected</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Confidence Threshold</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Minimum confidence for auto-response</Label>
                  <div className="flex items-center gap-4">
                    <Input type="range" min="0" max="100" defaultValue="75" className="flex-1" />
                    <span className="font-semibold text-slate-900">75%</span>
                  </div>
                  <p className="text-sm text-slate-600">Responses below this threshold will be flagged for review</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Pro Plan</h3>
                      <p className="text-sm text-slate-600">Unlimited conversations & AI responses</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-semibold text-slate-900">$299</p>
                    <p className="text-sm text-slate-600">per month</p>
                  </div>
                </div>

                <div className="mt-6 space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Unlimited Instagram accounts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>RAG-based AI chatbot</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Advanced analytics & revenue attribution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Priority support</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-600">Next billing date: March 1, 2026</p>
                    <Button variant="outline">Change Plan</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-8 h-8 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900">•••• •••• •••• 4242</p>
                      <p className="text-sm text-slate-600">Expires 12/2027</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <h4 className="font-medium text-slate-900">Hot lead alerts</h4>
                  <p className="text-sm text-slate-600">Get notified when high-value conversations are detected</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <h4 className="font-medium text-slate-900">Low AI confidence warnings</h4>
                  <p className="text-sm text-slate-600">Alert when AI responses fall below confidence threshold</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <h4 className="font-medium text-slate-900">Daily performance summary</h4>
                  <p className="text-sm text-slate-600">Receive daily email with key metrics and insights</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <h4 className="font-medium text-slate-900">Weekly analytics report</h4>
                  <p className="text-sm text-slate-600">Get comprehensive weekly performance analysis</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <h4 className="font-medium text-slate-900">Conversion alerts</h4>
                  <p className="text-sm text-slate-600">Get notified when conversations convert to sales</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
