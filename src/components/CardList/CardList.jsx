import CardNFT from '../CardNFT/CardNFT'
import imageEquilibrium from '../../assets/image-equilibrium.jpg'
import './CardList.css'

function CardList() {
  const cards = [
    {
      id: 1,
      title: 'Equilibrium #3429',
      description: 'Our Equilibrium collection promotes balance and calm.',
      price: '0.041 ETH',
      time: '3 days left',
      image: imageEquilibrium,
    },
    {
      id: 2,
      title: 'Cosmic Dragon',
      description: 'A legendary dragon from a distant digital universe.',
      price: '2.50 ETH',
      time: '5 days left',
      image: imageEquilibrium,
    },
    {
      id: 3,
      title: 'Cyber Warrior',
      description: 'A futuristic warrior exploring the digital world.',
      price: '1.80 ETH',
      time: '2 days left',
      image: imageEquilibrium,
    },
  ]

  return (
    <section className="card-list">
      {cards.map((card) => (
        <CardNFT key={card.id} {...card} />
      ))}
    </section>
  )
}

export default CardList