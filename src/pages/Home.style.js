import styled from 'styled-components'
import theme from '../config/themes/palletes'
import rectangle3 from '../svgs/rectangle3.svg'


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

    .img_contain{
        width: 50%;
        display: flex;
        justify-content: flex-end;
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
    }
    
    .h1{
        font-family: Proxima Nova;
        line-height: 62px;
        margin-bottom: 30px;
        color: ${ theme.styles.colors[7]};
        font-size: ${ theme.styles.h1[0]};
    }
`)


export const WhatWeLove = (styled.div`
    width: 100%;
    padding-top: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

.what_we_love{
    font-family: Proxima Nova;
    font-size: ${ theme.styles.h2[0]};
    line-height: 42px;
    color: ${ theme.styles.colors[4]};
    margin-bottom: 4px;
}

.helpers{
    font-family: Proxima Nova;
    font-size: ${ theme.styles.h2[0]};
    line-height: 42px;
    color: ${ theme.styles.colors[8]};
    margin-bottom: 16px;
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


.list{
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.offer{
    width:22%;
    display: flex;
    flex-direction: column;
}

.img_contain2{
    margin-bottom: 45px;
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
}

.customer_wrap{
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
}

.custom_img{
    width: 48%;
    height: 446px;

}

.custom-img img{
   width: 100%;
   object-fit: cover;
}

.info_desk{
    width: 48%;
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

.h3{
    width: 100%;
    font-family: Proxima Nova;
    font-size: ${ theme.styles.h2[0]};
    line-height: 42px;
    color: ${ theme.styles.colors[4]};
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

    .h2{
        font-family: Proxima Nova;
        line-height: 42px;
        font-size: ${ theme.styles.h2[0]};
        color: ${ theme.styles.colors[7]};
        font-weight: initial;
        margin-bottom: 40px;

    }
    
    .h3{
        width: 100%;
        font-family: Proxima Nova;
        font-size: ${ theme.styles.h2[0]};
        line-height: 42px;
        color: ${ theme.styles.colors[7]};
        font-weight: bold;

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

    img{
        width: 50%;
        height: 100%;
        object-fit: cover;
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
    }
`)