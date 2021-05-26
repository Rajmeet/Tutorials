#Binary Search of Elements
def BinarySearch(ar, item):
    beg = 0
    last = len(ar) - 1
    while beg <= last:
        mid = (beg+last)//2
        if item == ar[mid]:
            return "Found element", mid
        elif item > ar[mid]:
            beg = mid + 1
        else:
            last = mid - 1
    return -1
ar = [0,1,2,3,4,6,7,8,10]
item = 7s
print(BinarySearch(ar, item))