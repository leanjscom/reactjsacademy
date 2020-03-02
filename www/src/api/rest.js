import trackUserBehaviour from '../components/utils/trackUserBehaviour'

const apiBaseUrl =
  'https://us-central1-reactgraphqlacademy.cloudfunctions.net/api/'

export const triggerSessionSubscribe = ({
  name,
  email,
  subscriptions,
  resources = false,
  pathname = '1-day workshops form',
}) =>
  fetch(`${apiBaseUrl}sessionSubscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      subscriptions,
      resources,
      pathname,
    }),
  }).then(() => {
    trackUserBehaviour({
      event: '1-DAY_SESSION_SUBSCRIBE',
    })
  })

export const triggerUnsubscribe = ({ email }) =>
  fetch(`${apiBaseUrl}unsubscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  }).then(() => {
    trackUserBehaviour({
      event: 'NEWSLETTER_UNSUBSCRIBE',
    })
  })

export const triggerSubscribe = ({
  email,
  pathname = 'footer',
  city = 'unknown',
  resources = true,
}) => {
  const path = typeof window !== 'undefined' ? window.location.pathname : ''
  const payload = {
    email,
    pathname,
    city,
    resources,
    path,
  }
  return fetch(`${apiBaseUrl}subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(() => {
    trackUserBehaviour({
      event: 'NEWSLETTER_SIGNUP',
      payload,
    })
  })
}

export const sendFeedback = feedback =>
  fetch(`${apiBaseUrl}sendFeedback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedback),
  })
