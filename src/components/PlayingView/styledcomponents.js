import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';
  background-color: black;

  padding: 30px;
`
export const Para = styled.p`
  font-size: ${props => (props.span ? '30px' : '20px')};
  color: ${props => (props.Header ? '#223a5f' : '#ffffff')};
  font-family: 'Bree Serif';
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
