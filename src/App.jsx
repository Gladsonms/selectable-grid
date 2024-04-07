import SelectableGrid from "./Components/SelectableGrid";
import "./App.css"

const App = () => {
  return <div>
    <h1>Selectable grid
    </h1>
    <SelectableGrid rows={10} columns={10}/>
  </div>;
};

export default App;
