import React, {Component} from 'react';
import './SideBar.css';

export default class SideBar extends Component {
    constructor() {
        super();
        // this.state = {
        //     toggle: false
        // }
    }
    render() {
        // const slideMenu = this.state.toggle ? "boxcoverShow" : "boxcoverHide"
        console.log(this.props)
        return (
            <div className={this.props.classForSlider}>
                <div className='box1'></div>
                <div className='box2'>
                    <a href="/home" className='site-nav_link'>Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/brands">Brands</a>
                    <a href="/follow">Follow</a>
                </div>
            </div>
        )

    }
}