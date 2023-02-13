import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class HeaderChad extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--openwc-chad-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 10px;
      width: 100px;
      height: 100px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
  
      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }
  
      .app-footer a {
        margin-left: 5px;
      }
    }`;

  constructor() {
    super();
    this.header = 'My Chadical App';
  }

  render() {
    return html`
      <main>
        <div><img alt="open-wc logo" src=${logo} class="logo" /></div>
        <h1>${this.header}</h1>
      </main>
      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
    }
}

customElements.define('header-chad', HeaderChad);