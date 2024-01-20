import streamlit as st
from streamlit_drawable_canvas import st_canvas
from skimage.color import rgba2rgb, rgb2gray
from skimage.transform import resize
import cv2 
import pytesseract
from PIL import Image 
from dotenv import load_dotenv
import os
load_dotenv()

tesseract_path = os.getenv('TESSERACT_PATH')

st.title('Visual Growth')

st.header('Grade 3 - 8 students')

st.subheader('Exercise 1:')

st.text('Look at the image given to you as an assignment, and upload it below:')

st.text('Caution: Before you upload, take 2 minutes to recognize the text in the image.')


uploaded_file = st.file_uploader('Upload your Image file here')

if uploaded_file and uploaded_file.type.startswith("image/"):
    st.image(uploaded_file)
    st.write("Image uploaded successfully")
    image = Image.open(uploaded_file)
    pytesseract.pytesseract.tesseract_cmd = rf'{tesseract_path}'
    text = pytesseract.image_to_string(image)
    st.write("Recognized text from image:")
    st.text(text)


st.subheader('Exercise 2:')

st.text('Let us a look at identifying numbers from 0 - 9')

st.text('Below is the playground where you can draw the number you want to identify.')

st.text('Caution: If you click on the delete icon, your drawing will be lost.')

canvas_output = st_canvas(
    height=400,
    width=400,
    stroke_width=30
)

if canvas_output and (canvas_output.image_data is not None):
    rgba_image = (canvas_output.image_data)
    rgb_image = rgba2rgb(rgba_image)
    gray_image = rgb2gray(rgb_image)
    small = resize(gray_image, (28, 28))
    st.header('Your image')
    img = st.image(1 - small)
    
    
if canvas_output.image_data is not None:
    cv2.imwrite(f'image.png', canvas_output.image_data)
    pytesseract.pytesseract.tesseract_cmd = r'process.env.TESSERACT_PATH'
    img = cv2.imread('image.png')
    text = 'One'
    st.header('Your drawn number in words')
    st.write(text)