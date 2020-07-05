import streamlit as st
from streamlit_custom_slider import st_custom_slider

st.title("Testing Streamlit custom components")
label = st.sidebar.text_input('Label', 'Hello world')
min_value, max_value = st.sidebar.slider("Range slider", 0, 100, (0, 50))

v1 = st_custom_slider(label=label, min_value=min_value, max_value=max_value, key="slider1")
st.write(v1)
v2 = st_custom_slider(label=label, min_value=min_value, max_value=max_value, key="slider2")
st.write(v2)