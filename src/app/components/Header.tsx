"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  tags: string[];
}

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showSublinks, setShowSublinks] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    try {
      const query = `*[_type == "product" && (name match $searchQuery || tags[] match $searchQuery)]{
        _id,
        name,
        "imageUrl": image.asset->url,
        price,
        tags
      }`;
      const params = { searchQuery: `${searchQuery.toLowerCase()}*` };

      const results: Product[] = await client.fetch(query, params);
      console.log("Search Results:", results); // Debugging
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim()) {
        handleSearch();
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <main className="bg-white w-[100vw] pt-3">
      <div className="w-full flex items-center justify-center mx-auto bg-white h-[70px]">
        <div className="w-full flex justify-center px-[15px] md:px-[135px]">
          <div className="w-full md:w-full lg:w-[1170px] flex items-center justify-between h-[50px]">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Hekto</h1>
              <div className="hidden md:block">
                <ul className="flex md:flex-row md:gap-x-2 lg:gap-x-3 text-base ml-20 font-medium text-black">
                  <li className="relative group p-4 hover:underline underline-offset-2">
                    <Link
                      href="/"
                      className="hover:text-[#FB2E86] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86] hover:stroke-[#FB2E86]"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="relative group p-4 hover:underline underline-offset-2">
                    <Link
                      href="/pages"
                      className="hover:text-[#FB2E86] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86] hover:stroke-[#FB2E86]"
                    >
                      Pages <IoIosArrowDown className="mt-1" />
                    </Link>
                    <ul className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 border border-gray-200 z-10">
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/cart">Cart</Link>
                      </li>{" "}
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/checkout">Billing Details</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/ordercompleted">Order Completed</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/about">About Us</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/contact">Contact Us</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/account">My Account</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/forgetpassword">Forget Password</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/creatorpage">About Creator</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/faq">FAQ</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="hover:text-[rgb(251,46,134)] flex items-center  focus:text-[#FB2E86] active:text-[#FB2E86]">
                    <Link href="/shoppingcart">Product</Link>
                  </li>
                  <li className="hover:text-[rgb(251,46,134)] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86]">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="hover:text-[rgb(251,46,134)] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86]">
                    <Link href="/shop">Shop</Link>
                  </li>
                  <li className="hover:text-[rgb(251,46,134)] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86]">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-x-4 items-center">
              <div className="lg:flex hidden md:block w-[243px] h-[40px] bg-[#F5F5F5] rounded-[4px] items-center">
                <input
                  className="w-full p-1 px-3 text-[13px] rounded-md bg-[#F5F5F5] outline-none"
                  type="search"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
                <button
                  className="bg-[#FB2E86] px-3 py-2 rounded-tr-[4px] rounded-br-[4px]"
                  onClick={handleSearch}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="w-4 h-4 text-center text-white"
                  />
                </button>
              </div>
              <button
                className="text-black block md:hidden text-3xl z-50"
                onClick={toggleMenu}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {searchQuery && (
        <div
          className={`absolute ${
            isOpen ? "top-[100px] hidden" : " md:block md:top-[140px] "
          } left-0 right-0 mx-auto w-[90%] sm:w-[80%] md:w-[50%] max-h-[300px] overflow-y-auto bg-white shadow-lg rounded-md z-[1000]`}
        >
          {isSearching ? (
            <div className="p-4 text-center">Searching...</div>
          ) : searchResults.length > 0 ? (
            <ul className="space-y-2 p-4">
              {searchResults.map((product) => (
                <li
                  key={product._id}
                  className="hover:bg-gray-100 p-2 rounded-md"
                >
                  <Link
                    href={`/product/${product._id}`}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-600">${product.price}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center">No results found.</div>
          )}
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed right-0 top-[30px] w-[70vw] h-full bg-white z-50 px-4 py-2 duration-500 overflow-y-auto">
          <div className="flex justify-end mt-4 items-center">
            <IoClose className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
          </div>
          <div className="mt-5 relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            {searchQuery && (
              <div className="absolute top-[60px] left-0 right-0 w-full max-h-[300px] overflow-y-auto bg-white shadow-lg rounded-md z-[1000]">
                {isSearching ? (
                  <div className="p-4 text-center">Searching...</div>
                ) : searchResults.length > 0 ? (
                  <ul className="space-y-2 p-4">
                    {searchResults.map((product) => (
                      <li
                        key={product._id}
                        className="hover:bg-gray-100 p-2 rounded-md"
                      >
                        <Link
                          href={`/product/${product._id}`}
                          className="flex items-center gap-4"
                        >
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-10 h-10 object-cover rounded-md"
                          />
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-gray-600">
                              ${product.price}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-4 text-center">No results found.</div>
                )}
              </div>
            )}
          </div>
          <ul className="space-y-6 mt-8">
            <li className="relative">
              <div
                className="hover:text-[rgb(251,46,134)] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86] cursor-pointer"
                onClick={() => setShowSublinks(!showSublinks)}
              >
                Home
                <span
                  className={`ml-auto transform ${showSublinks ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </div>
              {showSublinks && (
                <ul className="mt-2 space-y-2 pl-4">
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/account">My Account</Link>
                  </li>
                  <li>
                    <Link href="/cart">CartPage</Link>
                  </li>
                  <li>
                    <Link href="/checkout">Check Out Page</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/pages">Pages</Link>
            </li>
            <li>
              <Link href="/shoppingcart">Product</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </main>
  );
}

export default Header;
