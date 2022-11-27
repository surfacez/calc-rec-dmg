import { useDmgRedContext } from "../hooks/useDmgRedContext";

export function CalcDamageInput() {
  const { damage, dispatch } = useDmgRedContext();
  return (
    <>
      <label htmlFor="damage">Digite o dano recebido:</label>
      <input
        type="number"
        id="damage"
        placeholder={damage}
        style={{
          marginTop: "1em",
        }}
        onChange={(evt) =>
          dispatch({ type: "SET_DAMAGE", payload: evt.target.value })
        }
      />
    </>
  );
}
