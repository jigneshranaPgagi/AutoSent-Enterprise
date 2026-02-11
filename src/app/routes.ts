import { createBrowserRouter } from "react-router";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Conversations from "./pages/Conversations";
import KnowledgeBase from "./pages/KnowledgeBase";
import LivingGallery from "./pages/LivingGallery";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Proposal from "./pages/Proposal";
import Landing from "./pages/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/proposal",
    Component: Proposal,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "conversations", Component: Conversations },
      { path: "knowledge", Component: KnowledgeBase },
      { path: "gallery", Component: LivingGallery },
      { path: "analytics", Component: Analytics },
      { path: "settings", Component: Settings },
    ],
  },
]);