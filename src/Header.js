import React from "react";
import "./style.css";

class Header extends React.Component {
  constructor() {
    super();

    this.state = { clock: new Date() };
  }
  componentDidMount() {
    this.update = setInterval(() => {
      this.setState({ clock: new Date() });
    }, 1 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.update);
  }
  render() {
    const { clock } = this.state;
    return (
      <div>
        <div className="main_heading">
          <div>
            <h1 className="main_address">Vehkapolku (V6104)</h1>
          </div>
          <div className="header_time">
            <p>
              <i className="fas fa-clock icon_clock"></i>
              {clock.toLocaleTimeString("fi")}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
