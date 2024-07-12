import { Button, Carousel, Typography } from "@material-tailwind/react";
import "./style.scss";

export default function Footer() {
  return (
    <div className="container-all">

    <div className="footer">
      <div className="end">
        <h1>Portfolio</h1>
        <p>Hope we find our wave {":)"}</p>
        <h2>phone: +(998) 88 113 47 07</h2>
        <h2>telegram: @Fl_shoxrux</h2>
      </div>
      <div className="teamates">
        <h1>My team:</h1>
        <div className="gid">
          <div className="card">
            <h1>Javohir Esanov</h1>
            <p>
              His very hard-working teenage guy. As an example, I could say that
              the time he was sick he missed 3-4 lessons and learned everything
              in 2 days. <br />
            </p>
            <a href="https://zhavokh1rs-portfolio.netlify.app/">
              <Button className="button" variant="outlined">
                His Portfolio
              </Button>
            </a>
          </div>
          <div className="card">
            <h1>Xusan Mirkomilov</h1>
            <p>
              He is 18 y.o boy that not much hard-working as last one but still
              has own talents.
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


