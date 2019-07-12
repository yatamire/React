class Header extends React.Component{
  render(){
    return (

      <div>
        <h1>Indecision</h1>
        <h2>Sub Title</h2>
      </div>

    );

  }
}

class Option extends React.Component{
  render(){
    this.optionsLI = this.options.map(item => <li>{item}</li>);
    return(
      <div>
        <ol>      
          {this.optionsLI}
        </ol>
        <form onSubmit={this.addOptions}>
          <input type='text' name='option'></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
  constructor(){
    super();
    this.options = [];
    this.addOptions = (e) =>{
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      if(option){
        this.options.push(option);
        e.target.elements.option.value = '';
      }
      this.render();
    };
  }
  
}

const jsx = (

  <div>
      <h1>Title</h1>
      <Header/>
      <Option/>
  </div>
)
 

ReactDOM.render(jsx, document.getElementById('app'))