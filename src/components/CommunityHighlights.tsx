function CommunityHighlights() {
  return (
    <section className="p-6 bg-blue-50 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">Community Highlights</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow space-y-2 text-blue-900">
          <h3 className="text-lg font-semibold">Back-to-School Drive</h3>
          <p className="text-blue-700 text-sm">August 12 @ McGuane Park</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow space-y-2 text-blue-900">
          <h3 className="text-lg font-semibold">Bridgeport Cleanup</h3>
          <p className="text-blue-700 text-sm">Thanks to our amazing volunteers!</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow space-y-2 text-blue-900">
          <h3 className="text-lg font-semibold">Youth Art Showcase</h3>
          <p className="text-blue-700 text-sm">See the gallery from our local talent.</p>
        </div>
      </div>
    </section>
  );
};

export default CommunityHighlights;