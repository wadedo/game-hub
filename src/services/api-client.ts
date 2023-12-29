import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '75e1a0f5f8894716826932f10d5ea628'
    }
})
