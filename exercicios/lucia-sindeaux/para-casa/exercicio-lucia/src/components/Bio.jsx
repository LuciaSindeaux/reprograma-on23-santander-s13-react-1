import Image from "./Image"
import Text from "./Text"
import Title from "./Title"

import lulucia from '../assets/lucia.png'

function Bio() {
    return (
        <div className="bio">
          <Title text="Lúcia Sindeaux"/>
          <Image ClassName="lucia" img={lulucia} description ="Lucia em png"/>
          <Text text="Meu nome é Lúcia Sindeaux, tenho 29 anos. Atualmente estou estudando Front-End na Reprograma e cursando ADS. Sou uma entusiasta da tecnologia e vou mudar minha vida com ela"/>    
        </div>
    )
}

export default Bio