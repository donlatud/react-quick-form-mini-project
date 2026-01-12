const MovieList = ({ title, year, director, value, onChange }) => {
  const movieId = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <label
      htmlFor={movieId}
      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
    >
      <input
        type="radio"
        id={movieId}
        name="movie"
        value={title}
        checked={value === title}
        onChange={onChange}
        className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 focus:ring-2 border-gray-300"
      />
      <div className="flex-1">
        <div className="font-medium text-gray-900">
          {title} ({year})
        </div>
        <div className="text-sm text-gray-600">Director: {director}</div>
      </div>
    </label>
  );
};

export default MovieList;
