import MetropolisText from 'MetropolisText'
import React from 'react'
import PropTypes from 'prop-types'

const ForEach = ({ data, Component, render }) => {
  if (Array.isArray(data) !== true)
    return <MetropolisText> data should be Array/list </MetropolisText>

  if (Component)
    return data.map((item, index) => <Component key={index} item={item} index={index}/>)

  if (render) return data.map(render)

  return (
    <MetropolisText> ForEach component | Please Set Up First </MetropolisText>
  )
}

ForEach.propTypes = {
  Component: PropTypes.elementType,
  render: PropTypes.func,
  data: PropTypes.array,
}

export default ForEach
