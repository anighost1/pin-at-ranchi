
import http from "./http";

const getItemsWithImg = (page = 1, limit = 10, search='') => {
    return http.get(`/api/item/with-image?page=${page}&limit=${limit}&search=${search}`)
}

const getItemByIdWithImg = (id) => {
    return http.get(`/api/item/with-image/${id}`)
}



const configServ = {
    getItemsWithImg,
    getItemByIdWithImg,
}

export default configServ;