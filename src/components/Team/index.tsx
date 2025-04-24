import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam, { ImageGallery } from "./SingleTeam";
import TeamShowcase from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Adveen Desuza",
    designation: "UI Designer",
    image: "/images/team/team-01.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Jezmin uniya",
    designation: "Product Designer",
    image: "/images/team/team-02.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Andrieo Gloree",
    designation: "App Developer",
    image: "/images/team/team-03.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Jackie Sanders",
    designation: "Content Writer",
    image: "/images/team/team-04.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <main>
      <TeamShowcase />
    </main>
    </section>
  );
};

export default Team;
