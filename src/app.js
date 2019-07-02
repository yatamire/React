

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  render();
};



const appRoot = document.getElementById('app');

const render = () => {

  var optionsLI = app.options.map(function(item) { return (<li>{item}</li>);});

  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitile && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <ol>      
        {optionsLI}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'></input>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

render();



  

 


  



