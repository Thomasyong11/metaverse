import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="relative bg-black">
      <div
        className=" absolute z-50 flex h-4/6 w-full flex-col 
      items-center justify-center space-y-4"
      >
        {/* logo */}
        <Image
          className="rounded-full object-cover shadow-sm"
          src="/Yong-Metaverse-logos.jpeg"
          height={200}
          width={200}
        />
        {/* login button */}
        <button
          onClick={authenticate}
          className="animate-pulse rounded-lg bg-yellow-500 p-5"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="h-screen w-full">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
