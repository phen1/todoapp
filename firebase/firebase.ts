import { initializeApp } from 'firebase/app';

const credentialss = {
    apiKey: "AIzaSyClEUEa8Vvy8BKEHCIHDuHdumPA7a4YHDo",
    authDomain: "task-project-723cc.firebaseapp.com",
    databaseURL: "https://task-project-723cc.firebaseio.com",
    projectId: "task-project-723cc",
    storageBucket: "task-project-723cc.appspot.com",
    messagingSenderId: "72751099473",
    appId: "1:72751099473:web:d11e8d12a77eda68a79270",
    measurementId: "G-1ED10QBLBK"
}

const credentials = {
    apiKey: "AIzaSyDVyikA8BS5NdD0c0kH9W6gyIUv_GaaEJI",
    authDomain: "todo-518ff.firebaseapp.com",
    projectId: "todo-518ff",
    storageBucket: "todo-518ff.appspot.com",
    messagingSenderId: "40799181432",
    appId: "1:40799181432:web:5e272530dd3aabf5b06b8d",
    measurementId: "G-234FM40QRP"
  };

const firebase = initializeApp(credentials);

export default firebase;