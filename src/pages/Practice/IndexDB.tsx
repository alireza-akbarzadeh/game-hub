import React from "react";
import useGenres from "../../hooks/useGenres";
import { openDB } from "idb";

export const IndexDB = () => {
  const { data } = useGenres();

  const order = {
    cart: [],
    openDb: async () => {
      return await openDB("cm-storage", 1, {
        async upgrade(db) {
          await db.createObjectStore("order");
          // we can create data store here
        },
      });
    },
    load: async () => {
      const db = await order.openDb();
      const cart = await db.get("order", "cart");
      if (cart) {
        try {
          order.cart = JSON.parse(cart);
          order.render();
        } catch (error) {
          console.log("data corrupted");
        }
      }
    },
    save: async () => {
      const db = await order.openDb();
      db.add("put", JSON.stringify(order.cart), "cart");
    },
    render: () => {},
  };

  return <div>IndexDB</div>;
};
