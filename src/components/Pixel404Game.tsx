"use client";

import Link from "next/link";
import { useState } from "react";

type Room =
  | "landing"
  | "smithy"
  | "bargain"
  | "chair"
  | "tree"
  | "purse"
  | "forge"
  | "lastTrick"
  | "hell"
  | "win";

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
      body: "Years ago you struck a bargain with the Devil: unmatched skill at the forge in return for your soul. Tonight, at the stroke of midnight, he knocks on your door.",
    },
    bargain: {
      label: "THE BARGAIN",
      title: "The Devil holds out his hand.",
      body: "“A bargain is a bargain,” he says. “Come quietly and I may make the journey pleasant.” You have no intention of going quietly.",
    },
    chair: {
      label: "THE CHAIR",
      title: "The Devil takes a seat.",
      body: "The old chair grips him fast. He strains against it and cannot rise. “Release me,” he snarls, “and I will grant you more time.”",
    },
    tree: {
      label: "THE OLD TREE",
      title: "The Devil returns.",
      body: "Years pass. He finds you beneath the old tree outside the smithy. “No chair this time,” he says. Above you hangs the finest apple on the branch.",
    },
    purse: {
      label: "THE PURSE",
      title: "The Devil is furious.",
      body: "You have trapped him again. This time he promises gold enough to fill your purse forever if you let him go. The purse lies open on the bench.",
    },
    forge: {
      label: "THE FORGE",
      title: "He comes for you a third time.",
      body: "The Devil steps into the forge and bolts the door behind him. “No chairs. No trees. No bargains. Tonight you come with me.” The fire is white-hot.",
    },
    lastTrick: {
      label: "THE LAST TRICK",
      title: "The Devil laughs.",
      body: "“You cannot forge a cage strong enough to hold me.” He leans close to the anvil to prove his point.",
    },
    hell: {
      label: "CREATIVE HELL",
      title: "The Devil outwitted you.",
      body: "The bargain is collected. This path ends here.",
    },
    win: {
      label: "INGENIOUS IDEAS",
      title: "You outwitted the Devil.",
      body: "The bargain is broken. The forge is yours again. A door opens back to Smith & Devil.",
    },
  }[room];

  const choiceClass = "sd-404-pixel__button";

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
              <button className={choiceClass} type="button" onClick={lose}>Take up your hammer and fight</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("bargain")}>Invite him in</button>
              <button className={choiceClass} type="button" onClick={lose}>Run through the back door</button>
            </div>
          )}

          {room === "bargain" && (
            <div className="sd-404-pixel__actions" role="group" aria-label="Choose an action">
              <button className={choiceClass} type="button" onClick={lose}>Shake his hand</button>
              <button className={choiceClass} type="button" onClick={lose}>Refuse him outright</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("chair")}>Offer him a chair while you fetch your coat</button>
            </div>
          )}

          {room === "chair" && (
            <div className="sd-404-pixel__actions" role="group" aria-label="Choose an action">
              <button className={choiceClass} type="button" onClick={() => setRoom("tree")}>Make him swear to leave you in peace for seven years</button>
              <button className={choiceClass} type="button" onClick={lose}>Release him without terms</button>
              <button className={choiceClass} type="button" onClick={lose}>Sit beside him and gloat</button>
            </div>
          )}

          {room === "tree" && (
            <div className="sd-404-pixel__actions" role="group" aria-label="Choose an action">
              <button className={choiceClass} type="button" onClick={lose}>Climb the tree yourself</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("purse")}>Ask him to fetch the apple</button>
              <button className={choiceClass} type="button" onClick={lose}>Accept that your time is up</button>
            </div>
          )}

          {room === "purse" && (
            <div className="sd-404-pixel__actions" role="group" aria-label="Choose an action">
              <button className={choiceClass} type="button" onClick={lose}>Take the gold and release him</button>
              <button className={choiceClass} type="button" onClick={lose}>Throw the purse into the fire</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("forge")}>Make him promise to return alone next time</button>
            </div>
          )}

          {room === "forge" && (
            <div className="sd-404-pixel__actions" role="group" aria-label="Choose an action">
              <button className={choiceClass} type="button" onClick={() => setRoom("lastTrick")}>Ask if he can make himself small enough to fit inside the iron box</button>
              <button className={choiceClass} type="button" onClick={lose}>Swing the hammer at him</button>
              <button className={choiceClass} type="button" onClick={lose}>Offer him your soul twice over</button>
            </div>
          )}

          {room === "lastTrick" && (
            <div className="sd-404-pixel__actions" role="group" aria-label="Choose an action">
              <button className={choiceClass} type="button" onClick={lose}>Open the box to check he is inside</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("win")}>Drop the lid and hammer it shut</button>
              <button className={choiceClass} type="button" onClick={lose}>Ask him to promise not to escape</button>
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
