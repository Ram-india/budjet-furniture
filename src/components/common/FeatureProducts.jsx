import { useEffect, useState } from "react";
import api from "../../api/axios";
import ProductCard from "../products/ProductCard";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/getHomePageProducts")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) =>
        console.error("Featured Products API Error:", err)
      );
  }, []);

  if (!products.length) {
    return (
      <section className="py-16 text-center">
        <p>Loading products...</p>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={`${product.product_id || product.id}-${index}`}
              product={{
                // map API fields to ProductCard expected fields
                product_id: product.product_id || product.id,
                id: product.product_id || product.id,
                slug: product.slug,
                thumb: product.hdImage || product.thumb || product.image,
                title: product.title || product.name,
                category: product.category,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}