import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import {
  MainContainer,
  HeaderCont,
  Para,
  Cont,
  ContentCont,
  Button,
  PopCont,
  Div,
  Image,
  Container,
  Heading,
  Button1,
  ContentCont1,
  Cont1,
  Para1,
} from './styledcomponents'

import Item from '../Item'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class PlayingView extends Component {
  state = {
    score: 0,
    resultView: false,
    resultCont: [],
    resultText: '',
    selectItem: '',
  }

  backToHome = () => this.setState({resultView: false})

  resultViewSection = () => {
    const {resultCont, resultText, selectItem} = this.state
    const {imageUrl} = resultCont
    const yourImg = choicesList.filter(each => each.id === selectItem)
    return (
      <ContentCont1 result>
        <Cont1>
          <Container>
            <Heading>YOU</Heading>
            <Image Result src={yourImg[0].imageUrl} alt="your choice" />
          </Container>
          <Container>
            <Heading>OPPONENT</Heading>
            <Image Result src={imageUrl} alt="opponent choice" />
          </Container>
        </Cont1>
        <Para1>{resultText}</Para1>
        <Button1 type="button" onClick={this.backToHome}>
          PLAY AGAIN
        </Button1>
      </ContentCont1>
    )
  }

  updateCount = () => {
    const {resultText, score} = this.state
    console.log(score)
    if (resultText === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (resultText === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else {
      this.setState(prevState => ({score: prevState.score}))
    }
  }

  onChangeReview = id => {
    console.log(id)
    const item = Math.floor(Math.random() * choicesList.length)
    const resultItem = choicesList[item]
    console.log(resultItem.id)
    let Text = ''
    if (resultItem.id === id) {
      Text = 'IT IS DRAW'
    } else if (
      (resultItem.id === 'ROCK' && id === 'PAPER') ||
      (resultItem.id === 'SCISSORS' && id === 'ROCK') ||
      (resultItem.id === 'PAPER' && id === 'SCISSORS')
    ) {
      Text = 'YOU WON'
    } else {
      Text = 'YOU LOSE'
    }
    this.setState(
      {
        resultView: true,
        resultCont: resultItem,
        resultText: Text,
        selectItem: id,
      },
      this.updateCount,
    )
  }

  showViewSection = () => {
    const {resultView} = this.state
    if (resultView === false) {
      return (
        <ContentCont>
          {choicesList.map(each => (
            <Item
              listItems={each}
              key={each.id}
              onChangeReview={this.onChangeReview}
            />
          ))}
        </ContentCont>
      )
    }
    return this.resultViewSection()
  }

  render() {
    const {score} = this.state
    return (
      <MainContainer>
        <HeaderCont>
          <div>
            <Para>Rock Paper Scissors</Para>
          </div>
          <Cont>
            <Para1 Header>Score</Para1>
            <Para1 span="true" Header>
              {score}
            </Para1>
          </Cont>
        </HeaderCont>
        {this.showViewSection()}
        <Div>
          <Popup modal trigger={<Button type="button">RULES</Button>}>
            {close => (
              <PopCont>
                <Button close type="button" onClick={() => close()}>
                  <RiCloseLine />
                </Button>
                <div>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </PopCont>
            )}
          </Popup>
        </Div>
      </MainContainer>
    )
  }
}

export default PlayingView
