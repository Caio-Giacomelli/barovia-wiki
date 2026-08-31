// ===== FIREBASE CONFIG - CURSE OF STRAHD (BAROVIA) =====
// Usa o SDK "compat" carregado via CDN no index.html
// (firebase-app-compat.js + firebase-firestore-compat.js), que expoe
// o objeto global `firebase`. NAO usar sintaxe de modulo (import) aqui.

const firebaseConfig = {
    apiKey: "AIzaSyDsbyAHIVb9ccZY9ZwT2Zc93wEHI92A1vU",
    authDomain: "barovia-wiki.firebaseapp.com",
    projectId: "barovia-wiki",
    storageBucket: "barovia-wiki.firebasestorage.app",
    messagingSenderId: "319336145382",
    appId: "1:319336145382:web:f9c21513535135e9ee3627",
    measurementId: "G-9DS94W54MN"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
