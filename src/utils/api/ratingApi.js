import axios from "axios";

export const getRating = async () => {
    const response = await axios.get('http://localhost:3001/api/rating');
    return response.data;
}