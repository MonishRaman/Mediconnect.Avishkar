const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { google } = require('googleapis');
const path = require('path');
const mime = require('mime-types');
const cors = require('cors');

const app = express();
const port = 3001; // Change if needed

const apikeys = require('./apikey.json');
const SCOPE = ['https://www.googleapis.com/auth/drive.file'];

app.use(cors()); // Allow cross-origin requests

// Set up multer for file handling
const upload = multer({ dest: 'uploads/' });

// A function to authorize access to Google Drive API
async function authorize() {
  const jwtClient = new google.auth.JWT(
    apikeys.client_email,
    null,
    apikeys.private_key,
    SCOPE
  );

  await jwtClient.authorize();
  return jwtClient;
}

// A function to upload the file to Google Drive
async function uploadFile(authClient, filePath, fileName) {
  const drive = google.drive({ version: 'v3', auth: authClient });
  const mimeType = mime.lookup(filePath) || 'application/octet-stream';

  const fileMetaData = {
    name: fileName,
    parents: ['1XtDueHOYvYQ_twLofThtvzeIPaCtlofc'], // Google Drive folder ID
  };

  const media = {
    mimeType: mimeType,
    body: fs.createReadStream(filePath),
  };

  const response = await drive.files.create({
    resource: fileMetaData,
    media: media,
    fields: 'id',
  });

  return response.data;
}

// Endpoint to handle file uploads
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const authClient = await authorize();
    const file = req.file;
    const filePath = path.join(__dirname, file.path);
    const fileName = file.originalname;

    const uploadedFile = await uploadFile(authClient, filePath, fileName);

    // Clean up file from server after uploading
    fs.unlinkSync(filePath);

    res.json({ fileId: uploadedFile.id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading file');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
