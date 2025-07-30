function BriefInfo () {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-sky-50 p-6 sm:p-8 rounded-xl shadow-md text-gray-800 space-y-4 text-center w-full max-w-xl border-t-4 border-blue-700 hover:shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-semibold text-blue-800">Alderman Nicole Lee</h2>
        <p>
          Nicole Lee is the Alderwoman of <span className="font-medium text-blue-700">Chicago’s 11th Ward</span>, which includes Bridgeport, Armour Square,
          and parts of Chinatown. She is the first Chinese American woman to serve on Chicago’s City Council.
        </p>
        <p>
          Born and raised in the 11th Ward, Nicole is committed to bringing <span className="font-medium text-blue-700">transparency</span>, 
          <span className="font-medium text-blue-700">accessibility</span>, and <span className="font-medium text-blue-700">equity</span> to local government. 
          She has a strong record of community service and has worked with neighborhood organizations to improve education, public safety, and infrastructure.
        </p>
        <p>
          The 11th Ward is known for its vibrant mix of cultures, small businesses, and historic architecture. Nicole’s vision is to build a stronger 
          and more inclusive Bridgeport and Armour Square through collaboration, investment, and civic engagement.
        </p>
      </div>
    </div>
  );
}

export default BriefInfo;