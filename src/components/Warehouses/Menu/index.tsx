import React, { FC } from "react";
import MenuItem from "./MenuItem";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setList, setMap, setRegion } from "../../../store/slices/mapSlice";

const Menu: FC = () => {
  const state = useAppSelector((state) => state.map);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-row gap-5 py-5">
      <MenuItem
        id="map"
        name="Карта"
        isChecked={state.map}
        onChange={() => {
          dispatch(setMap());
        }}
      />
      <MenuItem
        id="list"
        name="Списком"
        isChecked={state.list}
        onChange={() => {
          dispatch(setList());
        }}
      />

      <MenuItem
        id="region"
        name="По административному делению"
        isChecked={state.region}
        onChange={() => {
          dispatch(setRegion());
        }}
      />
    </div>
  );
};

export default Menu;
