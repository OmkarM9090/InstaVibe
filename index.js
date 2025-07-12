// let express = require("express");
// let cors = require("cors");
// let {MongoClient,ObjectId} =require("mongodb");
// let multer =  require("multer");
// let path = require("path");
// let fs = require("fs");


// let app = express();
// app.use(cors());             //frontend mai se data backend mai dalneke liye axios use karna padta hai like axios.post ,backend mai app.post
// app.use(express.json());
// app.use('/uploads',express.static('uploads'));
// // const url = "mongodb://0.0.0.0:27017";
// const url ="mongodb+srv://omkarmahadik180:X6vzwwKmuKW5eoLm@cluster0.3dulmto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// let storage = multer.diskStorage(
//     {
//         destination : (req,file,cb)=>cb(null,"uploads/"),
//         filename : (req,file,cb)=>cb(null,Date.now()+path.extname(file.originalname))
//     }
// )
// let recep = multer({storage});

// app.post('/upload',recep.single("file"),(req,res)=>
// {
//     let client = new MongoClient(url);        
//     client.connect();
//     let db = client.db("tinder");
//     let collec = db.collection("photos");
//     let obj = {
//         username: req.body.username,
//         caption: req.body.caption,
//         file_url: `http://localhost:3000/uploads/${req.file.filename}`,
//         file_name: req.file.filename,
//         upload_time: new Date()
//     }
//     collec.insertOne(obj)
//     .then((result)=>res.send(result))
//     .catch((error)=>res.send(error));
// }); 

// app.get('/files',(req,res)=>{
//     let client = new MongoClient(url);
//     client.connect();
//     let db = client.db("tinder");
//     let collec = db.collection("photos");
//     let username = req.query.username;
    
//     let obj = username?{username}:{}
//     collec.find(obj).toArray()
//     .then((result)=>res.send(result))
//     .catch((error)=>res.send(error));
// });

// app.delete('/delete/:id',(req,res)=>{
//     let client = new MongoClient(url);
//     client.connect();
//     let db = client.db("tinder");
//     let collec = db.collection("photos");
//     let id = req.params.id;
//     let _id = new ObjectId(id);
//     collec.findOne({_id})
//     .then((obj)=>{
//         fs.promises.unlink(`uploads/${obj.file_name}`)
//        return collec.deleteOne({_id})
//     })
    
//     .then((result)=>res.send(result))
//     .catch((error)=>res.send(error));
  
// });

// app.listen(3000,()=>console.log("Express is alive"));


// //frontend mai se data backend mai dalneke liye axios use karna padta hai like axios.post ,backend mai app.post

    // let express = require("express");
    // let cors = require("cors");
    // let { MongoClient, ObjectId } = require("mongodb");
    // let multer = require("multer");
    // let path = require("path");
    // let fs = require("fs");

    // let app = express();
    // app.use(cors());
    // app.use(express.json());

    // // Serve static files from "uploads" folder
    // app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

    // // ✅ Use correct MongoDB connection URI
    // const url = "mongodb+srv://omkarmahadik180:X6vzwwKmuKW5eoLm@cluster0.3dulmto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    // let storage = multer.diskStorage({
    //     destination: (req, file, cb) => cb(null, "uploads/"),
    //     filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
    // });
    // let recep = multer({ storage });

    // app.post('/upload', recep.single("file"), (req, res) => {
    //     let client = new MongoClient(url);
    //     client.connect().then(() => {
    //         let db = client.db("tinder");
    //         let collec = db.collection("photos");

    //         let obj = {
    //             username: req.body.username,
    //             caption: req.body.caption,
    //             file_url: `https://instavibe-3-eznv.onrender.com/uploads/${req.file.filename}`, // ✅ Updated for Render
    //             file_name: req.file.filename,
    //             upload_time: new Date()
    //         };

    //         collec.insertOne(obj)
    //             .then(result => res.send(result))
    //             .catch(error => res.status(500).send(error))
    //             .finally(() => client.close());
    //     });
    // });

    // app.get('/files', (req, res) => {
    //     let client = new MongoClient(url);
    //     client.connect().then(() => {
    //         let db = client.db("tinder");
    //         let collec = db.collection("photos");
    //         let username = req.query.username;
    //         let obj = username ? { username } : {};

    //         collec.find(obj).toArray()
    //             .then(result => res.send(result))
    //             .catch(error => res.status(500).send(error))
    //             .finally(() => client.close());
    //     });
    // });

    // app.delete('/delete/:id', (req, res) => {
    //     let client = new MongoClient(url);
    //     client.connect().then(() => {
    //         let db = client.db("tinder");
    //         let collec = db.collection("photos");
    //         let _id = new ObjectId(req.params.id);

    //         collec.findOne({ _id })
    //             .then(obj => {
    //                 return fs.promises.unlink(path.join("uploads", obj.file_name))
    //                     .then(() => collec.deleteOne({ _id }));
    //             })
    //             .then(result => res.send(result))
    //             .catch(error => res.status(500).send(error))
    //             .finally(() => client.close());
    //     });
    // });

    // // ✅ Use dynamic port for Render
    // const PORT = process.env.PORT || 3000;
    // app.listen(PORT, () => console.log(`Express running on port ${PORT}`));

