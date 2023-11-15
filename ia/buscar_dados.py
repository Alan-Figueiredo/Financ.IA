# import webdriver
from selenium import webdriver
from selenium.webdriver.common.by import By
 
# create webdriver object
driver = webdriver.Firefox()
 
# enter keyword to search
keyword = "geeksforgeeks"
 
# get geeksforgeeks.org
driver.get("https://www.geeksforgeeks.org/")
 
# get element
element = driver.find_element(By.LINK_TEXT, "Tutorials")
 
# print complete element
print(element)