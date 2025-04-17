import Header from "./header";
import Virtual from "./virtual";
import Service from "./Service";
import Health from "./health";
import Download from "./download";

import Latest from "./latest";
import Footer from "./footer";
import ServiceOptions from "./service_options";
import Carousel from "./carousel";

function App() {
  return (
    <div className="bg-white h-screen m-0 p-0 font-mulish">
      <Header />
      <Virtual />
      <Service />
      <ServiceOptions />
      <Health />
      <Download />
      {/* <Customer /> */}
      <Carousel/>.
      <Latest />
      
      <Footer />
    
    </div>
  );
}
export default App;
