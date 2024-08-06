import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

async function authenticate(mode, email, password) {
    const url = `${process.env.EXPO_PUBLIC_API_URL}${mode}?key=${API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
    });

    const token = response.data.idToken;

    return token;
}

export function createUser(email, password) {
    return authenticate("signUp", email, password);
}

export function login(email, password) {
    return authenticate("signInWithPassword", email, password);
}
