import axios from 'axios';

const API_BASE_URL = 'http://localhost:3009'; // Replace with your API base URL

const apiService = axios.create({
    baseURL: API_BASE_URL,
});

export const fetchSomeData = async () => {
    try {
        const response = await apiService.get();
        return response.data;
    } catch (error) {
        throw error;
    }
};
