import s from "./Achievements.module.css";
import Animations from "../ScrollingAnimation/animations.json";

function Achievements() {
  return (
    <section className={s.achievements}>
      <div className={s.greenEffect} {...Animations.greenEffect}></div>
      <div className={s.yellowEffect} {...Animations.yellowEffect}></div>
      <div className={s.content} {...Animations.contentEffect}>
        <div className={s.container}></div>
      </div>
    </section>
  );
}

export default Achievements;
