import React, { FC } from "react";
import styles from "./RitualSection.module.css";
import RitualCards from "../RitualCards/RitualCards";

interface RitualSectionProps {}

const RitualSection: FC<RitualSectionProps> = () => (
  <div className={styles.RitualSection} data-testid="RitualSection">
    <h3 className=" px-6 pt-8 text-4xl">Rituals</h3>
    <p className="  px-6 text-xl mb-8">
      Taking initial steps towards the goals set during the New Moon. Focus on
      building, growth, and laying down roots
    </p>
    <RitualCards></RitualCards>
  </div>
);

export default RitualSection;
