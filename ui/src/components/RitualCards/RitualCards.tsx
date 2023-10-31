import React, { FC } from "react";
import styles from "./RitualCards.module.css";
import RitualCard from "../RitualCard/RitualCard";
interface RitualCardsProps {}

const RitualCards: FC<RitualCardsProps> = () => (
  <div className={styles.RitualCards} data-testid="RitualCards">
    {[1, 2, 3].map((item) => {
      return <RitualCard>item</RitualCard>;
    })}{" "}
  </div>
);

export default RitualCards;
