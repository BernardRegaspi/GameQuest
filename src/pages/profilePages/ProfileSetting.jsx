const ProfileSetting = () => {
  return (
    <section className="flex-1 p-7 pl-16 ml-56 max-container">
      <h1 className="text-2xl font-semi mb-7">Profile Setting</h1>
      <form>
        <div className="border border-gray-200 rounded-lg">
          <div className="bg-gray-200 rounded-t-md">
            <h1 className="text-xl items-center flex">
              <span className="material-symbols-outlined text-3xl mx-2">
                person
              </span>
              Personal Details
            </h1>
          </div>
          <div className="flex p-8 gap-x-10">
            <div className="flex-1">
              <h1 className="text-lg font-semibold">Primary Information</h1>
              <p className="text-xs font-light pr-16">
                Please provide your details it will use for logging in to the
                application and serve as your identification.
              </p>
            </div>
            <div className="flex-1">
              <div className="mb-6">
                <label>
                  <span className=" text-sm">Username</span>
                  <input
                    type="text"
                    className="profile-input"
                    placeholder="sampleUser980"
                  />
                </label>
              </div>
              <div className="mb-6">
                <label>
                  <span className=" text-sm">Email</span>
                  <input
                    type="email"
                    className="profile-input"
                    placeholder="sampleemail@mail.com"
                  />
                </label>
              </div>
              <div className="mb-6">
                <label>
                  <span className=" text-sm">Password</span>
                  <input
                    type="password"
                    className="profile-input"
                    placeholder="••••••••"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex border-y mx-7 mb-14 py-5 gap-x-10">
            <div className="flex-1">
              <h1 className="text-lg font-semibold">Location</h1>
              <p className="text-xs font-light pr-16">
                Please provide your location, it will help to find all quest
                invitations nearest to you.
              </p>
            </div>
            <div className="flex-1">
              <label>
                <span className=" text-sm">Location</span>
                <input type="text" className="profile-input" />
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-x-4 justify-end border border-gray-200 pr-7 py-2 mt-10 rounded-lg">
          <button className="py-1 rounded-lg border border-cc-gray w-24">Cancel</button>
          <button className="py-1 rounded-lg bg-cc-gray w-24 text-white">Save</button>
        </div>
      </form>
    </section>
  );
};

export default ProfileSetting;
