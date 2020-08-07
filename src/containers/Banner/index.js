import React from 'react';
import { inject, observer } from 'mobx-react';
import './index.less';

@inject('testStore')
@observer
class Banner extends React.Component {
  handleDjAmount = () => {
    const { testStore } = this.props;
    testStore.counterAmount(testStore.amount + 1);
  };

  render() {
    const { testStore } = this.props;
    return (
      <div className="findora-banner">
        <div className="banner-box">
          <div className="title" onClick={this.handleDjAmount}>
            {testStore.amount}
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
