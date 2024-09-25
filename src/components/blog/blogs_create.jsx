import axios from 'axios';

const API_URL = 'http://localhost:8081/api'; 

export const createBlog = async (blogCard) => {
    try {
        const response = await axios.post(`${API_URL}/b2b`, blogCard);
        return response.data; // Return the BlogResponse
    } catch (error) {
        console.error('Error creating blog', error);
        throw error;
    }
};