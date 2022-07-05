import Composite = require("ojs/ojcomposite");
import * as view from "text!./user-then-view.html";
import viewModel from "./user-then-viewModel";
import * as metadata from "text!./component.json";
import "css!./user-then-styles.css";

Composite.register("user-then", {
  view: view,
  viewModel: viewModel,
  metadata: JSON.parse(metadata)
});

declare global {
  namespace preact.JSX {
    interface IntrinsicElements {
     "user-then": any;
    }
  }
}