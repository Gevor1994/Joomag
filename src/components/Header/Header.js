import React, { Component, Suspense, lazy } from 'react'
import Media from 'react-responsive';
import { smMin, xsPlusMin } from '../../config/config-style'
import { Wrap } from './Header.style'
const ViewMiddle = lazy(() => import('../Header/responsive/ViewMiddle/ViewMiddle'));
const ViewMobile = lazy(() => import('../Header/responsive/ViewMobile/ViewMobile'));

export class Header extends Component {
    render() {
        return (
            <Suspense fallback={<div />}>
                <Wrap>
                    <Media maxWidth={xsPlusMin - 1}>
                        <ViewMobile />
                    </Media>
                    <Media minWidth={xsPlusMin}>
                        <ViewMiddle />
                    </Media>
                </Wrap>
            </Suspense>
        )
    }
}

export default Header
