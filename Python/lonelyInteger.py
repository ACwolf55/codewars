# Given an array of integers, 
# where all elements but one occur twice, find the unique element. 

def lonelyinteger(a):
    doubles = []
    for x in a:
      if x not in doubles:
        doubles.append({"num":x,"count":0})
  
    for dict in doubles:
      print(dict)
      for x in a:
        if dict["num"] == x:
          dict["count"] += 1
    for dict in doubles:
      if dict["count"] == 1:
        return dict["num"]