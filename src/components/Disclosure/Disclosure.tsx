import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { themeTypes, themes } from "./disclosureTheme";

interface DisclosureProps {
  button: React.ReactNode;
  panel: React.ReactNode;
  theme?: themeTypes;
}

export default function DisclosureComponent({
  button,
  panel,
  theme = "default",
}: DisclosureProps) {
  const classes = themes[theme];
  return (
    <div className={`${classes.background} p-4`}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex justify-between w-full px-4 py-4 font-medium text-left text-black rounded-lg  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 
              ${classes.button} 
              `}
            >
              {button}
              <ChevronUpIcon
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel
              className={`px-4 pt-4 pb-2 text-sm rounded-lg text-gray-500 ${classes.panel}`}
            >
              {panel}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
