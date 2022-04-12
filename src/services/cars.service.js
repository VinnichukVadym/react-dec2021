import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const carsService = {
    getAll:()=>axiosService.get(urls.cars),
    getById:(id)=>axiosService.get(`${urls.cars}/${id}`),
    create:(car)=>axiosService.post(urls.cars, car),
    updateById:(id,newCar)=>axiosService.put(`${urls.cars}/${id}`,newCar),
    deleteById:(id)=>axiosService.post(`${urls.cars}/${id}`),
};