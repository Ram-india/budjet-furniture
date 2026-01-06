import { useParams, useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogs, getBlogDetailsById, getBlogDetailsBySlug } from "../api/blogApi";

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
          console.log("Fetching blog with ID:", blogIdFromUrl);
          const blogRes = await getBlogDetailsById(blogIdFromUrl);
          blogData = Array.isArray(blogRes.data) ? blogRes.data[0] : blogRes.data.data || blogRes.data;
        }
        // Method 2: Fallback - Fetch by slug
        else if (slug) {
          console.log("Fetching blog with slug:", slug);
          const blogRes = await getBlogDetailsBySlug(slug);
          blogData = Array.isArray(blogRes.data) ? blogRes.data[0] : blogRes.data.data || blogRes.data;
        }

        // Fetch recent blogs
        const recentRes = await getBlogs();
        const blogs = Array.isArray(recentRes.data) ? recentRes.data : recentRes.data.data || [];

        console.log("Blog data:", blogData);
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

  if (loading) return <p className="text-center py-20">Loading blog...</p>;
  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Blog not found</h2>
        <Link
          to="/blogs"
          className="inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }
 


  return (
    <section>
      {/* HERO */}
      <div className="relative" style={{ height: '350px' }}>
        <img
          src={blog.hdImage || blog.image || '/images/placeholder.jpg'}
          alt={blog.title}
          className="w-full h-full object-cover"
          onError={(e) => (e.currentTarget.src = '/images/placeholder.jpg')}
        />

        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <p className="text-sm mb-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              {' '}/{' '}
              <Link to="/blogs" className="hover:underline">
                Blog
              </Link>
            </p>
            <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">{blog.title}</h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="flex gap-4 text-sm text-gray-600 mb-6">
            <span>By {blog.author || 'Admin'}</span>
            <span>•</span>
            <span>{blog.created_on || blog.date}</span>
          </div>

          <img
            src={blog.image || blog.hdImage || '/images/placeholder.jpg'}
            alt={blog.title}
            className="rounded-2xl mb-10 w-full"
            onError={(e) => (e.currentTarget.src = '/images/placeholder.jpg')}
          />

          {/* Rich text content */}
          {blog.description && (
            <div
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
          )}

          {/* Fallback for structured content */}
          {!blog.description && blog.content && (
            <div className="space-y-6 text-gray-700 leading-7">
              {blog.content.map((item, index) => {
                if (item.type === "heading")
                  return (
                    <h3 key={index} className="text-xl font-semibold text-primary">
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
        <aside>
          <div className="sticky top-24">
            <h4 className="font-semibold text-primary mb-4 text-lg">Recent Blogs</h4>
            <ul className="space-y-4">
              {recentBlogs.map((b) => {
                const bid = b.id || b.blog_id;
                return (
                  <li key={bid}>
                    <Link
                      to={`/blog/${b.slug}?id=${bid}`}
                      className="text-gray-700 hover:text-primary transition text-sm leading-relaxed"
                    >
                      {b.title}
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">{b.date || b.created_on}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
