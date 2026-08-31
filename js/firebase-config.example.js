// ===== FIREBASE CONFIG (MODELO) - CURSE OF STRAHD =====
// Este e um arquivo de EXEMPLO. Copie-o para "firebase-config.js" e
// substitua os valores pelos dados do SEU projeto Firebase.
//
// Como obter:
// 1. Acesse https://console.firebase.google.com
// 2. Crie um novo projeto (ex: "barovia-wiki")
// 3. Ative o Firestore Database (modo producao)
// 4. Em Configuracoes do projeto > Seus apps > App da Web, registre um app
// 5. Copie o objeto firebaseConfig gerado e cole abaixo
// 6. Configure as regras do Firestore (veja o README/passo a passo)

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
