const app = {
    title: 'Visivility Toggle',
    TextVisible: false,
    options: []
  };
  
  
const toggleText = () => {
  
    app.TextVisible = !app.TextVisible;
    render();
}
  
  
  
  const appRoot = document.getElementById('app');
  
  const render = () => {
  
    const optionsLI = app.options.map(item => <li>{item}</li>);
  
    const template = (
      <div>
        <h1>{app.title}</h1>
        <button onClick={toggleText}>{app.TextVisible ? 'Hide Details' : 'Show Details'}</button>
        {app.TextVisible && (
            <p>Details</p>
        )}
        
      </div>
    );
  
    ReactDOM.render(template, appRoot);
  }
  
  render();
  
  
  
    
  
   