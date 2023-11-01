import React, { FC } from "react";
import styles from "./RitualCard.module.css";
import MoonRitual from "../../../types/MoonRitual";

interface RitualCardProps {
  ritual: MoonRitual
}

const RitualCard: FC<RitualCardProps> = ({ritual}) => (
  <div className={styles.RitualCard} data-testid="RitualCard">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black bg-white text-black-900">
      {ritual.description.split(":")[0]}
    </h5>
    <p className="font-normal text-black bg-white text-black-700">
    {ritual.description.split(":")[1]}
    </p>
  </div>
);

export default RitualCard;
