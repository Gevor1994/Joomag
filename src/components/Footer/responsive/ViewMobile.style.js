import styled from 'styled-components'

export const Wrapper = (styled.div`
    width: 100%;
   

.ant-collapse-borderless{
    background: transparent;
}

.ant-collapse > .ant-collapse-item > .ant-collapse-header{
    padding-left: 0px;
}

.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow{
    right: 0%;
    left: 96%;
}

.ant-collapse-item div:first-child{
    color: white;
}

.ant-collapse-content > .ant-collapse-content-box{
    padding: 0px;
    padding-bottom: 30px;
    font-family: Proxima Nova;
    font-size: 14px;
    line-height: 22px;
    color: #ACB4BF;

}
.column_4{
    width: 100%;
    display: flex;
    flex-direction: column; 
}

.form{
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
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
    margin: 60px 0px 16px; 
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

}
`)