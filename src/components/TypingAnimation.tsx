import TypingAnimation from "../components/magicui/typing-animation";
interface Props{
    text:string;
    className:string
}
const TextReveal=({text,className}:Props)=> {
  return (
    <TypingAnimation
    className={className}
      // className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center ;g:text-6xl text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-black"
      text={text}
      duration={200}

    />
  );
}
export default TextReveal;