// ===== FIREBASE CONFIG - CURSE OF STRAHD =====
// IMPORTANTE: Crie um novo projeto Firebase para esta campanha
// 1. Vá em https://console.firebase.google.com
// 2. Crie um novo projeto (ex: "barovia-wiki")
// 3. Ative o Firestore Database
// 4. Nas configurações do projeto, copie os dados abaixo
// 5. Configure as regras do Firestore (permitir leitura/escrita)

const firebaseConfig = {
    apiKey: "COLE_SUA_API_KEY_AQUI",
    authDomain: "SEU-PROJETO.firebaseapp.com",
    projectId: "SEU-PROJETO",
    storageBucket: "SEU-PROJETO.firebasestorage.app",
    messagingSenderId: "000000000000",
    appId: "1:000000000000:web:0000000000000000"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
