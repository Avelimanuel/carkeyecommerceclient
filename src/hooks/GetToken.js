import { useCookies } from "react-cookie";
import{ useState } from 'react'

export const GetToken = () =>{
    const [cookies,_] = useState(["access_token"])

    return {headers:{authorization:cookies.access_token}}
}