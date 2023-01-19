

import {axiosConfig} from "../../../axios/axiosConfig";
import requests from "../../links";

export default function getListOfTvShow(){
return axiosConfig.get(requests.fetchNetflixOriginals);
}
