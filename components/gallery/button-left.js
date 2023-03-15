import { Icon } from "@iconify/react";

export default function LeftButton({ onClick }) {
  return ( 
      <button className="absolute left-6 z-10 bg-none border-none text-5xl p-0 m-0 text-white hover:text-gray-500 transition-colors duration-300 ease-linear focus:outline-none" type="button" onClick={onClick}> 
        <Icon icon="mdi:chevron-left"/>
      </button> 
  );
}
