import  BeersComponent from "./Beers.ce.vue";
import { defineCustomElement } from "vue";

let componentIsRegistered = false;
console.log("Hello from the web component");

function registerVueComponentAsWebComponent(webComponentTag: string) {
    if (componentIsRegistered) {
        return;
    }

    console.log(`web component register: ${webComponentTag}`);
    customElements.define(webComponentTag, defineCustomElement(BeersComponent));
    componentIsRegistered = true;
}

registerVueComponentAsWebComponent('beers-wc');
