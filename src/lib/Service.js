import axios from 'axios';

const Service = {
    getData: (url) => (
        axios.get(url)
    )
};

export default Service;
