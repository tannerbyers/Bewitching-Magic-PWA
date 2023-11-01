import React, { FC, useState } from "react";
import styles from "./ItemCards.module.css";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import ItemCard from "../ItemCard/ItemCard";

interface ItemCardsProps {
  moonRitualItems: any
}

const ItemCards: FC<ItemCardsProps> = ({ moonRitualItems }) => {

  const settings = {
    className: "slider variable-width",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToScroll: true,
  };

  return (
    <div className={styles.ItemCards} data-testid="ItemCards">
      <div>
          {moonRitualItems.map((moonRitualItem: string) => {
            return <ItemCard moonRitualItem={moonRitualItem}></ItemCard>;
          })}
        <p className="pb-8 text-xl text-right text-white">{moonRitualItems.length} items</p>
      </div>
    </div>
  )
}

export default ItemCards;
