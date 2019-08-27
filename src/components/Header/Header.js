import React, { Component, Suspense, lazy } from 'react'
import { Wrapper, Left, Romb, Right, Wrapion, StyledButton, FirstMenu } from './Header.style'
import joomag_logo from '../../svgs/headerImgs/joomag_logo.svg'
import "antd/dist/antd.css";
import { Menu, Dropdown, Icon } from 'antd';
import { Drawer } from 'antd';
import { Radio } from 'antd';
import { Collapse } from 'antd';
import "antd/dist/antd.css";
const { Panel } = Collapse;


const column1 = (
    <div>
        <h1>For Marketing & Sales</h1>
        <div>Lead Generation</div>
        <div>Lead Nurturing</div>
        <div>Sales Engagement</div>
        <div>Marketing Communications</div>
        <h1>For Training & Development</h1>
        <div>Employee Training & Education</div>
        <div>Corporate Communications</div>
        <h1>For Publishing</h1>
        <div>Paid Subscriptions</div>
        <div>Free Subscriptions</div>
    </div>
);

const column2 = (
    <div>
        <h1>Joomag Blog</h1>
        <div>Case Studies</div>
        <div>White Papers</div>
        <div>Digital Publishing E-Book</div>
    </div>
);
const Menu1 = (
    <Menu>
        <Romb>
            <div className='romb'></div>
        </Romb>
        <FirstMenu>
            <div className="col">
                <h1>For Marketing & Sales</h1>
                <div>
                    <p>Lead Generation</p>
                    <p>Lead Nurturing</p>
                    <p>Sales Engagement</p>
                    <p>Marketing Communications</p>
                </div>
            </div>
            <div className="col">
                <h1>For Training & Development</h1>
                <div>
                    <p>Employee Training & Education</p>
                    <p>Corporate Communications</p>
                </div>
            </div>
            <div className="col wl">
                <h1>For Publishing</h1>
                <div>
                    <p>Paid Subscriptions</p>
                    <p>Free Subscriptions</p>
                </div>
            </div>

        </FirstMenu>
    </Menu>
);



const Menu2 = (
    <Menu>
        <Romb>
            <div className='romb'></div>
        </Romb>
        <FirstMenu>
            <div className="col">
                <div>
                    <p>Blog</p>
                    <p>Case Studies</p>
                    <p>White Papers</p>
                    <p>Digital Publishing E-book</p>
                </div>
            </div>
        </FirstMenu>
    </Menu>
);

export class Header extends Component {
    state = {
        windowWidth: window.innerWidth,
        visible: false,
        placement: 'right'
    }


    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    handleResize = () => {
        this.setState({
            windowWidth: window.innerWidth
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    render() {
        return (
            <Wrapper id="Header">
                <Left>
                    <div className="logo_wrap">
                        <img src={joomag_logo} alt='joomag_logo' />
                    </div>
                    <div className="nav_bar">
                        <Dropdown overlay={Menu1} trigger={['click']}>
                            <div className="inline">
                                <p>Solutions</p>
                                <Icon type="down" />
                            </div>
                        </Dropdown>
                        <p className="bar_tytle">Pricing</p>
                        <p className="bar_tytle">Showcase</p>
                        <Dropdown overlay={Menu2} trigger={['click']}>
                            <div className="inline">
                                <p>Resources</p>
                                <Icon type="down" />
                            </div>
                        </Dropdown>
                    </div>
                </Left>

                <Right>
                    <p className="text_style">Log In</p>
                    <StyledButton >Free Trial</StyledButton>
                    {(this.state.windowWidth <= 992) && <Icon type="menu" className="show" onClick={this.showDrawer} />}
                </Right>

                <Wrapion >
                    <Drawer
                        placement={this.state.placement}
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <Collapse bordered={false} defaultActiveKey={['0']}>
                            <Panel header="Solutions" key="1">
                                {column1}
                            </Panel>
                        </Collapse>
                        <p className="bar_tytle">Pricing</p>
                        <p className="bar_tytle">Showcase</p>
                        <Collapse bordered={false} defaultActiveKey={['0']}>
                            <Panel header="Resources" key="1">
                                {column2}
                            </Panel>
                        </Collapse>
                    </Drawer>
                </Wrapion>
            </Wrapper>

        )
    }
}

export default Header
