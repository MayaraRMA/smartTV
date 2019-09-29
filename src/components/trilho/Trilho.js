import React from "react";
import  "./Trilho.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import {classList} from '../../utils/classList'

export default class Menu extends React.Component {
    state = {
        slides: [
            {
                place: "Sala de Estar",
                img: "Bbb-19.jpg"
            },
            {
                place: "Varanda",
                img: "Bbb-19.jpg"
            },
            {
                place: "Piscina",
                img: "Bbb-19.jpg"
            },
            {
                place: "Academia",
                img: "Bbb-19.jpg"
            },
            {
                place: "Chuveiro",
                img: "Bbb-19.jpg"
            }
        ],
        slidesHidden: []
    }

    handleKeyDown = (e) => {
        const { slides, slidesHidden } = this.state;
        let newSlides = [...slides]
        let newSlidesHidden = [...slidesHidden]
        let square
        switch(e.key){
            case("ArrowRight"):
                if(newSlides.length > 1) {
                  square = newSlides.shift()
                  newSlidesHidden.push(square) 
                }                     
                break;
            case("ArrowLeft"):
                if (newSlidesHidden.length > 0) {
                    newSlides.unshift(newSlidesHidden[newSlidesHidden.length - 1])
                    newSlidesHidden.pop()
                }          
                break;
            case("ArrowUp"):
            break;
            default:
                break;
        }        
        this.setState({
            slides: newSlides,
            slidesHidden: newSlidesHidden
        })
        console.log(newSlides)
    }
    render() {
        const {
            slides = []
        } = this.state;
        const {
            innerRef,
            focused = true
        } = this.props;
        return(
            <div 
            className={"trilho"} 
            ref={innerRef}
            style={{ backgroundImage: slides[0] ? `url(${require(`../../assets/${slides[0].img}`)})` : ""}}
            tabIndex={focused ? "0" : null}
            onKeyDown={this.handleKeyDown}>
                <h5>Big Brother Brasil</h5>
                <h1>{slides[0] ? slides[0].place : "" }</h1>
                <div>
                    <h5>Agora no BBB</h5>
                    <ul className={"carousel"}>
                        <li className={"play"}>
                            <FontAwesomeIcon className={"play-icon"} icon={faPlay} /> 
                        </li>
                        { slides.length > 0 ? slides.map((item,key) => (
                        <li 
                        className={classList({
                           slide : true
                        })}
                        key={key} 
                        style={{ backgroundImage: `url(${require(`../../assets/${item.img}`)})`}}>
                            <div className={"item-content"} style={{opacity: key === 0 ? 0 : 1}}>
                                <h5>REALITIES</h5>
                                <p> {item.place} </p>
                            </div>
                        </li>
                    )) : null} 
                    </ul>
                </div>
            </div>
        )  
    }
}