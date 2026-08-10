import axios from "axios";

const PORT1 = "192.168.67.138:3000";
const PORT2 = "192.168.0.171:3000"
const api = axios.create({
    baseURL: `http://${PORT1}`,
    timeout: 5000,
});

export default api