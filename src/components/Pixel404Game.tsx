"use client";

import Link from "next/link";
import { useState } from "react";

type Room = "landing" | "smithy" | "chair" | "tree" | "forge" | "hell" | "win";

export function Pixel404Game() {
  const [room, setRoom] = useState<Room>("landing");

  const reset = () => setRoom("smithy");
  const lose = () => setRoom("hell");

  const scene = {
    landing: {
      label: "4 & 4",
      title: "You have strayed from the path.",
      body: "Page not found.",
    },
    smithy: {
      label: "THE SMITHY",
      title: "You are the smith.",
      body: "Years ago you made a bargain with the Devil: unmatched skill at the forge in return for your soul. Tonight, he has come to collect.",
    },
    chair: {
      label: "THE CHAIR",
      title: "The Devil sits.",
      body: "The chair grips him fast. He pulls. He curses. He cannot rise. You have outwitted him once.",
    },
    tree: {
      label: "THE OLD TREE",
      title: "The Devil wants another chance.",
      body: "Outside the smithy stands an old tree. He boasts that no trick of yours could hold him twice.",
    },
    forge: {
      label: "THE FORGE",
      title: "One last contest.",
      body: "Back at the forge, the Devil laughs at your hammer and anvil. “Iron cannot hold me,” he says.",
    },
    hell: {
      label: "CREATIVE HELL",
      title: "The Devil outwitted you.",
      body: "Bad bargain. Worse ending.",
    },
    win: {
      label: "INGENIOUS IDEAS",
      title: "You outwitted the Devil.",
      body: "The bargain is broken. The forge is yours. A door opens back to Smith & Devil.",
    },
  }[room];

  return (
    <main className="sd-404-pixel">
      <div className="sd-404-pixel__screen">
        <div className="sd-404-pixel__content">
          {room === "hell" ? (
            <div className="sd-404-pixel__hellscape" aria-hidden="true">
              <div className="sd-404-pixel__hellMoon">4&amp;4</div>
              <div className="sd-404-pixel__hellDevil">▲</div>
              <div className="sd-404-pixel__hellGround">
                {Array.from({ length: 12 }).map((_, i) => <span key={i} />)}
              </div>
            </div>
          ) : (
            <div className="sd-404-pixel__artWrap" aria-hidden="true">
              <img
                className="sd-404-pixel__approvedArt"
                src="/brand/404-approved-art.webp"
                alt=""
              />
              <div className="sd-404-pixel__artEmbers">
                {Array.from({ length: 9 }).map((_, i) => <span key={i} />)}
              </div>
            </div>
          )}

          <div className="sd-404-pixel__copy" aria-live="polite">
            <span className="sd-404-pixel__room">{scene.label}</span>
            <h1>{scene.title}</h1>
            <p>{scene.body}</p>
          </div>

          {room === "landing" && (
            <nav className="sd-404-pixel__actions" aria-label="404 options">
              <Link className="sd-404-pixel__button" href="/">Turn back to safety</Link>
              <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={reset}>
                <span aria-hidden="true">▶</span> Follow the path
              </button>
            </nav>
          )}

          {room === "smithy" && (
            <div className="sd-404-pixel__actions" role="group" aria-label="Choose an action">
              <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={() => setRoom("chair")}>
                Invite him to sit
              </button>
              <button className="sd-404-pixel__button" type="button" onClick={lose}>Fight him</button>
              <button className="sd-404-pixel__button" type="button" onClick={lose}>Run</button>
            </div>
          )}

          {room === "chair" && (
            <div className="sd-404-pixel__actions" role="group" aria-label="Choose an action">
              <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={() => setRoom("tree")}>
                Offer him another contest
              </button>
              <button className="sd-404-pixel__button" type="button" onClick={lose}>Take his word and release him</button>
            </div>
          )}

          {room === "tree" && (
            <div className="sd-404-pixel__actions" role="group" aria-label="Choose an action">
              <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={() => setRoom("forge")}>
                Dare him to climb
              </button>
              <button className="sd-404-pixel__button" type="button" onClick={lose}>Climb it yourself</button>
              <button className="sd-404-pixel__button" type="button" onClick={lose}>Accept his new bargain</button>
            </div>
          )}

          {room === "forge" && (
            <div className="sd-404-pixel__actions" role="group" aria-label="Choose an action">
              <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={() => setRoom("win")}>
                Weld him to the anvil
              </button>
              <button className="sd-404-pixel__button" type="button" onClick={lose}>Strike him with the hammer</button>
              <button className="sd-404-pixel__button" type="button" onClick={lose}>Make one final bargain</button>
            </div>
          )}

          {room === "hell" && (
            <div className="sd-404-pixel__actions" aria-label="Game over">
              <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={reset}>
                <span aria-hidden="true">▶</span> Try again
              </button>
            </div>
          )}

          {room === "win" && (
            <nav className="sd-404-pixel__actions" aria-label="Winning option">
              <Link className="sd-404-pixel__button sd-404-pixel__button--primary" href="/">
                <span aria-hidden="true">▶</span> Back to Smith &amp; Devil
              </Link>
            </nav>
          )}
        </div>

        <div className="sd-404-pixel__status" aria-hidden="true">
          <span>SMITH &amp; DEVIL&nbsp;&nbsp;<i>//</i>&nbsp;&nbsp;CREATIVE UNDERWORLD</span>
          <span><b>4 &amp; 4</b>&nbsp;&nbsp;<i>//</i>&nbsp;&nbsp;PAGE NOT FOUND</span>
        </div>
      </div>
    </main>
  );
}
