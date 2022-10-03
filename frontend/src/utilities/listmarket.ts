interface Listings {
    id : string
    message : string
}

export default async function GetMarket() : Promise<Listings[]> {
    return await fetch("http://localhost:5000/market")
        .then(res => res.json())
        .then(res => {
            return res as Listings[]
        })
}
