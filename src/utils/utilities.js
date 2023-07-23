const BASE_URL=process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN=process.env.REACT_APP_ACCESS_TOKEN;


export const getMovies = async () =>{
    try{
        const response = await fetch(`${BASE_URL}/3/movie/popular`,{
            method:'GET',
            headers:{
                Authorization:`Bearer ${ACCESS_TOKEN}`
            }
        })
        
        const results = await response.json();
        return results;
    }
    catch(error){
        return error.message
    }

}