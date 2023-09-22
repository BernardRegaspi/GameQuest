import React from "react";
import Dropdown from "../../components/profileComponents/Dropdown";
import { category, questList, questType } from "../../constants";
import SearchComponent from "../../components/profileComponents/SearchComponent";

const SeekQuest = () => {
  return (
    <section className="flex-1 p-7 pl-16 ml-56 max-container bg-gray-200">
      <h1 className="text-2xl font-semibold mb-7">Seek Quest</h1>
      <div className="flex">
        <div className="flex-2">
          <Dropdown name="Category" selection={category} />
          <span className="mr-5"></span>
          <Dropdown name="Quest Type" selection={questType} />
        </div>
        <div className="flex-1 flex justify-end">
          <SearchComponent />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-3 mt-10">
        {questList.map((quest, index) => (
          <div key={index} className="bg-white p-4 rounded-2xl">
            <span className="text-xs text-amber-700">{quest.category}</span>
            <h2 className="text-xl font-semibold">{quest.quest_name}</h2>
            <div className="mt-10">
              <p className="text-xs">Created By: {quest.created_by}</p>
              <p className="text-xs">
                <span className="font-bold">Schedule: </span> {quest.schedule}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeekQuest;
