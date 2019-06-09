import m from "mithril";
import { Dialog, Button } from "polythene-mithril";

import "polythene-css/dist/polythene.css";            // Component CSS
import "polythene-css/dist/polythene-typography.css"; // Default Material Design styles including Roboto font

const App = {
  view: () =>
    m("div", [
      m(Button, {
        raised: true,
        label: "Open dialog",
        events: {
          onclick: () => {
            Dialog.show({
              /* note the Dialog component is below the other elements in the app */
              title: "Hello",
              body: "Click background to hide or press ESCAPE.",
              backdrop: true
            });
          }
        }
      }),
      m(Dialog)
    ])
};

const rootElement: HTMLElement | null = document.getElementById("root");
if (rootElement) {
  m.mount(rootElement, App);
}
