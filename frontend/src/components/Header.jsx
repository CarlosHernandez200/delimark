import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Food Menu", href: "#", current: false },
  { name: "Our chefs", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

const Header = () => {
  return (
    <Disclosure as="nav" className="w-full">
      {({ open }) => (
        <>
          <div className="container mx-auto">
            <div className="flex h-16 items-center justify-between">
              <div className="flex gap-12">
                {/* Logo */}
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>

                {/* Nav */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center space-x-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="px-3 py-2 text-sm"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
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
        </>
      )}
    </Disclosure>
  );
};

export default Header;
