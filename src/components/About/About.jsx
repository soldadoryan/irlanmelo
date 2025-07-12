import gs from "@/styles/global.module.css";
import s from "./About.module.css";
import Image from "next/image";

function About() {
  return (
    <section className={s.about}>
      <Image
        src="/igreja.webp"
        width={700}
        height={700}
        loading="lazy"
        className={s.pattern}
        alt="Imagem de uma igreja"
      />
      <div className={[gs.container, s.container].join(" ")}>
        <div className={s.content}>
          <h1>
            Um pouco <br />
            <strong>sobre mim</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim,
            vitae facilisis enim erat nec sem. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p>
            Mauris euismod, sapien eu facilisis cursus, enim erat dictum urna,
            nec dictum erat erat eu erat. Suspendisse potenti. Nullam ac urna eu
            felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed
            ut imperdiet nisi. Proin condimentum fermentum nunc. massa nisl quis
            neque.
          </p>
          <button className={s.ctaAbout}>
            Confira minha coluna no Jornal Hoje em Dia
          </button>
        </div>
        <div className={s.wrapImage}>
          <Image width={600} height={700} src="/irlan_about.jpg" />
          <div className={s.imgDescription}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim,
              vitae facilisis enim erat nec sem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
