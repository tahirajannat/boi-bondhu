import { FaBars } from "react-icons/fa";

export default function Menu(props) {
  return (
    <header className="bg-gray-200 md:sticky top-0  border-b border-red-300 shadow-lg transition-shadow font-serif z-20">
      <div className="container mx-auto  px-10 py-4  grid grid-cols-1 gap-4">
        <nav className=" text-base  mx-auto text-center items-center flex z-30">
          <input type="checkbox" id="check" />
          <label
            for="check"
            className="checkbtn text-gray-900  float-right cursor-pointer text-2xl py-4"
          >
            <FaBars />
          </label>

          <ul className=" menu flex items-center text-black">
            <a href="/lend-books" className="relative mx-4">
              Lend Books
            </a>

            <a href="/borrow-books" className="relative mx-4">
              Borrow Books
            </a>
            <a href="/exchange-books" className="relative mx-4">
              Exchange
            </a>
            <a href="/contact" className=" relative mx-4">
              Contact Us
            </a>
            <a href="/all-books" className=" relative">
              All Books
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}
