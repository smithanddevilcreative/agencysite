"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type GameState =
  | "landing"
  | "fork"
  | "devil"
  | "moreDevil"
  | "craft"
  | "hell"
  | "return";

export function Pixel404Game() {
  const [state, setState] = useState<GameState>("landing");

  const scene = useMemo(() => {
    switch (state) {
      case "fork":
        return {
          title: "The path divides.",
          body: "To the left: craft, discipline and a very sensible sign. To the right: a red glow and the faint sound of a bad idea getting interesting.",
          actions: [
            ["Take the devilish path", "devil"],
            ["Take the sensible path", "craft"],
          ] as const,
        };
      case "devil":
        return {
          title: "The devil is in the detail.",
          body: "He offers no shortcuts. Just a question: do you want the idea people expect, or the one they remember?",
          actions: [
            ["Choose the one they remember", "moreDevil"],
            ["Maybe craft matters too", "craft"],
          ] as const,
        };
      case "moreDevil":
        return {
          title: "A little devil is useful.",
          body: "Enough to make the work distinctive. Not enough to set fire to the brief. Ahead, the path splits again.",
          actions: [
            ["Add more mischief", "hell"],
            ["Temper it with craft", "return"],
          ] as const,
        };
      case "craft":
        return {
          title: "Craft keeps the devil honest.",
          body: "Ideas need judgement. Detail. Restraint. The kind of work that looks effortless because somebody did the hard bit properly.",
          actions: [
            ["Bring the devil back in", "return"],
            ["Stay completely sensible", "hell"],
          ] as const,
        };
      case "hell":
        return {
          title: "Welcome to creative hell.",
          body: "Too much devil and it becomes noise. Too much safety and it becomes wallpaper. Either way, nobody remembers who made it.",
          actions: [
            ["Try again", "fork"],
            ["Escape to the main site", "return"],
          ] as const,
        };
      case "return":
        return {
          title: "Smith. Devil. In that order.",
          body: "Craft gives the idea shape. Devilish creativity gives it a reason to exist. That is the path home.",
          actions: [] as const,
        };
      default:
        return {
          title: "You have strayed from the path.",
          body: "4 & 4. Page not found.",
          actions: [] as const,
        };
    }
  }, [state]);

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
          </div>

          <div className="sd-404-pixel__copy" aria-live="polite">
            <h1>{scene.title}</h1>
            <p>{scene.body}</p>
          </div>

          {state === "landing" ? (
            <nav className="sd-404-pixel__actions" aria-label="404 options">
              <Link className="sd-404-pixel__button" href="/">
                Turn back to safety
              </Link>
              <button
                className="sd-404-pixel__button sd-404-pixel__button--primary"
                type="button"
                onClick={() => setState("fork")}
              >
                <span aria-hidden="true">▶</span> Follow the path
              </button>
            </nav>
          ) : state === "return" ? (
            <nav className="sd-404-pixel__actions" aria-label="404 options">
              <Link className="sd-404-pixel__button sd-404-pixel__button--primary" href="/">
                <span aria-hidden="true">▶</span> Enter Smith &amp; Devil
              </Link>
              <button className="sd-404-pixel__button" type="button" onClick={() => setState("fork")}>
                Walk the path again
              </button>
            </nav>
          ) : (
            <div className="sd-404-pixel__actions" role="group" aria-label="Choose a path">
              {scene.actions.map(([label, next], index) => (
                <button
                  className={"sd-404-pixel__button" + (index === 0 ? " sd-404-pixel__button--primary" : "")}
                  type="button"
                  key={state + "-" + label}
                  onClick={() => setState(next)}
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
