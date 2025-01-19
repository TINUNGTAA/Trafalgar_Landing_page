
import Header from "./components/header";
import Virtual from "./components/virtual";
import Service from "./components/Service";
import Health from "./components/health";
import Download from "./components/download";
import Customer from "./components/customer";

function App(){
  return(
    <div  className="bg-white h-screen m-0 p-0" >
      <Header/>
      <Virtual/>
      <Service/>
      <Health/>
      <Download/>
      <Customer/>
    </div>
  )
}
export default App;