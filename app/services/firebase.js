import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
        apiKey: "AIzaSyDlXm-Aq3nMDLSBix7RuJiHhctOBNoT3YI",
        authDomain: "thirtydays-a7330.firebaseapp.com",
        databaseURL: "https://thirtydays-a7330.firebaseio.com",
        projectId: "thirtydays-a7330",
    };

export const ThirtyDaysFirebase = firebase.initializeApp(firebaseConfig);
export const ThirtyDaysFireDB = firebase.database();