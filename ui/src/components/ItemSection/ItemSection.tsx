import { FC } from "react";
import styles from "./ItemSection.module.css";
import ItemCards from "../ItemCards/ItemCards";

interface ItemSectionProps {
  moonRitualItems: any
}

const ItemSection: FC<ItemSectionProps> = ({moonRitualItems}) => (
  <div className={styles.ItemSection} data-testid="ItemSection">
    <h3 className="px-6 pt-8 text-4xl">Items</h3>
    <p className="px-6 pt-6 mb-8 text-xl ">
      As you gather these items, infuse them with your own intention and energy,
      aligning them with the nurturing essence of the waxing crescent moon.
      Through this ritual, you'll not only provide care for your plants but also
      cultivate a deeper connection to nature's cycles and energies.
    </p>
    <ItemCards moonRitualItems={moonRitualItems}></ItemCards>
    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
  </div>
);

export default ItemSection;
