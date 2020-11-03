import React, { useEffect, useState } from "react"
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib"
import { Slider } from "baseui/slider"

const CustomSlider = (props: ComponentProps) => {
  /**
   * Destructuring JSON objects is a good habit.
   * This will look for label, minValue and maxValue keys
   * to store them in separate variables.
   */
  const { label, minValue, maxValue } = props.args

  const [value, setValue] = useState([10])

  useEffect(() => Streamlit.setFrameHeight())

  return (
    <>
      <h3>{label}</h3>
      <Slider
        value={value}
        onChange={({ value }) => value && setValue(value)}
        onFinalChange={({ value }) => console.log(value)}
        min={minValue}
        max={maxValue}
      />
    </>
  )
}

export default withStreamlitConnection(CustomSlider)
