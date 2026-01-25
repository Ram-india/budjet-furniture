import { useEffect, useState, useMemo, useRef } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { getProductsDetails, getProductGallery } from "../api/productApi";

import Loading from "../components/common/Loading";
import PageHeader from "../components/common/PageHeader";
import PageLayout from "../components/common/PageLayout";
import ProductGallery from "../components/products/ProductGallery";

export default function ProductDetails() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");

  const [product, setProduct] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!productId || hasFetched.current) return;
    hasFetched.current = true;

    const fetchProduct = async () => {
      try {
        const productRes = await getProductsDetails(productId);

        let productData = null;

        if (Array.isArray(productRes.data)) {
          productData = productRes.data[0];
        } else if (Array.isArray(productRes.data?.data)) {
          productData = productRes.data.data[0];
        } else if (typeof productRes.data === "object") {
          productData = productRes.data;
        }

        if (!productData) {
          setProduct(null);
          return;
        }

        setProduct(productData);

        const galleryRes = await getProductGallery(productId);
        setGallery(galleryRes.data || []);
    
        console.log(galleryRes.data);
       
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (err) {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    

  }, [productId]);
 
  const images = useMemo(() => {
    return gallery.length > 0
      ? gallery
      : product
      ? [{ hdImage: product.slider }]
      : [];
      
  }, [gallery, product]);

  if (loading) return <Loading />;

  if (!product) {
    return (
      <div className="text-center py-24">
        <h2 className="text-3xl font-semibold">Product not found</h2>
        <Link
          to="/products"
          className="inline-block mt-6 px-6 py-2 bg-primary text-white rounded-full"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section>
      <PageHeader title={product.title} />

      <PageLayout className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <ProductGallery images={images} />

          <div>
            <h1 className="text-3xl font-semibold mb-6">{product.title}</h1>
            <div
              className="prose max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />

            <Link
              to="/contact"
              className="inline-block px-6 py-2 bg-primary text-white rounded-full"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </PageLayout>
    </section>
  );
}
