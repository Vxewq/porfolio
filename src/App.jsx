import {
  Typography,
  Card,
  Progress,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import Navbar from "./components/navabar";
import "./App.scss";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [mes, setMes] = useState("");
  let sage = `name: ${name}, message: ${mes}`;

  const send = () => {
    let botToken = '7206422417:AAFjGTk3KS2r9wgrCyo6J1JKPjNS5rHzqDc'
    let chatId = '737190317'
    fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message
      )}`
    )
      .then((j) => j.json())
      .then((res) => alert("succes"));
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Navbar />
      <div className="showcase">
        <div className="info">
          <h1>
            Hello, My name is Shoxrux Rahmatullayev. I'm an intern Front-End
            Developer
          </h1>
          <p>
            I am Shoxrux Rahmatullayev. I'm an intern Front-End Developer based
            in Tashkent, Uzbekistan. I have not much of expierence in big
            projects yet but i have my own.
          </p>
        </div>
        <div className="photo">
          <img src="" alt="My photo" />
        </div>
      </div>
      <div className="about">
        <div className="lll">
          <h1 id="about">About Me</h1>
          <Card className="card">
            <table>
              <tr>
                <th>First Name</th>
                <td>Shoxrux</td>
              </tr>
              <tr>
                <th>Last Name</th>
                <td>Rahmatullayev</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>15</td>
              </tr>
            </table>
          </Card>
        </div>
        <div className="edu">
          <h1>Education</h1>
          <h3>CoddyCamp Front-End Developer course:</h3>
          <Progress className="prog" size="lg" value={92} />
        </div>
        <Button onClick={handleOpen} variant="outlined" color="white">
          skills
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Skills</DialogHeader>
          <DialogBody className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Card className="p-4 flex flex-col align-center">
              <h1>JS</h1>
              <Progress value={60} />
            </Card>
            <Card className="p-4 flex flex-col align-center">
              <h1>HTML</h1>
              <Progress value={80} />
            </Card>
            <Card className="p-4 flex flex-col align-center">
              <h1>CSS</h1>
              <Progress value={90} />
            </Card>
            <Card className="p-4 flex flex-col align-center">
              <h1>SCSS</h1>
              <Progress value={90} />
            </Card>
            <Card className="p-4 flex flex-col align-center">
              <h1>REACT</h1>
              <Progress value={90} />
            </Card>
          </DialogBody>
          <DialogFooter>
            <Button variant="outlined" onClick={handleOpen}>
              <span>Close</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      <div className="projects">
        <h1>My Projects:</h1>
        <div className="grid">
          <a href="https://projectvw1.netlify.app/">
            <div className="card">
              <img src="/al-chiroq.png" alt="" />
              <div className="txt">
                <h3>Al-Chiroq</h3>
                <p>
                  Honestly It's not my project but i saw it'd be good if i
                  recreate it.{" "}
                </p>
              </div>
            </div>
          </a>
          <a href="https://porschevw1w.netlify.app/">
            <div className="card">
              <img src="/porche.png" alt="" />
              <div className="txt">
                <h3>Porsche</h3>
                <p>Same with the last project. </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="contact">
        <h1>Contact me:</h1>
        <div className="low">
          <div className="info">
            <h2>Me in Social Media:</h2>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/shohruh-rahmatullayev-9762b9315/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="+998881134707">
                  <i class="fa-solid fa-phone"></i>
                </a>
              </li>
              <li>
                <a href="https://t.me/Fl_shoxrux">
                  <i class="fa-brands fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="tgbot">
            <h2>Text Me:</h2>
            <form onSubmit={send}>
              <Input onChange={(e) => setName(e.target.value)} value={name} type="text" label="Name" />
              <Input onChange={(e) => setMes(e.target.value)} value={mes} className="p-10" type="text" label="Your Message" />
              <Button variant="outlined">Send</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
