import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Borrow from "./components/Borrow";
import ChatBox from "./components/ChatBox";
import CommentBox from "./components/CommentBox";
import Contact from "./components/Contact";
import DashboardUser from "./components/DashboardUser";
import Exchange from "./components/Exchange";
// import ChatBox from "./components/ChatBox";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ItemSingle from "./components/ItemSingle";
import Lend from "./components/Lend";
import MainNav from "./components/MainNav";
import Menu from "./components/Menu";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lend-books" element={<Lend />} />
          <Route path="/borrow-books" element={<Borrow />} />
          <Route path="/exchange-books" element={<Exchange />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/itemSlug" element={<ItemSingle />} />
          <Route path="/chat" element={<ChatBox />} />
          <Route path="/comment" element={<CommentBox />} />
          <Route path="/dashboard" element={<DashboardUser />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
      {/* <Slider />
      <BottomNav />
      <ItemsCard />
      <Testimonial /> */}
      {/* <Shop /> */}
      {/* <ItemSingle />
      <ChatBox /> */}
      {/* <ProductGrid /> */}
      <Footer />
      {/* <TestimonialSlider /> */}
    </div>
  );
}

export default App;
