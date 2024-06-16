import axios from 'axios';

const getAllPlayers = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/graphql', {
      query: `
        query GetAllPlayers {
          players {
            id
            name
            wins
            avatarUrl
          }
        }
      `
    });

    return response.data.data.players; 
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  }
};

export default getAllPlayers;