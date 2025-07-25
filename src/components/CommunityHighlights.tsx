function CommunityHighlights() {
  return (
    <section className="p-6 bg-blue-100">
      <h2 className="text-2xl font-semibold mb-4 text-center">Community Highlights</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Back-to-School Drive</h3>
          <p className="text-gray-600">August 12 @ McGuane Park</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Bridgeport Cleanup</h3>
          <p className="text-gray-600">Thanks to our amazing volunteers!</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Youth Art Showcase</h3>
          <p className="text-gray-600">See the gallery from our local talent.</p>
        </div>
      </div>
    </section>
  );
};

export default CommunityHighlights;