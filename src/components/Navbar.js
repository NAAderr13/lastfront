import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Hero", href: "/hero", current: true },
  { name: "About Us", href: "/about", current: false },
  { name: "Offer a Ride", href: "/offer", current: false },
  { name: "Find a Ride", href: "/find", current: false },
  { name: "Admin", href: "/admin", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6 group-data-[open]:block" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* Logo and main navigation */}
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/">
                <img alt="Company Logo" src="/logoC.png" className="h-10 w-auto" />
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "text-indigo-600 border-b-4 border-indigo-600"
                        : "text-gray-600 hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600",
                      "rounded-md px-3 py-2 text-lg font-medium transition-all duration-200 ease-in-out"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right side: SignIn button */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-md bg-indigo-600 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                <Link to="/signin">
                  <p className="px-4 py-2 rounded-md text-base font-medium transition-all hover:bg-indigo-700">
                    Sign In
                  </p>
                </Link>
              </MenuButton>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "text-indigo-600 bg-gray-100"
                  : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600",
                "block rounded-md px-3 py-2 text-base font-medium transition-all duration-200 ease-in-out"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
