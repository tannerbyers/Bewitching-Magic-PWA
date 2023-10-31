import React, { FC } from "react";
import styles from "./RitualCard.module.css";

interface RitualCardProps {}

const RitualCard: FC<RitualCardProps> = () => (
  <div className={styles.RitualCard} data-testid="RitualCard">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-900 bg-white text-black">
      Candle Ritual
    </h5>
    <p className="font-normal text-black-700 bg-white text-black">
      Light a green or white candle to symbolize growth and vitality. As you
      light the candle, set your intentions for the lunar cycle ahead
    </p>
  </div>
);

export default RitualCard;
