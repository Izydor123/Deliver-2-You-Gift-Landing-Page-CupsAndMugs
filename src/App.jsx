import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import ProductsList from './components/ProductsList'
import Catalogue from './components/Catalogue'
import Footer from './components/Footer'
import imageMain from './assets/cupMusic.jpg'
import image1 from './assets/cupBig.jpg'
import image2 from './assets/cupMid.jpg'
import image3 from './assets/cupWood.jpg'
import image4 from './assets/cupWood2.jpg'

function App() {

  return (
    <section className='app'>
      <Header title="Copos e canecas" desc1="Descubra a nossa coleção única de canecas e chávenas, perfeitas para acompanhar o seu café matinal, chá da tarde ou qualquer bebida que aqueça o seu coração." desc2="Desde designs modernos a estilos criativos, temos opções para todos os gostos."/>
      <Product
       image={imageMain} 
       title="Jarra Térmica Altifalante Tracir: Inovação e Tecnologia numa Só Peça  " 
       desc1="A Jarra Térmica Altifalante Tracir redefine o conceito de recipiente térmico, combinando funcionalidade tradicional com tecnologia moderna. Fabricada em aço inoxidável de alta qualidade, esta jarra destaca-se não apenas pelo seu design elegante, mas também pela inclusão de um surpreendente altifalante integrado."
       desc2="Com uma capacidade generosa de 1,25 litros, oferece a versatilidade perfeita para quem busca manter bebidas na temperatura ideal enquanto desfruta da sua música favorita. A construção em aço inoxidável garante um isolamento térmico superior, mantendo bebidas quentes ou frias por longos períodos."
       link="https://generalcatalogue2025.eu/deliver2yougift/#page/327"/>
      <ProductsList 
        data={[
        {id:1, text:"Caneca Térmica Lansin", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/327", image:image1},
        {id:2, text:"Caneca Térmica Paster", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/328", image:image2},
        {id:3, text:"Chavena Térmica Vanatin", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/330", image:image3},
        {id:4, text:"Caneca Haruncal", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/346", image:image4},
        ]}
        title="Outros produtos desta categoria"/>
      <Catalogue text="Conheça os nossos outros produtos associados à copos e canecas" link="https://generalcatalogue2025.eu/deliver2yougift/#page/306"/>
      <Footer/>
    </section>
  )
}

export default App