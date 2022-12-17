#Import cookies and headers from the Login_Credentials file
from Login_Credentials import *

import requests
from bs4 import BeautifulSoup

# Send an HTTP request to the website and retrieve the HTML content
response = requests.get('https://adventofcode.com/2022/day/17/input', cookies=cookies, headers=headers)
html_content = response.content

# Use BeautifulSoup to parse the HTML and extract the text
soup = BeautifulSoup(html_content, 'html.parser')
text = soup.get_text()

print(text)
