import React from "react";

export function TwitterFollowCart({ userName, name, isFollowing }) {
  const imagenSrc = `https://unavatar.io/${userName}`;

  return (
    <article className="md-twitter">
      <header>
        <img
          className="tw-followCard-avatar"
          src={imagenSrc}
          alt={`El avatar de ${name}`}
        />
        <div className="tw_followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUser Name">@{userName}</span>{" "}
        </div>
      </header>

      <aside>
        <button>{isFollowing ? "Dejar de seguir" : "Seguir"}</button>{" "}
      </aside>
    </article>
  );
}
