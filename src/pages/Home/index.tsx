import classes from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "../../components/Header";
import { Whatsapp } from "../../components/Whatsapp";

export function Home(): JSX.Element {
  AOS.init();

  return (
    <>
      <Header />
      <Whatsapp />
      <section className={classes.section}>
        <div className={classes.leftBox}>
          <div className={classes.svg}>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <path
                fill="#fceeee"
                d="M35.4,-30.2C45.6,-15.4,53.4,-0.7,51.8,14.1C50.3,28.9,39.3,43.8,23.6,52.8C7.9,61.8,-12.4,64.9,-33.3,58.8C-54.1,52.7,-75.5,37.4,-81.7,16.8C-87.9,-3.8,-78.8,-29.7,-62.7,-45.9C-46.5,-62.1,-23.3,-68.5,-5.3,-64.2C12.6,-59.9,25.2,-45,35.4,-30.2Z"
                transform="translate(100 100)"
              />
            </svg>
            <div
              className={classes.image}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="900"
              data-aos-offset="0"
            ></div>
          </div>
        </div>
        <div
          className={classes.titleBox}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1500"
          data-aos-offset="0"
        >
          <p className={classes.subtitles}>Teacher Sandra</p>
          <h1 className={classes.title}>Aulas de Inglês</h1>
          <p className={classes.subtitles}>Online e Presencial</p>
          <p className={classes.paragraph}>Básico ao Avançado</p>
        </div>
        <div className={classes.rightBox}>
          <div className={classes.svg}>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="600"
              data-aos-offset="0"
            >
              <path
                fill="#fceeee"
                d="M61,-50.4C74.1,-32.2,76.4,-7.1,71.6,17.3C66.8,41.8,54.9,65.6,36.5,73.6C18.1,81.6,-6.8,73.7,-20.1,60.2C-33.4,46.7,-35,27.6,-41.3,7.3C-47.6,-12.9,-58.6,-34.1,-52.4,-50.7C-46.3,-67.2,-23.2,-79.1,0.4,-79.4C23.9,-79.7,47.9,-68.5,61,-50.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <div
              className={classes.image}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="1200"
              data-aos-offset="0"
            ></div>
          </div>
        </div>
      </section>

      <section className={classes.section2}>
        <div className={classes.leftBox}></div>
        <div
          className={classes.titleBox}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <div className={classes.profilePhoto}></div>
          <div className={classes.texts}>
            <h1 className={classes.title}>
              Aulas individuais e personalizadas
            </h1>
            <p className={classes.subtitles}>Com material incluso no curso</p>
            <h1 className={classes.title}>
              Experiência na área há mais de 30 anos
            </h1>
            <p className={classes.subtitles}>
              Certificada pela Universidade de Cambridge
            </p>
            <p className={classes.paragraph}>
              Desconto para alunos e funcionários Pro Quality!
            </p>
          </div>
        </div>
        <div className={classes.rightBox}></div>
      </section>
      <Header />
    </>
  );
}
