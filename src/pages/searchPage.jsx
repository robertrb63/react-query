import { useEffect } from "react"

export default function searchPage({ routeParams }) {
    useEffect(()=>{
        Document.title = `Has Buscado ${routeParams.query}`
    },[routeParams.query])

    return(
        <h1>ESTAS BUSCANDO CON QUERY A :{routeParams.query }</h1>
    )
}