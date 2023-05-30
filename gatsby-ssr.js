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
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

export const wrapPageElement = ({element}) => (
      <CartWrapper>{element}</CartWrapper>
  )

export const wrapRootElement = ({element}) => (
      <CartWrapper>{element}</CartWrapper>
  )
