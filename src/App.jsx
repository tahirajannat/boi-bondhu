import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
// import Borrow from './components/Borrow';
import ChatBox from './components/common/ChatBox';
import CommentBox from './components/common/CommentBox';
import Borrow from './components/views/Borrow';
import Contact from './components/views/Contact';
import Exchange from './components/views/Exchange';
// import ChatBox from "./components/ChatBox";
import Footer from './components/footer/Footer';
import MainNav from './components/header/MainNav';
import Menu from './components/header/Menu';
import Home from './components/views/Home';
import Lend from './components/views/Lend';
import Shop from './components/views/Shop';
import DashboardMain from './components/views/dashboard/DashboardMain';
import Archive from './components/views/product/Archive';
import Cart from './components/views/product/Cart';
import Checkout from './components/views/product/Checkout';
import SingleProduct from './components/views/product/SingleProduct';

function App() {
    return (
        <div className='App'>
            <MainNav />
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/lend' element={<Lend />} />
                    <Route path='/borrow' element={<Borrow />} />
                    <Route path='/exchange' element={<Exchange />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/shop' element={<Archive />} />
                    {/* <Route path='/shop/:id' element={<div>Single page</div>} /> */}
                    <Route path='/shop/:id' element={<SingleProduct />} />
                    <Route path='/shop2' element={<Shop />} />
                    {/* <Route path='/itemSlug' element={<ItemSingle />} /> */}
                    <Route path='/itemSlug' element={<SingleProduct />} />
                    <Route path='/chat' element={<ChatBox />} />
                    <Route path='/comment' element={<CommentBox />} />
                    {/* <Route path='/dashboard' element={<DashboardUser />} /> */}
                    {/* <Route path='/dashboard' element={<DashboardMain />} /> */}
                    <Route path='/dashboard' element={<DashboardMain />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/cart' element={<Cart />} />
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
