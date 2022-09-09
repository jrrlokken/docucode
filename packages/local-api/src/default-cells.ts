export const defaultCells = `
- content: |-
    # Welcome to DocuCode! 💻

    Click any text cell (including this one) to start editing.    
    You have a fully-equipped Markdown editor at your disposal.    
    You can also create a new cell by hovering above or below any cell.    

    https://portfolio.joshualokken.tech    
    joshualokken@pm.me    
    https://github.com/jrrlokken  
  type: text
  id: sxfry
- content: |-
    // This is a code cell.
    // You can use whatever npm modules you need,
    // DocuCode will automatically import them for you.
    import ReactDOM from 'react-dom';

    const App = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((data) => show(data))
        .catch((error) => {
          show(error);
        });
    };

    ReactDOM.render(<App />, document.querySelector('#root'));
  type: code
  id: htu5n`;
