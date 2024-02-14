import {Button, Image, ListCont} from './styledcomponents'

const Item = props => {
  const {listItems} = props
  const {imageUrl} = listItems

  return (
    <ListCont>
      <Button type="button" data-testid="rock button">
        <Image src={imageUrl} alt="your choice" />
      </Button>
    </ListCont>
  )
}
export default Item
