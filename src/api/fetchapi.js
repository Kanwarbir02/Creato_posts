import axios from "axios";

export const fecthData = async () => {
    try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchSpecific = async () => {
    try {
        // const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
        const {data} = await(await axios.get(`https://jsonplaceholder.typicode.com/posts?id=1`));
        // console.log("majsjjsj" + data);
        return data;
    } catch (error) {
        console.log(error);
    }
}