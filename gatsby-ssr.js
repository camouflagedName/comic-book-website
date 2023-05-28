/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

import React from 'react';
import CartWrapper from './src/components/CartWrapper';

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

exports.wrapPageElement = ({element}) => {

  return (
      <CartWrapper>{element}</CartWrapper>
  )
}

exports.wrapRootElement = ({element}) => {

  return (
      <CartWrapper>{element}</CartWrapper>
  )
}
