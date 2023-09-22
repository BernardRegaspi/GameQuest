import { car, location, logo, logout, time } from "../../assets/icons";
import { questCard, questInvitation } from "../../constants";

const welcome = [
    {
      username: "Usermoji345",
      details:
        "This is your main dashboard, manage and create your own quest or find a quest to participate on.",
      total_quest_created: 34,
      total_quest_participated: 12,
    },
  ];

const Dashboard = () => {
  
  const user = welcome[0];

  return (
    <div className="p-7 ml-60">
      <h1 className="text-4xl font-semibold">Good Morning!</h1>

      <div className="flex mt-2 bg-dark-4 p-3 text-cc-white rounded-xl">
        <div className="flex-1">
          <h1 className="text-xl">Welcome</h1>
          <h1 className="text-3xl mb-5 text-cc-green">{user.username}</h1>
          <p className="text-sm font-light leading-normal pr-[30%]">
            {user.details}
          </p>
        </div>
        <div className="flex flex-1 gap-x-5 font-light text-center">
          <div className="flex-1 p-4 px-5 bg-cc-green rounded-2xl">
            <h1 className="text-6xl font-montserrat mb-5">
              {user.total_quest_created}
            </h1>
            <h3 className="text-xl">Total Quest Created</h3>
          </div>
          <div className="flex-1 p-4 px-5 bg-cc-blue rounded-xl">
            <h1 className="text-6xl font-montserrat mb-5">
              {user.total_quest_participated}
            </h1>
            <h3 className="text-xl">Total Quest Created</h3>
          </div>
        </div>
      </div>

      {/* Accepted Quest Invitations */}
      <div className="flex gap-x-5 mt-4">
        <div className="flex-1 p-4 bg-white-shades rounded-lg">
          <h1 className="text-xl font-semibold">Accepted Quest Invitations</h1>
          <p className="text-xs">This is your accepted and schedules quest</p>

          {/* Quest Card */}
          {questCard.map((quest, index) => (
            <div
              key={index}
              className="m-4 py-2 px-4 bg-white rounded-lg shadow-md max-w-lg"
            >
              <div className="flex">
                <div className="flex-1 justify-start">
                  <span className="bg-dark-3 text-white px-4 py-1 rounded-full text-xs">
                    {quest.category}
                  </span>
                </div>
                <div className="flex-1 text-right text-xs font-medium">
                  {quest.date}
                </div>
              </div>
              <div className="flex my-2">
                <h2 className="text-xl font-semibold pr-4">
                  Quest Name - <span>{quest.quest_name}</span>
                </h2>
              </div>
              <div className="flex mt-5">
                <p className="text-xs font-medium flex">
                  <img src={location} className="mr-2 w-4 h-4" />
                  {quest.location}, {quest.distace} km away
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quest Invitations Board */}
        <div className="flex-1 border-2 border-gray-300 rounded-3xl">
          <div className="flex border-b-2 pt-4 px-4 pb-2">
            <h1 className="flex-1 text-xl font-semibold">
              Quest Invitations Board
            </h1>
            <span className="text-sm">View all</span>
          </div>

          {/* Quest List */}
          {questInvitation.map((task, index) => (
            <div key={index} className="flex px-4 py-2 border-b-2">
              <div className="flex-1">
                <h1 className="text-lg font-semibold">{task.name}</h1>
                <div className="flex">
                  <p className="text-[9px] font-semibold flex mr-5">
                    <img src={car} className="w-4 h-4 mr-2" />
                    <span>{task.distace}</span> km away
                  </p>
                  <p className="text-[9px] flex">
                    <img src={time} className="w-4 h-4 mr-2" />
                    {task.date}
                  </p>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <span className="material-symbols-outlined text-4xl">
                  chevron_right
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
