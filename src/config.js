import Axios from "axios";

const basePath = "https://find-bedz.herokuapp.com/v1/";
// const basePath = "http://192.168.11.216:5000/v1/"

const SocketPath = "wss://find-bedz.herokuapp.com/";
// const SocketPath = "ws://192.168.11.216:5000/"

Axios.defaults.baseURL = basePath;
Axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

const axios = Axios;

const MapKey = "AIzaSyC_LWPOTamnTLKR0IVa5pX_w2Zxo9hE0Sw";

export { axios, basePath, MapKey, SocketPath };
