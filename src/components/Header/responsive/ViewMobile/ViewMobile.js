import React, { Component } from 'react';
import { Drawer, Icon, Modal } from 'antd';
import cloneDeep from 'lodash/cloneDeep';
import joomag_logo from '../../../../svgs/headerImgs/joomag_logo.svg'
import { Logo, Wrapper, DrawerLink, Options } from './ViewMobile.style';

class ViewMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    toggleDrawer = () => {
        this.setState({ visible: !this.state.visible });
    }

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { visible } = this.state;
        return (
            <Wrapper>
                <Logo src={joomag_logo} alt="Logo" title="LifePack" className="logo" />
                <div className="menu">
                    <Icon type="menu" onClick={this.toggleDrawer} />
                </div>
                <Drawer
                    title="Basic Drawer"
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div className="cross">
                        <Icon type="close" onClick={this.onClose} />
                    </div>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </Wrapper>
        );
    }
}

export default ViewMobile
