arr = [1,2,1,2,1,2,3]

def solve(arr): 
    dup = []
    arr.reverse()
    for i in arr:
        if i not in dup:
            dup.append(i)
    dup.reverse()
    print(dup)



solve(arr)