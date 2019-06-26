var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is JSX</p>
    </div>
);

var age = 20;
var app = {

    title: 'test title',
    subtitle: 'test subtitle'

};

var template2 = (
    <div> 
        <h1> Title </h1>
      {app.subtitle && <p>subtitle: {app.subtitle}</p>}
      
    </div>

)
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);