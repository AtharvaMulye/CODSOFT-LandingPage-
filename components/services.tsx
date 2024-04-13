import React from "react";
import Header from "./header";
import ServiceCard from "./serviceCard";
function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/resources.svg",
      title: "Resouces",
      description:
        "COMPIL provides a vast array of IT and computer science resources. From tutorials and project templates to coding challenges, we cater to all learning needs. Whether you're a beginner or an experienced professional, explore our comprehensive repository today!",
    },
    {
      id: 1,
      iconUrl: "/ai.svg",
      title: "AI Bots",
      description:
        "COMPIL's AI bots, including Image and Code Generators, enhance productivity and creativity. Streamlining workflows and automating processes, they enable efficient achievements. Experience technology's future with COMPIL's AI solutions.",
    },
    {
      id: 2,
      iconUrl: "/tools.svg",
      title: "Tools",
      description:
      "COMPIL is enhancing its AI toolset for image/code generation and file, media utilities(such as conversions, compressions). Our goal is to increase productivity and streamline workflows with our all-inclusive resources. Stay tuned for more innovations!",
    },
  ];
  return (
    <section>
      <Header title="service" subtitle="Our Vison & Our Goal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem] shadow-sm">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
