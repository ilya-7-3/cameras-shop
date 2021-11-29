import { encode } from "base-64";

export default class DataService{
    async getCameras (filter,min=0,max=499000){
        let url = `https://getlens-master.stage.dev.family/api/pages/obektivy?${filter}price[min]=${min}&price[max]=${max}`;
        let username = 'admin';
        let password = 'Wj3g4W';
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + encode(username + ":" + password));
        return await fetch(url,{
            "method":"GET",
            "headers":headers
        })
    }
}