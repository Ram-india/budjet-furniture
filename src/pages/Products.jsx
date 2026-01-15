import React, { useEffect, useState } from "react";
import CategoryFilter from "../components/products/CategoryFilter";
import ProductCard from "../components/products/ProductCard";
import PageHeader from "../components/common/PageHeader";
import PageLayout from "../components/common/PageLayout";
import { getProductCategories, getProducts } from "../api/productApi";
import Loading from "../components/common/Loading";

const Products = () => {
  const [activeCategory, SetActiveCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      // Load cached instantly (offline first)
      try{
        const cachedProducts = JSON.parse(localStorage.getItem("allProducts"));
        const cachedCategories = JSON.parse(localStorage.getItem("allCategories"));
        
        if(cachedProducts) setProducts(cachedProducts);
        if(cachedCategories) setCategories(["All", ...cachedCategories]);
      }catch{
        localStorage.removeItem("allProducts");
        localStorage.removeItem("allCategories")
      }
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          getProducts(),
          getProductCategories(),
        ]);

        // Handle different response structures for products
        let productsList = Array.isArray(productsRes.data)
          ? productsRes.data
          : productsRes.data.data || [];

        if (!Array.isArray(productsList)) {
          productsList = [];
        }

        // Deduplicate products by id or slug to avoid duplicate React keys
        const seen = new Set();
        const deduped = [];
        for (const p of productsList) {
          const key = p.product_id || p.id || p.slug;
          if (!key) {
            // fallback: push if no identifier (should be rare)
            deduped.push(p);
            continue;
          }
          if (!seen.has(String(key))) {
            seen.add(String(key));
            deduped.push(p);
          }
        }

        setProducts(deduped);

        // Handle categories response
        let categoryList = [];
        if (Array.isArray(categoriesRes.data)) {
          categoryList = categoriesRes.data.map((cat) => 
            typeof cat === 'string' ? cat : cat.category
          );
        } else if (categoriesRes.data.data && Array.isArray(categoriesRes.data.data)) {
          categoryList = categoriesRes.data.data.map((cat) => 
            typeof cat === 'string' ? cat : cat.category
          );
        }

        const catList = ["All", ...categoryList];
        setCategories(catList);

       
      } catch (err) {
        console.error("Products API Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="bg-gray-50">
      {/* HERO */}
      <PageHeader
        title="Product"
        subtitle="Browse our exclusive range of furniture."
      />

      <PageLayout className="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onChange={SetActiveCategory}
          />
          {/* Products Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={`${product.product_id || product.id}-${product.slug}`}
                  product={product}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </PageLayout>
    </section>
  );
};

export default Products;
