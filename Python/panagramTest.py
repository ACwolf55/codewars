def pangrams(s):
  # make empty array/list to hold chars from string arg - s
  chars=[]
  # loop through string. if char is not already in chars, add it to chars
  for letter in s:
    char = letter.lower()
    if char not in chars and char != ' ':
      chars.append(char)
  print(chars)
  # check chars length. if equal to 26 will have every letter in alphabet
  if len(chars) == 26:
    return 'pangram'
  else:
    return 'not pangram'
  