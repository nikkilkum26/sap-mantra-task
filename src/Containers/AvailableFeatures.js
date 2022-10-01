import React from "react";
import FeatureCard from "../Components/FeatureCard";
import styles from "../css/AvailableFeatures.module.css";

const AvailableFeatures = () => {
  const features = [
    {
      title: "Minimal Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      logo: "logo_svg1",
    },
    {
      title: "Rocket Fast",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      logo: "logo_svg2",
    },
    {
      title: "Framework",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      logo: "logo_svg3",
    },
    {
      title: "Style Guide",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      logo: "logo_svg4",
    },
    {
      title: "CSS + SASS",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      logo: "logo_svg5",
    },
    {
      title: "Customizable",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      logo: "logo_svg6",
    },
    {
      title: "Modular Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      logo: "logo_svg7",
    },
    {
      title: "HTML5 Valid",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      logo: "logo_svg8",
    },
  ];
  return (
    <div className={styles.availableFeatures__layout}>
      <div className={styles.availableFeatures__grid}>
        {features.map((eachFeature) => (
          <FeatureCard styles={styles} eachFeature={eachFeature} />
        ))}
      </div>
    </div>
  );
};

export default AvailableFeatures;
