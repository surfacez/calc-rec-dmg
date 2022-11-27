import { CalcDmgRed } from "./components/CalcDmgRed";
import { CalcDmgRedProvider } from "./context/CalcDmgRedContext";
function App() {
  return (
    <CalcDmgRedProvider>
      <CalcDmgRed />
    </CalcDmgRedProvider>
  );
}

export default App;
