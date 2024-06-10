import Styles from './Banner.module.css';
export const Banner=()=>{
    return(
            <section className={Styles["banner"]}>
        <div className={Styles["banner__description"]}>
          <h1 className={Styles["banner__title"]}>
            Портал для подбора учебных заведений&nbsp;будущим it-специалистам
          </h1>
          <div className={Styles["banner__text-block"]}>
            <p className={Styles["banner__text"]}>
              Подбери для себя учебное заведение специалирующееся на обучении акутальных направлений it, а также читай реальные отзывы на вузы, колледжи, техникумы, итп.
            </p>
          </div>
          <a href="#recommendations" className={Styles["button"]}>Я хочу учиться👨🏼‍💻</a>
        </div>
        <img
          src="images/banner.jpg"
          alt="Ноутбук"
          className={Styles["banner__image"]}
        />
      </section>
    )
}