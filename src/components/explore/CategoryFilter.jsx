'use client';

export default function CategoryFilter({ selectedCategories, setSelectedCategories, categories }) {
  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((c) => c !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-gray-800">
        Categories
      </h3>

      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat}>
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="accent-sky-500"
              />
              {cat}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
