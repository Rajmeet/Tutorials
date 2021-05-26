#Faster Solution
def fastpow(a,b):
    if b == 0:
        return 1
    elif b % 2 == 0:
        return fastpow(a*a, b/2)
  	else:
  		return a * fastpow(a,b-1)
 	

print(fastpow(3,4))