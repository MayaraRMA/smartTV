import React, { PureComponent } from 'react';
import "./Destaque.css"
import { classList } from '../../utils/classList';

export default class Destaque extends PureComponent {
    render() {
        const {
            innerRef,
            focused
        } = this.props;
        return (
            <div ref={innerRef} className={classList({
                destaque: true,
                focused: focused
            })} tabIndex={focused ? "0" : null}>
            </div>
        )
    }
}