import Image from "next/image";
import { dataToView } from "../constants/data"
import { Marker } from 'react-map-gl';
const MarkerComponent = () => {
    return (
        <>
            {
                dataToView.map((datajson, index) => {
                    console.log(index)
                    const long: number = (typeof (datajson['location.lng']) == 'string') ? parseFloat(datajson['location.lng']) : datajson['location.lng']
                    const ltd: number = (typeof (datajson['location.lat']) == 'string') ? parseFloat(datajson['location.lat']) : datajson['location.lat']
                    const name: string = datajson.fullName
                    const designation: string = datajson.designation
                    const photo: string = (datajson.photo) ? datajson.photo : "https://robohash.org/porronobisab.png?size=64x64&set=set1"
                    if (long && ltd) {

                        console.log(long, ltd, name, designation);
                        return (
                            <Marker longitude={long} latitude={ltd} anchor='center' key={datajson.id}>
                                <div className='px-3 py-2 flex justify-between items-center bg-white gap-3 rounded'>
                                    <Image src={(photo)} alt={photo} width={64} height={64} className="aspect-square rounded" loading="lazy" />
                                    <div className='flex flex-col justify-evenly'>
                                        <h1 className='font-semibold text-lg'>{name}</h1>
                                        <h1 className='font-medium text-base text-gray-400'>{designation}</h1>
                                    </div>
                                </div>
                            </Marker>
                        )
                    }
                    else {
                        return null;
                    }
                })
            }
        </>
    )
}
export default MarkerComponent