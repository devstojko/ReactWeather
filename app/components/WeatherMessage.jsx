var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//
//     return(
//       <p>It's it {temp} in {location}.</p>
//     );
//   }
// });

// Stateless functional component
// var WeatherMessage = (props) => {
//   var {temp, location} = props;
//
//   return(
//     <p>It's it {temp} in {location}.</p>
//   )
// }

// Destructuring syntax
var WeatherMessage = ({temp, location}) => {
  return(
    <p>It's it {temp} in {location}.</p>
  )
}

module.exports = WeatherMessage;
