import React, { FC } from "react";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => (
  <div className={styles.HeroSection} data-testid="HeroSection">
    <h2 className="text-6xl">Waning Moon</h2>
    <h2 className="pt-8 text-9xl">🌘</h2>
    <div className="text-left">
      <h3 className="pt-8 text-4xl">Best For</h3>
      <p className="text-xl">
        Taking initial steps towards the goals set during the New Moon. Focus on
        building, growth, and laying down roots
      </p>
    </div>
    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
  </div>
);

export default HeroSection;
