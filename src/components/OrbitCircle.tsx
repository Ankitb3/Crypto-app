import OrbitingCircles from "./magicui/orbiting-circles";
import TextReveal from "./TypingAnimation";

const OrbitCircle=()=> {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <span>
        <TextReveal text="Trust and Security in Web3 Crypto Exchange"/>
      </span>

      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={300}
      >
        <Icons.bitcoin />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={280}
      >
        <Icons.ethereum />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={140}
        duration={260}
      >
        <Icons.xrp />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={270}
        duration={120}
      >
        <Icons.ton />
      </OrbitingCircles>  <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={100}
        duration={120}
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
        radius={300}
        duration={10}
        delay={10}
      >
        <Icons.card />
      </OrbitingCircles>  <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={290}
        duration={20}
        delay={5}
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
        radius={300}
        duration={20}
        delay={10}
      >
        <Icons.usdt />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={270}
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
        radius={190}
        duration={10}
        delay={10}
        reverse
      >
        <Icons.inj />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={1300}
        duration={10}
        delay={10}
        reverse
      >
        <Icons.kucoin />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
    bitcoin: () => (
     <img src={"https://cdn.iconscout.com/icon/free/png-512/free-bitcoin-176-441959.png?f=webp&w=256"} className="h-[50px]"/>
    ),
    ethereum: () => (
        <img src={"https://cdn.iconscout.com/icon/free/png-512/free-ethereum-1824287-1545899.png?f=webp&w=256"} className="h-[60px]"/>

    ),
    bnb: () => (
        <img src={"https://cdn.iconscout.com/icon/free/png-512/free-binance-7662244-6297180.png?f=webp&w=256"} className="h-[70px]"/>

    ),
    xrp: () => (
        <img src={"https://cdn.iconscout.com/icon/free/png-512/free-ripple-1-441950.png?f=webp&w=256"} className="h-[60px]"/>

    ),
    ton: () => (
        <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/toncoin-toncoin-6888837-5645461.png?f=webp&w=256"} className="h-[60px]"/>

    ),
    usdt: () => (
        <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/tether-usdt-7152212-5795368.png?f=webp&w=256"} className="h-[60px]"/>

    ),
    sol: () => (
        <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/solana-4983415-4140737.png?f=webp&w=256"} className="h-[60px]"/>

    ),
    card: () => (
        <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/cardano-4441326-3679756.png?f=webp&w=256"} className="h-[60px]"/>

    ),
    poly: () => (
        <img src={"https://cdn.iconscout.com/icon/free/png-512/free-polygon-token-4086724-3379854.png?f=webp&w=256"} className="h-[60px]"/>

    ),
    inj: () => (
        <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/injective-protocol-inj-7151435-5795672.png?f=webp&w=256"} className="h-[60px]"/>

    ),
    kucoin: () => (
        <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/kucoin-token-kcs-7151635-5795503.png?f=webp&w=256"} className="h-[60px]"/>

    ),
}


export default OrbitCircle