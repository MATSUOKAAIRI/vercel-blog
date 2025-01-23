import Image from "next/image";
import Header  from "@/components/header";
import Footer from "@/components/footer";
import Blog from "./blog";
import Write from "./write";

export default function Home() {
  return (<>
    <Header/>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Write/>
      <Blog/>
    </div>
    <Footer/></>
  );
}
