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
  Textarea,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useCountries } from "use-react-countries";

import Navbar from "./components/navabar";
import "./App.scss";
import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
  const [names, setName] = useState("");
  const [mes, setMes] = useState("");
  const [num, setNumber] = useState("");

  function sendMessage() {
    let botToken = "7206422417:AAFjGTk3KS2r9wgrCyo6J1JKPjNS5rHzqDc";
    let chatId = "737190317";
    let message = `
    name: ${names},
     message: ${mes}
     number: ${num}
     `;

    fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message
      )}`
    )
      .then((j) => j.json())
      .then(() => toast.success("Succesfully sended"));
  }

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];

  const { t } = useTranslation("home");

  const [animation, setAnimation] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation(false); // After 4 seconds, hide the video
    }, 2500);

    // Cleanup timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to ensure this runs once on mount

  return (
    <>
      <AnimatedCursor color="0,0,10" />

      {animation ? (
        <video
          src="./src/assets/intro.mp4"
          autoPlay
          muted
          style={{ width: "100%", height: "auto" }}
        ></video>
      ) : (
        <>
          <Navbar />
          <div className="showcase" id="home">
            <div className="info">
              <h1>{t("h1")}</h1>
              <p>{t("p")}</p>
            </div>
            <div className="photo">
              <img src="/White pfp.jpg" alt="My photo" />
            </div>
          </div>
          <div className="about" id="about">
            <div className="lll">
              <h1 id="about">{t("aboutTitle")}</h1>
              <Card className="card">
                <table>
                  <tr>
                    <th>{t("b")}</th>
                    <td>Shoxrux</td>
                  </tr>
                  <tr>
                    <th>{t("b2")}</th>
                    <td>Rahmatullayev</td>
                  </tr>
                  <tr>
                    <th>{t("b3")}</th>
                    <td>15</td>
                  </tr>
                </table>
              </Card>
            </div>
            <div className="edu">
              <h1>{t("Edu")}</h1>
              <h3>CoddyCamp Front-End Developer course:</h3>
              <Progress className="prog" size="lg" value={92} />
            </div>
            <Button onClick={handleOpen} variant="outlined" color="white">
              {t("aboutButton")}
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
              <DialogHeader>Libraries & FrameWorks</DialogHeader>
              <DialogBody className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Card className="p-4 flex flex-col align-center">
                  <h1>Tailwind</h1>
                  <Progress value={60} />
                </Card>
                <Card className="p-4 flex flex-col align-center">
                  <h1>Material-Tailwind</h1>
                  <Progress value={80} />
                </Card>
                <Card className="p-4 flex flex-col align-center">
                  <h1>Ant-Design</h1>
                  <Progress value={90} />
                </Card>
                <Card className="p-4 flex flex-col align-center">
                  <h1>Bootstrap</h1>
                  <Progress value={90} />
                </Card>
                <Card className="p-4 flex flex-col align-center">
                  <h1>UiKit</h1>
                  <Progress value={90} />
                </Card>
                <Card className="p-4 flex flex-col align-center">
                  <h1>Zustand</h1>
                  <Progress value={100} />
                </Card>
                <Card className="p-4 flex flex-col align-center">
                  <h1>React-query</h1>
                  <Progress value={70} />
                </Card>
                <Card className="p-4 flex flex-col align-center">
                  <h1>React-Hool-Form</h1>
                  <Progress value={70} />
                </Card>

                <Card className="p-4 flex flex-col align-center">
                  <h1>Axios</h1>
                  <Progress value={100} />
                </Card>
              </DialogBody>

              <DialogFooter>
                <Button variant="outlined" onClick={handleOpen}>
                  <span>Close</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
          <div className="projects" id="projects">
            <h1>{t("projectTitle")}</h1>
            <div className="grid">
              <a href="https://projectvw1.netlify.app/">
                <div className="card">
                  <img src="/al-chiroq.png" alt="" />
                  <div className="txt">
                    <h3>Al-Chiroq</h3>
                    <p>{t("prjDesc1")}</p>
                  </div>
                </div>
              </a>
              <a href="https://porschevw1w.netlify.app/">
                <div className="card">
                  <img src="/porche.png" alt="" />
                  <div className="txt">
                    <h3>Porsche</h3>
                    <p>{t("prjDesc2")} </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="contact" id="contact">
            <h1>{t("contactTitle")}</h1>
            <div className="low">
              <div className="info">
                <h2>{t("social")}</h2>
                <ul className="flex m-4 text-2xl gap-4">
                  <li>
                    <a href="https://www.linkedin.com/in/shohruh-rahmatullayev-9762b9315/">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+998881134707">
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
                <h2>{t("heart")}</h2>
                <form onSubmit={() => sendMessage()}>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    // value={name}
                    type="text"
                    label="Name"
                  />
                  <div className="relative flex w-full max-w-[100%] ">
                    <Menu placement="bottom-start">
                      <MenuHandler>
                        <Button
                          ripple={false}
                          variant="text"
                          color="blue-gray"
                          className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                        >
                          <img
                            src={"https://flagcdn.com/uz.svg"}
                            alt={name}
                            className="h-4 w-4 rounded-full object-cover"
                          />
                          {"+998"}
                        </Button>
                      </MenuHandler>
                      <MenuList className="max-h-[20rem] max-w-[18rem]">
                        <MenuItem
                          value={"Uzbekistan"}
                          className="flex items-center gap-2"
                          onClick={() => setCountry(index)}
                        >
                          <img
                            src={flags.svg}
                            alt={name}
                            className="h-5 w-5 rounded-full object-cover"
                          />
                          {name}{" "}
                          <span className="ml-auto">{countryCallingCode}</span>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                    <Input
                      type="tel"
                      placeholder="Mobile Number"
                      className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      containerProps={{
                        className: "min-w-0",
                      }}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                  <Textarea
                    onChange={(e) => setMes(e.target.value)}
                    value={mes}
                    className="p-10"
                    type="text"
                    label="Your Message"
                  />
                  <Button onClick={() => sendMessage()} variant="outlined">
                    {t("sendButton")}
                  </Button>
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                  />
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
