import { Button, Carousel, Typography } from "@material-tailwind/react";
import "./style.scss";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("home");



  return (
    <div className="container-all">

    <div className="footer">
      <div className="end">
        <h1>Portfolio</h1>
        <p>{t('footer')}</p>
        <h2>phone: +(998) 88 113 47 07</h2>
        <h2>telegram: @yvl_shoxrux</h2>
      </div>
      <div className="teamates">
        <h1>{t('team')}</h1>
        <div className="gid">
          <div className="card">
            <h1>Javohir Esanov</h1>
            <p>{t('frDesc1')} <br />
            </p>
            <a href="https://zhavokh1rs-portfolio.netlify.app/">
              <Button className="button" variant="outlined">
                His Portfolio
              </Button>
            </a>
          </div>
          <div className="card">
            <h1>Xusan Mirkomilov</h1>
            <p>{
              t('frDesc2')}
              <br /> <br />
            </p>
            <a href="https://loquacious-zabaione-4213a9.netlify.app/">
              <Button className="button" variant="outlined">
                His Portfolio
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}


