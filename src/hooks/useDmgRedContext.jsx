import { useContext } from "react";
import { CalcDmgRedContext } from "../context/CalcDmgRedContext";

export function useDmgRedContext() {
  return useContext(CalcDmgRedContext);
}
