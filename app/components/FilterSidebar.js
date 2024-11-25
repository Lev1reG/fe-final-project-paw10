export default function FilterSidebar({ filters, setFilters }) {
    // Handler to update the genre filter
    const handleGenreChange = (e) => {
    setFilters({
      ...filters,
      genre: e.target.value, // Update the genre
    });
  };

    // Handler to toggle the 'Only available books' filter
    const handleAvailabilityChange = (e) => {
      setFilters({ ...filters, onlyAvailable: e.target.checked });
    };
  
    return (
      <div className="w-full sm:w-1/4 bg-[#F9F6EE] p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Filters</h3>
  
        {/* Genre Filter */}
        <div className="mb-4">
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre</label>
          <select
            id="genre"
            name="genre"
            className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            value={filters.genre}
            onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
          >
            <option value="all">All Genres</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="mystery">Mystery</option>
            <option value="romance">Romance</option>
            {/* Add more genres as needed */}
          </select>
        </div>
  
        {/* Language Filter */}
        <div className="mb-4">
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
          <select
            id="language"
            name="language"
            className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            value={filters.language}
            onChange={(e) => setFilters({ ...filters, language: e.target.value })}
          >
            <option value="all">All Languages</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            {/* Add more languages as needed */}
          </select>
        </div>
  
        {/* Stock Filter */}
        <div className="mb-4">
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="onlyAvailable"
              name="onlyAvailable"
              checked={filters.onlyAvailable}
              onChange={handleAvailabilityChange}
              className="mr-2"
            />
            <label htmlFor="onlyAvailable" className="text-sm text-gray-700">Only available books</label>
          </div>
        </div>
      </div>
    );
  }
  