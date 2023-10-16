import conf from "../conf/conf"
import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client()
    account

    constructor() {
        this.client.setEndpoint(conf.appWriteEndUrl).setProject(conf.appWriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            (userAccount) ? this.login({email, password}) : userAccount
        } catch (error) {
            console.log(`Error in createAccount ${error}`)
        }
    }

    async login({ email, password }) {
        try {
            return this.account.createEmailSession(email, password)
        } catch (error) {
            console.log(`Error in Login ${error}`)
        }
    }

    async currentUser() {
        try {
            return this.account.get()
        } catch (error) {
            console.log(`Error in CurrentUser ${error}`)
        }
        return null
    }

    async logout() {
        try {
            return this.account.deleteSessions()
        } catch (error) {
            console.log(`Error in logout ${error}`)
        }
        return null
    }

}

const authService = new AuthService()
export default authService