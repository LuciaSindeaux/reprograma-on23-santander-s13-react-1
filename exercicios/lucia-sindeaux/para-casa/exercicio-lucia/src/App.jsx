import './App.css';
import Bio from './components/Bio';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

import dorama from './assets/itsokay.jpg';


function App() {

  return (
    <>
      <Header />
      <Bio />
      <Cards 
        title="Meu dorama Favorito" 
        description="A série retrata as vidas e amores de pessoas com transtornos de ansiedade na era moderna. Ele tenta responder à pergunta: O que você faz quando seu coração fica frio tem câncer ou diabetes?" 
        image={dorama} 
        imageAlt="its okay thats love"
      />
      <Footer name="Lili"/>
    </>
  )
}

export default App