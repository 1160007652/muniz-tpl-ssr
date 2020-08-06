import React from "react";
import { Row, Col } from "antd";

import "./index.less";

class FunctionalArea extends React.Component {
  render() {
    return (
      <div className="findora-functional-area">
        <div className="functional-area-box">
          <div className="title">On the Findora Testnet, you can:</div>
          <ul className="functional-list">
            <li>
              <div className="photo"></div>
              <div className="title">Create confidential assets</div>
            </li>
            <li>
              <div className="photo"></div>
              <div className="title">Create your own digital wallet</div>
            </li>
            <li>
              <div className="photo"></div>
              <div className="title">
                Send confidential transactions and assets
              </div>
            </li>
            <li>
              <div className="photo"></div>
              <div className="title">
                Create privacy-preserving financial applications
              </div>
            </li>
          </ul>
          <div className="more">
            <a href="#">{"And much more>"}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default FunctionalArea;
