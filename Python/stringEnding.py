# Complete the solution so that it returns true 
# if the first argument(string) passed in ends
#  with the 2nd argument (also a string)

def solution(string, ending):
  wordLen = len(string)
  endLen = wordLen - len(ending)
  y = string[endLen:wordLen]
  if y == ending or ending =='':
    return True
  else:
    return False
  pass