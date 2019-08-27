import styled from 'styled-components'
import theme from '../config/themes/palletes'
import rectangle3 from '../svgs/rectangle3.svg'
import { mediaxsPlus, mediaxsPlusAndDown, mediaxsEdgeAndDown } from '../config/config-style'

export const Wrap = (styled.div`
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`)

export const Wrapper = (styled.div`
    width: 100%;
    background: ${ theme.styles.gradients[0]};
    position: relative;
    padding-top: 141px;
    padding-bottom: 100px;
    display: flex;
    justify-content: end;
    flex-direction: column;
    align-items: center;


`)

export const Container = (styled.div` 
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media ${mediaxsPlusAndDown}{
        flex-direction: column;
        width: 95%;
        align-items: flex-start;
    }

    .img_contain{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        @media ${mediaxsPlusAndDown}{
            width: 70%;
            justify-content: flex-end;
        }
        @media ${mediaxsEdgeAndDown}{
            width: 100%;
            justify-content: flex-end;
        }
        
        
    }

    .wuah{
        display:flex;
        width: 50%;
        @media ${mediaxsPlusAndDown}{
            width: 100%;
            justify-content: center;;
            margin-top: 20px;
        }
       
    }

    .img_contain img{
        width: 100%;
        object-fit: cover;
    }
    
    .title{
        width: 50%;
        font-family: Proxima Nova;
        font-size: 40px;
        line-height: 52px;
        color: ${ theme.styles.colors[7]};
        @media ${mediaxsPlusAndDown}{
            width: 90%;
        }
    }

    .title p{
        font-family: Proxima Nova;
        font-size: 32px;
        line-height: 45px;
        color: #FFFFFF;
        @media ${mediaxsPlusAndDown}{
            font-size: 24px;
            line-height: 36px;
        }
    }
    
    .h1{
        font-family: Proxima Nova;
        line-height: 62px;
        margin-bottom: 30px;
        color: ${ theme.styles.colors[7]};
        font-size: ${ theme.styles.h1[0]};

        @media ${mediaxsEdgeAndDown}{
            font-size: 32px;
            line-height: 42px;
            margin-bottom: 20px;
        }
    }
`)


export const WhatWeLove = (styled.div`
    width: 100%;
    padding-top: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${mediaxsPlusAndDown}{
        padding-top: 100px;
    }

.what_we_love{
    font-family: Proxima Nova;
    font-size: ${ theme.styles.h2[0]};
    line-height: 42px;
    color: ${ theme.styles.colors[4]};
    margin-bottom: 4px;
    @media ${mediaxsPlusAndDown}{
        font-size: 24px;
    }
}

.helpers{
    font-family: Proxima Nova;
    font-size: ${ theme.styles.h2[0]};
    line-height: 42px;
    color: ${ theme.styles.colors[8]};
    margin-bottom: 16px;
    @media ${mediaxsPlusAndDown}{
        font-size: 24px;
    }
}

.box{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
    
.like_hr{
    width: 60px;
    height: 4px;
    background: ${ theme.styles.colors[8]};
    margin-bottom: 64px;
}
`)

export const OffersList = (styled.div`
    width: 100%;
    margin-bottom: 140px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 460px) {
        margin-bottom: 0px;
    }

.list{
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    @media ${mediaxsPlusAndDown}{
        flex-direction: column;
    }
}

.first9{
    width: 48%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${mediaxsPlusAndDown}{
        width: 100%;
        margin-top: 80px;
    }
    @media screen and (max-width: 460px) {
        flex-direction: column;
        width: 100%;
        margin-top: 0px;

    }
}

.first8{
    width: 48%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${mediaxsPlusAndDown}{
        width: 100%;
    }
    @media screen and (max-width: 460px) {
        flex-direction: column;
        width: 100%;
    }
}

.offer{
    width: 45%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 460px) {
        flex-direction: column;
        width: 100%;
        margin-bottom: 80px;
    }
}

.img_contain2{
    margin-bottom: 30px;
}

.h4{
    font-family: Proxima Nova;
    font-size: ${ theme.styles.h4[0]};
    line-height: 27px;
    color: ${ theme.styles.colors[4]};
    margin-bottom: 32px;
}

.p{
    font-family: Proxima Nova;
    font-size: ${ theme.styles.h4[0]};
    line-height: 27px;
    color: ${ theme.styles.colors[4]};
}
`)

