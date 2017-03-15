var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h5>About page</h5>
//     );
//   }
// });

// Stateless functional component
var About = (props) => {
  return (
    <div>
      <h5>About page</h5>
      <p>Welcome to the About page!!!</p>
    </div>
  );
};

module.exports = About;
