import React, { useRef } from "react";
import PatchNote from "../components/PatchNote.tsx";
import Ad from "../components/Ad.tsx";

export type Advertisment = {
  title: string;
  img: string;
  text: string;
  link?: string;
  localhostlink?: string;
  action?: () => void;
};
const ads: Advertisment[] = [
  {
    title: "Hinta Yllättää",
    text: "Lähes Ilmaiset Takavarikoidut Autot",
    localhostlink: "/SECRET",
    img: "Proomainos2.png",
  },
  {
    title: "MrBeast",
    text: "Last to stop integrating gets free YO-kirjoitukset",
    img: "MRBEAST.png",
    link: "https://www.mayk.fi/lukio/lukiolaisen-opas/oppiaineet-ja-opintojaksot/ruotsi/",
  },
  {
    title: "Eläkkeellä?",
    text: "Edulliset Hammasimplantit Lähes Ilmaiseksi - Hinta Yllättää",
    img: "Hammasimplantti.png",
    action: () => {
      alert("GET AMOGUSED");
    },
  },
  {
    title: "Eläkkeellä?",
    text: "Huomaamaton Kuulolaite Senioreille",
    img: "Kuulolaite.png",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Pelata",
    text: "Pelata Ilmainen Netti Kasino Tämä Päivä Paikassa Espoo",
    img: "CASINO.png",
    action: () => {
      const link = document.createElement("a");
      link.href = `${process.env.PUBLIC_URL}/ads/CASINO.png`;
      link.download = "notvirus.exe";
      link.click();
    },
  },
  {
    title: "Halvat Senioriasunnot Kohteessa Kouvola",
    text: "Katso Lähes Ilmaiset Takavarikoidut Seniori Asunnot Kohteessa Kouvola - Hinta Yllättää",
    img: "Apartment.png",
    link: "https://hikipedia.info/wiki/Kouvola",
  },
];

function getRandomAd(): Advertisment {
  const index = Math.floor(Math.random() * ads.length);
  console.log(index);
  return ads[index];
}

export default function Homepage() {
  const ad1 = useRef<{ title: string; img: string; text: string }>(
    getRandomAd()
  );
  const ad2 = useRef<{ title: string; img: string; text: string }>(
    getRandomAd()
  );
  return (
    <>
      <canvas className="frontcanvas"></canvas>
      <div className="overlay">
        <div className="how">
          <div></div>
          <div>
            <h2>How To Play</h2>
            <p>
              Welcome to yohoho <br></br> <br></br> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quasi, voluptatum dignissimos illo
              voluptate maiores cupiditate libero perferendis minima
              reprehenderit dolore ex ab! Minus nihil reiciendis vel natus
              asperiores nam tempore optio quas, sequi doloremque? Odit quis
              minus nisi autem sequi dolorem culpa! Error quia eum velit sequi,
              illo est repellat. Quaerat, quibusdam ipsa fugit vel repellat
              laborum velit! Odio a nihil aut exercitationem ipsam quasi,
              explicabo fugiat sint architecto repudiandae et ducimus
              dignissimos tempore voluptatem quidem! Iusto reiciendis eveniet
              architecto. Quibusdam corporis consequuntur dolorem, doloremque
              consectetur possimus facere, ipsam sunt minima libero, voluptates
              tempora amet nostrum laborum quasi animi itaque.
            </p>
          </div>
        </div>
        <div className="logo">logo</div>
        <div className="name">
          <input type="text" placeholder="Name..."></input>
        </div>
        <div className="character">character</div>
        <div className="play">play</div>
        <div className="patch">
          {" "}
          <div></div>
          <div>
            <h2>Patch Notes</h2>
            <ul>
              <PatchNote
                date="22.5."
                content="Added high quality advertisment"
              ></PatchNote>
              <PatchNote date="20.5." content="Added patch notes"></PatchNote>
              <PatchNote date="22.4." content="Added Toxic Emotes"></PatchNote>
              <PatchNote date="27.3." content="Added Yohoho"></PatchNote>
            </ul>
          </div>
        </div>
        <div className="ad1 ad">
          <Ad ad={ad1.current}></Ad>
        </div>
        <div className="ad2 ad">
          <Ad ad={ad2.current}></Ad>
        </div>
      </div>
      <p className="copyright">©MukkuPretski</p>
    </>
  );
}
