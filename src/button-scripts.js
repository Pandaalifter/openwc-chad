import { LitElement, html, css } from 'lit';

class ButtonScripts extends LitElement {
  

  static styles = css`
    `;

  constructor() {
    super();
    this.header = 'My Chadical App';
  }

  duplicate(event){
    const cloneCard = document.querySelector("open-wc").shadowRoot.querySelector(".card");
    cloneCard.cloneNode(true);
    document.body.appendChild(cloneCard);
    console.log(cloneCard);
    }

  render() {
    return html`
    <div class"btnSpacing">
    <button class="outsideBtn" @click=${this.duplicate}>Duplicate</button>
    <button class="outsideBtn" @click=${this.background}>Background</button>
    <button class="outsideBtn" @click=${this.heading}>Heading</button>
    <button class="outsideBtn" @click=${this.deleter}>Delete</button>
    </div>
    `;
    }
}

customElements.define('button-scripts', ButtonScripts);