export const defaultCells = `
- content: |-
    # Welcome!

    Click any text cell (including this one) to start editing.    
    You have a fully-equipped Markdown editor at your disposal.    
    You can also create a new cell by hover above or below any cell.    

    https://portfolio.joshualokken.tech    
    joshualokken@pm.me    
    https://github.com/jrrlokken  
  type: text
  id: sxfry
- content: |-
    import ReactDOM from 'react-dom';

    const App = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((data) => show(data));
        .catch((error) => {
          show(error);
        });
    };

    ReactDOM.render(<App />, document.querySelector('#root'));
  type: code
  id: htu5n`;
