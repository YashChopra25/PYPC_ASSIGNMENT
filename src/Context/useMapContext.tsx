import { useContext } from "react";
import { MapContext } from "./Provider";

export const useMapContext = () => {
    return useContext(MapContext);

};