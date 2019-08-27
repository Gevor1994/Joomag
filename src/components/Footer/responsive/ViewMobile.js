import React, { Component } from 'react'
import { Wrapper } from './ViewMobile.style'
import { Collapse } from 'antd';
import "antd/dist/antd.css";
import instagram from '../../../svgs/footerImgs/instagram.svg'
import facebook from '../../../svgs/footerImgs/facebook.svg'
import linkedin from '../../../svgs/footerImgs/linkedin.svg'
import twitter from '../../../svgs/footerImgs/twitter.svg'
import youtube from '../../../svgs/footerImgs/youtube.svg'
import g2_crowd from '../../../svgs/footerImgs/g2_crowd.svg'


const { Panel } = Collapse;
const column1 = (
    <p>
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
    </p>
);

const column2 = (
    <p>
        <p>About Us</p>
        <p>Careers</p>
        <p>Contact</p>
        <p>Product Updates</p>
    </p>
);

const column3 = (
    <p>
        <p>Marketing & Sales</p>
        <p>Training & Development</p>
        <p>Publishing</p>
        <p>Education</p>
        <p>Enterprise</p>
        <p>Pricing</p>
    </p>
);

const column4 = (
    <p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Security Practices</p>
        <p>GDPR Commitment</p>
        <p>DMCA Policy</p>
    </p>
);

const column5 = (
    <p>
        <p>Customer Support</p>
        <p>Help Center</p>
        <p>System Status</p>
    </p>
);

const column6 = (
    <p>
        <p>Joomag Blog</p>
        <p>Case Studies</p>
        <p>White Papers</p>
        <p>Digital Publishing E-Book</p>
        <p>Showcase</p>
        <p>API & Developers</p>
        <p>Hard-Copy Pricing</p>
    </p>
);
export class ViewMobile extends Component {


    render() {
        return (
            <Wrapper>
                <Collapse bordered={false} defaultActiveKey={['0']}>
                    <Panel header="Features" key="1">
                        {column1}
                    </Panel>
                </Collapse>
                <Collapse bordered={false} defaultActiveKey={['0']}>
                    <Panel header="Company" key="1">
                        {column2}
                    </Panel>
                </Collapse>
                <Collapse bordered={false} defaultActiveKey={['0']}>
                    <Panel header="Solutions" key="1">
                        {column3}
                    </Panel>
                </Collapse>
                <Collapse bordered={false} defaultActiveKey={['0']}>
                    <Panel header="Legal" key="1">
                        {column4}
                    </Panel>
                </Collapse>
                <Collapse bordered={false} defaultActiveKey={['0']}>
                    <Panel header="Support & Training" key="1">
                        {column5}
                    </Panel>
                </Collapse>
                <Collapse bordered={false} defaultActiveKey={['0']}>
                    <Panel header="Resources" key="1">
                        {column6}
                    </Panel>
                </Collapse>
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
            </Wrapper>
        )
    }
}

export default ViewMobile
