import React from 'react'

const reducedErrors = errors => {
  if (errors instanceof Array) {
    return errors.map(err => {
      return <li key={err.param}>{err.msg}</li>
    })
  }
  return <li>{errors}</li>
}

class ListErrors extends React.Component {
  render () {
    const errors = this.props.errors
    if (errors) {
      return <ul className='error-messages'>{reducedErrors(errors)}</ul>
    } else {
      return null
    }
  }
}

export default ListErrors
