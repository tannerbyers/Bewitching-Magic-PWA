import React, { FC } from "react";
import MoonPhase from "../../../types/MoonPhase"
import styles from "./RitualCards.module.css";
import RitualCard from "../RitualCard/RitualCard";
import MoonRitual from "../../../types/MoonRitual";
interface RitualCardsProps {
  moonRituals: MoonRitual[]
}

const RitualCards: FC<RitualCardsProps> = ({ moonRituals }) => (
  <div className={styles.RitualCards} data-testid="RitualCards">
    {moonRituals.map((task) => {
      return <RitualCard ritual={task}></RitualCard>;
    })}
  </div>
);

export default RitualCards;
