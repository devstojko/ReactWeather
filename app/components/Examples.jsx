var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h5>Examples component!!!</h5>
//     );
//   }
// });


// Stateless functional component
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Smederevo'>Smederevo</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
