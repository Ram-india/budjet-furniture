// src/pages/ProductDetails.jsx
import { useEffect, useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { getProducts, getProductsDetails } from "../api/productApi";
import Loading from "../components/common/Loading";
import PageLayout from "../components/common/PageLayout";
import { getImageUrl } from "../utils/getImageUrl";

export default function ProductDetails() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const productIdFromUrl = searchParams.get("id");
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        // If we have product ID from URL, fetch directly
        if (productIdFromUrl) {
          console.log("Fetching product with ID:", productIdFromUrl);
          const detailRes = await getProductsDetails(productIdFromUrl);
          
          // Handle different response structures for details
          let detail = null;
          if (detailRes.data.data && Array.isArray(detailRes.data.data)) {
            detail = detailRes.data.data[0];
          } else if (detailRes.data.data && typeof detailRes.data.data === 'object') {
            detail = detailRes.data.data;
          } else {
            detail = detailRes.data;
          }

          // console.log("Product detail from ID:", detail);
          setProduct(detail);
          setLoading(false);
          return;
        }

        // Fallback: Fetch all products and search by slug
        const productsRes = await getProducts();
        
        // Handle different response structures
        let products = Array.isArray(productsRes.data) 
          ? productsRes.data 
          : productsRes.data.data || [];

        // Ensure products is an array
        if (!Array.isArray(products)) {
          products = [];
        }

        // console.log("Products fetched:", products.length);

        // Find product by slug (case-insensitive)
        const foundProduct = products.find(
          p => String(p.slug).toLowerCase().trim() === String(slug).toLowerCase().trim()
        );

        if (!foundProduct) {
          console.log("Product not found with slug:", slug);
          setProduct(null);
          setLoading(false);
          return;
        }

        // console.log("Found product by slug:", foundProduct);

        // Get product details by ID
        const productId = foundProduct.id || foundProduct.product_id;
        const detailRes = await getProductsDetails(productId);
        
        // Handle different response structures for details
        let detail = null;
        if (detailRes.data.data && Array.isArray(detailRes.data.data)) {
          detail = detailRes.data.data[0];
        } else if (detailRes.data.data && typeof detailRes.data.data === 'object') {
          detail = detailRes.data.data;
        } else {
          detail = detailRes.data;
        }

        // console.log("Product detail:", detail);
        setProduct(detail);
      } catch (err) {
        console.error("Product Details API Error:", err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [slug, productIdFromUrl]);
  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Product not found</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
        <Link
          to="/products"
          className="inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <PageLayout className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* Image */}
        <div className="bg-gray-50 p-6">
          <img
          src={getImageUrl(product.slider ,"serviceslider")}
            alt={product.title}
            className="w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-6">
            {product.title}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
            {product.meta_description || "No description available for this product."}
          </p>
          {product.features?.length > 0 && (
            <div>
            <h4 className="font-semibold mb-3 text-base sm:text-lg">
              Product Highlights
            </h4>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          )}
          

          <Link
            to="/products"
            className="inline-block mt-10 px-6 py-2 border border-primary rounded-full hover-secondary transition"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}