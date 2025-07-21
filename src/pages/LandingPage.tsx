import Header from "../components/Header";
import CommunityHighlights from "../components/CommunityHighlights";
import QuickActions from "../components/QuickActions";
import Navbar from "../components/navbar/navbar";
import Header_image from "../components/header_pic";

function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      <Header_image />
      <Header />
      <CommunityHighlights />
      <QuickActions />
      
    </main>
  );
};

export default LandingPage;