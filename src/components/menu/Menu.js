import React from 'react';
import "./Menu.css";
import { faHome, faSearch, faWifi, faUserCircle, faInbox } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {classList} from '../../utils/classList'

export default class Menu extends React.PureComponent {
    state = {
            
        menu: [{
            text: "Busca",
            icon: faSearch,
            selected: false,
            hovered: false,
        }, {
            text: "Início",
            icon: faHome,
            selected: true,
            hovered: true,
        },{
            text: "Agora na Globo",
            icon: faWifi,
            selected: false,
            hovered: false,
        },{
            text: "Categorias",
            icon: faInbox,
            selected: false,
            hovered: false,
        },{
            text: "Minha conta",
            icon: faUserCircle,
            selected: false,
            hovered: false,
        }]
    }
    UNSAFE_componentWillReceiveProps = () => {
        const{
            menu
        } = this.state;
        this.setState({
            menu: menu.map((item,key) => {
                item.hovered = false;
                if(item.selected === true){
                    item.hovered = true;
                }
                return item
            })
        })
        
        this.handleKeyDown({key: "default"})
    }
    handleKeyDown = (e) => {
        const { menu } = this.state;
        let index = this.state.menu.findIndex(item => item.hovered === true);
        let hoverIndex = index;
        switch(e.key){
            case("ArrowDown"):
                hoverIndex = index + 1;
               if(hoverIndex > menu.length - 1)
                    hoverIndex = menu.length - 1
                break;
            case("ArrowUp"):
                hoverIndex = index - 1;
                if(hoverIndex < 0)
                    hoverIndex = 0
                break;
            default:
                break;
        }
        this.setState({
            menu: menu.map((item,key) => {
                item.hovered = false;
                if(key === hoverIndex){
                    item.hovered = true
                };
                return item
            })
        })
    }

    render(){
        const {
            menu
        } = this.state,
        {
            collapsed = true,
            innerRef
        } = this.props;
        return (
            <nav ref={innerRef} className={collapsed ? "nav nav-collapsed" : "nav"} tabIndex={collapsed ? null : "0"} onKeyDown={this.handleKeyDown}>
                <ul>
                    {menu.map((item,key) => (
                        <li key={key} className={classList({
                            selected: item.selected,
                            hovered: item.hovered && !collapsed,
                        })}>
                            <FontAwesomeIcon icon={item.icon} /> 
                            <span className={collapsed ? "list-text collapsed" : "list-text"}> {item.text} </span>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}