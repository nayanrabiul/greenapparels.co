import axios from "axios";

export const uploadImageImgbb = async (img) => {

    try {
        let body = new FormData()
        body.set('key', process.env.NEXT_PUBLIC_IKEY)
        body.append('image', img)

        let url = `https://api.imgbb.com/1/upload`;

        const res = await axios.post(url, body, {})

        if (res.data.success) {
            return res.data.data.image.url
        }
    } catch
        (e) {
        console.log(e.message)
    }
}

