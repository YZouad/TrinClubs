import { MongoClient} from 'mongodb';
const connectionStringDB = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.ezfyv5a.mongodb.net/react-dev?retryWrites=true&w=majority`
 console.log(connectionStringDB);


export async function connectDatabase() {
    const client = await MongoClient.connect(connectionStringDB);
    //const db = client.db(process.env.mongodb_cluster); 
    return client;
}

export async function insertDocument(client, collection, document) {

    const db = client.db(process.env.mongodb_cluster); 
    const result = await db.collection(collection).insertOne(document);
    return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
    const db = client.db(process.env.mongodb_cluster); 
    const documents = await db.collection(collection).
    find(filter)
    .sort(sort)
    .toArray();
    console.log('documents',documents);
    return documents;
}