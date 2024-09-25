import axios from 'axios';

const API_URL = 'http://localhost:8081/api'; // Replace with your backend URL

export const deleteBlogById = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${id}`);
        return response.data; // Return the response message (Blog deleted successfully)
    } catch (error) {
        console.error('Error deleting blog', error);
        throw error;
    }
};