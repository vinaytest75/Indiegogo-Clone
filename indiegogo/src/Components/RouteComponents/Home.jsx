import React from "react";
import { FeaturedCarousal } from "../HomeComponents/FeaturedCarousal";
import ProjectCard from "../HomeComponents/ProjectCard";
import { CollectionsItem } from "../HomeComponents/CollectionsItem";
import { CrowdfundingBanner } from "../HomeComponents/CrowdfundingBanner";
import { Categories } from "../HomeComponents/Categories";

const Home = () => {
  return (
    <div>
      <FeaturedCarousal />
      <ProjectCard />
      <CollectionsItem />
      <CrowdfundingBanner />
      <Categories />
    </div>
  );
};

export { Home };
