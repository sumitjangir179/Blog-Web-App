const conf = {
    appWriteEndUrl : String(import.meta.env.VITE_APPWRITE_API_ENDPOINT),
    appWriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteDatabaseCollectionId : String(import.meta.env.VITE_APPWRITE_DATABASE_COLLECTION_ID),
    appWriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf