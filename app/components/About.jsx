var React = require('react');

var About = (props) => {
  return(
    <div>
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>
          This is a weather application built on React. I have built this for complete react web app dev course.
        </p>
        <p>
          Here are some of the tools I used
        </p>
        <ul>
          <li>
              <a href="https://facebook.github.io/react/">React</a> - This was the JavaScript framework used.
          </li>
          <li>
              <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
          </li>
        </ul>
      </div>
      <div>
      <ul className="accordion" data-accordion>
        <li className="accordion-item is-active" data-accordion-item>
          <a href="#panel1" className="accordion-title">About my stuff</a>
          <div id="panel1" className="accordion-content" data-tab-content>
            Take a look at my stuff.
          </div>
        </li>
        <li className="accordion-item" data-accordion-item>
          <a href="#panel2" className="accordion-title">San Francisco</a>
          <div id="panel2" className="accordion-content" data-tab-content>
            This is where I live.
          </div>
        </li>
        <li className="accordion-item" data-accordion-item>
          <a href="#panel3" className="accordion-title">Richmond, VA</a>
          <div id="panel3" className="accordion-content" data-tab-content>
            This is where I am from.
          </div>
        </li>
        <li className="accordion-item" data-accordion-item>
          <a href="#panel4" className="accordion-title">Farmington, MI</a>
          <div id="panel4" className="accordion-content" data-tab-content>
            This is Alex is from.
          </div>
        </li>
      </ul>
  </div>
</div>
)
};

module.exports = About;
