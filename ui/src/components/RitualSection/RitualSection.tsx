import React, { FC } from "react";
import styles from "./RitualSection.module.css";
import RitualCards from "../RitualCards/RitualCards";
import MoonRitual from "../../../types/MoonRitual";

interface RitualSectionProps {
  moonRituals: MoonRitual[]
}

const RitualSection: FC<RitualSectionProps> = ({moonRituals}) => (
  <div className={styles.RitualSection} data-testid="RitualSection">
    <h3 className="px-6 pt-8 text-4xl ">Rituals</h3>
    <p className="px-6 pt-6 mb-8 text-xl ">
      Taking initial steps towards the goals set during the New Moon. Focus on
      building, growth, and laying down roots
    </p>
    <RitualCards moonRituals={moonRituals}></RitualCards>
    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
  </div>
);

export default RitualSection;
