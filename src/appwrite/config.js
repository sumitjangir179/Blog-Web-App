import conf from "../conf/conf"
import { Client, ID, Databases, Storage, Query } from "appwrite"

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appWriteEndUrl).setProject(conf.appWriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(conf.appWriteDatabaseId, conf.appWriteDatabaseCollectionId, slug, { title, content, featuredImage, status, userId })
        } catch (error) {
            console.log(`Error in createPost: ${error.message}`)
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(conf.appWriteDatabaseId, conf.appWriteDatabaseCollectionId, slug, { title, content, featuredImage, status })

        } catch (error) {
            console.log(`Error in updatePost: ${error}`)
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.appWriteDatabaseId, conf.appWriteDatabaseCollectionId, slug)
            return true
        } catch (error) {
            console.log(`Error in deletePost: ${error}`)
            return false;
        }
    }

    async getOnePost(slug) {
        try {
            return await this.databases.getDocument(conf.appWriteDatabaseId, conf.appWriteDatabaseCollectionId, slug)
        } catch (error) {
            console.log(`Error in getOnePost: ${error}`)
            return false;
        }
    }

    async getAllPost(quries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(conf.appWriteDatabaseId, conf.appWriteDatabaseCollectionId, quries)
        } catch (error) {
            console.log(`Error in getOnePost: ${error}`)
            return false;
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.appWriteBucketId, ID.unique(), file)
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appWriteBucketId, fileId)
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(conf.appWriteBucketId, fileId)
    }
}

const service = new Service()
export default service