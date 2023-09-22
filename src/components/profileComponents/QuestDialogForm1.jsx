import React from "react";

const QuestDialogForm1 = () => {
  return (
    <div className="mt-2 border border-gray-300 rounded-lg">
      <h1 className="flex text-xl items-centertext-xl font-semibold p-2 bg-gray-200">
        <span className="material-symbols-outlined mr-2">contract</span>
        Quest Details
      </h1>
      <form>
        <div className="flex mt-7 mx-8 gap-x-8">
          <div className="flex-1">
            <div className="pb-5 mb-8 border-b border-gray-200">
              <label>
                <span className="font-semibold text-xl">Quest Name</span>
                <p className="text-xs font-light">
                  Give your quest a unique name
                </p>
                <input type="text" className="profile-input" />
              </label>
            </div>
            <div className="pb-5 mb-8 border-b border-gray-200">
              <label>
                <span className="font-semibold text-xl">Category</span>
                <p className="text-xs font-light">
                  Select what category your quest belongs to.
                </p>
                <select className="profile-input">
                  <option value="e-sports">e-sports</option>
                  <option value="e-sports">e-sports</option>
                  <option value="e-sports">e-sports</option>
                </select>
              </label>
            </div>
            <div className="pb-5 mb-8 border-b border-gray-200">
              <label>
                <span className="font-semibold text-xl">Description</span>
                <p className="text-xs font-light">
                  Select what category quest belongs to.
                </p>
                <textarea className="profile-input resize-none h-48" />
              </label>
            </div>
          </div>
          <div className="flex-1">
            <div className="pb-5 mb-8 border-b border-gray-200">
              <label>
                <span className="font-semibold text-xl">Quest Type</span>
                <p className="text-xs font-light">
                  Select what type is your quest
                </p>
                <select className="profile-input">
                  <option value="e-sports">e-sports</option>
                  <option value="e-sports">e-sports</option>
                  <option value="e-sports">e-sports</option>
                </select>
              </label>
            </div>
            <div className="pb-5 mb-8 border-b border-gray-200">
              <label>
                <span className="font-semibold text-xl">
                  Number of Participants
                </span>
                <p className="text-xs font-light">
                  Select what category your quest belongs to.
                </p>
                <select className="profile-input">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
            </div>
            <div className="pb-5 mb-8 border-b border-gray-200">
              <label>
                <span className="font-semibold text-xl">Quest Rules</span>
                <p className="text-xs font-light">
                  Provide some rules of your quest. Separate each rule with ' ,
                  '.
                </p>
                <textarea className="profile-input resize-none h-48" />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuestDialogForm1;
