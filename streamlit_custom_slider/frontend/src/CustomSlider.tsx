import React, { useEffect } from "react"
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib"

/**
 * Called by <CustomSlider />, renders the return value on screen.
 *
 * (props) => {code} is an arrow function, a shorter syntax for JS functions
 * equivalent to : function (props) { code; return <h1>Hello world</h1>};
 * or in Python, lambda props : return <h1>Hello world</h1>.
 *
 * When called, it will run then render on the browser the returned JSX block
 */
const CustomSlider = (props: ComponentProps) => {
  // useEffect is a specific React hook which calls its input after the component has been rendered on the browser.
  // The callback function properly sets the height of the HTML block wrapping the component. By default it checks the scrollable height of the returned blok after rendering and sets it as the iframe height.
  useEffect(() => Streamlit.setFrameHeight())

  // This React component returns (and renders) this <h1> block
  return (
    <>
      <h1>Hello Streamlit custom component</h1>
      <p>Nice to meet you</p>
    </>
  )
}

// Link the component to Streamlit JS events.
export default withStreamlitConnection(CustomSlider)
