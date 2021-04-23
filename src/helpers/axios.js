import axios from 'axios';

const customAxios = axios.create({baseURL: 'https://automated-timetable.herokuapp.com'});

export default customAxios;