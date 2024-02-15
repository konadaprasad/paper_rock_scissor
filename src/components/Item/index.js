import {Button, Image, ListCont} from './styledcomponents'

const Item = props => {
  const {listItems, onChangeReview} = props
  const {id, imageUrl} = listItems

  const changeReview = () => {
    onChangeReview(id)
  }
  let dataTest = ''
  switch (id) {
    case 'ROCK':
      dataTest = 'rockButton'
      break
    case 'PAPER':
      dataTest = 'paperButton'
      break
    case 'SCISSORS':
      dataTest = 'scissorsButton'
      break
    default:
      dataTest = null
      break
  }

  return (
    <ListCont>
      <Button type="button" data-testid={dataTest} onClick={changeReview}>
        <Image src={imageUrl} alt={id} />
      </Button>
    </ListCont>
  )
}
export default Item
