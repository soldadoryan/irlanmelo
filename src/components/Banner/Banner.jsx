import gs from "@/styles/global.module.css";
import s from "./Banner.module.css";
import Image from "next/image";

function Banner() {
  return (
    <section className={s.banner}>
      <div className={s.filter}></div>
      <Image
        src="/irlan_banner.png"
        width={600}
        height={900}
        loading="lazy"
        className={s.irlan_image}
        alt="Logo do Vereador Irlan Melo em branco com bandeira do Brasil no O de Melo"
      />
      <div className={[gs.container, s.container].join(" ")}>
        <Image
          src="/logo.png"
          width="650"
          height="200"
          loading="lazy"
          className={s.logo}
          alt="Logo do Vereador Irlan Melo em branco com bandeira do Brasil no O de Melo"
        />
      </div>
      <div className={s.pattern}></div>
    </section>
  );
}

export default Banner;
