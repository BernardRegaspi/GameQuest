import { Link, Route, Routes } from "react-router-dom";
import { logo, logout } from "../assets/icons";
import { menus } from "../constants";
import CreateQuest from "./profilePages/CreateQuest";
import ProfileSetting from "./profilePages/ProfileSetting";
import SeekQuest from "./profilePages/SeekQuest";
import SeekQuestInfo from "./profilePages/SeekQuestInfo";
import Dashboard from "./profilePages/Dashboard";

const Profile = () => {
  return (
    <section className="flex">
      {/* Sidebar */}
      <div className={`fixed h-full bg-dark-5 md:max-w-0 lg:max-w-56`}>
        <header className="text-center p-5 ">
          <img src={logo} alt="logo" className="w-10 mx-auto mb-2" />
          <h1 className="text-white origin-left font-semibold text-xl duration-300">
            Game Quest
          </h1>
        </header>

        <div className="gap-x-4 items-center mt-8">
          <ul className="pt-6">
            {menus.map((menu, index) => (
              <Link to={menu.link} key={index}>
                <li
                  className="flex items-center gap-x-4 text-white font-light text-lg px-5 py-1 mx-3 mb-2 cursor-pointer hover:bg-white hover:text-dark-5"
                >
                  <span className="text-4xl material-symbols-outlined">
                    {menu.icon}
                  </span>
                  <span className="origin-left text-sm">{menu.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <footer className="flex mx-4 border-t-2 border-white-shades py-4 pl-3 mt-36">
          <img
            src={logout}
            alt="logout_icon"
            className="bg-cc-red rounded-full p-2 mr-2"
          />
          <h2 className="text-white text-center pt-1">Log out</h2>
        </footer>
      </div>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-quest" element={<CreateQuest />} />
        <Route path="/seek-quest" element={<SeekQuest />} />
        <Route path="/profile" element={<ProfileSetting />} />
      </Routes>
    </section>
  );
};

export default Profile;
