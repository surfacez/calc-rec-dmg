import { useReducer, createContext } from "react";

export const CalcDmgRedContext = createContext(null);

function calcDmgReducer(state, action) {
  switch (action.type) {
    case "SET_DAMAGE":
      return { ...state, damage: action.payload };

    case "SET_TOP":
      return {
        ...state,
        top_humonoid: action.payload ? Number(action.payload) : 0,
      };
    case "SET_MID":
      return {
        ...state,
        mid_humonoid: action.payload ? Number(action.payload) : 0,
      };
    case "SET_BOTTOM":
      return {
        ...state,
        bottom_humonoid: action.payload ? Number(action.payload) : 0,
      };
    case "SET_SHIELD":
      let shield = action.payload.split(",");
      if (shield[0] === "humonoid") {
        return {
          ...state,
          shield_humonoid: Number(shield[1]),
          shield_long: 0,
        };
      }
      if (shield[0] === "long") {
        return {
          ...state,
          shield_long: Number(shield[1]),
          shield_humonoid: 0,
        };
      }
      return { ...state, shield_humonoid: 0, shield_long: 0 };
    case "SET_CAP":
      let cap = action.payload.split(",");
      if (cap[0] === "element") {
        return {
          ...state,
          cap_element: Number(cap[1]),
          cap_long: 0,
          cap_humonoid: 0,
        };
      }
      if (cap[0] === "long") {
        return {
          ...state,
          cap_long: Number(cap[1]),
          cap_element: 0,
          cap_humonoid: 0,
        };
      }
      if (cap[0] === "nuvem_toxica") {
        return {
          ...state,
          cap_long: Number(cap[1]),
          cap_element: Number(cap[1]),
          cap_humonoid: 0,
        };
      }
      if (cap[0] === "humonoid") {
        return {
          ...state,
          cap_humonoid: Number(cap[1]),
          cap_element: 0,
          cap_long: 0,
        };
      }
      return { ...state, cap_long: 0, cap_element: 0, cap_humonoid: 0 };
    case "SET_SHOES":
      return {
        ...state,
        shoes_humonoid: action.payload ? Number(action.payload) : 0,
      };
    case "SET_ACESSORY1":
      let acessory1 = action.payload.split(",");
      if (acessory1[0] === "element") {
        return {
          ...state,
          acessory_element1: Number(acessory1[1]),
          acessory_long1: 0,
        };
      }
      if (acessory1[0] === "long") {
        return {
          ...state,
          acessory_element1: 0,
          acessory_long1: Number(acessory1[1]),
        };
      }
      return { ...state, acessory_element1: 0, acessory_long1: 0 };
    case "SET_ACESSORY2":
      let acessory2 = action.payload.split(",");
      if (acessory2[0] === "element") {
        return {
          ...state,
          acessory_element2: Number(acessory2[1]),
          acessory_long2: 0,
        };
      }
      if (acessory2[0] === "long") {
        return {
          ...state,
          acessory_element2: 0,
          acessory_long2: Number(acessory2[1]),
        };
      }
      return { ...state, acessory_element2: 0, acessory_long2: 0 };

    case "SET_WEAPON":
      let weapon = action.payload.split(",");
      if (weapon[0] === "long") {
        return {
          ...state,
          weapon_long: Number(weapon[1]),
          weapon_humonoid: 0,
        };
      }
      if (weapon[0] === "humonoid") {
        return {
          ...state,
          weapon_long: 0,
          weapon_humonoid: Number(weapon[1]),
        };
      }
      return {
        ...state,
        weapon_long: 0,
        weapon_humonoid: 0,
      };
    case "CALCULATOR":
      return {
        ...state,
        result:
          (1 -
            0.01 *
              (state.top_humonoid +
                state.mid_humonoid +
                state.bottom_humonoid +
                state.shield_humonoid +
                state.cap_humonoid +
                state.shoes_humonoid +
                state.weapon_humonoid)) *
          (1 -
            0.01 *
              (state.shield_long +
                state.acessory_long1 +
                state.acessory_long2 +
                state.cap_long +
                state.weapon_long)) *
          (1 - 0.01 * state.cap_element) *
          (1 - 0.01 * (state.acessory_element1 + state.acessory_element2)) *
          state.damage,
      };

    default:
      return state;
  }
}

export function CalcDmgRedProvider({ children }) {
  const [state, dispatch] = useReducer(calcDmgReducer, {
    damage: 1000,
    acessory_element1: 0,
    weapon_long: 0,
    acessory_long1: 0,
    acessory_element2: 0,
    acessory_long2: 0,
    cap_element: 0,
    cap_long: 0,
    shield_long: 0,
    cap_humonoid: 0,
    weapon_humonoid: 0,
    shoes_humonoid: 0,
    shield_humonoid: 0,
    top_humonoid: 0,
    mid_humonoid: 0,
    bottom_humonoid: 0,
    result: null,
  });
  return (
    <CalcDmgRedContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CalcDmgRedContext.Provider>
  );
}
