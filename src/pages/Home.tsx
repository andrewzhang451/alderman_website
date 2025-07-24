import Header from "../components/Header";
import CommunityHighlights from "../components/CommunityHighlights";
import QuickActions from "../components/QuickActions";
import Navbar from "../components/navbar/navbar";
import Header_image from "../components/header_pic";
import Carousel from "../components/carousel";

function Home_Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      <Header_image />
      <Header />
      <Carousel />
      <CommunityHighlights />
      <QuickActions />
      
    </main>
  );
};

export default Home_Page;