const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "temp/" });

app.post("/uploadVideo", upload.single("video"), (req, res) => {
    // Process the uploaded video here, e.g., save it to cloud storage
    // You'll need to use a cloud storage service like AWS S3, Google Cloud Storage, or Azure Blob Storage to store the video online
    // Refer to the cloud storage service's documentation on how to upload files from your Node.js server

    // Once the video is successfully uploaded to the cloud storage, you can delete the temporary file from the server
    // fs.unlinkSync(req.file.path);

    res.send("Video uploaded successfully.");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
