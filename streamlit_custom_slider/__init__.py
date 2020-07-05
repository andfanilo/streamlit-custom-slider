# To write a little less text, let's run directly from __init__.py instead of app.py
# run with "streamlit run __init__.py"
import streamlit as st
import streamlit.components.v1 as components

_component_func = components.declare_component(
    "chartjs",
    url="http://localhost:3001",
)

def _plot(title, labels, data, chart_type):
    selected_label = _component_func(title=title, labels=labels, data=data, default=None, chartType=chart_type)
    return selected_label

def st_bar(title, labels, data):
    return _plot(title, labels, data, "bar")

def st_line(title, labels, data):
    return _plot(title, labels, data, "line")

st.title("Chart.js")
labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
data = [65, 59, 80, 81, 56, 55, 40]

selected = st_bar("My chart !", labels, data)
st.write(selected)
st_line("My chart !", labels, data)