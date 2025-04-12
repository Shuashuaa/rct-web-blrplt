import { useLoaderData } from "react-router";

export async function countryLoader(){
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    console.log(data, 'country data')
    return data;
}

export default function Countries(){
    const loadedData = useLoaderData() as any[] || [];
    console.log(loadedData, 'loaded data')
    return (
        <>
            artifice!
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                {
                    loadedData.map((country) => (
                        <div className="border border-slate-400">
                            <img className="w-full" src={country.flags.svg} alt="adsad" />
                            <p>{country.name.common}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}