import React, { FC } from "react";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  moonPhase: any
}

const HeroSection: FC<HeroSectionProps> = ({ moonPhase }) => (
  <div className={styles.HeroSection} data-testid="HeroSection">
    <div className="min-h-[60vh] flex flex-col justify-center bg-transparent">
      <h2 className="z-10 text-6xl bg-transparent">{moonPhase.name.split(" ")[0]}</h2>
      <h3 className="pt-6 bg-transparent text-9xl">{moonPhase.emoji}</h3>
      <h2 className="pt-4 text-6xl bg-transparent">{moonPhase.name.split(" ")[1]}</h2>
    </div>
    <div className="py-8 text-left bg-transparent">
      <h3 className="pt-8 text-4xl bg-transparent">Best For</h3>
      <p className="text-xl bg-transparent">
        {moonPhase.rituals.summary}
      </p>
      <h2 className="p-8 text-6xl text-center bg-transparent">
      🍃🧘🏻
      </h2>
    </div>
    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
  </div>
);

export default HeroSection;
