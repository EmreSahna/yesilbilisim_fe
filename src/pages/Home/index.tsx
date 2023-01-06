import Hizmetlerimiz from "../../components/hizmetlerimiz";
import Sectionis from "../../components/sectionis";
import DemoCarousel from "../../components/slider";

function home() {
  return (
    <div>
      <DemoCarousel/>
      <Sectionis/>
      <Hizmetlerimiz/>
    </div>
  )
}

export default home;