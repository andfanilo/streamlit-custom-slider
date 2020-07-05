import os
import streamlit.components.v1 as components

from typing import Tuple


# Now the React interface only accepts an array of 1 or 2 elements.
_component_func = components.declare_component(
    "custom_slider",
    url="http://localhost:3001",
)


# Edit arguments sent and result received from React component, so the initial input is converted to an array and returned value extracted from the component
def st_custom_slider(label: str, min_value: int, max_value: int, value: int = 0, key=None) -> int:
    component_value = _component_func(label=label, minValue=min_value, maxValue=max_value, initialValue=[value], key=key, default=[value])
    return component_value[0]


# Define a new public method which takes as input a tuple of numbers to define a range slider, and returns back a tuple.
def st_range_slider(label: str, min_value: int, max_value: int, value: Tuple[int, int], key=None) -> Tuple[int, int]:
    component_value = _component_func(label=label, minValue=min_value, maxValue=max_value, initialValue=value, key=key, default=value)
    return tuple(component_value)