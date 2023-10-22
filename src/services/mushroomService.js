import axios from 'axios';

const getMushroomLocations = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/mushroom-locations');
        return response.data;
    } catch (error) {
        console.error('Error fetching mushroom locations', error);
        // throw error;
    }
}

export { getMushroomLocations };
