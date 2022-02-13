
# In the planet named Hoiyama, scientists are trying to find the weights of the mountains.
# They managed to find the weights of some mountains.
# But calculating them manually takes a really long time.
# That's why they hired you to develop an algorithm and easily calculate the weights of the mountains.
# Your function has only one parameter which is the width of the mountain and you need to return the weight of that mountain.
# The widths of the mountains are only odd numbers.
# They gave you some information about calculating the weight of a mountain.
# Examine the information given below and develop a solution accordingly.

# width = 9

#           9          ->  9
#         7,8,7        -> 22
#       5,6,7,6,5      -> 29
#     3,4,5,6,5,4,3    -> 30
#   1,2,3,4,5,4,3,2,1  -> 25
#                       +___
#                weight: 115

width = 9

def mountains_of_hoiyama(width):

    rows = width/2 + 0.5
    num = width
    middleNumList = []
    while num >= rows:
        middleNumList.append(num)
        num -= 1

    allRows = []
    rowLen = 0
    for i in middleNumList:
        row = []
        row.append(i)
        outerNum = i-1
        for n in range(rowLen):
            row.append(outerNum*2)
            outerNum -= 1
        rowLen += 1
        allRows.append(row)

    total = 0
    for i in allRows:
        total += sum(i)

    print(allRows)
    print('weight = '+str(total))
    # return total


mountains_of_hoiyama(width)
