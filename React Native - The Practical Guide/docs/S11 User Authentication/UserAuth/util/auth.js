import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export async function createUser(email, password) {
    const response = await axios.post(process.env.EXPO_PUBLIC_API_URL + API_KEY, {
        email: email,
        password: password,
        returnSecureToken: true,
    });
}
