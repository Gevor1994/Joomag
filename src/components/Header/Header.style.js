import styled from 'styled-components'
import theme from '../../config/themes/palletes'
import { mediaxsPlusAndDown, mediasmAndDown, mediaxsEdgeAndDown } from '../../config/config-style'

export const Romb = (styled.div`
    display: flex;
    flex-direction: column;

    
    .romb{
        width: 16px;
        height: 16px;
        background: white;
        transform: rotate(-45deg);
        left: 30px;
        position: relative;
        z-index: 50;
        bottom: 12px;
    }
`)

export const FirstMenu = (styled.div`
    width: 100%; 
    display: flex;
    flex-direction: row;
    padding-bottom: 8px;
h1{
    font-family: Proxima Nova;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    font-weight: bold;
    margin-bottom: 10px;
}

p{
    font-family: Proxima Nova;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 8px;
}

p:hover{
    color: #2863FD;
}

.col{
    display: flex;
    flex-direction: column;
    padding: 0px 32px ;
    border-right: 1px solid #F6F6F6;
}

.wl{
    width: 250px !important;
}

`)


export const Wrapper = (styled.div`
    width: 94%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: transparent;
    padding: 12px 0px;
    position: absolute;
    z-index: 200;
    top: 0;
    
    `)

export const Left = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
    align-items: end;


p:hover{
    color: #2863FD;
}

.inline:hover{
    & p{
        color: #2863FD;
    }
    & svg{
        color: #2863FD;
    }
}


.inline{
    width: 83px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}   

.inline p{
    font-family: Proxima Nova;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
}

.inline img{
    width: 40%;
    height: 40%;
}

svg{
    color: white;
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
    height: 24px;
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

    @media ${mediasmAndDown}{
        width: 100%;
    }

    div:hover{
        background: #0741B0;
        border-radius: 100px;
        width: 125px;

    }

    .text_style {
        font-family: Proxima Nova;
        font-size: 16px;
        line-height: 19px;
        color: ${ theme.styles.colors[7]};

        @media ${mediaxsEdgeAndDown}{
            display: none;
            width: 0;
            height: 0;
        }
    }

    svg{
        width: 32px;
        height: 32px
        color: white;
        margin-left: 40px;
    }



`)

export const Wrapion = (styled.div`
    width: 0%;
    display: flex;
    flex-direction: column;
    
    
    
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

    @media ${mediaxsEdgeAndDown}{
        display: none;
        width: 0;
        height: 0;
    }
`)