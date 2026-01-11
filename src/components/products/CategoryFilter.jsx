// src/components/products/CategoryFilter.jsx
import { FiFilter } from "react-icons/fi";

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <aside className="text-sm sm:text-base">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <FiFilter className="w-5 h-5 text-primary" />
        <h4 className="font-bold text-base sm:text-lg text-primary">Categories</h4>
      </div>

      {/* Category List */}
      <div className="space-y-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`w-full text-left px-4 py-3 sm:py-3.5 rounded-lg font-medium transition-all duration-300 ${
              active === cat
                ? "bg-primary text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-primary border border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{cat}</span>
              {active === cat && (
                <span className="w-5 h-5 flex items-center justify-center text-white text-sm">✓</span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Description */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
          💡 Select a category to filter products and find exactly what you're looking for.
        </p>
      </div>
    </aside>
  );
}