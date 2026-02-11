import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Zap, 
  MessageCircle, 
  TrendingUp, 
  Brain, 
  Database, 
  Shield, 
  Code, 
  CheckCircle,
  ArrowRight,
  Instagram,
  DollarSign,
  Bot,
  BookOpen,
  BarChart3,
  CreditCard,
  Play,
  ChevronDown,
  Layers,
  Link as LinkIcon,
  Users,
  Award,
  Target
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export default function Proposal() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Overview Section */}
      <OverviewSection />

      {/* System Architecture */}
      <ArchitectureSection />

      {/* Workflow Section */}
      <WorkflowSection />

      {/* Technology Stack */}
      <TechnologySection />

      {/* Deliverables Timeline */}
      <DeliverablesSection />

      {/* Value Proposition */}
      <ValueSection />

      {/* Closing CTA */}
      <ClosingSection />
    </div>
  );
}

// Hero Section
function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowSubtitle(true), 800);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="inline-block mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-300">
            <Zap className="w-14 h-14 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          AutoSent Enterprise
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: showSubtitle ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Transform Instagram Engagement into Revenue
          </p>
          
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-6 py-2 text-sm">
              <Bot className="w-4 h-4 mr-2" />
              RAG AI-Powered
            </Badge>
            <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 px-6 py-2 text-sm">
              <DollarSign className="w-4 h-4 mr-2" />
              Revenue Attribution
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-6 py-2 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise-Ready
            </Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
          <ChevronDown className="w-8 h-8 text-purple-400 mx-auto animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

