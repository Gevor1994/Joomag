import styled from 'styled-components'
import theme from '../../config/themes/palletes'
import { mediaxsPlusAndDown, mediasmAndDown, xsPlusMin } from '../../config/config-style'


export const Wrapper = (styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0px 52px;
    background: ${theme.styles.gradients[5]};

p{
    font-family: Proxima Nova;
    font-size: 14px;
    line-height: 22px;
    color: ${theme.styles.colors[11]};
    margin-bottom: 6px;
}

h5{
    font-family: Proxima Nova;
    font-size: 16px;
    line-height: 23px;
    color: ${theme.styles.colors[7]};
    margin-bottom: 16px;
    margin-top: 40px;
}
    
`)

export const Container = (styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    
    @media ${mediaxsPlusAndDown} {
        flex-direction: column;
    }
`)

export const TopContainer = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 80px;

    @media ${xsPlusMin}{
        margin-bottom: 40px;
    }

    .column_1{
        width: 25%;
        display: flex;
        flex-direction: column;
        @media ${mediasmAndDown} {
            width: 35%;
        }
    }


    .column_2{
        width: 25%;
        display: flex;
        flex-direction: column;
        @media ${mediasmAndDown} {
            width: 35%;
        }
    }

    .obj_cont{
        width: 45%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media ${mediasmAndDown} {
            flex-direction: column;
            width: 30%;
        }
    }

    .column_3{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    
    .column_4{
        width: 100%;
        display: flex;
        flex-direction: column; 
    }

    .form{
        display: flex;
        flex-direction: column;
        margin-bottom: 55px;
    }

    .form9{
        display: flex;
        flex-direction: column;
        margin-bottom: 55px;
        @media ${mediasmAndDown} {
            margin: 0px
        }
    }

    .form_2{
        display: flex;
        flex-direction: column;
    }


    .form_2 img{
        height: 66px !important;
        margin-bottom: 16px;
    }

    .icons_wrap{
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 40px 0px; 
    }

    .icons_wrap div{
        margin-right: 20px;
    }

    .review{
        font-family: Proxima Nova;
        font-size: 14px;
        line-height: 24px;
        color: #ACB4BF;
    }

    img{
        height: 16px;
        object-fit: cover;
    }
    
`)






export const BottomContainer = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    @media ${mediaxsPlusAndDown}{
        flex-direction: column-reverse;
    }
    
.one_line{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media ${mediaxsPlusAndDown}{
        margin-bottom: 40px;
    }
}

.stylish{
    font-family: Proxima Nova;
    font-size: 14px;
    line-height: 24px;
    color: #2863FD;
}

.inline1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 40px;
}

p{
    margin-right: 20px !important;
}

.text_style{
    margin-right: 8px !important;
}
`)
