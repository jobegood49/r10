import React, { Component } from "react";
import { View, Text } from "react-native";
import About from "./About";
import gql from "graphql-tag";
import { Query } from "react-apollo";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "About"
  };

  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              id
              title
              description
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          console.log(data);

          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;

          // return data.rates.map(({ currency, rate }) => (
          //   <div key={currency}>
          //     <p>{`${currency}: ${rate}`}</p>
          //   </div>
          // ));
          return <About />;
        }}
      </Query>
    );
  }
}

// import React, { Component } from "react";
// import About from "./About";
// import { Query } from "react-apollo";
// import gql from "graphql-tag";
// import { Text, View } from "react-native";

// export default class AboutContainer extends Component {
//   static navigationOptions = {
//     title: 'About',
//   };
//   render() {
//     return (
//       <Query
//         query={gql`
//           {
//             allConducts {
//               id
//               title
//               description
//             }
//           }
//         `}
//       >
//         {({ loading, error, data }) => {
//           if (loading) return <Text>Loading...</Text>;
//           if (error) return <Text>Error :(</Text>;
//           console.log("AbContainer",data);
//           return <About data={data} />;
//         }}
//       </Query>
//     );
//   }
// }
