import { Client, Account, ID } from "appwrite";
import { createSessionClient } from "./appwrite_server";

const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECTID!);

export const account = new Account(client);
export { ID } from "appwrite";



export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}

