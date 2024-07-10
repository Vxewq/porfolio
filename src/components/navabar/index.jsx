import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import "./style.scss";
import React from "react";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className="nav">
      <h1>Portfolio</h1>

      <ul>
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
      </ul>
      <React.Fragment>
      <Button className="llo" variant="outlined" onClick={openDrawer}>menu</Button>
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
      </ul>
      </Drawer>
      </React.Fragment>

      <Button variant="outlined">Hire Me</Button>
    </div>
  );
}
