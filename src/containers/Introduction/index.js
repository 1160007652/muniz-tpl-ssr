import React from "react";

import "./index.less";

class Introduction extends React.Component {
  render() {
    return (
      <div className="findora-introduction">
        <div className="introduction-box">
          <div className="title">Getting started</div>
          {/* 第一块 */}
          <div className="introduction-item">
            <div className="photo"></div>
            <div className="desc mr-40">
              <div className="desc-title">Create a Findora Wallet</div>
              <div className="desc-info">
                The Wallet Application provides a user-friendly web interface
                and enables users to perform basic transactions, including asset
                definition, issuance, and transfers. The wallet stores the
                user's assets, transactions, and private information.
              </div>
              <div className="findora-button">
                <a href="#">Install</a>
              </div>
            </div>
          </div>
          {/* 第二块 */}
          <div className="introduction-item">
            <div className="desc">
              <div className="desc-title">Build Financial Applications</div>
              <div className="desc-info">
                Using the JavaScript library, developers can access the
                underlying RESTful interface and build privacy-preserving
                applications that run over the Findora ledger.
              </div>
              <div className="findora-button">
                {" "}
                <a href="#">Download</a>
              </div>
            </div>
            <div className="photo"></div>
          </div>

          {/* 第三块 */}
          <div className="introduction-item mb-200">
            <div className="photo"></div>
            <div className="desc mr-40">
              <div className="desc-title">
                Interact with the Command-line tool
              </div>
              <div className="desc-info">
                Findora’s more advanced features can be accessed using the
                command-line tool, including policies and selectively
                disclosable user identity/credentials. The command line can also
                be used to request information from the query server or
                validator logs.
              </div>
              <div className="findora-button">
                <a href="#">Install</a>
              </div>
            </div>
          </div>
          {/* 结尾 */}
        </div>
        <div className="findora-document">
          <div className="introduction-box last-item">
            {/* 第四块 */}
            <div className="introduction-item ">
              <div className="desc">
                <div className="desc-title">Ready to get involved?</div>
                <div className="desc-info">
                  For more in depth information about the Findora testnet,
                  please read the official documentation.
                </div>
                <div className="findora-button">
                  <a href="#">View documentation</a>
                </div>
              </div>
              <div className="photo"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
