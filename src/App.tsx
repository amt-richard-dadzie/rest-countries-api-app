import { MainRoutes } from "./routes/MainRoutes";
import { Header } from "./components/Header";
import { Countries } from "./pages/Countries";

const App = () => {
  return (
    <>
      <Header />
      <Countries />
      <MainRoutes />
    </>
  );
};

export default App;
