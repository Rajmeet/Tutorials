n=int(input())
if n != 0:
    alpha=input().split()
s=[]
flag=0
alpha=sorted(alpha)
alpha = list(dict.fromkeys(alpha))
if len(alpha)%2!=0:
    h=alpha.pop(-1)
    flag=1

for i in range(0,len(alpha),2):
    r=''
    r+=alpha[i]
    r+=alpha[i+1]
    s.append(r)

for i in s:
    print(s[-1],end=" ")
    s.pop(-1)
    if len(s)!=0:
        print(s[0],end=" ")
        s.pop(0)
if flag==1:
    print(h)
