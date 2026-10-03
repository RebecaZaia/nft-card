import avatarImage from '../../assets/image-avatar.png'
import './CardNFT.css'

function CardNFT({ title, description, price, time, image }) {
  return (
    <article className="card-nft">
      <div className="card-nft__image">
        <img
            src={image}
            alt={title}
        />
      </div>

      <h2>{title}</h2>

      <p className="description">
        {description}
      </p>

      <div className="card-nft__info">
        <span>♦ {price}</span>
        <span>◷ {time}</span>
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