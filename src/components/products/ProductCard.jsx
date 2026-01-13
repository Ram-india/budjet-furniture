import { Link } from "react-router-dom";
// import { getImageUrl } from "../utils/getImageUrl";

// src/components/shop/ProductCard.jsx
export default function ProductCard({ product }) {
  const productId = product.id || product.product_id;
  const slug = product.slug || (product.title || product.name || "").toString().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const imgSrc = product.thumb || product.image || product.hdImage || product.img || "/images/product-placeholder.webp";

  return (
    <Link to={`/products/${slug}?id=${productId}`} className="group">
      <div className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-lg transition">

      {/* Image */}
      <div className="overflow-hidden bg-gray-50">
        <img
        
          src={product.hdImage}
          alt={product.title || product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = "/images/placeholder.png";
          }}
        />
      </div>

      {/* Content */}
      <div className="mt-4 text-center">
        <h3 className="font-medium text-primary">
          {product.title || product.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {product.category}
        </p>
      </div>
    </div>
    </Link>
  );
}