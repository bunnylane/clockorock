import { useEffect, useState } from "react"
import { CircularProgress } from "@mui/material";
import { ListItem } from "./ListItem";
import { ListItems } from "./ListItems";

export interface Listings {
    id : string
    description : string
}


export default function ListMarket() {

    const [listings, setListings] = useState([])
    const[error, setError] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/market", {
            mode: 'cors'
        })
        .then(res => res.json())
        .then(res => setListings(res))
        .catch(err => setError(err))
    }, [])

    return <>
        {listings.length > 0 ? <ListItems Lists={listings}/> : <CircularProgress /> }
    </>
}