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
    this.trilhoComponent = React.createRef();
    this.state = {
      menu: false,
      destaque: true,
      trilho: false
    }
  }

  componentDidUpdate = () => {
    if(this.state.menu){
      this.menuComponent.current.focus();
    } else if(this.state.destaque){
      this.destaqueComponent.current.focus();
    } else if(this.state.trilho){
      this.trilhoComponent.current.focus();
    }
  }

  handleFocus = (value) => {
    let state = focusLogic(value ,this.state)
    this.setState(state)
  }
  render(){
    const {
      menu,
      destaque,
      trilho
    } = this.state;
    return (
      <div className="App" >
        <Menu innerRef={this.menuComponent} collapsed={!menu} changeFocus={ this.handleFocus }/>
        <div className="content">
          <Destaque innerRef={this.destaqueComponent} focused={destaque} changeFocus={ this.handleFocus } />
          <Trilho innerRef={this.trilhoComponent} focused={trilho} changeFocus={ this.handleFocus } />     
        </div>
      </div>
    )
  }
}

export default App;
