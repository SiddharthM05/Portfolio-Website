import React from "react";

const SkillsItem = (props) => {
  return (
    <div
      href=""
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
    >
      <div className="w-64 h-64 p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
          {props.title}
        </h3>
        <p className="grid grid-cols-1 md:grid-cols-2 gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {props.skills.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default SkillsItem;
