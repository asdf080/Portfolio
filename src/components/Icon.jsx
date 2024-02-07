import React from "react";
const css = {
  display: "inline-block",
  padding: "5px 10px",
  borderRadius: "10px",
  margin: "10px 10px 5px 0",
};

export function HtmlIcon() {
  return <span style={{ ...css, background: "#FFE2DD" }}>HTML</span>;
}

export function CssIcon() {
  return <span style={{ ...css, background: "#E8DEEE" }}>CSS</span>;
}

export function JsIcon() {
  return <span style={{ ...css, background: "#FDECC8" }}>JS</span>;
}

export function JQueryIcon() {
  return <span style={{ ...css, background: "#FADEC9" }}>jQuery</span>;
}

export function ReacIcon() {
  return <span style={{ ...css, background: "#DBEDDB" }}>React</span>;
}

export function TailwindIcon() {
  return <span style={{ ...css, background: "#D3E5EF" }}>Tailwind CSS</span>;
}
