import axios from "axios";

export class ProductDataService{
    getAll(source){
        return axios.get('https://fakestoreapi.com/products');
    }
}