import nextConnect from "next-connect";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

let filename = uuidv4() + "-" + new Date().getTime();
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads", // destination folder
    filename: (req, file, cb) => cb(null, getFileName(file)),
  }),
});

const getFileName = (file) => {console.log(file);
  filename +=
      "." +
      file.originalname.substring(
          file.originalname.lastIndexOf(".") + 1,
          file.originalname.length
      );
  return filename;
};

const apiRoute = nextConnect({
  onError(error, req, res) {
    return res.status(500).send({
      error: true,
      msg: "server error",
    })
  },
  onNoMatch(req, res) {
    return res.status(405).send({
      error: true,
      msg: "Not allowed",
    })
  },
});

apiRoute.use(upload.array("file")); // attribute name you are sending the file by

apiRoute.post((req, res) => {
  console.log(req.body.image)
  return res.status(200).send({
    error: false,
    msg: "Successfully Uploaded",
    data: `/uploads/${filename}`
  })

});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};