/**
 * <div id='parent'>
 *  <div id = 'child'>
 *      <h1 id='heading'> Hello from React</h1>
 *      <h2 id='heading2'> Hello from second child  Element</h2>
 *  </div>
 * </div>
 */

const parent = React.createElement('div', {id: 'parent'}, React.createElement('div', {id: 'child'},
    [ React.createElement('h1', {} ,'Hello from React'),
    React.createElement('h2', {},'hello from second child')]));
    //this will create an array of c children
// const heading = React.createElement('h1', {id: 'heading', xyz: 'abc'}, 'Hello world From React');
console.log("parent", parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);