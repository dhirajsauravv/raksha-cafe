import { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";
import { getMenuItems } from "../services/menu";

function Menu() {
  const [menuData, setMenuData] = useState([]);

  async function loadMenuData() {
    try {
      const response = await getMenuItems();
      setMenuData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadMenuData();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {menuData.map((menuItem, id) => (
          <MenuCard
            key={"menuItem" + id}
            imageURL={menuItem.image}
            itemName={menuItem.name}
            price={menuItem.price}
            description={menuItem.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
