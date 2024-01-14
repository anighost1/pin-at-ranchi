
import http from "./http";

const getItemsWithImg = (page = 1, limit = 10) => {
    return http.get(`/api/item/with-image?page=${page}&limit=${limit}`)
}

const getItemByIdWithImg = (id) => {
    return http.get(`/api/item/with-image/${id}`)
}



const configServ = {
    getItemsWithImg,
    getItemByIdWithImg,
}

export default configServ;