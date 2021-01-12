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
              <li>1 year old<br/><a href="/mar/1-year-old"><img src="images/mar-1yo.JPG" title="1 year old" height="200px;"/></a></li>
              <li>2 years old<br/><a href="/mar/2-years-old"><img src="images/mar-2yo.JPG" title="2 years old" height="200px;"/></a></li>
              <li>3 years old<br/><a href="/mar/3-years-old"><img src="images/mar-3yo.JPG" title="3 years old" height="200px;"/></a></li>
              <li>4 years old<br/><a href="/mar/4-years-old"><img src="images/mar-4yo.JPG" title="4 years old" height="200px;"/></a></li>
              <li>5 years old<br/><a href="/mar/5-years-old"><img src="images/mar-5yo.JPG" title="5 years old" height="200px;"/></a></li>
              </ul>
            </div>
            </Layout>
        );
    }
}
