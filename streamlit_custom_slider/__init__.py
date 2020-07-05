import os
import streamlit.components.v1 as components


_component_func = components.declare_component(
    "custom_slider",
    url="http://localhost:3001",
)


def st_custom_slider(label: str, min_value: int, max_value: int, key=None):
    component_value = _component_func(label=label, minValue=min_value, maxValue=max_value, key=key)
    return component_value