// require("dotenv").config(); // ✅ Load env variables

// let express = require("express");
// let cors = require("cors");
// let { MongoClient, ObjectId } = require("mongodb");
// let multer = require("multer");
// let cloudinary = require("cloudinary").v2;
// let { CloudinaryStorage } = require("multer-storage-cloudinary");

// let app = express();
// app.use(cors(corsOptions));
// app.use(express.json());

// const corsOptions = {
//   origin: "https://instavibe-f1447.web.app", // 👈 your Firebase hosting URL
//   methods: ["GET", "POST", "DELETE"],
//   credentials: true
// };

// app.use(cors(corsOptions));


// // ✅ Cloudinary Config from .env
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_KEY,
//   api_secret: process.env.CLOUD_SECRET,
// });

// // ✅ Cloudinary Storage Setup
// let storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "instavibe_uploads",
//     allowed_formats: ["jpg", "jpeg", "png"],
//     transformation: [{ width: 800, height: 800, crop: "limit" }],
//   },
// });

// let recep = multer({ storage });

// // ✅ MongoDB URL from .env
// const url = process.env.MONGO_URL;

// // ✅ Upload route
// app.post("/upload", recep.single("file"), (req, res) => {
//   let client = new MongoClient(url);
//   client.connect().then(() => {
//     let db = client.db("tinder");
//     let collec = db.collection("photos");

//     let obj = {
//       username: req.body.username,
//       caption: req.body.caption,
//       file_url: req.file.path,        // Cloudinary file URL
//       file_name: req.file.filename,   // Public ID
//       upload_time: new Date(),
//     };

//     collec.insertOne(obj)
//       .then((result) => res.send(result))
//       .catch((error) => res.status(500).send(error))
//       .finally(() => client.close());
//   });
// });

// // ✅ Get files (optionally by username)
// app.get("/files", (req, res) => {
//   let client = new MongoClient(url);
//   client.connect().then(() => {
//     let db = client.db("tinder");
//     let collec = db.collection("photos");
//     let username = req.query.username;
//     let obj = username ? { username } : {};

//     collec.find(obj).toArray()
//       .then((result) => res.send(result))
//       .catch((error) => res.status(500).send(error))
//       .finally(() => client.close());
//   });
// });

// // ✅ Delete post (also from Cloudinary)
// app.delete("/delete/:id", (req, res) => {
//   let client = new MongoClient(url);
//   client.connect().then(() => {
//     let db = client.db("tinder");
//     let collec = db.collection("photos");
//     let _id = new ObjectId(req.params.id);

//     collec.findOne({ _id })
//       .then((obj) => {
//         return cloudinary.uploader.destroy(`instavibe_uploads/${obj.file_name}`)
//           .then(() => collec.deleteOne({ _id }));
//       })
//       .then((result) => res.send(result))
//       .catch((error) => res.status(500).send(error))
//       .finally(() => client.close());
//   });
// });

// // ✅ Dynamic port for Render or localhost
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Express running on port ${PORT}`));


let express = require("express");
let cors = require("cors");
let {MongoClient,ObjectId} =require("mongodb");
let multer =  require("multer");
let path = require("path");
let fs = require("fs");

let cloudinary = require("cloudinary").v2;
let {CloudinaryStorage} = require("multer-storage-cloudinary");

let app = express();
app.use(cors());             //frontend mai se data backend mai dalneke liye axios use karna padta hai like axios.post ,backend mai app.post
app.use(express.json());
app.use('/uploads',express.static('uploads'));
const url = "mongodb+srv://omkarmahadik180:X6vzwwKmuKW5eoLm@cluster0.3dulmto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


cloudinary.config({
  cloud_name: "dbjv8b6q9",
  api_key: "965193748116751",
  api_secret: "srTkF40H7CXIdmaqBvwqzXUlWLQ"
});
let storage = new CloudinaryStorage({cloudinary});
let recep = multer({storage});
app.post('/upload',recep.single("file"),(req,res)=>
{
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("tinder");
    let collec = db.collection("photos");
    let obj = {
        username: req.body.username,
        caption: req.body.caption,
        file_url: req.file.path, 
        file_name: req.file.filename,
        upload_time: new Date()
    }
    collec.insertOne(obj)
    .then((result)=>res.send(result))
    .catch((error)=>res.send(error));
}); 

app.get('/files',(req,res)=>{
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("tinder");
    let collec = db.collection("photos");
    let username = req.query.username;
    
    let obj = username?{username}:{}
    collec.find(obj).toArray()
    .then((result)=>res.send(result))
    .catch((error)=>res.send(error));
});

app.delete('/delete/:id',(req,res)=>{
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("tinder");
    let collec = db.collection("photos");
    let id = req.params.id;
    let _id = new ObjectId(id);
    collec.findOne({_id})
    .then((obj)=>{
        cloudinary.uploader.destroy(obj.file_name);
            
       return collec.deleteOne({_id})
    })
    
    .then((result)=>res.send(result))
    .catch((error)=>res.send(error));
  
});

app.listen(3000,()=>console.log("Express is alive"));

