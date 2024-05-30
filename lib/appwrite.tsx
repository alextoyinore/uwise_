import { Client, Account, ID } from 'appwrite';

const client = new Client()
client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECTID!);

export const account = new Account(client);
export { ID } from 'appwrite';


