# The global container is here
value_two = 2

# the local container is this function
def plus_two(num):
  two_more = num + value_two
  value_two = 22
  print("in plus two function:")
  print(value_two)
  return two_more

# the local rule is this room
def times_five(num):
  five_times = num * 5
  return five_times

print(plus_two(times_five(5)))

print(value_two)

