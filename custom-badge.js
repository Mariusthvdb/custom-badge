// Import custom badge editor
// import "./custom-badge-editor.js";

class CustomBadge extends HTMLElement {
  // Whenever the state changes, a new `hass` object is set. Use this to
  // update your content.
  set hass(hass) {
    this._hass = hass;
    this.updateContent();
  }

  // The user supplied configuration. Throw an exception and Home Assistant
  // will render an error badge.
  setConfig(config) {
    if (!config.entity) {
      throw new Error("You need to define an entity");
    }
    this.config = config;
    this.updateContent();
  }

  updateContent() {
    if (!this.config || !this._hass) return;

    const entityId = this.config.entity;
    const state = this._hass.states[entityId];
    const stateStr = state ? state.state : "unavailable";

    this.innerHTML = `<p>${stateStr}</p>`;
  }

  static getConfigElement() {
    return document.createElement("custom-badge-editor");
  }

  static getStubConfig() {
    return { entity: "sun.sun" };
  }
}

class CustomBadgeEditor extends HTMLElement {
  setConfig(config) {
    this._config = config;
  }

  configChanged(newConfig) {
    const event = new CustomEvent("config-changed", {
      bubbles: true,
      composed: true,
      detail: { config: newConfig }
    });
    this.dispatchEvent(event);
  }
}

customElements.define("custom-badge", CustomBadge);
customElements.define("custom-badge-editor", CustomBadgeEditor);

window.customBadges = window.customBadges || [];
window.customBadges.push({
  type: "custom-badge",
  name: "Custom badge",
  preview: false, // Optional - defaults to false
  description: "A custom badge made by @mariusthvdb !", // Optional
  documentationURL:
    "https://developers.home-assistant.io/docs/frontend/custom-ui/custom-badge", // Adds a help link in the frontend badge editor
});