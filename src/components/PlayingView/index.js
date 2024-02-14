import {Component} from 'react'

import {
  MainContainer,
  HeaderCont,
  Para,
  Cont,
  ContentCont,
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
  state = {score: 0}

  render() {
    const {score} = this.state
    return (
      <MainContainer>
        <HeaderCont>
          <div>
            <Para>Rock</Para>
            <Para>Paper</Para>
            <Para>Scissors</Para>
          </div>
          <Cont>
            <Para Header>Score</Para>
            <Para span="true" Header>
              {score}
            </Para>
          </Cont>
        </HeaderCont>

        <ContentCont>
          {choicesList.map(each => (
            <Item listItems={each} key={each.id} />
          ))}
        </ContentCont>
      </MainContainer>
    )
  }
}

export default PlayingView
