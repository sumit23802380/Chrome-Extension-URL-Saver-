
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
    // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyC6pHl8CsBEUa6sjNDreoOY4wFR_Q-x59Q",
        authDomain: "extensions-8a3c6.firebaseapp.com",
        projectId: "extensions-8a3c6",
        storageBucket: "extensions-8a3c6.appspot.com",
        messagingSenderId: "549985618601",
        appId: "1:549985618601:web:33bc4845b117ee182837b8",
        measurementId: "G-ZVWXHBS7GZ"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    import{getDatabase,  ref,set,child,update,remove}
    from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";

    const db = getDatabase();

    // POPUPJS
    const btn  = document.querySelector('.btn');

    function addUrl(url,title){
        set(ref(db, "Links/"+url),{
            urlValue : url,
            urlTitle : title
        })
        .then(()=>{
            alert("saved succesfully");
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    // function addLink(url,title){
    //     const list = document.querySelector('.list');
    //     const row = document.createElement('li');
    //     row.innerHTML = `<a href=${url}>${title}</a>`;
    //     list.appendChild(row);
    // }
    btn.addEventListener('click',addUrl("google.co.in" , "Google"));