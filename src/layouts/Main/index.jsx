import React from "react";
import Slider from "../../components/Slider/Slider";
import Story from "../../components/Story/Story";
import Subheadline from "../../components/Subheadline";
import FeatureMugs from "../../components/FeatureMugs";
import MoreProduct from "../../components/MoreProduct";
import Magazine from "../../components/Magazine";
import Parallax from "../../components/Parallax";
import LifeStory from "../../components/LifeStory";
const Main = () => {
  return (
    <main>
      <Slider />
      <Story />
      <Subheadline content="Feature mugs" />
      <FeatureMugs />
      <Subheadline content="MORE PRODUCTS" />
      <MoreProduct />
      <Subheadline content="BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE" />
      <Magazine />
      <Parallax />
      <Subheadline content="BEHIND THE MUGS, LIFESTYLE STORIES" />
      <LifeStory />
    </main>
  );
};

export default Main;
