import { Highlight } from "react-instantsearch";
import Image from "next/image";
export interface HitsType {
    photo: string,
    fullName: string,
    designation: string
}
export const Hit = ({ hit }: { hit: any }) => {
    const photo = (hit.photo) ? hit.photo : 'https://robohash.org/porronobisab.png?size=64x64&set=set1';
    return (
        <div className='flex justify-between items-center bg-white gap-3 rounded'>
            <Image src={(photo)} alt={photo} width={64} height={64} className="aspect-square" loading="lazy"/>
            <div className='flex flex-col justify-evenly'>
                <Highlight attribute="fullName" hit={hit} className='font-semibold text-lg' />
                <Highlight attribute="designation" hit={hit} className="font-medium text-base text-gray-400" />
            </div>

        </div>
    );
};