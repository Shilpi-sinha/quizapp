import DetailsProvider from "./context/detailsProvider";
import AppRoute from "./routes/appRoute";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "rgb(29, 26, 26)" }}>
      <DetailsProvider>
      <AppRoute />
      </DetailsProvider>
    </div>
   
  );
}

export default App;
