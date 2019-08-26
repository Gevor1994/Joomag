import styled from 'styled-components';

export const Logo = styled.img`
	width: auto;
	height: 20px;
`;

export const Wrapper = (styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
  background: transparent;
  padding: 0px 16px;
  color: #706565;    

.menu svg{
    width: 32px;
    height: 32px
    color: white;
}
`);


export const DrawerLink = (styled.div` 
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  margin: 0;
  height: 100%;
  
`);

