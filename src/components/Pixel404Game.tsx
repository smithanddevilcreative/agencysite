"use client";

import Link from "next/link";
import { useState } from "react";

type Room =
  | "landing"
  | "smithy"
  | "yard"
  | "bargain"
  | "chair"
  | "boast"
  | "tree"
  | "branch"
  | "purse"
  | "gold"
  | "forge"
  | "fight"
  | "lastTrick"
  | "doubt"
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
    yard: {
      label: "THE YARD",
      title: "You run.",
      body: "You make it as far as the yard before the Devil appears in front of you. “You really thought that would work?”",
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
    boast: {
      label: "THE BOAST",
      title: "You stay to gloat.",
      body: "The Devil stops struggling. “Very clever,” he says. “But how long do you plan to stand there?” The room grows colder.",
    },
    tree: {
      label: "THE OLD TREE",
      title: "The Devil returns.",
      body: "Years pass. He finds you beneath the old tree outside the smithy. “No chair this time,” he says. Above you hangs the finest apple on the branch.",
    },
    branch: {
      label: "THE BRANCH",
      title: "You climb first.",
      body: "The branch bends beneath you. The Devil waits below with a patient smile. You have made this unnecessarily difficult.",
    },
    purse: {
      label: "THE PURSE",
      title: "The Devil is furious.",
      body: "You have trapped him again. This time he promises gold enough to fill your purse forever if you let him go. The purse lies open on the bench.",
    },
    gold: {
      label: "THE GOLD",
      title: "The purse begins to fill.",
      body: "Coins spill across the floor. Then more. Then more. The Devil watches you watching the gold.",
    },
    forge: {
      label: "THE FORGE",
      title: "He comes for you a third time.",
      body: "The Devil steps into the forge and bolts the door behind him. “No chairs. No trees. No bargains. Tonight you come with me.” The fire is white-hot.",
    },
    fight: {
      label: "THE FIGHT",
      title: "You swing the hammer.",
      body: "The Devil catches it in one hand. That was brave. It was not clever.",
    },
    lastTrick: {
      label: "THE LAST TRICK",
      title: "The Devil laughs.",
      body: "“You cannot forge a cage strong enough to hold me.” He leans close to the iron box to prove his point.",
    },
    doubt: {
      label: "THE DOUBT",
      title: "You hesitate.",
      body: "The Devil is halfway inside the box. He notices you thinking. “Go on,” he says. “Check. Make sure.”",
    },
    hell: {
      label: "CREATIVE HELL",
      title: "The Devil outwitted you.",
      body: "Your bargain has finally come due.",
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
            <div className="sd-404-pixel__hellArtwork">
              <img
                src="https://cdn.sanity.io/images/6y2dn5q3/production/a6b0c2e8b0421611a45321ac1f91ac54514f1581-1881x836.png"
                alt="Creative Hell. Game over. A pixel-art hellscape filled with bad creative clichés."
              />
            </div>
          ) : (
            <div className="sd-404-pixel__artWrap" aria-hidden="true">
              <img className="sd-404-pixel__approvedArt" src="/brand/404-approved-art.webp" alt="" />
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
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("yard")}>Run through the back door</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("bargain")}>Invite him in</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("fight")}>Take up your hammer and fight</button>
            </div>
          )}

          {room === "yard" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("bargain")}>Stop running and talk</button>
              <button className={choiceClass} type="button" onClick={lose}>Keep running into the dark</button>
            </div>
          )}

          {room === "bargain" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={lose}>Shake his hand</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("chair")}>Offer him a chair while you fetch your coat</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("boast")}>Tell him he will have to drag you there</button>
            </div>
          )}

          {room === "boast" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={lose}>Keep provoking him</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("chair")}>Offer him a seat and change tack</button>
            </div>
          )}

          {room === "chair" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("boast")}>Stay and gloat</button>
              <button className={choiceClass} type="button" onClick={lose}>Release him without terms</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("tree")}>Make him swear to leave you in peace for seven years</button>
            </div>
          )}

          {room === "tree" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("branch")}>Climb the tree yourself</button>
              <button className={choiceClass} type="button" onClick={lose}>Accept that your time is up</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("purse")}>Ask him to fetch the apple</button>
            </div>
          )}

          {room === "branch" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("purse")}>Climb down and dare him to do better</button>
              <button className={choiceClass} type="button" onClick={lose}>Jump into his arms</button>
            </div>
          )}

          {room === "purse" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("forge")}>Make him promise to return alone next time</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("gold")}>Take the gold</button>
              <button className={choiceClass} type="button" onClick={lose}>Throw the purse into the fire</button>
            </div>
          )}

          {room === "gold" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={lose}>Keep filling the purse</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("forge")}>Stop while you still can</button>
            </div>
          )}

          {room === "forge" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("fight")}>Swing the hammer at him</button>
              <button className={choiceClass} type="button" onClick={lose}>Offer him your soul twice over</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("lastTrick")}>Ask if he can make himself small enough to fit inside the iron box</button>
            </div>
          )}

          {room === "fight" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={lose}>Swing again</button>
              <button className={choiceClass} type="button" onClick={() => room === "fight" ? setRoom("bargain") : setRoom("forge")}>Lower the hammer and think</button>
            </div>
          )}

          {room === "lastTrick" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("doubt")}>Open the box to check he is inside</button>
              <button className={choiceClass} type="button" onClick={lose}>Ask him to promise not to escape</button>
              <button className={choiceClass} type="button" onClick={() => setRoom("win")}>Drop the lid and hammer it shut</button>
            </div>
          )}

          {room === "doubt" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("win")}>Stop checking. Slam the lid.</button>
              <button className={choiceClass} type="button" onClick={lose}>Open it properly</button>
            </div>
          )}

          {room === "hell" && (
            <div className="sd-404-pixel__actions" aria-label="Game over">
              <button
                className="sd-404-pixel__button sd-404-pixel__button--primary"
                type="button"
                onClick={reset}
              >
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

        {room !== "landing" && room !== "win" && room !== "hell" && (
          <Link className="sd-404-pixel__giveUp" href="/">
            Enough heroics. Take the easy way out →
          </Link>
        )}

        <div className="sd-404-pixel__status" aria-hidden="true">
          <span>SMITH &amp; DEVIL&nbsp;&nbsp;<i>//</i>&nbsp;&nbsp;CREATIVE UNDERWORLD</span>
          <span><b>4 &amp; 4</b>&nbsp;&nbsp;<i>//</i>&nbsp;&nbsp;PAGE NOT FOUND</span>
        </div>
      </div>
    </main>
  );
}
