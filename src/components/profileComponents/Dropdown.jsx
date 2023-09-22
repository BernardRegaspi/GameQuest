import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

const Dropdown = ({ name, selection }) => {
  const [selected, setSelected] = useState(null);

  const handleItemClick = (item) => {
    setSelected(item);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-48 gap-x-1.5 rounded-full bg-white py-2 px-4 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selected !== null ? selected : name}
          <span className="material-symbols-outlined ml-auto">expand_more</span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {selection.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={() => handleItemClick(item)}
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 text-sm hover:bg-gray-100`}
                  >
                    {item}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
