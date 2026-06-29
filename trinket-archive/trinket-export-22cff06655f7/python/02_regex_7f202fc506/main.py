import re

my_input = '1234'
input_test = re.search('\d\d\d\d', my_input)
assert (input_test, "input test for four digits failed")