import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import QuestDialogForm1 from "./QuestDialogForm1";
import QuestDialogForm2 from "./QuestDialogForm2";

const CreateQuestDialog = ({ dialog, setOpen }) => {
  return (
    <Transition.Root show={dialog} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto"
        onClose={() => dialog}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-xs leading-normal">
                      <p className="font-normal">
                        <span className="font-semibold">
                          Important Notice:{" "}
                        </span>
                        When creating a quest, please ensure that you provide
                        <span className="text-red-500"> thorough </span>and
                        <span className="text-red-500"> precise </span>
                        information. This is essential for participants to fully
                        grasp the nature of the quest and to easily locate you
                        once they accept the invitation. You're limited to a
                        maximum of 3 active quest invites at a time.
                      </p>
                    </Dialog.Title>
                    <QuestDialogForm1/>
                  </div>
                </div>

                <div className="border my-7 round border-gray-200 rounded-lg px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cc-gray text-base font-medium text-white hover:bg-gray-500 hover:border-gray-700 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Next
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-200 text-base font-medium text-gray-700 hover:bg-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CreateQuestDialog;
