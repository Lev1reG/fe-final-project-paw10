import { useForm, Controller } from "react-hook-form";

export default function FilterSidebar({ filters, setFilters }) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: filters.title || "",
      genre: filters.genre || "",
      language: filters.language || "",
      author: filters.author || "",
      available: filters.available ?? false,
    },
  });

  // Handler to update the filters
  const onSubmit = (data) => {
    setFilters(data);
  };

  return (
    <form
      className="w-full sm:w-1/4 h-fit bg-secondary text-black p-4 shadow-md rounded-lg"
      onChange={handleSubmit(onSubmit)}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Filters</h3>

      {/* Title Filter */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="title"
              name="title"
              type="text"
              className="mt-2 w-full text-black p-2 border border-gray-300 rounded-md"
              placeholder="Search by title"
              value={field.value || ""}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
      </div>

      {/* Genre Filter */}
      <div className="mb-4">
        <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
          Genre
        </label>
        <Controller
          name="genre"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              id="genre"
              name="genre"
              className="mt-2 w-full text-black p-2 border border-gray-300 rounded-md"
              value={field.value || ""}
              onChange={(e) => field.onChange(e.target.value)}
            >
              <option value="">All Genres</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
            </select>
          )}
        />
      </div>

      {/* Language Filter */}
      <div className="mb-4">
        <label htmlFor="language" className="block text-sm font-medium text-gray-700">
          Language
        </label>
        <Controller
          name="language"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              id="language"
              name="language"
              className="mt-2 w-full p-2 text-black border border-gray-300 rounded-md"
              value={field.value || ""}
              onChange={(e) => field.onChange(e.target.value)}
            >
              <option value="">All Languages</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
          )}
        />
      </div>

      {/* Author Filter */}
      <div className="mb-4">
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <Controller
          name="author"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="author"
              name="author"
              type="text"
              className="mt-2 w-full text-black p-2 border border-gray-300 rounded-md"
              placeholder="Search by author"
              value={field.value || ""}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
      </div>

      {/* Stock Filter */}
      <div className="mb-4">
        <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
          Stock
        </label>
        <div className="flex items-center">
          <Controller
            name="available"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="checkbox"
                id="onlyAvailable"
                name="onlyAvailable"
                className="mr-2"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            )}
          />
          <label htmlFor="available" className="text-sm text-gray-700">
            Only available books
          </label>
        </div>
      </div>
    </form>
  );
}

