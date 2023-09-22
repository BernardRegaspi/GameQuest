import { basketball, map } from "../../assets/icons";

const SeekQuestInfo = () => {
  return (
    <section className="flex-1 p-7 pl-16 ml-56 max-container bg-gray-200">
      <div className="flex items-center gap-x-2">
        <span className="material-symbols-outlined">arrow_back</span>
        <span>back</span>
      </div>
      <div className="flex items-center gap-x-4 mb-4">
        <div className="flex-auto w-96 bg-white py-2 px-4 rounded-xl">
          <p className="text-xs text-amber-700">Team Sports</p>
          <h1 className="text-xl font-semibold">Blitz Ball - Basketball</h1>
        </div>
        <div className="flex gap-x-2 items-end flex-auto bg-dark-5 text-gray-100 p-2 rounded-xl">
          <span className="material-symbols-outlined text-5xl">
            account_circle
          </span>
          <div className="flex-1 leading-none">
            <h2 className="text-sm font-bold leading-none">useJcedd803</h2>
            <span className="text-xs font-extralight leading-none">
              Creator
            </span>
          </div>
        </div>
        <div className="">
          <button className="px-5 py-4 rounded-xl border border-dark-4 font-bold text-dark-5">
            Accept
          </button>
        </div>
      </div>

      <div className="flex gap-x-4">
        <div className="flex-1">
          <h1 className="bg-white p-4 rounded-xl mb-4">
            <span className="font-bold">Quest-Schedule:</span> July 30, 20223 at 4:00 PM
          </h1>
          <h1 className="bg-white p-4 rounded-xl mb-4"><span className="font-bold">Participants Needed:</span> 5</h1>
          <div className="bg-white p-4 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Description:</h3>
            <p className="text-sm mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              obcaecati, reprehenderit magnam quia voluptatum similique sequi
              voluptatem ipsam quas eveniet error voluptas veniam maxime
              molestias fugiat rem minima veritatis assumenda? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quaerat obcaecati,
              reprehenderit magnam quia voluptatum similique sequi voluptatem
              ipsam quas eveniet error voluptas veniam maxime molestias fugiat
              rem minima veritatis assumenda? sit amet consectetur adipisicing
              elit. Quaerat obcaecati, reprehenderit magnam quia voluptatum
              similique sequi voluptatem ipsam quas eveniet error voluptas
              veniam maxime molestias fugiat rem minima veritatis assumenda?
            </p>
            <h3 className="text-lg font-semibold">Given Rules:</h3>
            <ul className="text-sm ">
              <li>No cheating for all member</li>
              <li>No changing of Players while the game start</li>
              <li>Winner Take all prizes</li>
              <li>Bring your own devices</li>
              <li>Your things if your liability</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 bg-white p-4 rounded-xl">
          <h1 className="text-lg font-semibold">Location Details</h1>
          <p className="text-sm mb-2">
            Zone 35 Agos, Bato Camarines Sur, 10 km away
          </p>
          <img src={map} alt="location" />
          <p className="text-xs my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            obcaecati consequuntur quibusdam rem! Autem{" "}
          </p>
          <h3 className="font-semibold">Additional Image</h3>
          <img src={basketball} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SeekQuestInfo;
