/**
 * @format
 * @flow
 */

import React, { PureComponent } from "react";
import { MainNavigator } from "./screens/main";
type Props = {};

export default class App extends PureComponent<Props> {
  render() {
    return <MainNavigator />;
  }
}
