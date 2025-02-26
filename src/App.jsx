import { useState } from "react";
import { data } from "./data";

function App() {
  const [query, setQuery] = useState("");
  const filteredItems = data.filter((person) =>
    `${person.firstName} ${person.lastName}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col items-center p-6 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-10">
        Search Filter
      </h1>
      <div className="w-full max-w-md">
        <input
          className="w-full p-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
          type="text"
          placeholder="Search by name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="w-full max-w-6xl mt-6">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center text-center"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {item.firstName} {item.lastName}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 text-center text-gray-500 bg-white rounded-lg shadow-md">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
