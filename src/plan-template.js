import { LitElement, html, css } from 'lit';
import './suggested-plan.js';

export class PlanTemplate extends LitElement {
  static get tag() {
    return 'plan-template';
  }

  static get properties() {
    return {
      plans: { type: Array },
    };
  }

  constructor() {
    super();
    this.plans = [];
    this.updatePlan();
  }

  updatePlan() {
    const address = '../api/plan-data.js';
    fetch(address)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then(data => {
        this.plans = data;
      });
  }

  static get styles() {
    return css`
      .wrapper {
        border: 2px solid overscroll-behavior-block;
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        ${this.plans.map(
          plan => html`
            <div class="item">
              <suggested-plan
                weekNum="${plan.weekNum}"
                compTime="${plan.compTime}"
                weekTitle="${plan.weekTitle}"
                weekDescription="${plan.weekDescription}"
              >
              </suggested-plan>
            </div>
          `
        )}
      </div>
    `;
  }
}
customElements.define(PlanTemplate.tag, PlanTemplate);
