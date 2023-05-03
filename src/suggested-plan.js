import { LitElement, html, css } from 'lit';
import './plan-assignment.js';

export class SuggestedPlan extends LitElement {
  static get properties() {
    return {
      weekNum: { type: String },
      compTime: { type: Number },
      weekTitle: { type: String },
      weekDescription: { type: String },
      wTotal: { type: String },
      toggleOpen: { type: Boolean, reflect: true },
      tTitle: { type: String },
      tDescription: { type: String },
    };
  }

  static styles = css`
    :host {
      display: block;
      font-size: 18px;
    }
    .wrapper {
      display: flex;
      margin: 10px;
    }
    .week {
      text-align: center;
      width: 25%;
      font-weight: 200px;
      letter-spacing: -0.1px;
    }

    .week-info {
      border-bottom: 2px inset #808080;
      padding-bottom: 20px;
      width: 75%;
    }
    .wTitle {
      font-size: 30px;
    }
    .wNum {
      font-size: 35px;
    }
    .cTime {
      color: #1f1f1f;
      font-weight: 200px;
    }
    .wDescription {
      font-size: 18px;
      margin: 0px 0px 15px;
    }
    .details {
      list-style: none;
    }
    @media screen and (min-width: 501px) and (max-width: 800px) {
      .wrapper {
        font-size: 10px;
      }
    }
  `;

  constructor() {
    super();
    this.weekNum = '1';
    this.compTime = '3';
    this.weekTitle = 'Misconceptions about happiness';
    this.weekDescription =
      'In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.';
    this.display = 'See All';
    this.wTotal = '4 videos (Total 13 min), 11 readings';
    this.toggleOpen = false;
    this.tTitle = 'Video Title';
    this.tDescription = 'Video Description';
  }

  toggleEvent() {
    if (this.shadowRoot.querySelector('details').getAttribute('open') === '') {
      this.toggleOpen = true;
    } else {
      this.toggleOpen = false;
    }
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="week">
          <p>WEEK</p>
          <p class="wNum">${this.weekNum}</p>
        </div>
        <div class="week-info">
          <p class="cTime">${this.compTime} hour(s) to complete</p>
          <p class="wTitle">${this.weekTitle}</p>
          <p class="wDescription">${this.weekDescription}</p>
          <p>${this.wTotal}</p>
          <details
            class="details"
            .open="${this.toggleOpen}"
            @toggle="${this.toggleEvent}"
          >
            <summary>${this.display}</summary>
            <div class="seeAll">
              <p>${this.tTitle} ${this.tDescription}</p>
            </div>
          </details>
        </div>
      </div>
    `;
  }
}

customElements.define('suggested-plan', SuggestedPlan);
