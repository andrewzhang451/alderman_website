import Header from "../components/Header";
import CommunityHighlights from "../components/CommunityHighlights";
import QuickActions from "../components/QuickActions";

function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      <CommunityHighlights />
      <QuickActions />
      
    </main>
  );
};

export default LandingPage;