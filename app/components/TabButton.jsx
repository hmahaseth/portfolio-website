import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white  border-b border-blue-500"
    : " text-[#ADB7Be]";
  return (
    <button onClick={selectTab}>
      <p
        className={
          "mr-3  hover:border-b hover:border-blue-500 font-semibold hover:text-white  $(buttonClasses)"
        }
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
