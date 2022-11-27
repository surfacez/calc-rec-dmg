import { useDmgRedContext } from "../hooks/useDmgRedContext";

export function EquipSelect({ items, actionType }) {
  const { dispatch } = useDmgRedContext();
  return (
    <select
      onChange={(evt) =>
        dispatch({
          type: actionType,
          payload: evt.target.value,
        })
      }
      style={{ margin: "1rem" }}
    >
      {items.map((item) => (
        <option
          key={item.id}
          value={item.type ? [item.type, item.value] : item.value}
        >
          {item.name}
        </option>
      ))}
    </select>
  );
}
