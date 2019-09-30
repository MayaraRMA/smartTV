import React, { PureComponent } from 'react';
import "./Destaque.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { classList } from '../../utils/classList';
import bbb19 from '../../assets/bbb-icon.png'

export default class Destaque extends PureComponent {
    state = {
        destaqueImg: bbb19,
        announce: "Acompanhe 24h ao vivo a casa mais vigiada do Brasil",
        destaqueButtons: [
            {
                icon: faPlay,
                text: "Assista",
                selected: true
            },
            {
                text: "Veja mais",
                selected: false
            }
        ]
    }

    handleKeyDown = (e) => {
        const { destaqueButtons } = this.state;
        let selectedIndex = this.state.destaqueButtons.findIndex(item => item.selected === true);
        switch(e.key){
            case("ArrowRight"):
            selectedIndex += 1;
            if(selectedIndex > destaqueButtons.length - 1)
                selectedIndex = destaqueButtons.length - 1
                break;
            case("ArrowLeft"):
                selectedIndex -= 1;
                if(selectedIndex < 0) {
                    this.props.changeFocus("menu")
                    selectedIndex = 0
                }
                break;
            case("ArrowDown"):
                this.props.changeFocus("trilho")
            break;
            default:
                break;
        }
        this.setState({
            destaqueButtons: destaqueButtons.map((item,key) => {
                item.selected = false;
                if(key === selectedIndex){
                    item.selected = true
                };
                return item
            })
        })     
    }

    render() {
        const {
            destaqueImg,
            announce,
            destaqueButtons
        } = this.state;
        const {
            innerRef,
            trilhoFocused,
            lastFocus,
            focused = true
        } = this.props;
        return (
            <div ref={innerRef} className={classList({
                destaque: true,
                focused: focused,
                trilhoFocused: trilhoFocused || lastFocus === "trilho"
            })} tabIndex={focused ? "0" : null}  onKeyDown={this.handleKeyDown}>
                <div>
                    <img src={ destaqueImg } alt="icon-destaque"/>
                    <h3>{ announce }</h3>
                    <div className={"destaque-buttons"}>
                        { destaqueButtons.length > 0 ? destaqueButtons.map((item,key) => (
                        <button key={key} className={item.selected === true ? "selected" : null}>
                        { item.icon ? <FontAwesomeIcon className={"destaque-icon"} icon={faPlay} /> : null}
                            <span>{item.text}</span>
                        </button>
                    )) : null} 
                    </div>
                </div>               
            </div>
        )
    }
}