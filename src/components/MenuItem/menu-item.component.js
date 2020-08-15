import React from "react";
import { useHistory } from "react-router-dom";

import {
  MenuItemContainer,
  BackGroundImgContainer,
  ContentContainer,
  ContentTitle,
  ContentSubTitle,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();

  return (
    <MenuItemContainer size={size} onClick={() => history.push(`${linkUrl}`)}>
      <BackGroundImgContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubTitle>SHOP NOW</ContentSubTitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
