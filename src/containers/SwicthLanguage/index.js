/**
 * @ Author: Muniz
 * @ Create Time: 2020-06-20 16:45:06
 * @ Modified by: Muniz
 * @ Modified time: 2020-06-20 18:23:18
 * @ Description: 多语言切换功能
 */

import React from "react";
import PropTypes, { object } from "prop-types";
import intl from "react-intl-universal";
import Cookies from "js-cookie";
import { Select } from "antd";

import "./index.less";

class SwitchLanguage extends React.Component {
  handleChangeCookie = (val) => {
    Cookies.set("language", val, { expires: 365 });
    location.reload();
  };
  render() {
    const { currentLocale } = intl.getInitOptions();
    return (
      <div className="findora-language">
        <Select
          defaultValue={currentLocale}
          style={{ width: 120 }}
          onChange={this.handleChangeCookie}
        >
          <Select.Option value="zh">{intl.get("locale_zh")}</Select.Option>
          <Select.Option value="en">{intl.get("locale_en")}</Select.Option>
        </Select>
      </div>
    );
  }
}
export default SwitchLanguage;
