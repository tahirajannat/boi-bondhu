import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// import Borrow from './components/Borrow';
import ChatBox from './components/common/ChatBox';
import CommentBox from './components/common/CommentBox';
import Borrow from './components/views/Borrow';
import Contact from './components/views/Contact';
import Exchange from './components/views/Exchange';
// import ChatBox from "./components/ChatBox";
import { useState } from 'react';
import Footer from './components/footer/Footer';
import MainNav from './components/header/MainNav';
import Menu from './components/header/Menu';
import Lend from './components/views/Lend';
import Shop from './components/views/Shop';
import AboutUs from './components/views/about/AboutUs';
import Bookshare from './components/views/about/bookshare/Bookshare';
import BlogMain from './components/views/blog/BlogMain';
import BlogSingle from './components/views/blog/BlogSingle';
import DashboardMain from './components/views/dashboard/DashboardMain';
import Posts from './components/views/dashboard/Posts';
import Protected from './components/views/dashboard/Protected';
import Home from './components/views/home/Home';
import Archive from './components/views/product/Archive';
import Bookmark from './components/views/product/Bookmark';
import Cart from './components/views/product/Cart';
import Checkout from './components/views/product/Checkout';
import SingleBookmark from './components/views/product/SingleBookmark';
import SingleProduct from './components/views/product/SingleProduct';

function App() {
    const [isSignedIn, setIsSignedIn] = useState(true);
    const signin = () => {
        setIsSignedIn(true);
    };
    console.log('signin', isSignedIn);
    const signout = () => {
        setIsSignedIn(false);
    };
    return (
        <div className='App'>
            <BrowserRouter>
                <MainNav />
                {isSignedIn ? (
                    <div className='d-grid mt-5'>
                        <button className='btn-danger' onClick={signout}>
                            Sign out
                        </button>
                    </div>
                ) : (
                    <div className='d-grid mt-5'>
                        <button className='btn-dark' onClick={signin}>
                            Sign in
                        </button>
                    </div>
                )}
                <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/lend' element={<Lend />} />
                    <Route path='/borrow' element={<Borrow />} />
                    <Route path='/exchange' element={<Exchange />} />
                    <Route path='/about-boibondhu' element={<AboutUs />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/shop' element={<Archive />} />
                    <Route path='/blog' element={<BlogMain />} />
                    <Route path='/blog-post' element={<Posts />} />
                    <Route path='/book-share' element={<Bookshare />} />

                    <Route path='/single' element={<BlogSingle />} />
                    {/* <Route path='/shop/:id' element={<div>Single page</div>} /> */}
                    <Route path='/shop/:id' element={<SingleProduct />} />
                    {/* <Route path='/:id' element={<SingleProduct />} /> */}
                    <Route path='/shop2' element={<Shop />} />
                    {/* <Route path='/itemSlug' element={<ItemSingle />} /> */}
                    <Route path='/bookmark/:id' element={<SingleBookmark />} />
                    <Route path='/chat' element={<ChatBox />} />
                    <Route path='/comment' element={<CommentBox />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/bookmark' element={<Bookmark />} />
                    {/* <Route path='/dashboard' element={<DashboardUser />} /> */}
                    {/* <Route path='/dashboard' element={<DashboardMain />} /> */}
                    <Route
                        path='/dashboard'
                        element={
                            <Protected isSignedIn={isSignedIn}>
                                <DashboardMain />
                            </Protected>
                        }
                    />
                    {/* <Route path='/dashboard' element={<DashboardMain />} /> */}
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </div>
    );
}

export default App;
