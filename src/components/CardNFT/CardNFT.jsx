import './CardNFT.css'

function CardNFT() {
  return (
    <article className="card-nft">
      <div className="card-nft__image">
        <img
          src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d"
          alt="NFT"
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
        <div className="creator-image"></div>

        <p>
          Creation of <strong>Jules Wyvern</strong>
        </p>
      </div>
    </article>
  )
}

export default CardNFT