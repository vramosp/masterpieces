import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {getPages, Link, withPrefix} from '../utils';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Portfolio extends React.Component {
    render() {
        let display_projects = _.orderBy(getPages(this.props.pageContext.pages, '/mar'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
            <div className="inner outer">
              <header className="page-header inner-sm">
                <h1 className="page-title line-top">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                <p className="page-subtitle">{_.get(this.props, 'pageContext.frontmatter.subtitle', null)}</p>
                )}
              </header>

              <ul>
              <li><a href="/mar/1-year-old">1 year old</a></li>
              <li><a href="/mar/2-years-old">2 years old</a></li>
              <li><a href="/mar/2-years-old">3 years old</a></li>
              <li><a href="/mar/2-years-old">4 years old</a></li>
              </ul>
            </div>
            </Layout>
        );
    }
}
