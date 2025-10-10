import { ToDoApp } from "./components/todoapp";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <>
      <ToDoApp />
      <ToastContainer  autoClose={2000} />
    </>
  );
};

export default App;
