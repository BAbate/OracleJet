import Composite = require("ojs/ojcomposite");
import * as view from "text!./head-comp-view.html";
import viewModel from "./head-comp-viewModel";
import * as metadata from "text!./component.json";
import "css!./head-comp-styles.css";

Composite.register("head-comp", {
  view: view,
  viewModel: viewModel,
  metadata: JSON.parse(metadata)
});

declare global {
  namespace preact.JSX {
    interface IntrinsicElements {
     "head-comp": any;
    }
  }
}