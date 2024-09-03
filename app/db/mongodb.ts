import { MongoClient, MongoClientOptions } from "mongodb";

const options: MongoClientOptions = {};

// Environment variables for MongoDB URIs
const uri =
  process.env.NODE_ENV === "production"
    ? (process.env.MONGODB_PRODUCTION_URI as string)
    : (process.env.MONGODB_ADMIN_URI as string);

// Check if URIs are available
if (!uri) {
  throw new Error("Please add Mongo URI to .env");
}

// Declare a global variable for the MongoClient promise
declare global {
  // Allow var keyword for global declaration
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient>;

// In development mode, use a global variable to preserve the MongoClient instance
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new MongoClient instance without global variables
  const client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export the clientPromise directly
export default clientPromise;
