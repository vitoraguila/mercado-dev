const config = {
  apiKey: "AIzaSyCx075De1tIMzXW4cayUeV-w0_PES8aiGM",
  authDomain: "mercadodev-ab9e0.firebaseapp.com",
  databaseURL: "https://mercadodev-ab9e0.firebaseio.com",
  projectId: "mercadodev-ab9e0",
  storageBucket: "gs://mercadodev-ab9e0.appspot.com/",
  messagingSenderId: "20704844966"
}

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const storage = app.storage()

export default base