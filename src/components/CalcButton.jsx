import { useDmgRedContext } from "../hooks/useDmgRedContext";
export function CalcButton() {
  const { dispatch } = useDmgRedContext();
  return <button onClick={() => dispatch({ type: "CALCULATOR" })}>Calc</button>;
}
