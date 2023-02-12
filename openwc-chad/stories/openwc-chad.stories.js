import { html } from 'lit';
import '../src/openwc-chad.js';

export default {
  title: 'OpenwcChad',
  component: 'openwc-chad',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <openwc-chad
      style="--openwc-chad-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </openwc-chad>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
