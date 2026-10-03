import equilibriumImage from '../../assets/image-equilibrium.jpg'
import avatarImage from '../../assets/image-avatar.png'
import './CardNFT.css'

function CardNFT() {
  return (
    <article className="card-nft">
      <div className="card-nft__image">
        <img
            src={equilibriumImage}
            alt="Equilibrium NFT"
        />
      </div>

      <h2>Equilibrium #3429</h2>

      <p className="description">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="card-nft__info">
        <span>♦ 0.041 ETH</span>
        <span>◷ 3 days left</span>
      </div>

      <div className="card-nft__creator">
        <img
            className="creator-image"
            src={avatarImage}
            alt="Jules Wyvern"
        />
        <p>
          Creation of <strong>Jules Wyvern</strong>
        </p>
      </div>
    </article>
  )
}

export default CardNFT