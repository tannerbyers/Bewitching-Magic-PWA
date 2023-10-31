import React, { FC } from "react";
import styles from "./ItemCard.module.css";

interface ItemCardProps {}

const ItemCard: FC<ItemCardProps> = () => (
  <div className={styles.ItemCard} data-testid="ItemCard">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-900 bg-white text-black">
      Candle Ritual
    </h5>
    <button
      type="button"
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      Buy Here
    </button>
    <p className="font-normal text-black-700 bg-white text-black">
      Light a green or white candle to symbolize growth and vitality. As you
      light the candle, set your intentions for the lunar cycle ahead
    </p>{" "}
  </div>
);

export default ItemCard;
