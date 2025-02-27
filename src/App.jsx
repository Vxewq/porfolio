import { Button, Input, Textarea } from "@material-tailwind/react";
import { useCountries } from "use-react-countries";

import Navbar from "./components/navabar";
import "./App.scss";
import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import AnimatedCursor from "react-animated-cursor";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiNestjs, SiExpress, SiTypescript, SiAxios } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";


export default function App() {
  // for tg message
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
  // for responsive
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];

  const { t } = useTranslation("home");

  const [animation, setAnimation] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // i love kanye west !!!!

  // icons
  const skills = [
    {
      category: "Front-End",
      technologies: [
        {
          name: "HTML",
          icon: <DiHtml5 className="text-green-600 text-3xl" />,
        },
        { name: "CSS", icon: <DiCss3 className="text-green-600 text-3xl" /> },
        { name: "Sass", icon: <DiSass className="text-green-600 text-3xl" /> },
        {
          name: "Bootstrap",
          icon: <DiBootstrap className="text-green-600 text-3xl" />,
        },
        {
          name: "JavaScript",
          icon: <DiJavascript1 className="text-green-500 text-3xl" />,
        },
        {
          name: "React",
          icon: <DiReact className="text-green-500 text-3xl" />,
        },
        {
          name: "Tailwind CSS",
          icon: <span className="text-green-500 text-3xl">T</span>,
        }, // Tailwind doesn't have a direct icon
        {
          name: "Material-Tailwind",
          icon: <span className="text-green-500 text-3xl">MT</span>,
        },
        {
          name: "Ant Design (AntD)",
          icon: <span className="text-green-600 text-3xl">A</span>,
        },
        {
          name: "UIkit",
          icon: <span className="text-green-600 text-3xl">UI</span>,
        },
        {
          name: "AOS",
          icon: <span className="text-green-400 text-3xl">A</span>,
        },
      ],
    },
    {
      category: "Back-End",
      technologies: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500 text-3xl" />,
        },
        {
          name: "Nest.js",
          icon: <SiNestjs className="text-green-600 text-3xl" />,
        },
        {
          name: "Express",
          icon: <SiExpress className="text-green-600 text-3xl" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-green-600 text-3xl" />,
        },
        {
          name: "MongoDB",
          icon: <DiMongodb className="text-green-600 text-3xl" />,
        },
        {
          name: "Mongoose",
          icon: <span className="text-green-600 text-3xl">M</span>,
        },
        {
          name: "Axios",
          icon: <SiAxios className="text-green-600 text-3xl" />,
        },
      ],
    },
    {
      category: "Tools",
      technologies: [
        { name: "Git", icon: <IoLogoGithub className="text-black text-3xl" /> },
        {
          name: "GitHub",
          icon: <DiGithubBadge className="text-gray-600 text-3xl" />,
        },
        {
          name: "React Hook Form",
          icon: <span className="text-green-600 text-3xl">RH</span>,
        },
      ],
    },
  ];
  // prikol

  Aos.init()

  
  return (
    <>
      <AnimatedCursor color="255,255,255" />

      {animation ? (
        <video
          src="/intro.mp4"
          autoPlay
          muted
          style={{ width: "100%", height: "auto", overflowY: "hidden" }}
        ></video>
      ) : (
        <>
          <div className="container-showcase">
            <Navbar />
            <div data-aos="fade-up" className="showcase" id="home">
              <div className="info">
                <h1 className="txt">{t("h1")}</h1>
                <p className="txt">{t("p")}</p>
              </div>
            </div>
          </div>
          <div className="about" id="about">
            <div
              className=" mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
              id="skills"
            >
              <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
              <p className="text-center text-green-200 mb-8">
                The Tech's and Libraries I use, and have expirience with:
              </p>

              <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
                {skills.map((skill, index) => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    key={index}
                    className="border border-green-900 p-6 rounded-lg bg-green-900/20 shadow-lg w-full md:w-1/2"
                  >
                    <h3 className="text-xl font-bold mb-4 text-center">
                      {skill.category}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {skill.technologies.map((tech, idx) => (
                        <div key={idx} className="flex items-center space-x-4">
                          <span className="text-3xl">{tech.icon}</span>
                          <span className="text-lg">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="projects" id="projects">
            <h1>{t("projectTitle")}</h1>
            <div className="grid">
              <a data-aos="fade-right" href="https://projectvw1.netlify.app/">
                <div className="card">
                  <img src="/al-chiroq.png" alt="" />
                  <div className="txt">
                    <h3>Al-Chiroq</h3>
                    <p>{t("prjDesc1")}</p>
                  </div>
                </div>
              </a>
              <a data-aos="fade-left" data-aos-delay="400" href="https://porschevw1w.netlify.app/">
                <div className="card">
                  <img src="/porche.png" alt="" />
                  <div className="txt">
                    <h3>Porsche</h3>
                    <p>{t("prjDesc2")} </p>
                  </div>
                </div>
              </a>
              <a data-aos="fade-right" href="https://find-lyrics-sr.netlify.app/">
                <div className="card">
                  <img src="/image.png" alt="" />
                  <div className="txt">
                    <h3>Translator</h3>
                    <p>I used Transformer.Js framework. </p>
                  </div>
                </div>
              </a>
              <a data-aos="fade-left" data-aos-delay="400" href="https://find-lyrics-sr.netlify.app/">
                <div className="card">
                  <img src="/music.png" alt="" />
                  <div className="txt">
                    <h3>Lyrics Finder</h3>
                    <p>Its was great expririence working with API.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="contact" id="contact">
            <h1>{t("contactTitle")}</h1>
            <div className="low">
              <div data-aos='fade-down' className="info">
                <h2>{t("social")}</h2>
                <ul className="flex m-4 text-2xl gap-4">
                  <li>
                    <a href="https://www.linkedin.com/in/shohruh-rahmatullayev-9762b9315/">
                      <i
                        style={{ color: "green" }}
                        class="fa-brands fa-linkedin"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+998881134707">
                      <i
                        style={{ color: "green" }}
                        class="fa-solid fa-phone"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/le_shoxrux">
                      <i
                        style={{ color: "green" }}
                        class="fa-brands fa-telegram"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div data-aos='fade-up' className="tgbot">
                <h2>{t("heart")}</h2>
                <form onSubmit={() => sendMessage()}>
                  <Input
                    success
                    onChange={(e) => setName(e.target.value)}
                    // value={name}
                    type="text"
                    label="Name"
                  />
                  <Input
                    success
                    type="email"
                    label="Your username it Telegram"
                  />

                  <Textarea
                    success
                    onChange={(e) => setMes(e.target.value)}
                    value={mes}
                    className="p-10"
                    type="text"
                    label="Your Message"
                  />
                  <Button
                    color="green"
                    onClick={() => sendMessage()}
                    variant="outlined"
                  >
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
          <Footer data-aos="fade-up" />
        </>
      )}
    </>
  );
}
