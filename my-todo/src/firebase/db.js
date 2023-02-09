import firebase from 'firebase/app'; // 파이어베이스 기능 불러오기
import 'firebase/firestore'; // 파이어베이스의 파이어스토어 기능 불러오기

const firebaseConfig = {
    apiKey: "AIzaSyCGw1-1NjWEPnWGzY9UXa1OlPf5iSybgrM",
    authDomain: "my-todo1-7226d.firebaseapp.com",
    projectId: "my-todo1-7226d",
    storageBucket: "my-todo1-7226d.appspot.com",
    messagingSenderId: "220397850646",
    appId: "1:220397850646:web:bc2dea6df4d16ddd262537"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();