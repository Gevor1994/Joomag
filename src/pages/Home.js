import React, { Component } from 'react'
import { Wrapper, Container, WhatWeLove, Wrap, OffersList, CustomerSucces, ChatNow, StyledButton, Comments, SliderWrapper } from './Home.style'
import hero_image from '../svgs/hero_image.svg'
import live_chat_support from '../svgs/live_chat_support.svg'
import quick_response_times from '../svgs/quick_response_times.svg'
import a_team_full_of_talent from '../svgs/a_team_full_of_talent.svg'
import continuous_improvement from '../svgs/continuous_improvement.svg'
import a_world_class_customer_success_team from '../svgs/a_world_class_customer_success_team.svg'
import rectangle from '../svgs/rectangle.svg'
import rectangle2 from '../svgs/rectangle2.svg'
import rectangle3 from '../svgs/rectangle3.svg'
import SimpleSlider from '../components/BunnerSlider/Slider'
import back from '../svgs/back.png'




export class Home extends Component {
    render() {
        return (
            <Wrap id="Home">
                <Wrapper>
                    <Container>
                        <div className="title">
                            <h1 className="h1">Pushing the Boundaries of Customer Service</h1>
                            <p>Fast, reliable, and dependable.</p>
                        </div>
                        <div className="img_contain">
                            <img src={hero_image} />
                        </div>
                    </Container>
                </Wrapper>
                <WhatWeLove>
                    <div className="box">
                        <h2 className="what_we_love">We Do What We Love and Love What We Do.</h2>
                        <h2 className="helpers">And That's Helping You! </h2>
                        <div className="like_hr" />
                    </div>
                </WhatWeLove>
                <OffersList>
                    <div className="list">
                        <div className="offer">
                            <div className="img_contain2">
                                <img src={live_chat_support} alt="live_chat_support" />
                            </div>
                            <h4 className="h4">Live Chat Support</h4>
                            <p className="p">Our working hours are Mon-Fri, 7AM-7PM EST. Rest assured, we'll be there when you need us.</p>
                        </div>
                        <div className="offer">
                            <div className="img_contain">
                                <img src={quick_response_times} alt="live_chat_support" />
                            </div>
                            <h4 className="h4">Quick Response Times</h4>
                            <p className="p">3 minutes.That's the longest you'll ever have to wait before you hear back from us.</p>
                        </div> <div className="offer">
                            <div className="img_contain">
                                <img src={a_team_full_of_talent} alt="live_chat_support" />
                            </div>
                            <h4 className="h4">A Team Full of Talent</h4>
                            <p className="p">We only hire the best. Each team member has the technical skills and knowledge to help you make the most of Joomag. </p>
                        </div> <div className="offer">
                            <div className="img_contain">
                                <img src={continuous_improvement} alt="live_chat_support" />
                            </div>
                            <h4 className="h4">Continuous Improvement</h4>
                            <p className="p">We listen. Give us your feedback and we'll use it to make our product even better. </p>
                        </div>
                    </div>
                </OffersList>
                <CustomerSucces>
                    <div className='rectangle'>
                        <div>
                            <img src={rectangle} alt='rectangle' />
                        </div>
                    </div>
                    <div className="customer_wrap">
                        <div className="info_desk">
                            <h3 className="h3"><span className="h2">A World-Class</span> Customer Success Team</h3>
                            <div className="like_hr" />
                            <p>Our client success managers are there for you at every stage of your Joomag journey. They are fully dedicated to helping you succeed and are experienced in providing guidance on how to master the tools needed to reach your marketing & sales, training & development, publishing goals. </p>
                        </div>
                        <div className="custom_img">
                            <img src={a_world_class_customer_success_team} alt='a_world_class_customer_success_team' />
                        </div>
                    </div>
                </CustomerSucces>
                <ChatNow>
                    <div className='rectangle'>
                        <div className="img_wrapp">
                            <img src={rectangle2} alt='rectangle' />
                        </div>
                    </div>
                    <div className="gradient">
                        <h2 className="h2"><span className="h3">Need a Hand? </span> Contact Us Now</h2>
                        <StyledButton>Chat Now</StyledButton>
                    </div>
                </ChatNow>
                <Comments>
                    <div className="text_wrapper">
                        <h2 className="global_h2">What Our <span className="global_h3"> Amazing Customers Say </span> </h2>
                        <div className="global_hr" />
                    </div>
                </Comments>
                <SliderWrapper>
                    <div className="slider_wrap">
                        <div className="sliderion" >
                            <SimpleSlider />
                        </div>
                    </div>
                </SliderWrapper>

            </Wrap>

        )
    }
}

export default Home
