import classes from "./styles.module.scss";

export function Whatsapp(): JSX.Element {
  return (
    <>
      <div className={classes.whatsBox}>
        <a
          href="https://api.whatsapp.com/send?phone=5548999029389&text=Olá!"
          target="_blank"
        >
          <div className={classes.icon}></div>
          <p className={classes.number}>(48) 99902-9389</p>
        </a>
      </div>
    </>
  );
}
