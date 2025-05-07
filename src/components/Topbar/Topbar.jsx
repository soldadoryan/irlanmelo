import gs from "@/styles/global.module.css";
import s from "./Topbar.module.css";
import Socials from "./Topbar.mock.json";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";

const SocialIcons = {
  facebook: <RiFacebookFill />,
  instagram: <RiInstagramLine />,
  x: <RiTwitterXFill />,
  youtube: <RiYoutubeFill />,
};

function Topbar() {
  return (
    <section className={s.topbar}>
      <div className={[gs.container, s.container].join(" ")}>
        <div className={s.text_socials}>Acompanhe nossas redes sociais</div>
        <ul className={s.socials}>
          {Socials.map((item) => (
            <li key={item.social}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {SocialIcons[item.social]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Topbar;
