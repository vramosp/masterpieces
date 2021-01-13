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


              <table>
                <tr>
                  <td><a href="/mar/1-year-old"><h3>1 year old</h3><img src="/images/mar-1yo.JPG" title="1 year old" /></a></td>
                  <td><a href="/mar/2-years-old"><h3>2 years old</h3><img src="/images/mar-2yo.JPG" title="2 years old" /></a></td>
                  <td><a href="/mar/3-years-old"><h3>3 years old</h3><img src="/images/mar-3yo.jpg" title="3 years old" /></a></td>
                </tr>
                <tr>
                  <td><a href="/mar/4-years-old"><h3>4 years old</h3><img src="/images/mar-4yo.jpg" title="4 years old" /></a></td>
                  <td><a href="/mar/5-years-old"><h3>5 years old</h3><img src="/images/mar-5yo.jpg" title="5 years old" /></a></td>
                </tr>
              </table>

             
            </div>
            </Layout>
        );
    }
}
