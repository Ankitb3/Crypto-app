import { TracingBeam } from "./magicui/trancingBeam";
import TextReveal from "./TypingAnimation";

export function AboutCrypto() {
  return (
    <div className="mt-40">
        <TextReveal text="About CryptoCurrency"/>

        <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            {/* <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2> */}

            <p className={ "text-white text-xl mb-4 underline"}>
              {item.title}
            </p>

            <div className=" text-white prose prose-sm dark:prose-invert">
              {item?.image && (
              <img src={item.image} className="h-[250px] rounded-lg"/>
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    </div>
    
  );
}

const dummyContent = [
  {
    title: "Decentralization",
    description: (
      <>
        <p>
        Cryptocurrencies operate on decentralized networks built using blockchain technology. Unlike traditional currencies that are controlled by governments or central banks, cryptocurrencies like Bitcoin and Ethereum are maintained by a network of computers (nodes) globally. This decentralized nature means no single entity has control over the network, enhancing security, transparency, and resilience against censorship or manipulation.
        </p>
      
      </>
    ),
    badge: "React",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWj60Yzrpnz91qbFEt0GhqEKzN7hrzkX4mw&s",
  },
  {
    title: "Security",
    description: (
      <>
        <p>
        Cryptocurrencies use cryptographic principles to secure transactions and control the creation of new units. Each transaction is cryptographically signed, ensuring that only the owner of the cryptocurrency can spend it and preventing double-spending (using the same currency for multiple transactions). This security framework makes cryptocurrencies highly resistant to fraud and counterfeiting compared to traditional payment systems.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJLhrcf4bydYD1Rg3l3DMVo6Y48Bk5QBQPQ&s",
  },
  {
    title: "Global Access",
    description: (
      <>
        <p>
        Cryptocurrencies offer financial access to anyone with an internet connection, bypassing the need for traditional banking infrastructure. This accessibility is particularly beneficial in regions with limited banking services or unstable currencies, empowering individuals to participate in global commerce and secure their wealth independently of government policies.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfsdXF-txBv4f_22YCp1peLIQ8a0HUBhQ6g&s",
  },
  {
    title: "Fast Transactions",
    description: (
      <>
        <p>
        Cryptocurrency transactions are processed quickly, often within minutes or even seconds, depending on the network congestion and the cryptocurrency used. This speed contrasts with traditional banking systems, where international transfers can take several days to settle due to intermediary banks and regulatory processes. Cryptocurrencies enable near-instantaneous settlement of transactions, improving efficiency in global commerce.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDxUQDw8VFhAQFRIVFRUQGRcVFxgVFhgXGBgVFRUYHiggGBonGxUYITIhJSkrLi4uFx8zODMsNygtLi0BCgoKDg0OGxAQGzIlHyYyNzcrLy8tLystLS4tLTArLTUtLS0tLS8tLS0vLS0rLTItLS0uLS0tLS0tLS0tLS0tLf/AABEIAKsBJgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUDBAYCB//EAEcQAAIBAgMEBQYLBgUEAwAAAAECAAMRBBIhBTFBUQYTImFxFDIzcoGRI0JSU3OhsbLB0fAHYpKis9IWNFRjk0SCtNMVJEP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBQQG/8QALREAAgIBAwIEBQQDAAAAAAAAAAECEQMEITESQQVhkfATFCJRcSOh4fFCscH/2gAMAwEAAhEDEQA/AK2IidQ44iIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiTEAiJMQCIkxAIiTEAiJMQCIkxAIiTEAiJMQCIkxAIiTEAiJMQCIkxAIiTEAiJMQCIkxAIiTEAiJMQCIkxAIieliCSIk3i/OCCIkxpAIiTpGkAiJOkQCIk6RpAIiTaRAERaZsTiDUbM1twGgtoPCAYYk6TqML0fwppU2qVK+epTWoRTFPKL30FzfhKuSXJaMXLg5aJ2FPo1g2KjrMSM5sCRStvA57rmcniaWSo6XvkZlvzyki/wBURknwJQceTHEzVqxdVuB2BlFhbTheYZYqIiZ6WFZhm7IU3sXZUvbflzEX9kAwRPdakyGzCxIBG4gg7iCNCO8TxAEREAQBAkmALDnGnON3jGYwBpzjTnFzGY84A05x7YzGMxgDTnGnOLmLmABElWMQSRfui/dIiCCb90X7pEQCb90lbcZ5kgwAy2mTC0DVqJTXzqjKgvuuxAF+7WeCe+buwreV0PpqP31kPglK2S+NpKStLD02pjTNWDF3HyiQwyX5La3fvmHH0VUq1O/V1UzqG1K9pkZSeNmRrHiLTVS1hN7G+iw/0T/168VRN2aM2cBgqmIqClSXM5BNrhdFFySW03CYL986HoVg6lTEM6IWVadZSRwZqbBQfGRJ0rEI20jCOimM+bX/AJqP90rdoYCph6nV1ks5CkAMrXDbiCtwZ3g2ZVC6YZ85FjcXX1gD8Y/VvHC1L0zp16L0mylENCimYAKxYA3TOO1py3TOORt0azxJK9znPIiPSkU+5z2/+MDMPaAO+dbgNpYIrRXyqotREp0wOqJOYGw1BI1vzM4oAb57w7srg03ZXvYMhKsCdNCDcb5eUbM4z6eD6FtKrhMLiMtfFN1lPI2VaRItvUDLoBpwnCbSpnrHqAXpu7lXU3U5iSBfg1vimx7p62ti3q1nNSq7gPUC52LWBY6Lc6Ddu5Ca1Kq1M3RiLix0BBHJlOjDuMiEOktOfUzwtt3Oebj9GXvRs0qmLp3SzAubABqbEI5F1Y9k3F+I03CXm1btha+cUzamGXIlMEHrKYDXVRbQnjJc6dEKFqzhyRNraZ+FI4IFUdwVQAP1xJmobTb2nbrn8fwEt3Kdhvw439mrZf8AvW5HvUfXzmsy2NiCCN4Oh91pbUW6tAqaZgjluNyvA/FFiRpJVRVIRxe+gPxh4Ny7jcTzfMxU+k9a0c3DrsrcPgKtUE07WGgvY3axOvaWwvl57zy1xf8AxG0PkUf4jL3o76NvW/ATrsQ1BcKFXKahC7r3udSTrp8X3ES85NMzhBNHzQ4TEU9K6oC1yvVkm9t9/eJE6DbeMq0sopVXTNmv1bFb2ta+U67zK+rUNei1R/TUSl34ujkr2+bBsva3kMb3sJpFujKSV7Gh4azzPNWsq+cwF+ZtMflVP5xfeJa0VpmaJh8qp/OL7xHlVP5xfeItCmZomLyun8tfeJmv+tJNiiIk3i8EBYgGTBKLOt0cxqOUOEqkjiqll9jjQ++ZqPRHaD7sKw9Yov2tPs8qOlO3V2fhWxL02cKyLlUgHtEDefGeT5iX2Pb8rFcs+YYzojj6Qu2GZh/tEP8Ayqb/AFSlq02Q5XUqw4MCD7jrO8oftKq1hnw+zGenqCWqopzDeALHmJkxnTN6tMrU2OzngtR6LJfvv+Uuss+6M5YYdmfPYmZ8Di9WODYXN9CgGvLXQTx5Hiv9K38VP+6arJF8MweOS7Hib2wv83Q+mo/fWamFw9apmtQqXRijZVLWYWuLrccZZbIwVWnXp1alJ0p0XSo7urKoVCGOpG82sBvJIEltUQk0ypXcPCb2O9Fh/on/AK9eaK7pZbQoOKGGcowQ03AYggE9dWNr87EHwMlkLuTg6OCdAKmIq06utz1YqUxrpbK2bdbhPO0dk1KAFQMr0X0WrROZCfkk71b909++0ttnVsScMLeTYijTUlsO4Q1UQE3a2UOOdwTa4Mmi9KgUqU7nZ2OvTq03NzTYWzAn5S3DK28ge2Ut2adKaOcpV2Rgysbj2+II4gjQjiDMuJpggVE8wmxBNyjb8lzwNrg8QDxBjaeDbD16lFtTScrfmBuPtFj7ZGDxHVtfKGUizKdzC4NveL+yX80Z+TMB5TY2cl69IHS9SmNe9hwmdsBZeteslPCndVfTN+6tNbs9QagqAbW32sZV4rpItLs4BCh44irY1z9GB2aI37rt+9KSmkXjjbMxYE3ve+unf3yQe736zHhukNOv2cclnP8A1NBRm8a1IWFT1lyt60sRs/IBWLo+Gv2alJgwdt4pi+qvzDAFQCbHQGYzTEsbRm2FiUw9VMRWzFAWColszXBVm10Ci514nQbja32rt/BPhqlPD0Ky1Kqhb1CtgAyMb2Y/JnMYquajZiANAABuAAtYch+cxDcfZDgm7ZCm0qRBm1tP0z+P4Cahm3tT0z+P4CW7lexsUa6OFF8rhVXteabC2jcDpuPvlrSwa0WvWN3U+ipkXB/ffUL4C552nO4XDPVbJTQs2+w4DmTuA7zpOl2pTK16lwRmd2F+KliQRzB5zla+sTTjyzt+GN5k4z4RWVsI9JS+Hqk0xqymyuvC5G5hu1X2gTXweOqmqgNRiC6Ai/AkS0I+BrN8Xqyt+GYstlvz7pR4D01P10+8J6tJlllx9UuTxa7BHBm6YcGTalVmrOCxIV6gUHgMx0HunvBf5fEerR/qrMO0fT1PpKn3jM2C9BiPVo/1Vnq7Hi7spMVQFWtSpkkByQSN+tpaf4TpfO1P5fymq+HdcThy1NlBfeykDeOJE6ucPxLUThkXQ9qPo/CNLiy4m8kbdlKvQ2iR6ap/L+Un/BlH56p/L+U6WkCQAN+k2PJH5C/K4vPf8XHFLraV/dnKeKcpPoTdHBbd6N08NQaqtRyQVFmy21IHATzR81fAfZL7pkLYNwd4an94So2bg6lay0abOwQNlQEmwsCbDxHvnpxtcnmy3sY4m3V2XiU87DVh61Nx+E1XUqbMCD36fbNrMaCxCxAR9z2NtWljKIrUScpuCGsGUjerAbj+YnPftTpdZs7Je2evhlvyzVFF/rnzzY22a+DfPQe1/OU6q1vlL+Ise+WnS7pscVgDSajkrCpRdWQhlujhr2Oo3btZ45YXF2uD2xzqUafJqdEKeXDst75a1UX8LCX4fIhcedcKt+BNzf3CUfQajUq4ZiqMzdYzHKCfOtYm3PX3GXuLAoE0sTZM4DWYqD3MNdeImOrjKWFxhybaSUI5oyycG3iqRSkKqVGJC0WZXIYEVQDquYlbHTUa5tDLTZ+wKVemKmdlzcBaw+qUNfadN0CPiqRQAAinlVnC2yhjyFtJlpdJ2QZUxFNVG4A0zb2meLR4sim3FNKu+250NdmxSgk2pO+32N4fs7pBnYYusOsdnIGUC59ndKfpT0LqUlR8O7VF0DLVYBg1vOUsQLHlw8N1UenO0DUqhcSCq1HVbJTPZFra5dZoba23XxhU13vkAAAFhfi1hpmP6tOvCOTZ3scXJPHTSW5Z7N2S1BGq1qK5w9NUzlXAuHLHKCQT2V868tK5y01qdYWato6v2lYDeGVhYgGw1ve9xa05nY+0EpBqdRTkqMjZktmUqGAOU6MO2dLjx4S8xGIppSQvWU0u01Pqxeo9zY2U2K6qR2rAEHfOXrsOeWa0m12rs/8Ah2vDc+ljgqTSf+V916bmEbOr0MVTxOFoDKBTqBc6gXZe2ozNmCm5Gt981zs3FnDPh/JhZ6wrAipT7JCspUDNyI1vwlTtTFivUz5MoCooBOY2UAC5sLnTkJqZRynXxxkorq5pe+Tg5Zwc5dPFuvx6HQbV2bjMTWas1ABnCXAqU7dlVW/ncct/bNQ9H8V8z/PT/ulWFG+26RYS6TXv+TNtPf3/AKMnTTCvSoYNKi2cLitLg6Gop3qSJRYvZlWlRp4hgDRrg5XQ5gGG+m/yXFr2PDdfW3QdJcBVODwzrTJWgMR1ttTTDuGQ1F3qpAuGItKbYe3q+DLdSVKvYlKqh0zqbpUCnc6kAg93GeZ8s9UeEZsfshMLhwcQzDGVcrU6C2+Dp78+IvqGYeagsRvPKXHRHBmtgayrTZyMTQNldKZ9FVFyXBB37u+cjiK7VGapUcs7kszMbkk7yTOu2Rs2quAZaiZWq16VSmlQqjui06il1Rjci7qBprfS8mPKEuGWQ2FU/wBNU/56H9ssdg9FRXqNTq0qlMGmxD9bSezBlsMqrfn+rTkXp5SVZbMN4IsR4g7pu7K2lUwrtUokK7oaZbiFYqSV5Hs2vN2pVs/fqeeMo3uvfoWdXYFak5AwpZkJHbrUmQkcctlJHcbd44TUfYOMYljSuxJJJenck6kntTSTEALlNNGOcOWYXY2+KTxB/EzYrbSVuv8A/rUR5RktZfR5fm+V+MfV7/sj6ff9F/XpmkBQVQqqtIsq21fIpJcjzzcnUk24TJgXZvgrB1K1CqPuzBGYWNwV1AuQR3yswW1KdXKlXsVLIgcXKNlAVc670NgNRcdw3yzepTokqB1jjMrFrhBcFWCgWLaEi5t4cZ83nxZMefqycX6qz6/TZ8OXTdGLlLjinXPr3KfF7Lx1Yg1Kd7eaoekFUclUNYTb2NsPI6muoFQlityGChFzZjlaxOnE2FpX7Q2VTyNVomwQAtTfWwLBbo/EXYaGxHMzzsLaT0XVF81nXcSCpayllI3acNxtOzlcs2H9B+m35XkfPY4xwaitRH13/D8zf2xsJ2qMaKAtnYVAGAW+8OpcjQ33TLsvB1MJTZ3GWpUYKNVayqL30JF7/ZKbbeLapVZTbLTdwBvub2LMTqWNhMuxtoLSBpVAerYhrrvVrWzW4i2hHdMcuHO9J0Xb/er4vua4c+mWt66qP7cc1+Tsdp0RRGZXZ1VlR0chr3XPm3nLysbbpbYToth3phs1S7Kd5FgeY0+2cnjOktF3po9Y1CxGVERkDMNM9QnS/wChNtNvYoAgVTYgi1hpflpe84/0Y8n1wdfZqjvR682NfCmrXLTMuMonDKy5gXDZMy8rX05H7JnXZ1JqC2BFQ0WqhsyliyluzktmIPMbso776NAqyZHNg1iG5NzM3TWrdWqAUhlXIKoy3ya3UG1xe417u+aZo9ORua2a2MdNki8SjB003fY1sb0ar7TwICVKauWAzOTqFbjYHXSTsroJjcM61KWLprUQWuAxuLWIII1HdKLpmwTAslMmyshLDS7FhrPPQSuvlCo+HNc1EsqkiykAEsQ5y7gdfznV0cJxwJPbyONrZ45Z21vvzwfUcEuNHpnoMP8AbV0P1sRLCrSV1KuoZToQwBBHeDMWBSyW6kU9T2Vy28ezpNiG9yyWxx+2eguEc56WakSdQlivsU7vZp3ROpxnm+384miyz+5lLFC+D4JIZQdCARyIuPaJ6vF57zmn0BP2kqAB5IdF4OPO4Aaeb9fdOY6T9IDtB6TvRpqaANtz3JKkk5hu7I7Nue+U14vM1iinaRrLNOSpsutvbUwmJoU0p4ClSrKQ1R0RFBspGVbC9iTfXdYb985/ydPkL7hM14vLKKWyKSm5O2eVQDQAAd2k3tnU1y1arqH6lFIVrhSzOqDNYgkC5Nr6kDheayrcXvLbYgBpVbqDuuDuNtQD3XAiTpCKtmriglSgKwpqjip1bCncKwK5lbKScp0INtDpoNb+cd6LD/RP/XrzY60VcAtXq1TrMr5V1AN7X8bfbaa2O9Fh/on/APIryE7JkqZpzocP0ZVqVOo+LVDVRagUo7EBr21AtwnPotyBcC5Aub2F+JsCbeAn0CgKQpUx5XhWFChTp1LuctwSN4FwLkWOhkZJNcFscU7socT0YVaTVExaN1ahiGR0GUsFJzMO/cLmU3XpT9Fct8428fRr8X1j2uWXdOzxRpPRrL5dhs1VAq2c2GV0a1gugAXcBynBlu+/eL6++INvkZElwZMPinpv1lN2WoL9pTY677njfjzmSrgsNjWAZRQxDkAVKK/BOxNvhaI8wk/GTnqpmvm8ffNjZjHr6Wv/AOtL7wlpRTRWMmnsRhFw2E1w69ZWH/UVwNDzo0TcJ6zZm9WYqlYuxdyWZj2ixuT4k75jDHnJzHnCilwQ5OXJsLiyAFcB0G4PrYfusO0vgDbmDLTYuyaGJWo5q1EWkEuuVXPbJAs11uNOQlLmNt+77P1+M6no2aFHDVWxGJ6s1+rsro97IxOZbXzgg7xukT2WxaG73IHRvDNcjEVrXFz1S2F91+3Oe2nhRQr1KN79U7pfdfKSL24bp2FTauDa2bHjQ30o1hc/KPZ1bvnMdI6lF8TUqUK3WLVd3vkZMuZicva1J77SsHK9y2RRrY1cDSLOpANlZSx4AX3k8J0mPpEMagsabsxV1N1NyTv59x1EqGPZReASmbDdcqCT4knfNjZuJem/YYgNoRvB8VOhnN1n68lHijsaB/LRc+bRmxo6vD1M5C9aihAfOb4Sm11Xflsp7W6UeA9NT9dPvCbO16hdqbOxLNQolixuScu8k75rYIfDU+XWJ94T3abAsOPpTs5mr1L1GXraonaPpqn0lT7xmvM+0fT1PpKn3jNeehcHlfJgH+aoet+InXzicZiOqrUqlr5CTbdexHGWP+LV+YP8Q/KcTxLT5MuROCvY+j8I1eHDhayOt/M7BNw8BJnJr00UC3k5/jH9sn/Gq/6c/wAY/tnRhtFI5GTeTaLHpj/k39an94SlwVd6eV6blXUCzKSCNLaETFtrpMMTRNIUSuYqblr7jfdbunqj5q+A+ybY+WYZNkj6dszprgqNIAviHcgFjUzOc1tdS1h7NJlrftGwgHZpVmPgoHvzT5fEj4ESfmJ1R2W0f2g4iobUqSU1GvavUY+3QD3SZxqxLrFBdivxZvuMp5RlPKREuZCJIi360gERJtFoBIc2tNrBY80lZcoYNvzeFrTUt+tItIaslNo3amOBpdUtJUpi1gmgFjewEY4/BYf6J/69eaJM3qNWnUprSqsUamWyPbMuVjco4Go7VyCL+cRbcRFUTdmuzpkXKDn1zE2t3ZZs4I/AYj1aX9VJHkdH/WU/4K//AK5FetTp0zSpMXLlS7kZQQt8qIp1tc3JNiSBoLahwaym4I5ajd4H8PdIz8/fYfoyKR7QvuvY+B0P1TJWoqrECorAcVvr+vGSQRSou7BUUszGwCC5J5WGstdn7Exi1qZOErACpTJJptoAwJO6eeigHl1GxN8x4fut3zq6FCpbtpWuNbAN2hyvbsnv1/POc62NccE1ZxNfZWJpi9TDVVFwLtTYC53DdvM8HDZfSuE/dADVP4RovgxB8Z122Gqpg67EOlzRAvmAsX1AvwtOIzdwloyckVnFRZtDGBPQoFI+M1nf2Eiy+wA9816rkksTctrc6k+JO8zzm7h7pk685CmVbE3vbXwBlqKWY7/rSLyIkkG9QxwsFqDQAAMoFwBoLjcw9x756qY4LpSFz8th91eHifqlfEy+DDq6q3NlqMnT03sWNlr00GdVq0lyDrDlV0uSvbOisLkdqwItrca+sNSFBlqVnQmmQyUqbrULONVzNTJVUvYm5uRoBrcVgMkiaUZ2GYkkk3J1J5k7zIiJJU8sgO8A+IvPPUJ8hfcJkiBZj6hPkL7hHUJ8hfcJkiKJtmPqE+QvuEyREECIiASsQsQSiIiIIEREAREQBERAEREAREQBERAPdGs1Ng6MVZTcMpsQeYInS7C6XVKIqeUVK9UupVe3ot/jC/xpy8SsoqXJaM3Hg3cZtbEVgUqYiq9O9wKjE7txIva80oiSlRDdiIiSQIiIAiIgCAYiATpyjSREAm45RpIiATpFxykRAJ05RpIiATcco0kRAJEQIgki8iIggmJEQBJkRAJiREAmJEQBJkRAJiREAmJEQCYkRAJiREAmJEQCYkRAJiREAmJEQCYkRAJiREAmJEQCYkRAJBiREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQD/9k=",
  },
  {
    title: "Innovation",
    description: (
      <>
        <p>
        Cryptocurrencies offer financial access to anyone with an internet connection, bypassing the need for traditional banking infrastructure. This accessibility is particularly beneficial in regions with limited banking services or unstable currencies, empowering individuals to participate in global commerce and secure their wealth independently of government policies.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgi6dTdFoRVziceaASSqFwvDUXBJS-ad4d5Q&s",
  },
];
