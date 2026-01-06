// src/data/aboutData.js
import {
  FaUserTie,
  FaBullseye,
  FaEye,
  FaHistory,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const aboutData = [
  {
  id: 1,
  slug: "founder-profile",
  title: "Founder Profile",
  content: `
John Doe, our founder, is a visionary in the furniture industry with over 15 years of experience.  
He started this company with a mission to combine craftsmanship, innovation, and sustainability in modern furniture design.  
`,
  quote: "“Furniture is not just functional; it’s a way to express creativity and comfort in every space.”",
  achievements: [
    "Founded the company in 2015 with a vision for quality and style.",
    "Expanded the business nationwide within 5 years.",
    "Mentors young designers and promotes sustainable living solutions.",
    "Oversees all product design, sourcing, and quality checks personally."
  ],
  icon: <FaUserTie className="text-white text-2xl" />,
  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 

},
    
  
  {
    id: 2,
    slug: "mission-vision",
    title: "Our Mission & Vision",
    content:
      "Our mission is to provide high-quality furniture that combines style and functionality. We envision a world where every home and office is furnished with products that inspire comfort and creativity.",
    icon: (
      <div className="flex gap-2">
        <FaBullseye className="text-white text-2xl" />

      </div>
    ),
  },
  {
    id: 3,
    slug: "our-history",
    title: "Our History",
    content:
      "Founded in 2015, we have grown from a small local store to a well-known brand delivering quality furniture across regions.",
    icon: <FaHistory className="text-white text-2xl" />,
  },
  {
    id: 4,
    slug: "our-team",
    title: "Our Team",
    content:
      "Our team consists of skilled designers, craftsmen, and customer support specialists dedicated to providing the best service.",
    icon: <FaUsers className="text-white text-2xl" />,
  },
  {
    id: 5,
    slug: "quality-policy",
    title: "Quality Policy",
    content:
      "We are committed to maintaining the highest quality standards in design, materials, and craftsmanship. Every product undergoes strict quality checks before reaching our customers.",
    icon: <FaCheckCircle className="text-white text-2xl" />,
  },
];

export default aboutData;