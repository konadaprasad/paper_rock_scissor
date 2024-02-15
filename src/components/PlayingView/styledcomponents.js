import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  background-color: black;
  padding: 30px;
`
export const Para = styled.h1`
  font-size: ${props => (props.span ? '30px' : '20px')};
  color: ${props => (props.Header ? '#223a5f' : '#ffffff')};
  font-family: ${props => (props.span ? 'Roboto' : 'Bree serif')};
  font-weight: ${props => (props.span ? 'bold' : null)};
`
export const Para1 = styled.p`
  font-size: ${props => (props.span ? '30px' : '20px')};
  color: ${props => (props.Header ? '#223a5f' : '#ffffff')};
  font-family: ${props => (props.span ? 'Roboto' : 'Bree serif')};
  font-weight: ${props => (props.span ? 'bold' : null)};
`

export const HeaderCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid 1px #ffffff;
  border-radius: 10px;
  width: 80%;
  margin: 20px;
  padding: 15px;
  line-height: 0.5;
`
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  height: 110px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => (!props.normal ? '#ffffff' : 'transparent')};
  line-height: 0;
`
export const ContentCont = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  width: 70%;
  justify-content: center;
  background-color: transparent;
  list-style-type: none;
  flex-wrap: wrap;
`
export const Button = styled.button`
  height: 40px;
  width: ${props => (props.close ? 50 : 100)}px;
  background-color: #ffffff;
  color: #223a5f;
  font-weight: 600;
  font-size: 17px;
  border: none;
  border-radius: 5px;
  align-self: flex-end;
  margin-right: 10px;
`
export const Button1 = styled.button`
  height: 40px;
  width: 150px;
  background-color: #ffffff;
  color: #223a5f;
  font-weight: 600;
  font-size: 17px;
  border: none;
  border-radius: 5px;
  align-self: center;
  margin-right: 10px;
`
export const PopCont = styled.div`
  height: 80vh;
  width: 100%;
  background-color: #ffffff;
  padding: 30px;
  display: flex;
  flex-direction: column;
`
export const Div = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const Image = styled.img`
  height: ${props => (props.Result ? 200 : 500)}px;
  width: ${props => (props.Result ? 200 : 550)}px;
  margin: 10px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
`
export const Heading = styled.h1`
  font-size: 30px;
  color: #ffffff;
  font-weight: bold;
`
export const ContentCont1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 80%;
  background-color: transparent;
`
export const Cont1 = styled.div` 
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center:`
