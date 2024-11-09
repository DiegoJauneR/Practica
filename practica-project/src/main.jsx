import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { TwitterFollowCart } from "./TwitterFollowCart.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <section className="App">
    <TwitterFollowCart
      isFollowing={false}
      userName="midudev"
      name="miguel angel"
    />
    <TwitterFollowCart
      isFollowing
      userName="DiegoJaune"
      name="Twitch con mi nombre wtf"
    />
  </section>
);
