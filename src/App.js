/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AllBooks from "./components/AllBooks";
import BookList from "./components/BookList";
import Borrow from "./components/Borrow";
import Chat from "./components/Chat";
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
import Pagination from "./components/Pagination";
import Shop from "./components/Shop";
import UserProfileBookList from "./components/UserProfileBookList";
import AuthContext from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContext>
        <Router>
          <MainNav />
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
            <Route path="/chat" element={<Chat />} />
            <Route path="/comment" element={<CommentBox />} />
            <Route path="/dashboard" element={<DashboardUser />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/uploaded-books" element={<UserProfileBookList />} />
            <Route path="/book_list" element={<BookList />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>

        <Footer />
      </AuthContext>

      {/* <TestimonialSlider /> */}
    </div>
  );
}

export default App;
