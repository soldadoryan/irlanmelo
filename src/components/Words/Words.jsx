import s from "./Words.module.css";
import Animations from "@/components/ScrollingAnimation/animations.json";

function Words() {
  return (
    <section className={s.words} {...Animations.wrapWords}>
      <div className={s.wrapVideo} {...Animations.video}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/kDgXUDXGP-o?autoplay=1&mute=1&loop=1&playlist=kDgXUDXGP-o"
          style={{ border: 0 }}
          controls={false}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div className={s.wrapTitle} {...Animations.wrapTitle}>
        <div className={s.title} {...Animations.title}></div>
      </div>
    </section>
  );
}

export default Words;
