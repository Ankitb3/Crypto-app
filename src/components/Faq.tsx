import { useState } from 'react';
interface IndexType{
    index:number
}
const FAQ = () => {
  const faqs = [
    {
      question: 'What is Bitcoin?',
      answer:
        'Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.',
    },
    {
      question: 'How do I buy Bitcoin?',
      answer:
        'You can buy Bitcoin through various cryptocurrency exchanges. First, you need to create an account on an exchange, verify your identity, and then you can purchase Bitcoin using fiat currency or other cryptocurrencies.',
    },
    {
      question: 'Is cryptocurrency safe to use?',
      answer:
        'While cryptocurrencies offer security features like blockchain technology, they are not immune to risks such as hacking, scams, and market volatility. It’s essential to use reputable exchanges and practice good security measures.',
    },
    {
      question: 'What is blockchain technology?',
      answer:
        'Blockchain is a decentralized technology spread across many computers that manages and records transactions. It is resistant to modification of data and ensures secure, transparent, and immutable transactions.',
    },
    {
      question: 'What are altcoins?',
      answer:
        'Altcoins refer to cryptocurrencies other than Bitcoin. Examples include Ethereum (ETH), Ripple (XRP), Litecoin (LTC), and many others. They often have different features or use cases compared to Bitcoin.',
    },
    {
      question: 'How can I store cryptocurrencies safely?',
      answer:
        'Cryptocurrencies are stored in digital wallets, which can be hardware wallets (like Ledger or Trezor) or software wallets (like MetaMask or Trust Wallet). It’s important to use reputable wallets and secure your private keys.',
    },
    {
      question: 'What is a cryptocurrency exchange?',
      answer:
        'A cryptocurrency exchange is a platform where you can buy, sell, and trade cryptocurrencies. Exchanges may offer different features, trading pairs, and fees, so it’s important to choose one that meets your needs.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:IndexType) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 mt-10">
      <h2 className="lg:text-3xl text-2xl text-center font-bold mb-4 text-white">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 hover:bg-gray-900 m-2">
          <div
            className="flex justify-between items-center py-2 px-4 bg-transparent text-white border cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <svg
              className={`w-6 h-6 transition-transform transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={openIndex === index ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
              />
            </svg>
          </div>
          {openIndex === index && (
            <div className="py-2 px-4 bg-transparent text-white font-semibold shadow-md border border-dotted">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
