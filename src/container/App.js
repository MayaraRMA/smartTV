import React from 'react';
import Menu from '../components/menu/Menu';
import Destaque from '../components/destaque/Destaque';
import Trilho from '../components/trilho/Trilho';
import { focusLogic } from '../utils/focusLogic';
import "./App.css"

class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.menuComponent = React.createRef();
    this.destaqueComponent = React.createRef();
    this.state = {
      menu: false,
      destaque: true,
    }
  }

  componentDidUpdate = () => {
    if(this.state.menu){
      this.menuComponent.current.focus();
    } else if(this.state.destaque){
      this.destaqueComponent.current.focus();
    }
  }

  handleKeyDown = (e) => {
    let state = focusLogic(e.key,this.state)
    this.setState({
      menu: state.menu,
      destaque: state.destaque
    })
  }
  render(){
    const {
      menu,
      destaque
    } = this.state;
    return (
      <div className="App" >
        <Menu innerRef={this.menuComponent} collapsed={!menu}/>
        <div className="content">
          <Destaque innerRef={this.destaqueComponent} focused={destaque} />
          <Trilho/>
        </div>
      </div>
    )
  }
}

export default App;
