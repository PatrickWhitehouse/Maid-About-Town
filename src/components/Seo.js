import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ prefix, currentUrl }) => {

    const grabSeo = useStaticQuery(graphql`
    query grabSEO {
  site {
    id
    siteMetadata {
      title
      logo
    }
  }
}

    `)
    const { site: { siteMetadata } } = grabSeo;

    return (
        <Helmet title={prefix} titleTemplate={`%s - ${siteMetadata.title}`}>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content="@patrickdoesweb" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content="Maid About Town" />
            <meta property="og:description" content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling." />
            <meta property="og:image" content={siteMetadata.logo} />
        </Helmet>
    )
}

export default Seo;