// Overview Section with Interactive Blocks
function OverviewSection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: MessageCircle,
      title: "Every Comment Counts",
      description: "Turn Instagram comments into sales conversations",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Bot,
      title: "RAG AI Chatbot",
      description: "Brand-aligned, context-aware responses",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Revenue Attribution",
      description: "Track RPC and conversion metrics",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BookOpen,
      title: "Knowledge Management",
      description: "Train your AI with your content",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section className="min-h-screen bg-slate-900 py-24 relative">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Challenge
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Instagram drives engagement, but turning comments into revenue requires intelligent automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <Card 
                  className={`bg-slate-800/50 border-slate-700 text-slate-200 p-6 h-full cursor-pointer transition-all duration-300 ${
                    activeFeature === index ? 'scale-105 border-purple-500' : ''
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Solution Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-6 text-white">Our Solution</h3>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              A complete SaaS platform that layers <span className="text-purple-400 font-semibold">analytics</span>, 
              <span className="text-pink-400 font-semibold"> AI intelligence</span>, and 
              <span className="text-blue-400 font-semibold"> revenue tracking</span> on top of your existing automation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Architecture Section with Interactive Diagram
function ArchitectureSection() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    {
      title: "Event Orchestration",
      icon: MessageCircle,
      description: "Routes comments & DMs to templates or AI",
      color: "bg-purple-500"
    },
    {
      title: "RAG AI Engine",
      icon: Brain,
      description: "Context-aware, brand-aligned responses",
      color: "bg-pink-500"
    },
    {
      title: "Knowledge Base",
      icon: Database,
      description: "Documents, URLs, Q&A with versioning",
      color: "bg-blue-500"
    },
    {
      title: "Analytics & Attribution",
      icon: BarChart3,
      description: "RPC tracking & revenue insights",
      color: "bg-emerald-500"
    },
    {
      title: "Creator Dashboard",
      icon: Layers,
      description: "Next.js control center for creators",
      color: "bg-orange-500"
    },
    {
      title: "Billing & Subscriptions",
      icon: CreditCard,
      description: "Stripe integration with usage enforcement",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="min-h-screen bg-slate-900 py-24">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            System Architecture
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Modular, scalable, and enterprise-ready
          </p>
        </motion.div>

        {/* Architecture Layers */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveLayer(activeLayer === index ? null : index)}
                  className="cursor-pointer"
                >
                  <Card 
                    className={`bg-slate-800/50 border-slate-700 text-slate-200 p-6 h-full transition-all duration-300 ${
                      activeLayer === index ? 'scale-105 border-purple-500 shadow-lg shadow-purple-500/20' : ''
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-xl ${layer.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{layer.title}</h3>
                    <motion.p 
                      className="text-slate-400 text-sm"
                      animate={{ 
                        height: activeLayer === index ? 'auto' : '3em',
                        opacity: activeLayer === index ? 1 : 0.7
                      }}
                    >
                      {layer.description}
                    </motion.p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Architecture Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700 rounded-3xl p-8"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: ArrowRight, label: "" },
                { icon: MessageCircle, label: "Automation" },
                { icon: ArrowRight, label: "" },
                { icon: Brain, label: "RAG AI" },
                { icon: ArrowRight, label: "" },
                { icon: DollarSign, label: "Revenue" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    {item.label ? (
                      <>
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-2">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm text-slate-400">{item.label}</span>
                      </>
                    ) : (
                      <Icon className="w-8 h-8 text-purple-400" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Workflow Section with Step-by-Step Animation
function WorkflowSection() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: MessageCircle,
      title: "Comment Received",
      description: "User comments on Instagram post",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Event Triggered",
      description: "Automation engine captures event",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Brain,
      title: "AI Processes",
      description: "RAG retrieves context & generates response",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "DM Sent",
      description: "Personalized message delivered",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Tracked",
      description: "Analytics captures entire journey",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: DollarSign,
      title: "Revenue",
      description: "Conversion attributed to source",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-slate-900 py-24">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From comment to conversion, fully automated
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isPast = index < currentStep;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  onClick={() => setCurrentStep(index)}
                  className="cursor-pointer"
                >
                  <Card 
                    className={`bg-slate-800/50 border-slate-700 text-slate-200 p-6 h-full transition-all duration-500 relative overflow-hidden ${
                      isActive ? 'scale-105 border-purple-500 shadow-lg shadow-purple-500/20' : ''
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 ${
                        isActive ? 'animate-pulse' : ''
                      }`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-3xl font-bold text-slate-600">0{index + 1}</span>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      
                      <p className="text-slate-400">{step.description}</p>
                      
                      {(isActive || isPast) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="mt-4"
                        >
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        </motion.div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <motion.div 
            className="mt-12 h-2 bg-slate-800 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Technology Stack Section
function TechnologySection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const techStack = {
    frontend: [
      { name: "Next.js", icon: Code, color: "text-slate-300" },
      { name: "TailwindCSS", icon: Layers, color: "text-cyan-400" },
      { name: "React Query", icon: Database, color: "text-red-400" }
    ],
    backend: [
      { name: "FastAPI", icon: Zap, color: "text-emerald-400" },
      { name: "PostgreSQL", icon: Database, color: "text-blue-400" },
      { name: "Redis", icon: Database, color: "text-red-500" }
    ],
    ai: [
      { name: "OpenAI", icon: Brain, color: "text-purple-400" },
      { name: "pgvector", icon: Database, color: "text-pink-400" },
      { name: "RAG Pipeline", icon: Bot, color: "text-blue-400" }
    ],
    integrations: [
      { name: "Stripe", icon: CreditCard, color: "text-indigo-400" },
      { name: "SendGrid", icon: MessageCircle, color: "text-blue-400" },
      { name: "Segment", icon: BarChart3, color: "text-green-400" }
    ]
  };

  return (
    <section className="min-h-screen bg-slate-900 py-24">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Enterprise-grade tools for production-ready deployment
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(techStack).map(([category, techs], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              className="cursor-pointer"
            >
              <Card 
                className={`bg-slate-800/50 border-slate-700 text-slate-200 p-6 transition-all duration-300 ${
                  selectedCategory === category ? 'scale-105 border-purple-500' : ''
                }`}
              >
                <h3 className="text-2xl font-semibold mb-6 capitalize text-purple-400">
                  {category === 'ai' ? 'AI & ML' : category}
                </h3>
                <div className="space-y-4">
                  {techs.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: selectedCategory === category || !selectedCategory ? 1 : 0.5,
                          x: 0 
                        }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg"
                      >
                        <Icon className={`w-6 h-6 ${tech.color}`} />
                        <span className="font-medium">{tech.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Deliverables Timeline Section
function DeliverablesSection() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  const weeks = [
    { week: 1, title: "Foundation", items: ["System Architecture", "Backend Setup", "Database Schema", "Frontend Base"] },
    { week: 2, title: "Integration", items: ["Automation Connect", "Event Orchestration", "State Storage", "Reliability"] },
    { week: 3, title: "Authentication", items: ["Creator Auth", "Workspace Isolation", "Dashboard Skeleton"] },
    { week: 4, title: "Knowledge Base", items: ["Document Upload", "URL Scraping", "Q&A Management", "Versioning"] },
    { week: 5, title: "RAG Setup", items: ["Text Processing", "Embeddings", "Vector Storage", "Retrieval Engine"] },
    { week: 6, title: "AI Responses", items: ["RAG Bot", "Context Handling", "Confidence Scoring", "Auto-Learning"] },
    { week: 7, title: "Analytics", items: ["Event Pipeline", "Revenue Attribution", "RPC Metrics", "Validation"] },
    { week: 8, title: "Dashboard Core", items: ["Live Screens", "UI Components", "API Integration"] },
    { week: 9, title: "Gallery & Insights", items: ["Living Gallery", "AI Recommendations", "Performance Tuning"] },
    { week: 10, title: "Testing", items: ["E2E Testing", "Isolation Tests", "Load Testing", "UX Polish"] },
    { week: 11, title: "Deployment", items: ["Production Deploy", "Monitoring", "Documentation", "Go-Live"] }
  ];

  return (
    <section className="min-h-screen bg-slate-900 py-24">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            11-Week Delivery
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Structured, sprint-based development
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {weeks.map((week, index) => {
              const isExpanded = expandedWeek === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => setExpandedWeek(isExpanded ? null : index)}
                  className="cursor-pointer"
                >
                  <Card 
                    className={`bg-slate-800/50 border-slate-700 text-slate-200 p-6 transition-all duration-300 ${
                      isExpanded ? 'border-purple-500 shadow-lg shadow-purple-500/20' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center font-bold">
                          W{week.week}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{week.title}</h3>
                          <p className="text-sm text-slate-400">Week {week.week} of 11</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6 text-purple-400" />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-slate-700 grid grid-cols-1 md:grid-cols-2 gap-2">
                        {week.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Value Proposition Section
function ValueSection() {
  return (
    <section>
      
    </section>
  );
}

// Closing CTA Section
function ClosingSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="inline-block mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center">
            <Zap className="w-14 h-14 text-white" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Ready to Transform Your Instagram?
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6"
        >
          
          <a href="https://docs.google.com/document/d/1ZNAAIT77Oi_iwnIQ96ygaGO9vS7mEmRFdhsyTOpcDvY/edit?usp=sharing">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-xl">
            
            <Play className="w-5 h-5 mr-2" />
            View Detailed Proposal Doc
          </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-slate-500"
        >
          
        </motion.div>
        <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Users, label: "50+ Experts", value: "Full-Stack Team" },
              { icon: Award, label: "Enterprise", value: "Production-Ready" },
              { icon: Shield, label: "Secure", value: "Bank-Grade Security" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border-slate-700 p-8 text-center">
                    <Icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2 text-white">{stat.value}</div>
                    <div className="text-slate-400">{stat.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          
        </div>
        <p>© 2026 PG-AGI. Enterprise AI Solutions.</p>
      </div>
      
      </div>
      
    </section>
  );
}
