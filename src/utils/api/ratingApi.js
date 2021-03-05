import axios from "axios";

export const getRatingOptions = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/rating/ratingOptions`);
    return response.data;
}

export const getRating = async (ratingFilter) => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/rating?filter=${ratingFilter}`);
    return response.data;
}