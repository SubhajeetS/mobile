/* eslint-disable react/display-name */
//@flow
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

type Props = {
  tintColor: String,
};

const TabBarIcon = (iconName: any) => {
  return ({ tintColor }: Props) => {
    return <Icon name={iconName} color={tintColor} size={25} />;
  };
};

export default TabBarIcon;
