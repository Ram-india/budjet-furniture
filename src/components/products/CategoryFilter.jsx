// src/components/products/CategoryFilter.jsx
export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <aside className="text-sm">

      <h4 className="font-semibold mb-4">Product Categories</h4>

      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => onChange(cat)}
              className={`w-full text-left transition ${
                active === cat
                  ? "font-semibold text-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>

    </aside>
  );
}