import ContextProvider from "./context/ContextProvider";
import Navigation from "./navigation/Navigation";

const App = () => {
  return (
    <div>
      <ContextProvider>
        <Navigation />
      </ContextProvider>
    </div>
  );
};
export default App;
