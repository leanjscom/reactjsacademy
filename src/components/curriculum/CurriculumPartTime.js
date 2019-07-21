import React from 'react'
import { H2Ref } from '../text'
import Link from '../navigation/Link'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import Ul, { Li } from '../layout/Ul'
import ES6Session from './sessions/ES6Session'
import ThinkingInReactSession from './sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import StylingInReactSession from './sessions/StylingInReactSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import HooksSession from './sessions/HooksSession'
import { PART_TIME } from '../../config/data'
import selectCurriculumLayout from './selectCurriculumLayout'
import {
  LearningObjectivesList,
  TargetAudienceList,
} from './CurriculumReactFundamentals'
import { curriculumCommonPropTypes } from './'

const PartTimeFinalProject = () => (
  <Ul>
    <Li>
      Consolidate your new React skills by adding Styled-Components and Redux to
      the application you built on session 5
    </Li>
    <Li>Discussion about architecture, features and tools</Li>
    <Li>
      Practice extreme programming and get support from the coaches and mentors
    </Li>
  </Ul>
)

const CurriculumPartTime = ({
  showTitle = true,
  isOpen,
  enableToggle,
  toggleNavigateTo = `/react/curriculum?tab=${PART_TIME}`,
  marketingCard = null,
  layout,
  showLinkToCurriculum = true,
  trainings,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = PART_TIME
  const commonProps = {
    enableToggle,
    toggleNavigateTo: toggleNavigateToSection,
    isOpen,
    type,
  }
  const firstHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Session 1 - Modern JavaScript"
        name="session1"
      >
        <ES6Session />
      </Section>
      <Section
        {...commonProps}
        title="Session 2 - Thinking in React"
        name="session2"
      >
        <ThinkingInReactSession />
      </Section>
      <Section
        {...commonProps}
        title="Session 3 - Routing & Data Fetching"
        name="session3"
      >
        <RoutingAndDataFetchingSession />
      </Section>
      <Section
        {...commonProps}
        title="Session 4 - Forms & Auth"
        name="session4"
      >
        <FormsAndAuthSession />
      </Section>
      <Section
        {...commonProps}
        title="Session 5 - Recap: build a React app from scratch"
        name="session5"
      >
        <ReactFundamentalsRecapSession />
      </Section>
      {marketingCard}
    </React.Fragment>
  )

  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Session 6 - Styling in React"
        name="session6"
      >
        <StylingInReactSession />
      </Section>
      <Section {...commonProps} title="Session 7 - Redux" name="session7">
        <IntroReduxSession />
      </Section>
      <Section
        {...commonProps}
        title="Session 8 - Testing Fundamentals in JS"
        name="session8"
      >
        <TestingIntroSession />
      </Section>
      <Section {...commonProps} title="Session 9 - React Hooks" name="session9">
        <HooksSession />
      </Section>
      <Section
        {...commonProps}
        title="Session 10 - React Redux Real-world Final Project"
        name="session10"
      >
        <PartTimeFinalProject />
      </Section>
    </React.Fragment>
  )

  const title = showTitle ? (
    <H2Ref>
      Part-time course curriculum{' '}
      <Link to="#curriculum" name="curriculum">
        #
      </Link>
    </H2Ref>
  ) : null

  return selectCurriculumLayout({
    firstHalf,
    secondHalf,
    layout,
    type,
    title,
    trainings,
    curriculumTo: showLinkToCurriculum ? toggleNavigateTo : undefined,
  })
}

CurriculumPartTime.propTypes = curriculumCommonPropTypes
CurriculumPartTime.LearningObjectivesList = LearningObjectivesList
CurriculumPartTime.TargetAudienceList = TargetAudienceList

export default CurriculumPartTime
