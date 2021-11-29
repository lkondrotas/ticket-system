// const { MongoClient} = require('mongodb');
// const url = process.env.DB_Connect;
// const client = new MongoClient(url);


// const dbName = "myFirstDatabase";

// async function run() {
//     try {
//         await client.connect();
//         console.log("Uploaded to DB");
//         const db = client.db(dbName);

//         const col = db.collection('merchant');

//         let merchantDocument = {
//             "customerName": "PIZZA PLACE",
//             "merchantId": 0021463571,
//             "serialId": 78945,
//             "email": "lluigi@pizzaplace.com",
//             "phoneNumber": 8001001234,
//             "address": "2202 N IRVING ST, ALLENTOWN, PA, 18109"
//         }
//         const p = await col.insertOne(merchantDocument);
//         const myDoc = await col.findOne();
//         console.log(myDoc);

//     } catch (err) {
//         console.log(err.stack);
//     } finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);