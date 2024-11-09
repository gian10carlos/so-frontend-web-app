import axios from "axios";

export class ApiIpPublic {
    public async get() {
        const ip = await axios.get('https://api.ipify.org?format=json');
        return ip;
    }
}