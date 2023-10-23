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

const addMushroomLocation = async (location) => {

    try {
        const response = await axios.post('http://localhost:8080/api/mushroom-locations', location);
        return response.data;
    } catch (error) {
        console.error('Error while adding mushroom location ', error);
        throw error;
    }


}

export { getMushroomLocations, addMushroomLocation };
