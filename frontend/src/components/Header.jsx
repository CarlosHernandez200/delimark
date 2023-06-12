import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

import { Mark } from "../assets/icons/iconsData";
import Avatar from "./Avatar";
import { useEffect, useState } from "react";
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Food Menu", href: "#", current: false },
  { name: "Our chefs", href: "#", current: false },
  { name: "Contact", href: "contact", current: false },
];

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Disclosure as="nav" className="w-full">
      {({ open }) => (
        <>
          <div className="container mx-auto">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-6 sm:gap-12">
                {/* Logo */}
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto"
                    src={Mark}
                    alt="Your Company"
                  />
                </div>

                {/* Nav */}
                <div className="hidden sm:block">
                  <div className="flex items-center space-x-3">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="px-3 py-2 text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden gap-4 sm:flex sm:items-center">
                <div className="hidden text-sm lg:block">
                  Free Delivery: <span className="font-semibold">3310-034</span>
                </div>

                <ShoppingBagIcon className="h-6 w-6" />

                {isLoggedIn ? (
                  <Avatar />
                ) : (
                  <Link to="/login">
                    <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Iniciar Session
                    </button>
                  </Link>
                )}
              </div>

              <div className="sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="rounded-md bg-[#F2F6FC] p-2 text-violet-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm hover:bg-gray-50"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
