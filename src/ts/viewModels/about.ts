import * as AccUtils from "../accUtils";
import * as ko from 'knockout';
import * as Bootstrap from 'ojs/ojbootstrap';
import * as jquery from 'jquery';
import 'ojs/ojknockout';
import 'ojs/ojinputtext';
import 'ojs/ojformlayout';
import { IntlConverterUtils } from 'ojs/ojconverterutils-i18n';
import ArrayDataProvider = require('ojs/ojarraydataprovider');
import 'ojs/ojinputnumber';
import 'ojs/ojdatetimepicker';
import 'ojs/ojselectsingle';
import 'ojs/ojselectcombobox';
import 'ojs/ojselectsingle';
import 'ojs/ojcheckboxset';
import 'ojs/ojradioset';
import 'ojs/ojslider';
import 'ojs/ojswitch';
import * as HtmlUtils from "ojs/ojhtmlutils";

import 'jet-composites/head-comp/1.0.0/loader';
import 'jet-composites/user-then/1.0.0/loader';
class AboutViewModel {


    textVal: ko.Observable<string>;
    browsers : ko.ObservableArray;
    browserDP;

   
    constructor() {
       
      this.textVal = ko.observable('text');
      this.browsers = ko.observableArray([
        {value: "one" , label: 'chrome'},
        {value: "two" , label: 'IE'},
        {value: "three" , label: 'opera'},
      ])

      this.browserDP = new ArrayDataProvider(this.browsers, {keyAttributes : 'value'});

    }


  onChanged(event) {
           console.log(event);
  }

  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   * This method might be called multiple times - after the View is created
   * and inserted into the DOM and after the View is reconnected
   * after being disconnected.
   */
  connected(): void {
    AccUtils.announce("About page loaded.");
    document.title = "About";
    // implement further logic if needed
  }

  /**
   * Optional ViewModel method invoked after the View is disconnected from the DOM.
   */
  disconnected(): void {
    // implement if needed
  }

  /**
   * Optional ViewModel method invoked after transition to the new View is complete.
   * That includes any possible animation between the old and the new View.
   */
  transitionCompleted(): void {
    // implement if needed
  }
}

export = AboutViewModel;