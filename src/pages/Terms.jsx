import { useEffect, useState } from "react";
import PageHeader from "../components/common/PageHeader";
import PageLayout from "../components/common/PageLayout";
import Loading from "../components/common/Loading";
import { getPageDetails } from "../api/pageApi";

export default function TermsPage() {
  const [terms, setTerms] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const res = await getPageDetails("Terms and Conditions");
        setTerms(res.data);
      } catch (error) {
        console.error("Failed to fetch Terms page", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, []);

  if (loading) return <Loading />;
  if (!terms) return <div className="text-center py-20">No Data Found</div>;

  return (
    <section className="bg-white">
      <PageHeader title={terms.title} />

      <PageLayout className="py-10 lg:py-14">
        <article className="prose prose-lg max-w-none text-gray-700">
          <div
            dangerouslySetInnerHTML={{ __html: terms.description }}
          />
        </article>
      </PageLayout>
    </section>
  );
}