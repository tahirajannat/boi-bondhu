import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
// import Borrow from './components/Borrow';
import ChatBox from './components/common/ChatBox';
import CommentBox from './components/common/CommentBox';
import Borrow from './components/views/Borrow';
import Contact from './components/views/Contact';
import DashboardUser from './components/views/DashboardUser';
import Exchange from './components/views/Exchange';
// import ChatBox from "./components/ChatBox";
import ItemSingle from './components/common/ItemSingle';
import Footer from './components/footer/Footer';
import MainNav from './components/header/MainNav';
import Menu from './components/header/Menu';
import Home from './components/views/Home';
import Lend from './components/views/Lend';
import Shop from './components/views/Shop';

function App() {
    return (
        <div className='App'>
            <MainNav />
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/lend-books' element={<Lend />} />
                    <Route path='/borrow-books' element={<Borrow />} />
                    <Route path='/exchange-books' element={<Exchange />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/itemSlug' element={<ItemSingle />} />
                    <Route path='/chat' element={<ChatBox />} />
                    <Route path='/comment' element={<CommentBox />} />
                    <Route path='/dashboard' element={<DashboardUser />} />
                    <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
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
