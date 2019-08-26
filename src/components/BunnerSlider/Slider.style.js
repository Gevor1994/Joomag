import styled from "styled-components";

export const Wrap = styled.div`
.each-slide div{
  height: 400px;
  width: 100%;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
}
.nav:first-of-type span{
  border-bottom: 2px solid #2836FD;
  border-left: 2px solid #2836FD;
  
}

.react-slideshow-container{
  background: #002B58;
}

.nav:last-of-type span{
  border-top: 2px solid #2836FD;
  border-right: 2px solid #2836FD;
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
}

.react-slideshow-container div:last-child{
  left: 20px;
  position: relative;
}
`;