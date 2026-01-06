// src/pages/PrivacyPage.jsx
import privacyData from "../data/privacyPolicy";
import TOC from "../components/common/TOC";
import PageHeader from "../components/common/PageHeader";

export default function PrivacyPage() {
  return (
    <section className="bg-white">
      <PageHeader title="Privacy Policy" />

      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* TOC Sidebar */}
        <div className="relative">
          <div className="sticky top-20">
            <TOC items={privacyData.map(({ slug, title }) => ({ id: slug, title }))} />
          </div>
        </div>

        {/* Content */}
        <article className="lg:col-span-3 space-y-12">
          {privacyData.map((section, index) => (
            <section key={section.slug} id={section.slug} className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                {index + 1}. {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}