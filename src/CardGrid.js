import React from "react";
import "./style.css";

const CardGrid = () => {
  const cardData = [
    {
      imgSrc: `${process.env.PUBLIC_URL}/card-1-hack.webp`,
      title: "Proven Track Record:",
      description:
        "We have a reputation for delivering life-saving support and promoting sustainable development through diverse thematic areas such as Poverty Alleviation, Economic Empowerment, Digital and Financial Inclusion, Quality Education, Livelihood and Skill Development, Healthcare and Nutrition, WASH, Women Empowerment, Agriculture Development, Disaster Relief, and Environmental Sustainability.",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/card-2-hack.webp`,
      title: "Strategic and Diverse Implementations:",
      description:
        "Our projects span across India, ensuring a broad national reach. Safe Horizon’s approach is holistic, integrating local needs with effective end-to-end CSR services, including policy formulation, advisory, impact assessments, and social audits.",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/card-3-hack.webp`,
      title: "Focus on Quality and Micro Local Impact:",
      description:
        "We prioritize the quality of aid with a micro local focus, ensuring that interventions are tailored to the specific needs of each community. Our empathic approach involves working closely with communities to address both immediate and long-term needs through innovative and sustainable solutions.",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/card-4-hack.webp`,
      title: "Robust Partnerships:",
      description:
        "By partnering with governments, civil society organizations, and the private sector, we amplify our impact and drive substantial change in the lives of children and families. We advocate for economic empowerment and basic needs, influencing policies and programs to promote the well-being of vulnerable populations.",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/card-1-hack.webp`,
      title: "Comprehensive statutory, compliance and CSR Services:",
      description:
        "Safe Horizon offers a full spectrum of CSR services, from policy formulation and advisory to on-ground monitoring and periodic evaluations. Our impact assessments and social audits help identify gaps and provide pragmatic solutions, ensuring effective project implementation and maximum impact.",
    },
  ];

  return (
    <div className="card-grid">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imgSrc} alt={`Card ${index + 1}`} className="card-one-image" />
          <div className="card-details">
            <h3 className="card-name">{card.title}</h3>
            <p className="card-desc">{card.description}</p>
            <a href="#" className="card-one-button">Learn More</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
