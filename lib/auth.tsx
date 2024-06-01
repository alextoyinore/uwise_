// lib/auth.ts
import { redirect } from "next/navigation";
import { account } from "./appwrite";

export async function register(email: string, password: string, name: string) {
  try {
    const user = await account.create("unique()", email, password, name);
    login(email, password);
    // return user;
    // console.log(user);
  } catch (error) {
    throw error;
  }
}

// lib/auth.ts
export async function login(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    // console.log(session);
    // return session;
    redirect('/')
  } catch (error) {
    throw error;
  }
}

// lib/auth.ts
export async function logout() {
  try {
    await account.deleteSession("current");
  } catch (error) {
    throw error;
  }
}

export async function verifyAccountRoute() {
  try {
    await account.createVerification("/verify");
  } catch (error) {
    throw error;
  }
}

export async function verifyAccount() {
  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get("secret");
  const userId = urlParams.get("userId");
  try {
    await account.updateVerification(userId!, secret!);
  } catch (error) {
    throw error;
  }
}

export async function passwordRecoveryRoute(
  email: string,
  redirectURL: string
) {
  try {
    await account.createRecovery(email, redirectURL);
  } catch (error) {
    throw error;
  }
}

export async function recoverPassword(
  userId: string,
  secret: string,
  password: string
) {
  try {
    await account.updateRecovery(userId, secret, password);
  } catch (error) {
    throw error;
  }
}
