// import something here
import Vue from 'vue'
import axios from 'axios'

const api = axios.create({baseURL: process.env.API});

Vue.prototype.$api = api;

export { api }

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async (/* { app, router, Vue ... } */) => {
  // something to do
}
