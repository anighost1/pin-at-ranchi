import axios from "axios";
import http from "./http";
import { appServiceName } from "./http";

const getItemsWithImg = (page = 1, limit = 10) => {
    return http.get(`/api/item/with-image?page=${page}&limit=${limit}`)
}




const configServ = {
    getItemsWithImg,
}

export default configServ;