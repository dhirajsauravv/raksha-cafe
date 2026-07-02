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
    <div className="px-10">
      <h1 className="text-center text-5xl text-amber-700 pb-7 font-bold">
        The Menu
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {menuData.map((menuItem, id) => (
          <MenuCard key={"menuItem" + id} item={menuItem} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
