import { pendingQuest } from "../../constants";

const CreateQuestCard = ({ status }) => {
  return (
    <>
      {pendingQuest.map((item, index) => {
        let card = "";
        let text = "";
        let displayStatus = "";
        let icon = "";

        if (item.status === "Pending") {
          card = "border border-dark-5";
          displayStatus = "bg-gray-200";
          icon = "progress_activity";
        } else if (item.status === "Accepted") {
          card = "bg-gray-200";
          displayStatus = "bg-white";
          icon = "verified_user";
        } else if (item.status === "Ongoing") {
          card = "bg-gray-200";
          displayStatus = "bg-white";
          icon = "arrow_circle_right";
        } else if (item.status === "Expired") {
          card = "bg-[#813840]";
          text = "text-white-shades";
          displayStatus = "bg-white";
          icon = "error";
        }

        return (
          <div
            key={index}
            className={`px-5 py-3 rounded-xl mb-5 ${card} ${text} ${
              item.status !== status && "hidden"
            }`}
          >
            <div className="flex text-xs">
              <span className="flex-1">{item.category}</span>
              <span className="flex-1 text-right">{item.date}</span>
            </div>
            <h1 className="text-lg font-semibold my-2">
              Quest Name - {item.quest_name}
            </h1>
            <div className="flex">
              <div
                className={`flex gap-x-2 items-center px-2 rounded-full ${
                  item.status === "Expired" && "text-[#813840]"
                } ${displayStatus}`}
              >
                <span className="material-symbols-outlined text-lg">
                  {item.status === status && icon}
                </span>
                <span className="text-sm font-semibold">{item.status}</span>
              </div>
              <div className="flex-1 text-right">
                <span className="material-symbols-outlined border-2 border-cc-gray rounded-full text-end text-cc-gray">
                  chevron_left
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CreateQuestCard;
