import React, { FC } from "react";
import styles from "./ItemSection.module.css";
import ItemCard from "../ItemCard/ItemCard";
import ItemCards from "../ItemCards/ItemCards";

interface ItemSectionProps {}

const ItemSection: FC<ItemSectionProps> = () => (
  <div className={styles.ItemSection} data-testid="ItemSection">
    <h3 className="pt-8 text-4xl">Items</h3>
    <p className="text-xl mb-8">
      As you gather these items, infuse them with your own intention and energy,
      aligning them with the nurturing essence of the waxing crescent moon.
      Through this ritual, you'll not only provide care for your plants but also
      cultivate a deeper connection to nature's cycles and energies.
    </p>
    <ItemCards></ItemCards>
  </div>
);

export default ItemSection;
