import { MongoClient, MongoClientOptions } from "mongodb";

const options: MongoClientOptions = {};

let uri: string = process.env.MONGODB_URI as string;
let adminUri: string = process.env.MONGODB_ADMIN_URI as string;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

export async function getMongoClient(
  useAdmin: boolean = false
): Promise<MongoClient> {
  if (!process.env.MONGODB_URI && !process.env.MONGODB_ADMIN_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
  }

  // In development mode, use a global variable to ensure the client is shared
  // across hot-reloads of the module (this is specifically for Next.js)
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      client = new MongoClient(adminUri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    if (!client) {
      const clientURI = useAdmin ? adminUri : uri;
      client = new MongoClient(clientURI);
      await client.connect();
    }
  }

  return client;
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to ensure the client is shared
  // across hot-reloads of the module (this is specifically for Next.js)
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
