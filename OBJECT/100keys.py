# k=""
# d={}
# for i in range(12):
#     a=i*" "
#     d[a]=i
# print(d)

# # 2)))...............
# # k=""
# # d={}
# # for i in range(10):
# #     k=i*" "
# #     d[k]=i
# # print(d)

l1=['one','two','three','four','five']
l2=[1,2,3,4,5,]
r={}
i=0
while i<len(l1):
    j=i
    while j<=i:
        # r.update({l1[i]:l2[j]})
        r[l1[i]]=l2[j]
        j=j+1
    i=i+1
print(r)