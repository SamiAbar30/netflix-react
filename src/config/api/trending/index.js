import axios from "axios"
import requests from "../links";
export default function getAllTranding(){
return axios.get(requests.fetchAllTrending);
}