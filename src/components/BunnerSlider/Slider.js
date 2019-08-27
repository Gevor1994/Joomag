import React, { Component } from "react";

import { Slide } from "react-slideshow-image";
import { Wrap } from "./Slider.style";
import back from '../../svgs/back.png'


const properties = {
    duration: 7000,
    transitionDuration: 800,
    infinite: true,
    indicators: true,
    arrows: true
};

class SimpleSlider extends React.Component {
    render() {
        return (
            <Wrap>
                <Slide {...properties}>
                    <div className='each-slide'>
                        <div style={{ backgroundImage: `url(${back}) `, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
                            <div className="content">
                                <p className='lol'>
                                    I selected Joomag over many other similar platforms because of the excellent support received during a trial period. The product is intuitive, and not prone to crashing using heavy use. The additional of the CRM was an added bonus that has allowed us to communicate with our readership base at a consistently high level. This can be verified by the lack of unsubscribers we have seen.
                                </p>
                                <p className='lol'>
                                    The level of support we have received has been outstanding. The limited number of challenges we have encountered have been dealt with quickly and professionally. The support team have even adopted and submitted a number of end-user enhancements we have proposed.
                                </p>
                                <h3>
                                    <p>- Andy Round (iHerp Asuralia)</p>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div style={{ backgroundImage: `url(${back}) `, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
                            <div className="content">
                                <p className='lol'>
                                    I selected Joomag over many other similar platforms because of the excellent support received during a trial period. The product is intuitive, and not prone to crashing using heavy use. The additional of the CRM was an added bonus that has allowed us to communicate with our readership base at a consistently high level. This can be verified by the lack of unsubscribers we have seen.
                                </p>
                                <p className='lol'>
                                    The level of support we have received has been outstanding. The limited number of challenges we have encountered have been dealt with quickly and professionally. The support team have even adopted and submitted a number of end-user enhancements we have proposed.
                                </p>
                                <h3>
                                    <p>- Andy Round (iHerp Asuralia)</p>
                                </h3>
                            </div>
                        </div>
                    </div>
                </Slide>
            </Wrap>
        );
    }
}

export default SimpleSlider;