import { Elm } from "./src/Main.elm";

console.log({ Elm });

// Mount "Hello" Browser.{element,document} on #root
Elm.Main.init({
  node: document.getElementById("root"),
  flags: "Initial Message",
});
