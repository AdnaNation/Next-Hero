import Image from "next/image";
import Heading from "./components/Heading";

export default function Home() {
  return (
    <div className="flex  flex-col items-center justify-between">
     Hello
     <Heading/>
     <button className="btn text-2xl bg-red-50 btn-primary">Call Me</button>
    </div>
  );
}
