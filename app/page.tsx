import Header from "@/components/header";
import Link from "next/link";

export default function Home() {

  return (
      <>
      <Header/>
      <div className="flex border-2 border-white w-5/12 p-16 mt-8 shadow-md shadow-emerald-400">
        <p className="flex justify-center items-center">
          Nothing to see here...
        </p>
      </div>
      </>
  );
}


