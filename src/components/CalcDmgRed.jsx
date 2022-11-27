import { useDmgRedContext } from "../hooks/useDmgRedContext";
import { EquipSelect } from "./EquipSelect";
import { CalcDamageInput } from "./CalcDamageInput";
import { CalcButton } from "./CalcButton";
import top from "../data/hats.json";
import mid from "../data/mid.json";
import bottom from "../data/bottom.json";
import shields from "../data/shields.json";
import cap from "../data/cap.json";
import shoes from "../data/shoes.json";
import acessories from "../data/acessories.json";
import weapons from "../data/weapons.json";

export function CalcDmgRed() {
  const { result, dispatch } = useDmgRedContext();
  return (
    <>
      <EquipSelect actionType={"SET_TOP"} items={top} />
      <EquipSelect actionType={"SET_MID"} items={mid} />
      <EquipSelect actionType={"SET_BOTTOM"} items={bottom} />
      <EquipSelect actionType={"SET_SHIELD"} items={shields} />
      <EquipSelect actionType={"SET_WEAPON"} items={weapons} />
      <EquipSelect actionType={"SET_CAP"} items={cap} />
      <EquipSelect actionType={"SET_SHOES"} items={shoes} />
      <EquipSelect actionType={"SET_ACESSORY1"} items={acessories} />
      <EquipSelect actionType={"SET_ACESSORY2"} items={acessories} />
      <br />
      <CalcDamageInput />
      <CalcButton />
      <h1>{result}</h1>
    </>
  );
}
