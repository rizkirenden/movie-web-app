import Header from "@/components/landingpage/header";
import Herosection from "@/components/landingpage/herosection";
import Continuewatching from "@/components/landingpage/continuewatching";
import Toprating from "@/components/landingpage/toprating";
import Newrelease from "@/components/landingpage/newrelease";
import Moviestranding from "@/components/landingpage/moviestranding";
import Footer from "@/components/landingpage/footer";
export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Herosection />
      </div>
      <div>
        <Continuewatching />
      </div>
      <div>
        <Toprating />
      </div>
      <div>
        <Moviestranding />
      </div>
      <div>
        <Newrelease />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
