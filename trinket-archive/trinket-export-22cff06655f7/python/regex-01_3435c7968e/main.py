import re
my_input = '123X'

# check to see if there are four consecutive digits somewhere in the input
digits_test = re.search('\d\d\d\d', my_input)

if digits_test:
  print("We have four digits!")
else:
  print("Invalid data")