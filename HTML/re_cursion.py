def fac(n):
    if n==0:
        return 1
    else:
        return n*fac(n-1)
n=int(input("enter no:-"))
result=fac(n)
print(result)


# # i=0
# # def num():
# #     global i
# #     i=i+1

#     #  print(i)
# #     num()

# # num()
# def num():
# 	num.a=5
# num()
# print(num.a)