import Header from "../components/Header";
// import CommunityHighlights from "../components/CommunityHighlights";
import QuickActions from "../components/QuickActions";
import Navbar from "../components/navbar/navbar";
import Header_image from "../components/header_pic";
import Carousel from "../components/carousel";
import BriefInfo from "../components/Brief_Info";
import ContactInfo from "../components/contact";

function Home_Page() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <Header_image />
      <Header />
      <div className="flex flex-col md:flex-row items-start justify-center px-4 max-w-screen-lg mx-auto w-full my-10">
        <div className="w-full md:max-w-md">
          <BriefInfo />
        </div>
        <section className="w-full md:w-[280px] md:ml-4 bg-blue-100 rounded-xl shadow">
          <QuickActions />
        </section>
      </div>
      <Carousel />
      {/* <CommunityHighlights />   */}
      <ContactInfo />
    </main>
  );
};

export default Home_Page;