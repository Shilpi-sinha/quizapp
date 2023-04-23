import DetailsProvider from "./context/detailsProvider";
import AppRoute from "./routes/appRoute";

function App() {
  return (
    <div className="App">
      <DetailsProvider>
      <AppRoute />
      </DetailsProvider>
    </div>
  );
}

export default App;
