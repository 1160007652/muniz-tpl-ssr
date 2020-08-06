import React from "react";
import PropTypes from "prop-types";
import intl from "react-intl-universal";
import SwitchLanguage from "_containers/SwicthLanguage";

import "./index.less";

class Header extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className="findora-header">
        <div className="header-box">
          <div className="logo">Findora</div>
          <ul className="menu">
            <li>{intl.get("menu")}</li>
            <li>Learn</li>
            <li>Developers</li>
            <li>Enterprise</li>
            <li>About</li>
            {/* <li>
              <SwitchLanguage />
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
