import { LitElement, html, css } from 'lit';

export class SuggestedPlan extends LitElement {
  static get properties() {
    return {
      weekNum: { type: String },
      compTime: { type: String },
      weekTitle: { type: String },
      weekDescription: { type: String },
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
  `;

  constructor() {
    super();
    this.weekNum = '1';
    this.compTime = '3 Hours';
    this.weekTitle = 'Misconceptions about happiness';
    this.weekDescription =
      'In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.';
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="week">
          <p>WEEK</p>
          <p class="wNum">${this.weekNum}</p>
        </div>
        <div class="week-info">
          <p class="cTime">${this.compTime}</p>
          <p class="wTitle">${this.weekTitle}</p>
          <p class="wDescription">${this.weekDescription}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('suggested-plan', SuggestedPlan);
