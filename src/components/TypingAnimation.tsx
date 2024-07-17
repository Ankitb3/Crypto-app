import TypingAnimation from "../components/magicui/typing-animation";
interface Props{
    text:string
}
const TextReveal=({text}:Props)=> {
  return (
    <TypingAnimation
      className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-black"
      text={text}
      duration={200}

    />
  );
}
export default TextReveal;