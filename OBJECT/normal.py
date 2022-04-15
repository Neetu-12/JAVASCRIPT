# person = {"firstName":"John", "lastName":"Doe", "age":50, "eyeColor":"blue"}
# a=person.keys()
# print(a)


# k=""
# d={}
# for i in range(10):
#     k=i*" "
#     d[k]=i
# print(d)


# def num1(a,b):
#     p=a+b
#     return p
# def num2(y):
#     q=y+num1(2,3)
#     return q
# print(num2(5))


# a=[
# {"first":"1"},
# {"second": "2"},
# {"third": "1"},
# {"four": "5"},
# {"five":"5"},
# {"six":"9"},
# {"seven":"7"}
# ]
# r=[]
# i=0
# while i<len(a):
#     for j in a[i]:
#     #     print(j)
#     # i=i+1
#         if j not in r:
#             r.append(int(a[i][j]))
#     i=i+1
# print(r)
# # r2=[]
# # for i in r:
# #     if i not in r2:
# #         r2.append(i)
# # print(r2)

# # # In set.....
# k=set(r)
# h=list(k)
# print(h)

# r={}
# for i in range(2):
#     n=input("name:-")
#     m=int(input("marks:-"))
#     r[n]=m
# print(r)


# a="MISSISSIPPI"
# r={}
# i=0
# while i<len(a):
#     j=0
#     c=0
#     while j<len(a):
#         if a[i]==a[j]:
#             c=c+1
#             # r.update({a[i]:c})
#             r[a[i]]=c
#         j=j+1
#     i=i+1
# print(r)

# a= {
#     'Alex': ['subj1', 'subj2', 'subj3'],
#     'David': ['subj1', 'subj2']
# }
# r=[]
# for i in a:
#     for j in a[i]:
#         r.append(j)
# print(len(r))

#     # p=(a[i])
#     # c=0
#     # j=0
#     # while j<len(a[i]):
#     #     c=c+1
#     #     j=j+1
#     # print(p,c)        

a= {
    'a':50,
    'b':58,
    'c':56,
    'd':40,
    'e':100,
    'f':20
}
m=0
s=0
t=0
for i in a:
    if a[i]>m:
        t=s
        s=m
        m=a[i]
    if a[i]>s and a[i]<m:
        s=m
        m=a[i]
    # if a[i]>s>a[i]<m:
    #     t=a[i]
print(m,t,s)
