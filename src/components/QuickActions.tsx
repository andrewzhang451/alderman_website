
function QuickActions() {
  return (
    <section className="p-6 bg-blue-100">
      <h2 className="text-2xl font-semibold mb-4 text-center">Quick Actions</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {/* container */}
        <div className="bg-rose-600 p-4 rounded shadow text-center">
          <h3 className="text-xl font-bold">Report an Issue (311)</h3>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </div>
        {/* container */}
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-xl font-bold">Schedule a Meeting</h3>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Book Time
          </button>
          {/* container */}
        </div>
        <div className="bg-sky-400 p-4 rounded shadow text-center">
          <h3 className="text-xl font-bold">City Services</h3>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;