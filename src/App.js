import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AllBooks from "./components/AllBooks";
import Borrow from "./components/Borrow";
import ChatBox from "./components/ChatBox";
import CommentBox from "./components/CommentBox";
import Contact from "./components/Contact";
import AuthContext from "./components/contexts/AuthContext";
import DashboardUser from "./components/DashboardUser";
import Exchange from "./components/Exchange";
// import ChatBox from "./components/ChatBox";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ItemSingle from "./components/ItemSingle";
import Lend from "./components/Lend";
import MainNav from "./components/MainNav";
import Menu from "./components/Menu";
import Pagination from "./components/Pagination";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="App">
      <AuthContext>
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
            <Route path="/all-books" element={<AllBooks />} />
            <Route path="/itemSlug" element={<ItemSingle />} />
            <Route path="/chat" element={<ChatBox />} />
            <Route path="/comment" element={<CommentBox />} />
            <Route path="/dashboard" element={<DashboardUser />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>

        {/* <Login /> */}
        {/* <Slider />
      <BottomNav />
      <ItemsCard />
      <Testimonial /> */}
        {/* <Shop /> */}
        {/* <ItemSingle />
      <ChatBox /> */}
        {/* <ProductGrid /> */}
        <Footer />
      </AuthContext>

      {/* <TestimonialSlider /> */}
    </div>
  );
}

export default App;
