"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Room =
  | "landing"
  | "smithy"
  | "crossroads"
  | "tree"
  | "devil"
  | "tunnel"
  | "hell"
  | "chair"
  | "forge"
  | "ending";

type Item = "hammer" | "key" | "purse";

export function Pixel404Game() {
  const [room, setRoom] = useState<Room>("landing");
  const [items, setItems] = useState<Item[]>([]);
  const [devilTrapped, setDevilTrapped] = useState(false);
  const [message, setMessage] = useState("");

  const has = (item: Item) => items.includes(item);
  const take = (item: Item) => {
    if (!has(item)) setItems((current) => [...current, item]);
  };

  const scene = useMemo(() => {
    switch (room) {
      case "smithy":
        return {
          label: "THE SMITHY",
          title: "You find yourself in a blacksmith’s workshop.",
          body: "The forge is warm. A hammer hangs on the wall. An old wooden chair sits beside the fire. A door leads NORTH.",
        };
      case "crossroads":
        return {
          label: "THE CROSSROADS",
          title: "The path divides.",
          body: "WEST leads to an old tree. EAST slopes down towards a red glow. Behind you is the smithy.",
        };
      case "tree":
        return {
          label: "THE OLD TREE",
          title: "A purse hangs from a branch.",
          body: devilTrapped
            ? "The tree is quiet now. The purse is still there."
            : "A well-dressed stranger leans against the trunk. He smiles as though he has been waiting for you.",
        };
      case "devil":
        return {
          label: "THE STRANGER",
          title: "“You look lost.”",
          body: "He offers you a shorter route home. He says there is only one small condition. He does not say what it is.",
        };
      case "tunnel":
        return {
          label: "THE RED TUNNEL",
          title: "The air gets warmer.",
          body: "Ahead, a brass door stands open. Behind it you can hear applause, laughter and somebody saying the word ‘disruptive’ far too often.",
        };
      case "hell":
        return {
          label: "CREATIVE HELL",
          title: "You have arrived somewhere dreadful.",
          body: "Thousands of identical neon signs cover the walls. Every one says BE BOLD. A deck on a plinth contains 94 slides and no idea.",
        };
      case "chair":
        return {
          label: "THE CHAIR",
          title: devilTrapped ? "The Devil cannot get up." : "It is just an old wooden chair.",
          body: devilTrapped
            ? "He pulls. He curses. The chair does not care. Somewhere, an ancient contract quietly becomes negotiable."
            : "It looks ordinary. Which is usually when things get interesting.",
        };
      case "forge":
        return {
          label: "THE FORGE",
          title: "Something strange sits on the anvil.",
          body: "It is interesting. It is original. It is also completely useless.",
        };
      case "ending":
        return {
          label: "THE WAY HOME",
          title: "The door opens.",
          body: "The strange thing now has shape, purpose and just enough mischief. The Devil looks at it, then at you. “That’ll do.”",
        };
      default:
        return {
          label: "4 & 4",
          title: "You have strayed from the path.",
          body: "Page not found.",
        };
    }
  }, [room, devilTrapped]);

  const inventory = items.length ? items.map((i) => i.toUpperCase()).join(" · ") : "EMPTY";

  return (
    <main className="sd-404-pixel">
      <div className="sd-404-pixel__screen">
        <div className="sd-404-pixel__content">
          <div className="sd-404-pixel__artWrap" aria-hidden="true">
            <img className="sd-404-pixel__approvedArt" src="/brand/404-approved-art.webp" alt="" />
            <div className="sd-404-pixel__artEmbers">
              {Array.from({ length: 9 }).map((_, i) => <span key={i} />)}
            </div>
          </div>

          <div className="sd-404-pixel__copy" aria-live="polite">
            <span className="sd-404-pixel__room">{scene.label}</span>
            <h1>{scene.title}</h1>
            <p>{message || scene.body}</p>
          </div>

          {room !== "landing" && (
            <p className="sd-404-pixel__inventory">YOU HAVE: {inventory}</p>
          )}

          {room === "landing" && (
            <nav className="sd-404-pixel__actions" aria-label="404 options">
              <Link className="sd-404-pixel__button" href="/">Turn back to safety</Link>
              <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={() => { setRoom("smithy"); setMessage(""); }}>
                <span aria-hidden="true">▶</span> Follow the path
              </button>
            </nav>
          )}

          {room === "smithy" && (
            <div className="sd-404-pixel__actions">
              {!has("hammer") && <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={() => { take("hammer"); setMessage("You take the hammer. It is heavier than it looks."); }}>Take hammer</button>}
              <button className="sd-404-pixel__button" type="button" onClick={() => { setRoom("chair"); setMessage(""); }}>Inspect chair</button>
              <button className="sd-404-pixel__button" type="button" onClick={() => { setRoom("crossroads"); setMessage(""); }}>Go north</button>
            </div>
          )}

          {room === "crossroads" && (
            <div className="sd-404-pixel__actions">
              <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={() => { setRoom("tree"); setMessage(""); }}>Go west</button>
              <button className="sd-404-pixel__button" type="button" onClick={() => { setRoom("tunnel"); setMessage(""); }}>Go east</button>
              <button className="sd-404-pixel__button" type="button" onClick={() => { setRoom("smithy"); setMessage(""); }}>Go south</button>
            </div>
          )}

          {room === "tree" && (
            <div className="sd-404-pixel__actions">
              {!has("purse") && <button className="sd-404-pixel__button" type="button" onClick={() => { take("purse"); setMessage("You take the purse. It feels bottomless. Probably best not to ask."); }}>Take purse</button>}
              {!devilTrapped && <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={() => { setRoom("devil"); setMessage(""); }}>Talk to stranger</button>}
              <button className="sd-404-pixel__button" type="button" onClick={() => { setRoom("crossroads"); setMessage(""); }}>Go east</button>
            </div>
          )}

          {room === "devil" && (
            <div className="sd-404-pixel__actions">
              <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={() => { setRoom("tunnel"); setMessage("You agree. He smiles. This should worry you."); }}>Accept the shortcut</button>
              <button className="sd-404-pixel__button" type="button" onClick={() => setMessage("“What does it cost?” you ask. “Nothing you’ll miss,” he says. This does not improve matters.")}>Ask the price</button>
              <button className="sd-404-pixel__button" type="button" onClick={() => { setRoom("tree"); setMessage("You refuse. The stranger looks disappointed, which feels encouraging."); }}>Refuse</button>
            </div>
          )}

          {room === "tunnel" && (
            <div className="sd-404-pixel__actions">
              <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={() => { setRoom("hell"); setMessage(""); }}>Enter the brass door</button>
              <button className="sd-404-pixel__button" type="button" onClick={() => { setRoom("crossroads"); setMessage(""); }}>Turn back</button>
            </div>
          )}

          {room === "hell" && (
            <div className="sd-404-pixel__actions">
              <button className="sd-404-pixel__button" type="button" onClick={() => setMessage("You open the deck. Slide 37 says AUTHENTICITY in 96pt type. You close it again.")}>Inspect the deck</button>
              <button className="sd-404-pixel__button" type="button" onClick={() => setMessage("The nearest neon sign flickers. It now says BE BOLDER. Somehow worse.")}>Read the signs</button>
              {has("hammer") ? (
                <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={() => { setRoom("forge"); setMessage(""); }}>Use the hammer</button>
              ) : (
                <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={() => { setRoom("crossroads"); setMessage("You have imagination, but no tools. Back to the crossroads."); }}>Find a way out</button>
              )}
            </div>
          )}

          {room === "chair" && (
            <div className="sd-404-pixel__actions">
              {!devilTrapped ? (
                <>
                  <button className="sd-404-pixel__button" type="button" onClick={() => setMessage("You sit down. Nothing happens. It is, for you, just a chair.")}>Sit down</button>
                  <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={() => { setDevilTrapped(true); setMessage("You invite the stranger to sit. He does. He cannot get up. The chair has excellent judgement."); }}>Invite the stranger to sit</button>
                </>
              ) : (
                <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={() => { if (!has("key")) take("key"); setMessage("The Devil offers you a small iron key in exchange for being released. A bargain, at last, with useful terms."); }}>Make a deal</button>
              )}
              <button className="sd-404-pixel__button" type="button" onClick={() => { setRoom("smithy"); setMessage(""); }}>Back to smithy</button>
            </div>
          )}

          {room === "forge" && (
            <div className="sd-404-pixel__actions">
              <button className="sd-404-pixel__button" type="button" onClick={() => setMessage("You admire it. It remains interesting and useless.")}>Leave it untouched</button>
              <button className="sd-404-pixel__button sd-404-pixel__button--primary" type="button" onClick={() => { setRoom("ending"); setMessage(""); }}>Strike it</button>
            </div>
          )}

          {room === "ending" && (
            <nav className="sd-404-pixel__actions" aria-label="404 options">
              <Link className="sd-404-pixel__button sd-404-pixel__button--primary" href="/">
                <span aria-hidden="true">▶</span> Return to Smith &amp; Devil
              </Link>
              <button className="sd-404-pixel__button" type="button" onClick={() => { setRoom("smithy"); setItems([]); setDevilTrapped(false); setMessage(""); }}>Play again</button>
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
