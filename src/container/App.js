import React from 'react';
import Menu from '../components/menu/Menu';
import Destaque from '../components/destaque/Destaque';
import Trilho from '../components/trilho/Trilho';
import { focusLogic } from '../utils/focusLogic';
import banner from '../assets/banner.jpeg';
import bbb19 from "../assets/Bbb-19.jpg";
import globoplay from "../assets/globoplay.png";
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

  componentDidMount = () => {
    this.destaqueComponent.current.focus();
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
        <Menu 
          innerRef={this.menuComponent} 
          collapsed={!menu} 
          changeFocus={ this.handleFocus }/>
        <div className="content"
        style={{ backgroundImage: trilho ? `url(${bbb19})` :`url(${banner})`}}
        >
          <img className={"globoplay-icon"} src={globoplay} alt="globoplay"/>
          <Destaque 
            innerRef={this.destaqueComponent} 
            focused={destaque} 
            changeFocus={ this.handleFocus } 
            trilhoFocused={trilho} />
          <Trilho 
            innerRef={this.trilhoComponent} 
            focused={trilho} 
            changeFocus={ this.handleFocus } />     
        </div>
      </div>
    )
  }
}

export default App;
