import { Button, Carousel, Typography } from "@material-tailwind/react";
import "./style.scss";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("home");



  return (
    <div className="container-all">

    <div className="footer">
        <h1>Portfolio</h1>
        <p>{t('footer')}</p>
        <h2>phone: +(998) 88 113 47 07</h2>
        <h2>telegram: @yvl_shoxrux</h2>
      
    </div>
    </div>
  );
}


