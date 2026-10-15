"use client";

import Link from "next/link";
import { useState } from "react";

type Room =
  | "landing"
  | "smithy"
  | "chairMistake"
  | "chairWon"
  | "tree"
  | "treeMistake"
  | "treeWon"
  | "purse"
  | "purseMistake"
  | "purseWon"
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
      label: "YOU ARE NOW IN THE SMITHY",
      title: "You are the smith.",
      body: "Years ago you sold your soul to the Devil in return for unmatched skill at the forge. Tonight the bargain is due, and he is standing at your door.",
    },
    chairMistake: {
      label: "THE DEVIL IS INSIDE",
      title: "The Devil is losing patience.",
      body: "He steps across the threshold and reaches for your arm. You have one chance to turn this around.",
    },
    chairWon: {
      label: "THE DEVIL IS TRAPPED",
      title: "He cannot get up.",
      body: "The enchanted chair holds him fast. The Devil rages until he agrees to give you seven more years in return for his freedom.",
    },
    tree: {
      label: "SEVEN YEARS LATER — BENEATH THE TREE",
      title: "The Devil finds you beneath the tree.",
      body: "He has come to collect again. Above you hangs a fine apple, and the old tree still has one useful property.",
    },
    treeMistake: {
      label: "YOU ARE NOW UP THE TREE",
      title: "You climbed the tree yourself.",
      body: "The Devil waits below with a smile. You have put yourself exactly where he wants you.",
    },
    treeWon: {
      label: "THE DEVIL IS TRAPPED AGAIN",
      title: "Now he is stuck.",
      body: "The Devil cannot climb down until you allow it. Furious, he buys his freedom with another seven years.",
    },
    purse: {
      label: "SEVEN YEARS LATER — BACK AT THE FORGE",
      title: "This time, the Devil comes prepared.",
      body: "He will not sit. He will not climb. Then a gold sovereign rolls across the forge floor, and the Devil is suddenly nowhere to be seen.",
    },
    purseMistake: {
      label: "THE DEVIL IS IN YOUR HAND",
      title: "The coin burns in your hand.",
      body: "It twists between your fingers. Horns begin to form. You have one move before the Devil has you.",
    },
    purseWon: {
      label: "THE DEVIL IS IN THE PURSE",
      title: "You have him.",
      body: "The Devil is trapped inside the enchanted purse. The anvil is beside you. So is your sledgehammer.",
    },
    hell: {
      label: "CREATIVE HELL",
      title: "The Devil outwitted you.",
      body: "You should not have bargained with the Devil. You lose.",
    },
    win: {
      label: "INGENIOUS IDEAS",
      title: "You outwitted the Devil.",
      body: "The Devil swears never to come for you again. The bargain is broken.",
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
              <button className={choiceClass} type="button" onClick={() => setRoom("chairWon")}>
                Tell him you are ready. Offer him a seat while you fetch your coat.
              </button>
              <button className={choiceClass} type="button" onClick={() => setRoom("chairMistake")}>
                Stall him at the door.
              </button>
              <button className={choiceClass} type="button" onClick={lose}>
                Admit the bargain is due and go with him.
              </button>
            </div>
          )}

          {room === "chairMistake" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("chairWon")}>
                Change tack. Offer him the chair while you fetch your coat.
              </button>
              <button className={choiceClass} type="button" onClick={lose}>
                Try to force your way past him.
              </button>
            </div>
          )}

          {room === "chairWon" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("tree")}>
                Take the seven years. Let him go.
              </button>
              <button className={choiceClass} type="button" onClick={lose}>
                Let him go before he gives his word.
              </button>
            </div>
          )}

          {room === "tree" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("treeWon")}>
                Ask him to fetch the finest apple.
              </button>
              <button className={choiceClass} type="button" onClick={() => setRoom("treeMistake")}>
                Climb up and get the apple yourself.
              </button>
              <button className={choiceClass} type="button" onClick={lose}>
                Tell him you are out of tricks.
              </button>
            </div>
          )}

          {room === "treeMistake" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("treeWon")}>
                Call the apple rotten. Dare him to climb up and choose a better one.
              </button>
              <button className={choiceClass} type="button" onClick={lose}>
                Climb down into his reach.
              </button>
            </div>
          )}

          {room === "treeWon" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("purse")}>
                Take another seven years. Let him down.
              </button>
              <button className={choiceClass} type="button" onClick={lose}>
                Let him down before he gives his word.
              </button>
            </div>
          )}

          {room === "purse" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("purseWon")}>
                Use the tongs. Drop the sovereign into your enchanted purse.
              </button>
              <button className={choiceClass} type="button" onClick={() => setRoom("purseMistake")}>
                Pick up the sovereign.
              </button>
              <button className={choiceClass} type="button" onClick={lose}>
                Run from the forge.
              </button>
            </div>
          )}

          {room === "purseMistake" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("purseWon")}>
                Throw the changing coin into the purse.
              </button>
              <button className={choiceClass} type="button" onClick={lose}>
                Hold on to the gold.
              </button>
            </div>
          )}

          {room === "purseWon" && (
            <div className="sd-404-pixel__actions">
              <button className={choiceClass} type="button" onClick={() => setRoom("win")}>
                Put the purse on the anvil. Take up your sledgehammer.
              </button>
              <button className={choiceClass} type="button" onClick={lose}>
                Open the purse and hear him out.
              </button>
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

          {room !== "landing" && room !== "win" && (
            <Link className="sd-404-pixel__giveUp" href="/">
              Enough heroics. Take the easy way out →
            </Link>
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
