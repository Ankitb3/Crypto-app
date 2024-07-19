"use client";

import { Tabs } from "../components/magicui/Tabs"
import CoinsTable from "./CoinsTable";
import { LampDemo } from "./CommingSoonPage";
import Favorite from "./Favorite";
import Gainers from "./Gainers";

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
        <div className="border-2 shadow-md shadow-white bg-black relative overflow-auto h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b">
          <p>Top Gainers</p>
          <Gainers />
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
    }
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs}/>
    </div>
  );
}


