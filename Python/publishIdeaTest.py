def well(x):
  if x.count('good') < 1:
      return 'Fail!'
  elif x.count('good') < 3:
      return 'Publish!'
  else:
      return 'I smell a series!' 



# well(['bad', 'bad', 'bad'])
# well(['good', 'bad', 'bad', 'bad', 'bad'])
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])