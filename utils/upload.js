import axios from "axios";

const uploadImage = async (file)=>{
    const data = new FormData()
    data.append('file', file)

    const res = await axios.post('/api/pagefile', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return res.data.data;
}

export default uploadImage;