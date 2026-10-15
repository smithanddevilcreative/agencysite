"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type GameState =
  | "start"
  | "look"
  | "left"
  | "key"
  | "talk"
  | "door"
  | "ready"
  | "open"
  | "stay";

export function Pixel404Game() {
  const [state, setState] = useState<GameState>("start");
  const [hasKey, setHasKey] = useState(false);

  const scene = useMemo(() => {
    switch (state) {
      case "look":
        return {
          title: "And you looked upon the place.",
          body: "Brimstone. Broken links. One suspiciously expensive chair. Something glints on the floor.",
          actions: [
            ["Pick it up", "key"],
            ["Leave it alone", "left"],
          ] as const,
        };
      case "left":
        return {
          title: "You leave it alone.",
          body: "Probably wise. Although you are still trapped in hell.",
          actions: [
            ["Look again", "look"],
            ["Talk to the devil", "talk"],
          ] as const,
        };
      case "key":
        return {
          title: "And there was a key.",
          body: "As was foretold.",
          actions: [
            ["Talk to the devil", "talk"],
            ["Inspect the door", "door"],
          ] as const,
        };
      case "talk":
        return {
          title: "The devil looks up.",
          body: hasKey
            ? "“4 & 4?” You nod. “And lo, it was not found.” He notices the key. “Go forth.”"
            : "“4 & 4?” You nod. “And lo, it was not found.” He points towards the floor. “Seek, and ye shall find.”",
          actions: hasKey
            ? ([["Inspect the door", "door"]] as const)
            : ([["Look around", "look"], ["Inspect the door", "door"]] as const),
        };
      case "door":
        return {
          title: "You inspect the door.",
          body: hasKey
            ? "A small brass plaque reads WAY OUT. Underneath: NO REFUNDS. The key fits."
            : "A small brass plaque reads WAY OUT. Underneath: NO REFUNDS. The handle does not move.",
          actions: hasKey
            ? ([["Open the door", "ready"]] as const)
            : ([["Look around", "look"], ["Talk to the devil", "talk"]] as const),
        };
      case "ready":
        return {
          title: "Knock, and it shall be opened unto you.",
          body: "The lock clicks. The devil sighs. “They always leave.”",
          actions: [["Open the door", "open"]] as const,
        };
      case "open":
        return {
          title: "Go forth.",
          body: "The door opens onto a rather more familiar part of the internet.",
          actions: [] as const,
        };
      case "stay":
        return {
          title: "Bold choice.",
          body: "The devil seems pleased. “Fancy doing some brand strategy?”",
          actions: [["Actually, open the door", "open"]] as const,
        };
      default:
        return {
          title: "You have strayed from the path.",
          body: "There is a door. There is a devil. The door is locked.",
          actions: [
            ["Look around", "look"],
            ["Talk to the devil", "talk"],
            ["Inspect the door", "door"],
          ] as const,
        };
    }
  }, [state, hasKey]);

  function choose(next: GameState) {
    if (next === "key") setHasKey(true);
    setState(next);
  }

  return (
    <main className="sd-404-pixel">
      <div className="sd-404-pixel__screen">
        <div className="sd-404-pixel__content">
          <div className="sd-404-pixel__artWrap" aria-hidden="true">
            <img
              className="sd-404-pixel__approvedArt"
              src="/brand/404-approved-art.webp"
              alt=""
            />
            <div className="sd-404-pixel__artEmbers">
              {Array.from({ length: 9 }).map((_, i) => <span key={i} />)}
            </div>
            {hasKey && state !== "open" && (
              <span className="sd-404-pixel__key" aria-hidden="true">◆</span>
            )}
          </div>

          <div className="sd-404-pixel__copy" aria-live="polite">
            <h1>{scene.title}</h1>
            <p>{scene.body}</p>
          </div>

          {hasKey && state !== "open" && (
            <p className="sd-404-pixel__inventory">YOU HAVE: 1 KEY</p>
          )}

          {state === "open" ? (
            <nav className="sd-404-pixel__actions" aria-label="404 options">
              <Link className="sd-404-pixel__button sd-404-pixel__button--primary" href="/">
                <span aria-hidden="true">▶</span> Return to Smith &amp; Devil
              </Link>
              <button className="sd-404-pixel__button" type="button" onClick={() => setState("stay")}>
                Stay in hell
              </button>
            </nav>
          ) : (
            <div className="sd-404-pixel__actions" role="group" aria-label="Choose an action">
              {scene.actions.map(([label, next], index) => (
                <button
                  className={"sd-404-pixel__button" + (index === 0 ? " sd-404-pixel__button--primary" : "")}
                  type="button"
                  key={state + "-" + label}
                  onClick={() => choose(next)}
                >
                  {index === 0 && <span aria-hidden="true">▶</span>}
                  {label}
                </button>
              ))}
            </div>
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
