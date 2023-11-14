import React from 'react'

const Test = (Props) => {
  return (
    <>
    <h1>Name: {Props.name}</h1>
    <h4>Age: {Props.age}</h4>
    <h4> Status: {Props.status}</h4>
    </>
  )
}

export default Test