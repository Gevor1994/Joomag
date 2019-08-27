import styled from "styled-components";
import { mediaxsPlus, mediaxsPlusAndUpToUp } from '../../config/config-style'

export const Wrap = styled.div`
.each-slide div{
  height: 400px;
  width: 100%;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  @media only screen and (min-width: 460px) and (max-width: 768px){
    height: 600px;
  }
  @media only screen and (min-width: 320px) and (max-width: 468px){
    height: 800px;
  }
}
.each-slide img{
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
  box-sizing: border-box;
}
.indicators div{
  display: none;
  height: 0px;
  margin:0 ;
  padding 0;
}
.nav{
 
  background: white !important;
  border: 1px solid #E5E5E5;
  @media only screen and (min-width: 320px) and (max-width: 468px){
    background: transparent !important;
    border: none;
 
  }
}


.nav:first-of-type span{
  border-bottom: 2px solid #2836FD;
  border-left: 2px solid #2836FD;
  @media only screen and (min-width: 320px) and (max-width: 468px){
    border: none;
  }
  
}

.react-slideshow-container{
  background: #002B58;
}

.nav:last-of-type span{
  border-top: 2px solid #2836FD;
  border-right: 2px solid #2836FD;
  @media only screen and (min-width: 320px) and (max-width: 468px){
    border: none;
  }
}

.react-slideshow-container + div.indicators{
  width: 0px;
  height: 0px;
  margin: 0px;
}

.content{
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-right: 160px !important;
}


.lol{
  width: 80%;
  font-family: Proxima Nova;
  font-size: 18px;
  line-height: 27px;
  color: #FFFFFF;
    margin-bottom: 40px;
    @media ${mediaxsPlus}{
      margin-bottom: 30px;
    }
    @media ${mediaxsPlusAndUpToUp}{
      margin-bottom: 15px;
  }
}

.content h3 {
  width: 80%;
  font-family: Proxima Nova;
  font-size: 18px;
  line-height: 27px;
  color: #FFFFFF;
  display: flex;
  justify-content: flex-end;

}




.react-slideshow-container div:first-child{
  right: 20px;
  position: relative;
  @media only screen and (min-width: 320px) and (max-width: 468px){  
  }
}

.react-slideshow-container div:last-child{
  left: 20px;
  position: relative;
  @media only screen and (min-width: 320px) and (max-width: 468px){  
  }

}


`;