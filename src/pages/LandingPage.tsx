import React from "react";
import Header from "../components/Header";
import CommunityHighlights from "../components/CommunityHighlights";
import QuickActions from "../components/QuickActions";

const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      <CommunityHighlights />
      <QuickActions />
    </main>
  );
};

export default LandingPage;