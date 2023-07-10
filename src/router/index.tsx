import { createBrowserRouter } from "react-router-dom";
import Main from "../feat/main/main";
import Wellcome from "../feat/welcome/Welcome";
import { MyContextProvider } from "../context/provider";

const App = () => {
  return (
    <MyContextProvider>
      <Main />
    </MyContextProvider>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Wellcome,
  },
  {
    path: "/Portfolio",
    Component: App
  }
]);
