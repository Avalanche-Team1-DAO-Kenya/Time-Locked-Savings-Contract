import axios from 'axios';

const getUsers = async () => {
    const response = await axios.get('http://localhost:3001/users'); 
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

}
export default getUsers;