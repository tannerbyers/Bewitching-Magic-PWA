import React, { FC } from "react";
import styles from "./ItemCards.module.css";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import ItemCard from "../ItemCard/ItemCard";

interface ItemCardsProps {}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ItemCards: FC<ItemCardsProps> = () => (
  <div className={styles.ItemCards} data-testid="ItemCards">
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        {[1, 2, 3].map((item) => {
          return <ItemCard>item</ItemCard>;
        })}{" "}
        <ItemCard></ItemCard>
      </Slider>
    </div>
  </div>
);

export default ItemCards;
