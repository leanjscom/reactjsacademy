import React from 'react'
import gql from 'graphql-tag'
import Section, { TopSection } from '../../components/layout/Section'
import Grid, { Col, Row } from '../../components/layout/Grid'
import { CurriculumPartTime } from '../../components/curriculum'
import { Card, Video } from '../../components/elements'
import {
  AttendeeQuote,
  UpcomingTrainingSection,
  TargetAudienceSection,
  TrainingDetails,
  DAVID_LEULIETTE,
  WILL_VOELCKER,
  ALEX_LOBERA,
  EVA_HOFFMANN,
  FRANCISCO_GOMES,
  withUpcomingTrainings,
  selectNthTraining,
  selectUpcomingTrainings,
} from '../../components/training'
import Header from '../../components/layout/Header'
import { CATALIN } from '../../config/images'
import header from '../../components/layout/Header.json'
import { PaymentSection } from '../../components/payment'
import { Breadcrumb } from '../../components/navigation'
import { PART_TIME, LONDON } from '../../config/data'
import { LIST_TWO_COL } from '../../components/curriculum'

const BootcampLondon = ({ trainings }) => {
  const partTimeTrainings = selectUpcomingTrainings({
    trainings,
    type: PART_TIME,
    city: LONDON,
  })
  const training =
    selectNthTraining({ trainings: partTimeTrainings, nth: 3 }) || {}

  const upcomingAutomaticDiscounts =
    (training.upcomingAutomaticDiscounts &&
      training.upcomingAutomaticDiscounts.edges) ||
    []

  return (
    <React.Fragment>
      <Breadcrumb
        path={[
          { to: '/', label: 'Home' },
          { to: '/react-redux-graphql-part-time-course', label: 'Part-time' },
          { to: '/react-redux-training-london', label: 'London' },
        ]}
      />
      <Header
        titleLines={['React Redux part-time course - London']}
        subtitle="Take your dev career to the next level by mastering<br />React and Redux - without missing a day at work!"
        links={header.landingTraining.links}
        bgImg="part-time"
        type={PART_TIME}
        training={training}
      />
      <TopSection top xsBgDark>
        <Grid>
          <Card bg="dark">
            <Row>
              <Col xs={12} md={6} lg={5} lgOffset={1}>
                <PaymentSection
                  data={{
                    trainingInstanceId: training.id,
                    price: training.price,
                    upcomingAutomaticDiscounts: upcomingAutomaticDiscounts,
                    currency: training.currency,
                  }}
                />
              </Col>
              <Col xs={12} md={6} lg={4} lgOffset={1}>
                <Video youtubeId="E_4eQQHjc7A" />
                <TrainingDetails
                  timing="6pm - 9pm Tuesday's & Thursday's"
                  // location={<React.Fragment>{training.city}</React.Fragment>}
                  coaches={[
                    EVA_HOFFMANN,
                    DAVID_LEULIETTE,
                    WILL_VOELCKER,
                    ALEX_LOBERA,
                    FRANCISCO_GOMES,
                  ]}
                />
              </Col>
            </Row>
          </Card>
        </Grid>
      </TopSection>
      <TargetAudienceSection />
      <Section>
        <Grid>
          <Row>
            <Col lg={10} lgOffset={1}>
              <AttendeeQuote
                quote="Technology nowadays changes very often and in future you may not be able to find a job with the things you know - you have to keep up. I like the fact that we got to write code rather than focus on theory."
                fullname="Catalin Cislariu"
                job="Senior Developer"
                company="KLEIDO LTD"
                profilePicUrl={CATALIN}
              />
            </Col>
          </Row>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Card border="shadow">
            <Row>
              <Col lg={10} lgOffset={1}>
                <CurriculumPartTime
                  trainings={partTimeTrainings}
                  layout={LIST_TWO_COL}
                />
              </Col>
            </Row>
          </Card>
        </Grid>
      </Section>
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

const DISCOUNTS_QUERY = gql`
  query upcomingAutomaticDiscounts {
    edges {
      node {
        code
        id
        discountPercentage
        startsAt
        expiresAt
      }
    }
  }
`

export default withUpcomingTrainings()(BootcampLondon)