// src/pages/PrivacyPage.jsx
import privacyData from "../data/privacyPolicy";
import TOC from "../components/common/TOC";
import PageHeader from "../components/common/PageHeader";
import PageLayout from "../components/common/PageLayout";
import { useEffect, useState } from "react";
import Loading from '../components/common/Loading';
import { getPageDetails } from "../api/pageApi";

export default function PrivacyPage() {
  const [privacy,setPrivacy] = useState(null);
  const [loading, setLoading ] = useState(true);

  useEffect(()=>{
    const fetchPrivacy = async () => {
      try{
        const res = await getPageDetails("Privacy Policy");
        setPrivacy(res.data);
      }catch(error){
        console.error("Failed to fetch Privacy page", error);
      }finally{
        setLoading(false);
      }
    };
    fetchPrivacy();
  },[]);
  if (loading) return <Loading />;
  if (!privacy) return <div className="text-center py-20">No Data Found</div>;
  return (
    <section className="bg-white">
      <PageHeader title={privacy.title}/>

      <PageLayout className="py-10 lg:py-14">
       <article className="prose prose-lg max-w-none text-gray-700">
          <div
            dangerouslySetInnerHTML={{ __html: privacy.description }}
          />
        </article>
      </PageLayout>
    </section>
  );
}