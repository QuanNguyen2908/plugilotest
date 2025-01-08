const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Static file hosting directory
app.use(express.static(path.join(__dirname, "public")));

// Route for the manifest.plist
app.get("/manifest.plist", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "manifest.plist"));
});

// Route for the .ipa file
app.get("/app.ipa", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "plugilo.ipa"));
});

// Default route to show information
app.get("/", (req, res) => {
  res.send(`
        <h1>iOS App Hosting Server</h1>
        <p>To download the app, use the following link:</p>
        <p><a href="itms-services://?action=download-manifest&url=https://plugilotest.onrender.com/manifest.plist">
            Install App
        </a></p>
    `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
