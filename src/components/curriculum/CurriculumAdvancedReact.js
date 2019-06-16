import React from 'react'
import Link from '../navigation/Link'
import { LinkButton } from '../buttons'
import { H2Ref, H4 } from '../text'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import TestingInReactSession from './sessions/TestingInReactSession'
import HoCsRenderPropsStateReducerSession from './sessions/HoCsRenderPropsStateReducerSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import E2ESession from './sessions/E2ESession'
import ReactPerformanceSession from './sessions/ReactPerformanceSession'
import Hackathon from './sessions/Hackathon'
import SectionCTA from './SectionCTA'
import { ADVANCED_REACT } from '../../config/data'
import selectCurriculumLayout, { LIST_TWO_COL } from './selectCurriculumLayout'

const CurriculumAdvancedReact = ({
  showTitle = true,
  isOpen,
  enableToggle,
  toggleNavigateTo = `/react/curriculum?tab=${ADVANCED_REACT}`,
  marketingCard = null,
  showLinkToCurriculum = true,
  layout,
  trainings,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = ADVANCED_REACT
  const commonProps = {
    enableToggle,
    toggleNavigateTo: toggleNavigateToSection,
    type,
    isOpen,
  }
  const firstHalf = (
    <React.Fragment>
      <H4>Course outline:</H4>

      <Section
        {...commonProps}
        title="Advanced React Day 1"
        name="day1"
        subTitle="Advanced React patterns, Hooks, and performance"
      >
        <HoCsRenderPropsStateReducerSession title="Functional Programming & Advanced React patterns" />
        <ReactPerformanceSession title="Performance" />
      </Section>
      <Section
        {...commonProps}
        title="Advanced React Day 2"
        name="day2"
        subTitle="Real-world Testing in React"
      >
        <TestingIntroSession title="Testing Foundation in JS" />
        <TestingInReactSession title="Testing in React" />
        <E2ESession title="End-to-End Testing" />
      </Section>
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Advanced React Day 3"
        name="day3"
        subTitle="GraphQL and Hackathon"
      >
        <Hackathon />
      </Section>
      {showLinkToCurriculum && (
        <SectionCTA>
          <LinkButton to={`/react/curriculum?tab=${ADVANCED_REACT}`}>
            Full curriculum
          </LinkButton>
        </SectionCTA>
      )}
      {marketingCard}
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={layout !== LIST_TWO_COL ? 1 : 0}>
            <H2Ref>
              Advanced React Curriculum{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
            </H2Ref>
          </Col>
        </Row>
      ) : (
        ''
      )}
      {selectCurriculumLayout({
        firstHalf,
        secondHalf,
        layout,
        type,
        trainings,
      })}
    </React.Fragment>
  )
}

export default CurriculumAdvancedReact
