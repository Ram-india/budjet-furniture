import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function ProductCard({ product }) {
  const productId = product.id || product.product_id;

  const slug = useMemo(() => {
    return (
      product.slug ||
      (product.title || product.name || "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
    );
  }, [product.slug, product.title, product.name]);

  const imgSrc =
    product.thumb ||
    product.hdImage ||
    product.image ||
    product.img ||
    "/images/placeholder.png";

  return (
    <Link to={`/products/${slug}?id=${productId}`} className="group block">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition">

        <div className="overflow-hidden bg-gray-50">
          <img
            src={imgSrc}
            loading="lazy"
            alt={product.title || product.name || "Product image"}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => (e.currentTarget.src = "/images/placeholder.png")}
          />
        </div>

        <div className="mt-4 text-center">
          <h3 className="font-medium text-primary p-2">
            {product.title || product.name}
          </h3>

          {product.category && (
            <p className="text-sm text-gray-500 p-2 bg-gray-50">
              {product.category}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
