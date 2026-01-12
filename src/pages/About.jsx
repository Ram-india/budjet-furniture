import React, { useEffect, useState } from 'react'
import Loading from '../components/common/Loading';
import PageHeader from '../components/common/PageHeader';
import { getPageDetails } from '../api/pageApi';
import { getImageUrl } from '../utils/getImageUrl';

const About = () => {
  const [about, setAbout] = useState(null);
  const [choose, setChoose] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(()=>{ 
  const fetchPages = async () => {
    try{
      const [aboutRes, chooseRes] = await Promise.all([
        getPageDetails("About Us"),
        getPageDetails("Why Choose Us")
      ]);
      setAbout(aboutRes.data);
      setChoose(chooseRes.data);
      console.log("Image base URL:", import.meta.env.VITE_IMAGE_BASE_URL);
    }catch(error){
      console.error("Failed to fetch pages", error);
    }finally{
      setLoading(false);
    }

  };
  fetchPages();
},[]);
    

  if (loading) return <Loading />;
  if (!about) return <div>No Data Found</div>;

  return (
    <>
      <PageHeader title={about?.title} />

      {/* Main About Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="prose max-w-none text-base sm:text-lg lg:text-xl leading-relaxed prose-p:text-gray-600 text-justify">
            <div dangerouslySetInnerHTML={{ __html: about.description }} />
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={getImageUrl(about.image,"pages")}
              alt={about.title}
              className="w-full h-auto max-w-md lg:max-w-lg rounded-lg shadow-lg object-cover"
              onError={(e)=> (e.currentTarget.src = "/images/placeholder.webp")}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Mission */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
               {about.option1}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {about.option2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (heading moved into left column below) */}
       {/* Main About Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content with Title */}
          <div>
            <h2 className="py-2 sm:py-4 lg:py-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left text-gray-900 mb-3 sm:mb-5 lg:mb-7">
                Why Choose Us
              </h2>
              <p className="text-left text-base sm:text-lg text-gray-600 mb-6 max-w-3xl">
                We stand out in the furniture industry through our commitment to quality, innovation, and customer satisfaction.
              </p>
              <div className="prose max-w-none text-base sm:text-lg lg:text-xl leading-relaxed prose-p:text-gray-600 text-justify">
                <div dangerouslySetInnerHTML={{ __html: choose.description }} />
              </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={getImageUrl(choose.image,"pages")}
              alt={choose.title}
              className="w-full h-auto max-w-md lg:max-w-lg rounded-lg shadow-lg object-cover"
              onError={(e)=> (e.currentTarget.src = "/images/placeholder.webp")}
            />
          </div>
        </div>
      </section>

    

     
    </>
  )
}

export default About