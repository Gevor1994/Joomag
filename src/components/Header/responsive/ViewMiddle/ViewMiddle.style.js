import styled from 'styled-components'
import theme from '../../../../config/themes/palletes'
import { mediaxsPlusAndDown } from '../../../../config/config-style'

export const Wrapper = (styled.div`
    width: 94%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: transparent;
    padding: 12px 0px;
    
    `)

export const Left = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
    
img{
    width:100%;
    height: 100%;
}

.bar_tytle{
    ont-family: Proxima Nova;
    font-size: 16px;
    line-height: 19px;
    color: ${ theme.styles.colors[7]};
    margin-right: 40px;
}

.nav_bar{
    width: 100%;
    display: flex;
    flex-direction: row;

    @media ${mediaxsPlusAndDown} {
        display: none
    }
    
}

.logo_wrap{
    width: 124px;
    height: 30px;
    margin-right: 60px; 
}

.inline{
    display: flex;
    flex-direction: row;
    margin-right: 40px;
}

.inline div{
    width: 6px;
    height: 6px;
    margin-left: 8px;
}

.text_style {
    ont-family: Proxima Nova;
    font-size: 16px;
    line-height: 19px;
    color: ${ theme.styles.colors[7]};
}

`)


export const Right = (styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    .text_style {
        font-family: Proxima Nova;
        font-size: 16px;
        line-height: 19px;
        color: ${ theme.styles.colors[7]};
    }
`)

export const StyledButton = (styled.div`
    width: 125px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    font-family: Proxima Nova;
    font-size: 16px;
    line-height: 19px;
    border: none;
    margin-left: 40px;
    color: ${ theme.styles.colors[7]};
    background: ${ theme.styles.colors[8]}
`)