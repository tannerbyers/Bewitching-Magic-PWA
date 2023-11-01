import React, { FC, useEffect, useState } from "react";
import styles from "./ItemCard.module.css";
import items from "../../static-data/items.json"

interface ItemCardProps {
  moonRitualItem: string
}

const ItemCard: FC<ItemCardProps> = ({ moonRitualItem }) =>
{ const [itemInfo, setItemInfo] = useState({name: moonRitualItem, description: ""})
  useEffect(() => {
    items.items.forEach((item) => {
      if (item.name === moonRitualItem) {
        setItemInfo(item)
      }
    })
  },[])
  return (
  <div className={styles.ItemCard} data-testid="ItemCard">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black bg-white text-black-900">
      {itemInfo?.name}
    </h5>
    <div
      className="w-1/4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
    >
      Buy Here
    </div>
    <p className="font-normal text-black bg-white text-black-700">
    {itemInfo?.description}
    </p>
  </div>
)}

export default ItemCard;
