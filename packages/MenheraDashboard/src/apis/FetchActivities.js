import axios from "axios"

export default axios.create({
    baseURL: `http://${process.env.IP ?? 'localhost'}:25156/api/activity`
});