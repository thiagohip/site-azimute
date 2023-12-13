import { useEffect, useState } from "react";
import api from "../../api";


export const usePosts = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async() => {
        try{
            const response = await api.get("/read");
            const data = response.data;
            console.log(data)
            setPosts(data)
        }catch(error){
            console.log(error);
        }
    }

        useEffect(() => {
            getPosts()
        }, [])

    console.log(posts)
    return posts;

}




