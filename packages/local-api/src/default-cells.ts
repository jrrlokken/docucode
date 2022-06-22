export const defaultCells = `- content: |-
    # Welcome!

    Click any text cell (including this one) to start editing.
    You have a fully-equipped Markdown editor at your disposal.

    https://portfolio.joshualokken.tech

    joshualokken@pm.me

    https://github.com/jrrlokken
  type: text
  id: sxfry
- content: |-
    import ReactDOM from 'react-dom';
    import axios from 'axios';

    const App = () => {
      axios
        .get('https://portfolio.joshualokken.tech')
        .then((response) => {
          show(response);
        })
        .catch((error) => {
          show(error);
        });
    };

    ReactDOM.render(<App />, document.querySelector('#root'));
  type: code
  id: htu5n`;
