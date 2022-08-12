import "./App.scss"
import {Routes, Route} from "react-router-dom"
import Home from "./Routes/Home/Home"
import Authentication from "./Routes/Authentication/Authentication"
import Navigation from "./Routes/Navigation/Navigation"
import Mens from "./Routes/Mens/Mens"
import Women from "./Routes/Women/Women"
import NewArrivals from "./Routes/NewArrivals/NewArrivals"
import Kids from "./Routes/Kids/Kids"
import Sale from "./Routes/Sale/Sale"

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Navigation />} >
            <Route index element={<Home />} />
            <Route path="/Authentication" element={<Authentication />} />
            <Route path="/NewArrivals" element={<NewArrivals />} />
            <Route path="/Mens" element={<Mens />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/Sale" element={<Sale />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
