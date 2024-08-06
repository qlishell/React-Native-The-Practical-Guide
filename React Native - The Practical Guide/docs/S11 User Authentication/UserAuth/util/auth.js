import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

async function authenticate(mode, email, password) {
    const url = `${process.env.EXPO_PUBLIC_API_URL}${mode}?key=${API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
    });

    console.log(response.data);
}

export async function createUser(email, password) {
    await authenticate("signUp", email, password);
}

export async function login(email, password) {
    await authenticate("signInWithPassword", email, password);
}
