import React, { useEffect } from "react";
import PageHeader from "../components/common/PageHeader";
import FounderSection from "../components/about/FounderSection";
import {
  FaBullseye,
  FaEye,
  FaHistory,
  FaUsers,
  FaCheckCircle,
  FaStar,
  FaLeaf,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";

export default function About() {
  useEffect(() => {
    document.title = "About Us - Budget Furniture";
  }, []);
  // Founder Profile Data
  const founderData = {
    title: "Founder Profile",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <FaStar className="text-primary text-3xl" />,
    content: `John Doe is a visionary entrepreneur in the furniture industry with over 15 years of experience in design and manufacturing. 
    He founded our company in 2015 with a passion for creating furniture that seamlessly blends craftsmanship, innovation, and 
    sustainability. His dedication to quality has transformed our brand into a trusted name in the furniture market.`,
    quote:
      "Furniture is not just functional; it's a way to express creativity and comfort in every space.",
    achievements: [
      "Founded the company in 2015 with a clear vision for quality and style",
      "Expanded the business nationwide within 5 years of establishment",
      "Actively mentors young designers and promotes sustainable living solutions",
      "Personally oversees all product design, sourcing, and quality checks",
      "Recognized as a leader in sustainable furniture innovation",
    ],
  };

  // Mission & Vision Data
  const missionVisionData = [
    {
      id: 1,
      type: "mission",
      icon: <FaBullseye className="text-white text-4xl" />,
      title: "Our Mission",
      content:
        "To design and deliver exceptional furniture that harmonizes quality, aesthetics, and sustainability. We aim to transform living spaces into havens of comfort and creativity while maintaining the highest standards of craftsmanship.",
      color: "from-blue-600 to-blue-400",
    },
    {
      id: 2,
      type: "vision",
      icon: <FaEye className="text-white text-4xl" />,
      title: "Our Vision",
      content:
        "To be the most trusted furniture brand recognized for innovative design, superior quality, and environmental responsibility. We envision a world where every home and workspace reflects personal style and comfort.",
      color: "from-purple-600 to-purple-400",
    },
  ];

  // History Data
  const historyData = [
    {
      year: "2015",
      title: "Founded",
      description:
        "Started as a small local furniture store with a passion for quality and design.",
    },
    {
      year: "2017",
      title: "Regional Expansion",
      description:
        "Opened multiple showrooms and expanded product lines to serve wider customer base.",
    },
    {
      year: "2019",
      title: "Online Launch",
      description:
        "Launched e-commerce platform making our products accessible nationwide.",
    },
    {
      year: "2021",
      title: "Sustainability Initiative",
      description:
        "Introduced eco-friendly materials and sustainable manufacturing practices.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description:
        "Received multiple awards for design excellence and customer satisfaction.",
    },
    {
      year: "2025",
      title: "Market Leadership",
      description:
        "Established as one of the top furniture brands with loyal customers nationwide.",
    },
  ];

  // Quality Policy Data
  const qualityPolicies = [
    {
      id: 1,
      icon: <FaCheckCircle className="text-white text-3xl" />,
      title: "Material Excellence",
      description:
        "We source only premium quality materials from certified suppliers to ensure durability and longevity.",
      color: "from-green-600 to-green-400",
    },
    {
      id: 2,
      icon: <FaLightbulb className="text-white text-3xl" />,
      title: "Innovative Design",
      description:
        "Our design team continuously innovates to create furniture that is both functional and aesthetically pleasing.",
      color: "from-yellow-600 to-yellow-400",
    },
    {
      id: 3,
      icon: <FaLeaf className="text-white text-3xl" />,
      title: "Environmental Care",
      description:
        "We commit to sustainable practices in manufacturing and packaging to reduce our environmental footprint.",
      color: "from-teal-600 to-teal-400",
    },
    {
      id: 4,
      icon: <FaHandshake className="text-white text-3xl" />,
      title: "Customer Satisfaction",
      description:
        "Every product undergoes rigorous quality checks and comes with comprehensive after-sales support.",
      color: "from-red-600 to-red-400",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <PageHeader title="About Budget Furniture" subtitle="Our Story & Values" />

      {/* Founder Profile Section */}
      <section className="py-16 px-4 lg:px-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
            Meet Our Founder
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <FounderSection data={founderData} />
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
              Mission & Vision
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {missionVisionData.map((item) => (
              <div
                key={item.id}
                className={`bg-gradient-to-br ${item.color} rounded-xl shadow-lg p-8 text-white transform hover:scale-105 transition duration-300`}
              >
                <div className="flex items-center gap-4 mb-4">
                  {item.icon}
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="text-lg leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-16 px-4 lg:px-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
            Our Journey
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="space-y-8">
            {historyData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 relative"
              >
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    <FaHistory />
                  </div>
                  {index !== historyData.length - 1 && (
                    <div className="w-1 h-20 bg-gray-300 mt-2"></div>
                  )}
                </div>

                {/* Timeline content */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-primary">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="py-16 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
              Our Quality Policy
            </h2>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              We are committed to delivering excellence in every aspect of our
              business, from design and manufacturing to customer service.
            </p>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPolicies.map((policy) => (
              <div
                key={policy.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <div
                  className={`bg-gradient-to-br ${policy.color} p-6 text-center transform group-hover:scale-110 transition duration-300`}
                >
                  {policy.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {policy.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {policy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Overview Section */}
      <section className="py-16 px-4 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Dedicated Team
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our success is built on the expertise and dedication of our team
              members. From skilled designers and craftsmen to customer support
              specialists, each member is committed to delivering excellence.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Expert Designers
                  </h3>
                  <p className="text-gray-600">
                    Creating innovative and stylish furniture designs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Quality Specialists
                  </h3>
                  <p className="text-gray-600">
                    Ensuring every product meets our high standards
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <FaHandshake className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Customer Support
                  </h3>
                  <p className="text-gray-600">
                    Providing exceptional service and support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Team"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 lg:px-20 bg-gradient-to-r from-primary to-themeSecondary">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Explore our furniture collection and experience the perfect blend of
            style and quality.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Browse Our Products
          </button>
        </div>
      </section>
    </>
  );
}
