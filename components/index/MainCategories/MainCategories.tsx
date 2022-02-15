import React, { ReactElement } from 'react';
import { CategoriesType } from './MainCategories.type';
import * as S from './MainCategories.styled';
import Category from 'components/common/Category/Category';

const MainCategories = (categories: CategoriesType) => {
  return (
    <S.Wrapper>
      {categories ? categories.categories.map(category => <Category item={category} />) : ''}
    </S.Wrapper>
  );
};

export default MainCategories;
