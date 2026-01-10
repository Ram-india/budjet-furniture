import React, { useEffect, useState } from 'react'
import Loading from '../components/common/Loading';
import PageHeader from '../components/common/PageHeader';
import { getPageDetails } from '../api/pageApi';

const About = () => {
  const[about,setAbout] = useState(null);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        
        const res = await getPageDetails("About Us");
        console.log(res.data);
        setAbout(res.data);
      } catch (error) {
        console.error("Failed to fetch About page", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
   
  }, []);
  if (loading) return <Loading />;
  if (!about) return <div>No Data Found</div>;

  return (
   <>
   <PageHeader
   title={about?.title}/>


<section className="max-w-7xl mx-auto px-6 py-14">
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: about.description }}
        />
      </section>
   </>
  )
}

export default About