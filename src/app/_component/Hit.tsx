import Image from "next/image";
import { FunctionComponent } from "react";

export const Hit: FunctionComponent<any> = ({ hit }) => {
    const photo = hit.photo || 'https://robohash.org/porronobisab.png?size=64x64&set=set1';
    const city = hit['location.city']
    const country = hit['location.country']
    return (
        <div className='flex items-center bg-white gap-3 rounded cursor-pointer border' onClick={() => console.log(hit.fullName)}>
            <Image src={photo} alt={hit.fullName} width={64} height={64} className="aspect-square" loading="lazy" />
            <div className='flex flex-col justify-evenly'>
                <span className='font-semibold text-lg'>
                    {hit.fullName}
                </span>
                {
                    city && (country &&
                        < div >
                            <span className="font-medium text-base text-gray-400">
                                {hit['location.city']}
                            </span>
                            {','}
                            <span className="font-medium text-base text-gray-400">
                                {hit['location.country']}
                            </span>
                        </div>)
                }
            </div>
        </div >
    );
};

