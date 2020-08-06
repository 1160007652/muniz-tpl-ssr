import React from "react";

import "./index.less";

class Footer extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className="findora-footer">
        <div className="footer-box">
          <div className="logo">Findora</div>
          <div className="menu-list">
            <ul className="menu">
              <li>General</li>
              <li>Learn</li>
              <li>Developers</li>
              <li>Career</li>
              <li>Our Team</li>
            </ul>
            <ul className="menu">
              <li>Technology</li>
              <li>Developer</li>
              <li>Whitepaper</li>
            </ul>
          </div>

          <dl className="community">
            <dt>Community</dt>
            <dd>
              <div className="community-icon">A</div>
            </dd>
            <dd>
              <div className="community-icon">B</div>
            </dd>
            <dd>
              <div className="community-icon">C</div>
            </dd>
            <dd>
              <div className="community-icon">D</div>
            </dd>
            <dd>
              <div className="community-icon">E</div>
            </dd>
          </dl>
        </div>
      </div>
    );
  }
}
export default Footer;
