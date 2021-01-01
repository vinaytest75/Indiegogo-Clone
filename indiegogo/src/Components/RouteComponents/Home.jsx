import React from "react";
import { FeaturedCarousal } from "../HomeComponents/FeaturedCarousal";
import ProjectCard from "../HomeComponents/ProjectCard";
import { CollectionsItem } from "../HomeComponents/CollectionsItem";
import { CrowdfundingBanner } from "../HomeComponents/CrowdfundingBanner";
import { Categories } from "../HomeComponents/Categories";
import { Journal } from "../HomeComponents/Journal";

const Home = () => {
  return (
    <div>
      <FeaturedCarousal />
      <ProjectCard />
      <CollectionsItem />
      <CrowdfundingBanner />
      <Categories />
      {/* <Journal /> */}
    </div>
  );
};

export { Home };
