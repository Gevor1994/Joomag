import React, { Component } from 'react'
import { Wrapper, Container, TopContainer, BottomContainer, Left, Right } from './Footer.style';
import instagram from '../../svgs/footerImgs/instagram.svg'
import facebook from '../../svgs/footerImgs/facebook.svg'
import linkedin from '../../svgs/footerImgs/linkedin.svg'
import twitter from '../../svgs/footerImgs/twitter.svg'
import youtube from '../../svgs/footerImgs/youtube.svg'
import g2_crowd from '../../svgs/footerImgs/g2_crowd.svg'
import up from '../../svgs/up.svg'


class Footer extends Component {
    render() {
        return (
            <Wrapper id="Fotter">
                <Container>
                    <TopContainer>
                        <Left>
                            <div className="column_1">
                                <div className="form">
                                    <h5>Features</h5>
                                    <p>Analytics</p>
                                    <p>Branded Apps</p>
                                    <p>Branding</p>
                                    <p>CRM</p>
                                    <p>Creation Tools</p>
                                    <p>Email Marketing </p>
                                    <p>Integrations</p>
                                    <p>Lead Generation Tools</p>
                                    <p>Publication Privacy</p>
                                    <p>Publication Viewer</p>
                                    <p>Selling</p>
                                    <p>Subscription Management</p>
                                    <p>User Management</p>
                                </div>
                                <div className="form">
                                    <h5>Company</h5>
                                    <p>About Us</p>
                                    <p>Careers</p>
                                    <p>Contact</p>
                                    <p>Product Updates</p>
                                </div>
                            </div>
                            <div className="column_2">
                                <div className="form">
                                    <h5>Solutions</h5>
                                    <p>Marketing & Sales</p>
                                    <p>Training & Development</p>
                                    <p>Publishing</p>
                                    <p>Education</p>
                                    <p>Enterprise</p>
                                    <p>Pricing</p>
                                </div>
                                <div className="form">
                                    <h5>Legal</h5>
                                    <p>Terms of Service</p>
                                    <p>Privacy Policy</p>
                                    <p>Cookie Policy</p>
                                    <p>Security Practices</p>
                                    <p>GDPR Commitment</p>
                                    <p>DMCA Policy</p>
                                </div>
                                <div className="form">
                                    <h5>Support & Training</h5>
                                    <p>Customer Support</p>
                                    <p>Help Center</p>
                                    <p>System Status</p>
                                </div>
                            </div>
                        </Left>
                        <Right>
                            <div className="column_3">
                                <div className="form">
                                    <h5>Resources</h5>
                                    <p>Joomag Blog</p>
                                    <p>Case Studies</p>
                                    <p>White Papers</p>
                                    <p>Digital Publishing E-Book</p>
                                    <p>Showcase</p>
                                    <p>API & Developers</p>
                                    <p>Hard-Copy Pricing</p>
                                </div>
                            </div>
                            <div className="column_4">
                                <div className="form">
                                    <div className="icons_wrap">
                                        <div><img src={facebook} alt="facebook" /></div>
                                        <div><img src={twitter} alt="twitter" /></div>
                                        <div><img src={linkedin} alt="linkedin" /></div>
                                        <div><img src={youtube} alt="youtube" /></div>
                                        <div><img src={instagram} alt="instagram" /></div>
                                    </div>
                                    <p>75 E. Santa Clara St., Floor 6</p>
                                    <p>San Jose, CA 95113</p>
                                    <p>+1 800 657 7955</p>
                                    <p>Mon-Fri 7am-7pm PST</p>
                                </div>
                                <div className="form_2">
                                    <div>
                                        <img src={g2_crowd} alt='g2_crowd' />
                                    </div>
                                    <p className="review">Read Reviews &nbsp; ></p>
                                </div>
                            </div>
                        </Right>
                    </TopContainer>
                    <BottomContainer>
                        <p>© 2019 Joomag, Inc. All rights reserved.</p>
                        <div className="one_line">
                            <p>Newsstand</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <div className="inline1">
                                <p className="text_style">English</p>
                                <div>
                                    <img src={up} />
                                </div>
                            </div>
                        </div>
                    </BottomContainer>
                </Container>
            </Wrapper>
        )
    }
}

export default Footer
