import { useParams, useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogs, getBlogDetailsById, getBlogDetailsBySlug } from "../api/blogApi";
import PageLayout from "../components/common/PageLayout";
import { getImageUrl } from "../utils/getImageUrl";

export default function BlogDetail() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const blogIdFromUrl = searchParams.get("id");

  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        let blogData = null;

        // Method 1: Fetch by ID if available
        if (blogIdFromUrl) {
         
          const blogRes = await getBlogDetailsById(blogIdFromUrl);
          blogData = Array.isArray(blogRes.data) ? blogRes.data[0] : blogRes.data.data || blogRes.data;
        }
        // Method 2: Fallback - Fetch by slug
        else if (slug) {
     
          const blogRes = await getBlogDetailsBySlug(slug);
          blogData = Array.isArray(blogRes.data) ? blogRes.data[0] : blogRes.data.data || blogRes.data;
        }

        // Fetch recent blogs
        const recentRes = await getBlogs();
        const blogs = Array.isArray(recentRes.data) ? recentRes.data : recentRes.data.data || [];

        setBlog(blogData || null);
        setRecentBlogs(blogs);
      } catch (err) {
        console.error("Blog API Error:", err);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug, blogIdFromUrl]);

  if (loading) return <p className="text-center py-20">Loading offers...</p>;
  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">offers not found</h2>
        <Link
          to="/blogs"
          className="inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition"
        >
          Back to offers
        </Link>
      </div>
    );
  }
 


  return (
    <section>
      {/* HERO */}
      <div className="relative" style={{ height: '350px' }}>
        <img
         src={getImageUrl(blog.hdImage || blog.image ,"blogs")}
          
          className="w-full h-full object-cover"
          onError={(e) => (e.currentTarget.src = '/images/placeholder.jpg')}
        />

        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <p className="text-sm sm:text-base mb-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              {' '}/{' '}
              <Link to="/blogs" className="hover:underline">
                Offers
              </Link>
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl">{blog.title}</h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <PageLayout className="py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-2">
            <div className="flex gap-4 text-sm sm:text-base text-gray-600 mb-6">
              <span>By {blog.author || 'Admin'}</span>
              <span>•</span>
              <span>{blog.created_on || blog.date}</span>
            </div>

            <img
              src={getImageUrl(blog.hdImage || blog.image ,"blogs")}
          
              alt={blog.title}
              className="rounded-2xl mb-10 w-full"
              onError={(e) => (e.currentTarget.src = '/images/placeholder.jpg')}
            />

            {/* Rich text content */}
            {blog.description && (
              <div
                className="prose max-w-none text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />
            )}

            {/* Fallback for structured content */}
            {!blog.description && blog.content && (
              <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-7">
                {blog.content.map((item, index) => {
                  if (item.type === "heading")
                    return (
                      <h3 key={index} className="text-xl sm:text-2xl font-semibold text-primary">
                        {item.text}
                      </h3>
                    );
                  if (item.type === "quote")
                    return (
                      <blockquote
                        key={index}
                        className="border-l-4 border-primary pl-6 italic text-gray-800 bg-gray-50 py-4 rounded"
                      >
                        {item.text}
                      </blockquote>
                    );
                  return <p key={index}>{item.text}</p>;
                })}
              </div>
            )}
          </div>

          {/* SIDEBAR - Recent Blogs */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <h4 className="font-bold text-lg sm:text-xl text-primary mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded"></span>
                  Recent Blogs
                </h4>
                <ul className="space-y-4">
                  {recentBlogs.map((b) => {
                    const bid = b.id || b.blog_id;
                    return (
                      <li key={bid} className="pb-4 border-b border-gray-200 last:pb-0 last:border-b-0">
                        <Link
                          to={`/blog/${b.slug}?id=${bid}`}
                          className="group block"
                        >
                          <h5 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-primary transition line-clamp-2">
                            {b.title}
                          </h5>
                          <p className="text-xs sm:text-sm text-gray-500 mt-2 flex items-center gap-1">
                            <span>📅</span>
                            {b.date || b.created_on}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </PageLayout>
     
    </section>
  );
}
