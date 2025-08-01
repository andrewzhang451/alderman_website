function QuickActions() {
  return (
    <section className="p-6 bg-blue-100">
      <h2 className="text-2xl font-semibold mb-4 text-center">Quick Actions</h2>
      <div className="flex flex-col gap-4">
        {/* container */}
        <div className="bg-red-100 p-4 rounded-xl shadow text-center hover:scale-105 transition-transform duration-300 space-y-2">
          <h3 className="text-xl font-bold text-red-800">Report an Issue (311)</h3>
          <a href="https://311.chicago.gov/s/?language=en_US" target="_blank" rel="noopener norefferer">
            <button className="mt-2 bg-blue-600 font-bold text-white px-4 py-2 rounded hover:bg-blue-700">
              Submit
            </button>
          </a>
        </div>
        {/* container */}
        <div className="bg-white p-4 rounded-xl shadow text-center hover:scale-105 transition-transform duration-300 space-y-2">
          <h3 className="text-xl font-bold text-blue-800">Schedule a Meeting</h3>
          <button className="mt-2 bg-blue-600 font-bold text-white px-4 py-2 rounded hover:bg-blue-700">
            Book Time
          </button>
        </div>
        <div className="bg-blue-100 p-4 rounded-xl shadow text-center hover:scale-105 transition-transform duration-300 space-y-2">
          <h3 className="text-xl font-bold text-blue-800">City Services</h3>
          <a href="https://www.chicago.gov/city/en/depts/311.html" target="_blank" rel="noopener noreferrer">
            <button className="mt-2 bg-blue-600 font-bold text-white px-4 py-2 rounded hover:bg-blue-700">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;