import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { RunkitProvider } from '../blog/Runkit'
import Layout from '../layout.js'
import { formatUTC } from '../utils'
import Grid, { Col, Row } from '../layout/Grid'
import { P, Span, H2, H4, Hr } from '../text'
import Header from '../layout/Header'
import { UpcomingTrainingSection } from '../training'
import { Breadcrumb, Link } from '../navigation'
import { WHITE } from '../../config/styles'
import { Image } from '../elements'
import ContactForm from '../form/Contact'
import { Segment } from '../elements'
import ShareButtons from './ShareButtons'

export const formatPostTitle = title => title.replace(/(<([^>]+)>)/gi, ' ')

const StyledAuthor = styled.div`
  display: flex;
  img {
    margin-right: 18px;
    width: 90px;
    height: 90px;
  }
  a,
  p,
  span {
    color: ${WHITE};
  }
  a {
    display: block;
  }
`

const PostMeta = ({
  authorFullname,
  authorImageUrl,
  authorSlug,
  date = '',
  timeToRead,
}) => (
  <StyledAuthor>
    <Link to={`/team/${authorSlug}/`} className="blog-article">
      {authorImageUrl && <Image src={authorImageUrl} circle />}
    </Link>
    <P>
      <Link to={`/team/${authorSlug}/`} className="blog-article">
        By {authorFullname}
      </Link>
      <Span>
        {formatUTC(date)}
        {timeToRead && (
          <React.Fragment>
            <br />
            Reading time: {timeToRead} mins
          </React.Fragment>
        )}
      </Span>
    </P>
  </StyledAuthor>
)

const GridContent = styled(Grid)`
  padding-top: 72px;
`

const BlogPost = ({
  body,
  postTypeLabel,
  postTypePath,
  slug,
  authorTwitter,
  authorFullname,
  authorImageUrl,
  authorSlug,
  mainImagePublicUrl,
  title,
  date,
  subtitle,
  timeToRead,
  relatedPosts,
}) => (
  <Layout loadAutopilot={false}>
    {({ trainings }) => (
      <RunkitProvider>
        <Helmet
          title={title}
          meta={[
            {
              name: 'description',
              content: subtitle,
            },
          ]}
        >
          <meta property="og:title" content={title} />
          <meta property="og:image" content={mainImagePublicUrl} />
          <meta property="og:description" content={subtitle} />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@reactgqlacademy" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={subtitle} />
          <meta name="twitter:creator" content={`@${authorTwitter}`} />
          <meta name="twitter:image" content={mainImagePublicUrl} />
        </Helmet>
        <Breadcrumb
          path={[
            { to: '/', label: 'Home' },
            {
              to: `/${postTypePath}`,
              label: postTypeLabel,
            },
            { to: slug, label: title },
          ]}
        />
        <Header
          titleLines={title.split('<br />')}
          fullHeight={false}
          paddingBottom={80}
          bgImgUrl={mainImagePublicUrl}
          bgColor="transparent"
          bgImageOpacity={1}
        >
          <PostMeta
            date={date}
            authorFullname={authorFullname}
            authorImageUrl={authorImageUrl}
            authorSlug={authorSlug}
            timeToRead={timeToRead}
          />
        </Header>
        <GridContent>
          <Row>
            <Col md={7}>
              {subtitle ? <H2>{subtitle}</H2> : null}
              {body}
            </Col>
            <Col md={4} mdOffset={1}>
              <Segment small variant="primary" mt={3}>
                <ContactForm simplified />
              </Segment>
              {relatedPosts.length ? (
                <Segment border="shadow" small mt={4}>
                  <H4>Related articles</H4>
                  {relatedPosts.map((post, index) => (
                    <React.Fragment key={index}>
                      <Link to={post.node.fields.slug} className="blog-article">
                        {formatPostTitle(post.node.frontmatter.title)}
                      </Link>
                      <P>{formatUTC(post.node.frontmatter.date)}</P>
                    </React.Fragment>
                  ))}
                </Segment>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <P>Share this on: </P>
              <ShareButtons slug={slug} />
              <Hr />
              <P>
                This website is built using Gatsbyjs. Curious about how this
                blog is implemented? It's open source so you can{' '}
                <Link
                  to="https://github.com/reactgraphqlacademy/reactgraphqlacademy/blob/master/src/templates/blog-post.js"
                  className="blog-article"
                >
                  check the source code
                </Link>
              </P>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Hr />
              <P>
                Comments? Shoot me a{' '}
                <Link
                  to={`http://twitter.com/${authorTwitter}`}
                  className="blog-article"
                >
                  tweet {`@${authorTwitter}`}
                </Link>{' '}
                !
              </P>
            </Col>
          </Row>
        </GridContent>
        <UpcomingTrainingSection trainings={trainings} />
      </RunkitProvider>
    )}
  </Layout>
)

export default BlogPost