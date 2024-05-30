import { useMapContext } from "../Context/useMapContext";
import { dataToView } from "../constants/data";
import MarkLocation from "./MarkLocation";
const MarkerComponent = () => {
    const props = useMapContext()
    if (!props) {
        return <></>
    }
    const { mapViewUserData } = props
    const data = (mapViewUserData.length > 0) ? mapViewUserData : dataToView;
    console.log("mapview", mapViewUserData)
    return (
        <>
            {
                data.map((datajson, index) => {
                    return <MarkLocation datajson={datajson} key={index} />
                })
            }
        </>
    )
}
export default MarkerComponent