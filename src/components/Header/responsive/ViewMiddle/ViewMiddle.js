import React, { Component } from 'react'
import { Wrapper, Left, Right, StyledButton } from './ViewMiddle.style'
import joomag_logo from '../../../../svgs/headerImgs/joomag_logo.svg'
import down from '../../../../svgs/headerImgs/down.svg'
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
      </a>
        </Menu.Item>
    </Menu>
);
class ViewMiddle extends Component {

    render() {
        return (
            <Wrapper id="Header">
                <Left>
                    <div className="logo_wrap">
                        <img src={joomag_logo} alt='joomag_logo' />
                    </div>
                    <div className="nav_bar">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#">
                                Hover me <Icon type="down" />
                            </a>
                        </Dropdown>
                        <p className="bar_tytle">Pricing</p>
                        <p className="bar_tytle">Showcase</p>
                        <div className="inline">
                            <p className="text_style">Resources</p>
                            <div>
                                <img src={down} />
                            </div>
                        </div>
                    </div>
                </Left>
                <Right>
                    <p className="text_style">Log In</p>
                    <div className="free_btn">
                        <StyledButton >Free Trial</StyledButton>
                    </div>
                </Right>
            </Wrapper>
        )
    }
}

export default ViewMiddle
