/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: "https://casting-agency-backend.herokuapp.com/", // the running FLASK api server url
  auth0: {
    url: "data2free", // the auth0 domain prefix
    audience: "casting", // the audience set for the auth0 app
    clientId: "9VYAbSI2oMKlH3430Y52JE66t2Wa8BwL", // the client id generated for the auth0 app
    callbackURL: "https://casting-agency-backend.herokuapp.com/" // the base url of the running ionic application.
  }
};
