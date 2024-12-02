import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const DataCards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (coffee) => coffee.category === category
      );
      setItems(filteredByCategory);
    } else {
      setItems(data);
    }
  }, [category, data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card key={item.product_id} item={item}></Card>
      ))}
    </div>
  );
};

export default DataCards;
