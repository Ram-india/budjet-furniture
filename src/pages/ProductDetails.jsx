import { useEffect, useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { getProducts, getProductsDetails } from "../api/productApi";
import Loading from "../components/common/Loading";
import PageLayout from "../components/common/PageLayout";
import PageHeader from "../components/common/PageHeader";
import Meta from "../components/blog/Meta";
import ProductGallery from "../components/products/ProductGallery";

export default function ProductDetails() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const productIdFromUrl = searchParams.get("id");

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        let detail = null;

        //  Case 1: Direct product ID from URL
        if (productIdFromUrl) {
          const detailRes = await getProductsDetails(productIdFromUrl);

          if (Array.isArray(detailRes.data?.data)) {
            detail = detailRes.data.data[0];
          } else {
            detail = detailRes.data?.data || detailRes.data;
          }

          setProduct(detail);
          return;
        }

        //  Case 2: Find product by slug
        const productsRes = await getProducts();

        let products = Array.isArray(productsRes.data)
          ? productsRes.data
          : productsRes.data?.data || [];

        const foundProduct = products.find(
          (p) =>
            String(p.slug).toLowerCase().trim() ===
            String(slug).toLowerCase().trim()
        );

        if (!foundProduct) {
          setProduct(null);
          return;
        }

        const productId = foundProduct.id || foundProduct.product_id;
        const detailRes = await getProductsDetails(productId);

        if (Array.isArray(detailRes.data?.data)) {
          detail = detailRes.data.data[0];
        } else {
          detail = detailRes.data?.data || detailRes.data;
        }

        setProduct(detail);
      } catch (error) {
        console.error("Product Details API Error:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [slug, productIdFromUrl]);

  // Loading
  if (loading) {
    return <Loading />;
  }

  //  Not found
  if (!product) {
    return (
      <div className="text-center py-24">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Product not found
        </h2>
        <p className="text-gray-600 mb-6">
          The product you are looking for does not exist.
        </p>
        <Link
          to="/products"
          className="inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // STABLE gallery images (VERY IMPORTANT)
  const galleryImages =
    Array.isArray(product.gallery) && product.gallery.length
      ? product.gallery
      : product.slider
      ? [product.slider]
      : [];

  return (
    <section>
      {/* SEO */}
      <Meta data={product} />

      {/* HERO */}
      <PageHeader title={product.title} />

      {/* CONTENT */}
      <PageLayout className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          
          {/* Product Gallery */}
          <ProductGallery
            images={galleryImages}
            title={product.title}
          />

          {/* Product Content */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-6">
              {product.title}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              {product.meta_description ||
                "No description available for this product."}
            </p>

            {product.features?.length > 0 && (
              <div className="mb-8">
                <h4 className="font-semibold mb-3 text-lg">
                  Product Highlights
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/contact"
                className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition"
              >
                Enquire Now
              </Link>

              <Link
                to="/products"
                className="px-6 py-2 border border-primary rounded-full hover-secondary transition"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
    </section>
  );
}