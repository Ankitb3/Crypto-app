"use client";

import { Tabs } from "../components/magicui/Tabs"
import CoinsTable from "./CoinsTable";
import { LampDemo } from "./CommingSoonPage";
import Favorite from "./Favorite";

export function TabsDemo() {
  const tabs = [
    {
      title: "Crypto Currency",
      value: "Crypto Currency",
      content: (
        <div className="border-2 shadow-md shadow-white bg-black relative overflow-auto h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b">
          <p>Crypto Currency</p>
          <CoinsTable />
        </div>
      ),
    },
    {
      title: "Gainers",
      value: "Gainers",
      content: (
        <div className="w-full shadow-md shadow-white overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Top Gainers</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Favorite",
      value: "Favorite",
      content: (
        <div className="border-2 shadow-md shadow-white bg-black relative overflow-auto h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b">
          <p>Favorite</p>
          <Favorite />
        </div>
      ),
    },
    {
      title: "Portfolio",
      value: "Portfolio",
      content: (
        <div className="border-2 shadow-md shadow-white bg-black relative overflow-hidden h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b">
          <LampDemo />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full shadow-md shadow-white overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs}/>
    </div>
  );
}

const DummyContent = () => {
  return (
    <img
      src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
