import React from "react";
import Header from "./header";
import TeamCard from "./teamCard";

function TeamSection() {
  const teamData = [
    {
      id: 0,
      imageUrl: "/admin.jpg",
      name: "Atharva Mulye",
      profession: "Admin/Developer",
    },
    {
      id: 1,
      imageUrl: "/co_admin.jpg",
      name: "Justina Jodi",
      profession: "UI/UX Designer",
    },
  ];
  return (
    <section className="mt-[9rem]">
      <Header title="our team" subtitle="Meet The Team" />
      <div className="flex flex-wrap gap-4 mt-8 md:mt-[3.31rem] sm:flex-nowrap sm:justify-around">
        {teamData.map((team) => (
          <TeamCard
            key={team.id}
            imageUrl={team.imageUrl}
            name={team.name}
            profession={team.profession}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
