import axios from 'axios';

const API_URL = 'http://localhost:8081/blog'; // Replace with your backend URL

export const getAllBlogs = async (page = 0, size = 10) => {
    try {
        const response = await axios.get(`${API_URL}/b2b/all`, {
            params: { page, size }
        });
        return response.data; // Return the page of blogs
    } catch (error) {
        console.error('Error fetching blogs', error);
        throw error;
    }
};