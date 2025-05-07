import gs from "@/styles/global.module.css";
import s from "./Menu.module.css";
import { RiMenuFill } from "react-icons/ri";

function Menu() {
  return (
    <div className={s.MenuWrapper}>
      <div className={[gs.container, s.MenuContainer].join(" ")}>
        <button className={s.MenuButton}>
          <RiMenuFill />
          MENU
        </button>
      </div>
    </div>
  );
}

export default Menu;
