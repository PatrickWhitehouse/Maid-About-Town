import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ prefix }) => {

    const grabSeo = useStaticQuery(graphql`
    query grabSEO {
  site {
    id
    siteMetadata {
      title
    }
  }
}

    `)
    const { site: { siteMetadata } } = grabSeo;
    return (
        <Helmet>
            <title>{prefix ? `${prefix} - ` : ''}{siteMetadata.title}</title>
        </Helmet>
    )
}

export default Seo;