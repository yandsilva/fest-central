import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import NewEvent from "./pages/NewEvent";
import InterestedEvents from "./pages/InterestedEvents";
import CreateLogin from "./components/CreateLogin";
import Cart from "./pages/Cart";
import SiderbarConfig from "./components/SiderbarConfig";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-login" element={<CreateLogin />} />
        <Route path="/events" element={<Events />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-event" element={<NewEvent />} />
        <Route path="/interested-events" element={<InterestedEvents />} />
        <Route path="/account-config" element={<SiderbarConfig />} />
      </Routes>
    </div>
  );
}

export default App;