export const CustomerSucces = (styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 140px;

.rectangle{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: absolute;
}

.rectangle div{
    max-width: 42%;
    @media ${mediaxsPlus}{
    height: 400px; 
    max-width: 45%;
    }
    @media ${mediaxsEdgeAndDown}{
           
    }
}

.customer_wrap{
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
    @media ${mediaxsPlus}{
        width: 95%;
    }
    @media ${mediaxsEdgeAndDown}{
        flex-direction: column;
    }
    @media ${mediaxsEdgeAndDown}{
        width: 95%;
    }
    
}

.custom_img{
    width: 48%;
    height: 446px;
    @media ${mediaxsPlus}{
        width: 350px;
        height: 300px;
    }
    @media ${mediaxsEdgeAndDown}{
        width: 100% ;
        height: 100%;
        margin-top: 40px; 
    }
    
    @media  screen and (min-width: 360px) and (max-width: 480px){
        width: 350px ;
        height: 350px;
    }
}

.custom-img img{
   width: 100%;
   object-fit: cover;
}

.info_desk{
    width: 48%;
    @media ${mediaxsEdgeAndDown}{
        width: 100%    
    }
}

img{
    max-width: 100%;
    height: 100%;
    object-fit: cover;
}

.like_hr{
    width: 60px;
    height: 4px;
    background: ${ theme.styles.colors[8]};
    margin-bottom: 32px;
    margin-top: 16px;
}
    
.h2{
    width: 100%;
    font-family: Proxima Nova;
    line-height: 42px;
    font-size: ${ theme.styles.h2[0]};
    color: ${ theme.styles.colors[8]}}
    @media ${mediaxsPlusAndDown}{
        font-size: 24px;
    }
.h3 span{
    @media ${mediaxsPlusAndDown}{
        font-size: 24px;
    }
}

.h3{
    width: 100%;
    font-family: Proxima Nova;
    font-size: ${ theme.styles.h2[0]};
    line-height: 42px;
    color: ${ theme.styles.colors[4]};
    @media ${mediaxsPlusAndDown}{
        font-size: 24px;
    }
}

.info_desk p {
    font-family: Proxima Nova;
    font-size: 18px;
    line-height: 27px;
    color: ${ theme.styles.colors[4]};
    }
`)

export const ChatNow = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column ; 
    justify-content: center;
    align-items: center;
    margin-bottom: 140px;

    .rectangle{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .img_wrapp{
        max-width: 52%;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .gradient{
        width: 100%;
        background: ${ theme.styles.gradients[4]};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        padding: 5% 0px;
    }

    .gradient div:hover{
        background: #0741B0; 
    }

    .h2{
        font-family: Proxima Nova;
        line-height: 42px;
        font-size: ${ theme.styles.h2[0]};
        color: ${ theme.styles.colors[7]};
        font-weight: initial;
        margin-bottom: 40px;
        @media ${mediaxsPlusAndDown}{
            font-size: 24px;
        }
        @media ${mediaxsEdgeAndDown}{
            margin-bottom: 30px;
        }
        @media screen and (max-width: 460px){
            font-size: 20px;
        }
    }
    
    .h3{
        width: 100%;
        font-family: Proxima Nova;
        font-size: ${ theme.styles.h2[0]};
        line-height: 42px;
        color: ${ theme.styles.colors[7]};
        font-weight: bold;
        @media ${mediaxsPlusAndDown}{
            font-size: 24px;
        }
        @media screen and (max-width: 460px){
            font-size: 20px;
        }
    }
`)


export const StyledButton = (styled.div`
    width: 133px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${ theme.styles.colors[8]};
    border-radius: 100px;
    font-family: Proxima Nova;
    font-size: 16px;
    line-height: 19px;
    color: ${ theme.styles.colors[7]};

    @media ${mediaxsEdgeAndDown}{
margin-bottom: 20px;    }

`)

export const Comments = (styled.div`
    width: 100%;
    display: flex;
    justify-content: center;


.global_h2{
    font-family: Proxima Nova;
    font-size: ${ theme.styles.h2[0]};
    line-height: 42px;
    color: ${ theme.styles.colors[4]};
    font-weight: initial;
    margin-bottom: 16px;
    @media ${mediaxsPlusAndDown}{
        font-size: 24px;
    }
}

.global_h2 span{
    @media ${mediaxsPlusAndDown}{
        font-size: 24px;
    }
}

.global_h3{
    font-family: Proxima Nova;
    line-height: 42px;
    font-size: ${ theme.styles.h2[0]};
    color: ${ theme.styles.colors[8]}}
}

.text_wrapper{
    width: 80%;
    display: flex;
    flex-direction: column;
    @media ${mediaxsPlusAndDown}{
        width: 90%;
    }
}

.global_hr{
    width: 60px;
    height: 4px;
    background: ${ theme.styles.colors[8]};
    margin-bottom: 50px;
}

`)

export const SliderWrapper = (styled.div`
    width: 100%;
    height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 140px;
    background-image: url(${rectangle3});
    background-repeat: no-repeat;

      @media only screen and (min-width: 460px) and (max-width: 768px){
        height: 600px;
      }
      @media only screen and (min-width: 320px) and (max-width: 468px){
        height: 800px;
      }
    
    img{
        width: 0;
        height: 100%;
      
    }

    .rectangle{
        width: 100%;
        display: flex;
        justify-content: flex-start;
    }

    .img_wrapp{
        max-width: 50%;
        position: relative;
    }


    .slider_wrap{
        width: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
    }

    .sliderion{
        width: 75%;
        @media ${mediaxsPlus}{
            width: 90%;
        }
        @media only screen and (min-width: 320px) and (max-width: 468px){
            width: 95%;
        }
    }
`)