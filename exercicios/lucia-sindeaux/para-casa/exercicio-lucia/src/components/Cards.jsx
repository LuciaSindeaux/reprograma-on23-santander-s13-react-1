import Title from "./Title"
import Text from "./Text"
import Image from "./Image"

function Cards(props) {
  return (
    <div className="card">
      <Title text={props.title}/>
      <Text text={props.description}/>
      <Image img={props.image} description={props.imageAlt}/>
    </div>
  )
}

export default Cards