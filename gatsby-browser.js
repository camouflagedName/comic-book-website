/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import React from 'react';
import './src/css/global.css'
import CartWrapper from './src/components/CartWrapper';

export const wrapRootElement = ({ element }) => (
    <CartWrapper>{element}</CartWrapper>
  );

export const wrapPageElement = ({ element }) => (
    <CartWrapper>{element}</CartWrapper>
  );