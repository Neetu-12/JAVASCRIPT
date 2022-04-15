# for i in range(1,3):
#     print(i)

# i=0
# while i>-5:
#     i=i-1
#     print(i)

# a=["neetu"]
# for i in a:
#     # for j in i:
#         print(len(i))

# n=int(input("enter no:-"))
# i=1
# while i<=100:
#     j=1
#     c=0
#     while j<=i:
#         if i%j==0:
#             c=c+1
#         j=j+1
#     if c==2:
#         print(i,"prime no")
#     i=i+1

# n=int(input("enter no:-"))
# for i in range(1,10):
#     b=i*n
#     print(i,"*",n,b)

# # n=int(input("enter no:-"))
# i=1
# while i<=10:
#     if i%(-2)==0:
#         print(i)
#     # elif i%2!=0:
#     #     print(i)
#     i=i+1


a=[19,21,38,5]
i=0
max=0
while i<len(a):
    if a[i]>max:
        max=a[i]
    i=i+1
print(max)