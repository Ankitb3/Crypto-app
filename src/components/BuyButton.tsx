import "./css/BuyButton.css"
const BuyButton = ({coin}) => {
  return (
    <div>
        <button className="btn">
  <span className="box">
  Buy {coin.symbol}
  <div className="star-1">
  <img src={coin.image.large}/>

  </div>
  <div className="star-2">
  <img src={coin.image.large}/>

  </div>
  <div className="star-3">
     <img src={coin.image.large}/>

  </div>
  <div className="star-4">
     <img src={coin.image.large}/>

  </div>
  <div className="star-5">
     <img src={coin.image.large}/>

  </div>
  <div className="star-6">
     <img src={coin.image.large}/>

  </div>
  </span>
</button>



    </div>
  )
}

export default BuyButton