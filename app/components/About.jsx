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
      <h1 className="page-title text-center">About page</h1>
      <p>This is a weather application build on React. I have built this for Complete React Web App Developer Course.</p>
      <p>
        Tools I used for this course:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - JavaScript Framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - API
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
