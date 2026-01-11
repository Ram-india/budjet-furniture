import React, { useEffect, useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import PageLayout from '../components/common/PageLayout';
import { Link } from 'react-router-dom';
import api from '../api/axios';

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/getBlogs')
      .then(res => {
        const blogs = Array.isArray(res.data) ? res.data : res.data.data || [];
        setBlogData(blogs);
     
      })
      .catch(err => {
        console.error("Blog API Error:", err);
        setBlogData([]);
      })
      .finally(() => setLoading(false));
  }, []);

  

  return (
    <>
      <PageHeader title="Offers" subtitle="Crafting comfort and style for modern living" />
      <PageLayout className="py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-10">Our Offers</h2>

        {loading ? (
          <p className="text-center text-base sm:text-lg text-gray-600">Loading blogs...</p>
        ) : blogData.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {blogData.map((blog) => {
              const blogId = blog.id || blog.blog_id;
              return (
                <Link
                  to={`/blog/${blog.slug}?id=${blogId}`}
                  key={blogId}
                  className="group"
                >
                  <div className="overflow-hidden rounded-xl mb-4">
                    <img
                      src={blog.hdImage || blog.image}
                      alt={blog.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition"
                      onError={(e) => (e.currentTarget.src = '/images/placeholder.jpg')}
                    />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg text-primary">{blog.title}</h3>
                  <p className="text-sm text-theme mt-2">{blog.date || blog.created_on}</p>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-base sm:text-lg text-gray-600">No Offers found</p>
        )}
      </PageLayout>
    </>
  );
}

export default Blogs