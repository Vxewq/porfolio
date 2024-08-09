import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Select,
  Option,
  navbar,
} from "@material-tailwind/react";
import "./style.scss";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Switcher from "../switcher";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const { t } = useTranslation("navbar");

  return (
    <div className="nav">
      <h1>Portfolio</h1>

      <ul className="l1">
        <li>
          <a href="#home">{t("li1")}</a>
        </li>
        <li>
          <a href="#about">{t("li2")}</a>
        </li>
        <li>
          <a href="#projects">{t("li3")}</a>
        </li>
        <li>
          <a href="#contact">{t("li4")}</a>
        </li>
      </ul>
        <Switcher />

      <React.Fragment>
        <Button className="llo" variant="outlined" onClick={openDrawer}>
          menu
        </Button>
        <Drawer open={open} onClose={closeDrawer} className="p-4">
          <ul className="small">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Switcher />
            </li>
          </ul>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
