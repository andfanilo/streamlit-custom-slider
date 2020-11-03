import React, { useEffect } from "react"
import {
  ComponentProps,
  withStreamlitConnection,
  Streamlit,
} from "streamlit-component-lib"

import { Bar, Line } from "react-chartjs-2"

const StreamlitChart = (props: ComponentProps) => {
  // Destructure arguments sent from Python
  const { title, labels, data, chartType } = props.args

  // Build data prop for Chart.js component
  const dataset = {
    labels: labels,
    datasets: [
      {
        label: title,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: data,
      },
    ],
  }

  // Define callback when clicking on an element
  // Sends back the index of the selected bar to Streamlit
  const handleClick = (e: any) => {
    Streamlit.setComponentValue(labels[e[0]["_index"]])
  }

  // Define a function which returns a JSX block depending on chartType prop
  const renderPlot = () => {
    if (chartType === "bar") {
      return <Bar data={dataset} getElementAtEvent={handleClick} />
    } else if (chartType === "line") {
      return <Line data={dataset} getElementAtEvent={handleClick} />
    }
  }

  // After the chart has rendered, update the iframe height
  useEffect(() => Streamlit.setFrameHeight())

  // Return the graph
  return <div>{renderPlot()}</div>
}

export default withStreamlitConnection(StreamlitChart)
