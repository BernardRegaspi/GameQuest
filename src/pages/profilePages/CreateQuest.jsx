import CreateQuestCard from "../../components/profileComponents/CreateQuestCard";
import CreateQuestDialog from "../../components/profileComponents/CreateQuestDialog";
import { useState } from "react";

const CreateQuest = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="flex-1 p-7 pl-16 ml-56 max-container bg-gray-200">
      <CreateQuestDialog dialog={open} setOpen={setOpen} />
      <div className="flex bg-white mb-4 rounded-3xl py-2 px-4">
        <div className="flex-1">
          <h1 className="text-xl font-semibold">Manage My Quest</h1>
        </div>
        <div className="flex-1 text-right">
          <button
            className="bg-dark-5 py-1.5 px-4 text-xs text-white rounded-xl"
            onClick={() => setOpen(true)}
          >
            Create
          </button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-2 ">
        {/* Pending */}
        <div className="bg-white rounded-lg px-2 py-4 text-dark-5 h-[360px]">
          <h2 className="text-lg text-center font-semibold mb-4">Pending</h2>
          <CreateQuestCard status="Pending" />
        </div>
        <div className="bg-white rounded-lg px-2 py-4 text-dark-5 h-[360px]">
          <h2 className="text-lg text-center font-semibold mb-4">Accepted</h2>
          <CreateQuestCard status="Accepted" />
        </div>
        <div className="bg-white rounded-lg px-2 py-4 text-dark-5 h-[360px]">
          <h2 className="text-lg text-center font-semibold mb-4">Ongoing</h2>
          <CreateQuestCard status="Ongoing" />
        </div>
        <div className="bg-white rounded-lg px-2 py-4 text-dark-5 h-[360px]">
          <h2 className="text-lg text-center font-semibold mb-4">Expired</h2>
          <CreateQuestCard status="Expired" />
        </div>
      </div>
    </section>
  );
};

export default CreateQuest;
