import { BrowserRouter } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      {/* <UserDashboard/> */}
      <Profile/>
    </BrowserRouter>
  );
};

export default App;
