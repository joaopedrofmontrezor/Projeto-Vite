-TodoList com Autenticação (React + Vite + Firebase)

-Este projeto é uma aplicação web simples de autenticação de usuários utilizando React, Vite e Firebase Authentication.

-O objetivo é permitir que usuários possam:

✅ Criar sua conta;
✅ Fazer login;
✅ Visualizar seu e-mail autenticado e cadastrado;
✅ Sair da conta;

🚀 Tecnologias utilizadas

- React
- Vite
- Firebase Authentication
- JavaScript (ES6+)
- CSS

📂 Estrutura do projeto
vite-projeto/
├── node_modules/            
├── public/                   
├── src/
│   ├── assets/               
│   ├── Components/
│   │   ├── AuthForm.jsx
│   │   ├── DashBoard.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── auth.js
│   ├── firebase.js
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json         
├── package.json
├── README.md
└── vite.config.js

🔧 Funcionalidades

✅ Cadastro de usuário com e-mail e senha;
✅ Login de usuário;
✅ Logout;
✅ Monitoramento de autenticação em tempo real (onAuthStateChanged);
✅ Interface dinâmica (login/cadastro/Logout);
✅ Feedback sobre seu login;

🔥 Configuração do Firebase

-Acesse o site do Firebase:  https://console.firebase.google.com/

-Crie um projeto;

-Ative o método de autenticação:

Email/Senha
Copie sua configuração e adicione em:

// src/Components/firebase.jsx

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO",
  projectId: "SEU_ID",
  storageBucket: "SEU_BUCKET",
  messagingSenderId: "SEU_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

▶️ Como rodar o projeto:

1. Clone o repositório com a URL:
https://github.com/joaopedrofmontrezor/Projeto-Vite
e abra a pasta no VSCODE.
2. Acesse a pasta
cd vite-projeto
3. Instale as dependências
npm install
4. Instale o Firebase
npm install firebase
5. Rode o projeto
npm run dev


