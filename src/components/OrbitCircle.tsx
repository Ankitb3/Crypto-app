import OrbitingCircles from "./magicui/orbiting-circles";
import TextReveal from "./TypingAnimation";

const OrbitCircle=()=> {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <span>
        <TextReveal text="Crypto World"/>
      </span>

      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.bitcoin />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.ethereum />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={140}
        duration={30}
      >
        <Icons.xrp />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={210}
        duration={20}
      >
        <Icons.ton />
      </OrbitingCircles>  <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={100}
        duration={20}
        reverse
      >
        <Icons.sol />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={10}
        delay={10}
        reverse
      >
        <Icons.usdt />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={10}
        reverse
      >
        <Icons.card />
      </OrbitingCircles>  <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={10}
        reverse
      >
        <Icons.poly />
      </OrbitingCircles>  <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={140}
        duration={10}
        delay={10}
      >
        <Icons.inj />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={10}
        delay={10}
        reverse
      >
        <Icons.usdt />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={10}
        reverse
      >
        <Icons.card />
      </OrbitingCircles>  <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={10}
        reverse
      >
        <Icons.poly />
      </OrbitingCircles>  <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={70}
        duration={20}
        delay={10}
      >
        <Icons.inj />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={1300}
        duration={10}
        delay={10}
      >
        <Icons.kucoin />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
    bitcoin: () => (
     <img src={"https://cdn.iconscout.com/icon/free/png-512/free-bitcoin-176-441959.png?f=webp&w=256"}/>
    ),
    ethereum: () => (
        <img src={"https://cdn.iconscout.com/icon/free/png-512/free-ethereum-1824287-1545899.png?f=webp&w=256"}/>

    ),
    bnb: () => (
        <img src={"https://cdn.iconscout.com/icon/free/png-512/free-binance-7662244-6297180.png?f=webp&w=256"}/>

    ),
    xrp: () => (
        <img src={"https://cdn.iconscout.com/icon/free/png-512/free-ripple-1-441950.png?f=webp&w=256"}/>

    ),
    ton: () => (
        <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/toncoin-toncoin-6888837-5645461.png?f=webp&w=256"}/>

    ),
    usdt: () => (
        <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/tether-usdt-7152212-5795368.png?f=webp&w=256"}/>

    ),
    sol: () => (
        <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/solana-4983415-4140737.png?f=webp&w=256"}/>

    ),
    card: () => (
        <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/cardano-4441326-3679756.png?f=webp&w=256"}/>

    ),
    poly: () => (
        <img src={"https://cdn.iconscout.com/icon/free/png-512/free-polygon-token-4086724-3379854.png?f=webp&w=256"}/>

    ),
    inj: () => (
        <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/injective-protocol-inj-7151435-5795672.png?f=webp&w=256"}/>

    ),
    kucoin: () => (
        <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/kucoin-token-kcs-7151635-5795503.png?f=webp&w=256"}/>

    ),
}


export default OrbitCircle