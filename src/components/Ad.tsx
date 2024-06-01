import React, { useState } from "react";
import { Advertisment } from "../pages/Homepage";
import { useNavigate } from "react-router-dom";

export default function Ad({ ad }: { ad: Advertisment }) {
  const navigate = useNavigate();
  const [right, setRight] = useState<boolean>(true);
  return (
    <div
      onClick={() => {
        if (ad.link) {
          const link = document.createElement("a");
          link.href = ad.link;
          link.target = "_blank";
          link.click();
        } else if (ad.localhostlink) {
          navigate(ad.localhostlink);
        } else if (ad.action) {
          ad.action();
        }
      }}
    >
      <img alt={ad.title} src={`${process.env.PUBLIC_URL}/ads/${ad.img}`}></img>
      <div>
        <h3>{ad.title}</h3>
        <p>{ad.text}</p>
      </div>
      <div className="overlay"></div>
      <svg
        width="100"
        height="100"
        className={right ? "right" : ""}
        onClick={(e) => {
          e.stopPropagation();
          setRight((r) => !r);
          console.log(right);
        }}
      >
        <path d="M2,2l6,6" stroke="rgb(94, 211, 240)"></path>
        <path d="M8,2l-6,6" stroke="rgb(94, 211, 240)"></path>
      </svg>
    </div>
  );
}
