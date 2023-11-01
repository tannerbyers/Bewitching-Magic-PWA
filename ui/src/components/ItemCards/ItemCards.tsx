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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: function (index: number) {
      setCurrentMoonRitualIndex(index + 1)
    }

  };

  const [currentMoonRitualIndex, setCurrentMoonRitualIndex] = useState(1)
  return (
    <div className={styles.ItemCards} data-testid="ItemCards">
      <div>
        <Slider {...settings}>
          {moonRitualItems.map((moonRitualItem: string) => {
            return <ItemCard moonRitualItem={moonRitualItem}></ItemCard>;
          })}
        </Slider>
        <p className="text-xl text-right text-white">{currentMoonRitualIndex}/{moonRitualItems.length} items</p>
      </div>
    </div>
  )
}

export default ItemCards;
