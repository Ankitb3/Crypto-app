import { VelocityScroll } from "../components/magicui/scroll-based-velocity";
interface Props {
    text:string
}
export function ScrollBasedAnimation({text}:Props) {
  return (
    <VelocityScroll
      text={text}
      default_velocity={2}
      className=" bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-black"
    />
  );
}
