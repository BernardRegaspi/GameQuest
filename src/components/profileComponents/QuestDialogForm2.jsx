import React from "react";

const QuestDialogForm2 = () => {
  return (
    <div className="mt-2 border border-gray-300 rounded-lg">
      <h1 className="flex text-xl items-centertext-xl font-semibold p-2 bg-gray-200">
        <span className="material-symbols-outlined mr-2">contract</span>
        Practical Details
      </h1>
      <form>
        <div className="mt-7 mx-8">
          <h1 className="font-semibold text-lg">Quest Location</h1>
          <div className="flex gap-x-8 border-b border-gray-200 mb-8">
            <div className="flex-1 pb-5 mb-3">
              <label>
                <p className="text-xs font-light leading-5">
                  Country, State/Province, Village/Barangay/Local Administrative
                  Location
                </p>
                <input type="text" className="profile-input mb-6" placeholder="Type the location here" />
              </label>
              <label>
                <p className="text-xs leading-5">Place name or Description</p>
                <input type="text" className="profile-input" />
              </label>
            </div>
            <div className="flex-1 pb-5 mb-3">
              <label>
                <p className="text-xs leading-5">Street</p>
                <input type="text" className="profile-input" />
              </label>
            </div>
          </div>
          <div className="flex gap-x-8">
            <div className="flex-1 pb-5 mb-8 border-b border-gray-200">
              <label>
                <span className="font-semibold text-lg">Schedule</span>
                <p className="text-xs font-light leading-5">
                  Select what type is your quest
                </p>
                <input type="date" className="profile-input" />
              </label>
            </div>
            <div className="flex-1 pb-5 mb-8 border-b border-gray-200">
              <label>
                <span className="font-semibold text-xl">
                  Image <span className="font-light text-sm">(optional)</span>
                </span>
                <p className="text-xs font-light leading-5">
                  The image can be the place of the quest or the waiting place.
                </p>
                <input type="file" className="profile-input" />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuestDialogForm2;
