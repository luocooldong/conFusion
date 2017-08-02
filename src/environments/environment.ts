// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCZ1VKLbtoMC0a1LD9kxnEXvmtmcz5Z1ak",
    authDomain: "gengyudonga.firebaseapp.com",
    databaseURL: "https://gengyudonga.firebaseio.com",
    projectId: "gengyudonga",
    storageBucket: "gengyudonga.appspot.com",
    messagingSenderId: "273553204309"
  }
};
