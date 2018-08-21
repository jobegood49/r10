/** @format */

import { AppRegistry } from "react-native";
import App from "./js/App";
import { name as appName } from "./app.json";




// client
//   .query({
//     query: gql`
//       {
//         allConducts {
//           description
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

AppRegistry.registerComponent(appName, () => App);
