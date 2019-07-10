let count = 0;
const addOne = () => { 

  count++;
  render();

};
const reset = () => { 

  console.log('Reset');

};
const render =() =>{
  const template2 = (

    <div>
    
        <h1>Count: {count} </h1>
        <button onClick={addOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
    
  );
  const appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
};

render();