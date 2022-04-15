# # # a=[33,43,334,90]
# # # m=0
# # # sm=0
# # # tm=0
# # # i=0
# # # while(i<len(a)):
# # #     if a[i]>m:
# # #         tm=sm
# # #         sm=m
# # #         m=a[i]
# # #     i=i+1
# # # print(sm)

# # # a=[50, 40, 23, 70, 56, 12, 5, 10, 7]
# # # # a.sort(reverse=True)  ###descending...
# # # a.sort()  #ascending.....
# # # print(a)

# # # a=[1,2,3,4,5,6]
# # # b=[2,3,1,0,6,7]
# # # r=[]
# # # i=0
# # # while i<len(a) and i<len(b):
# # #     if a[i] not in  b:
# # #         r.append(a[i])
# # #     # if b[i] not in a:
# # #     #     r.append(b[i])
# # #     i=i+1
# # # print(r)

# # # #1))).........................................................................
# # # a = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
# # # i=0
# # # r1=[]
# # # while i<len(a):
# # #     j=0
# # #     r=[]
# # #     c=0
# # #     while j<len(a):
# # #         if a[i]==a[j]:
# # #             c=c+1
# # #         j=j+1
# # #     r.append(a[i])
# # #     r.append(c)
# # #     if r not in r1:
# # #         r1.append(r)
# # #     i=i+1
# # # print(r1)

# # # char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
# # # uniques=[]
# # # for(var i of char_list){
# # #    if(!uniques.includes(i)){
# # #        uniques.push(i)
# # #    }
# # # }
# # # console.log(uniques);
 
# # # for(var j of uniques){
# # #    count=0
# # #    for(var k of char_list){
# # #        if (j === k){
# # #            count+=1
# # #        }
# # #    }
# # #    console.log(j,count,"-" ,"times");
# # # }


# # # a= ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
# # # out=[]
# # # for j in range(len(a)):
# # #     c=0
# # #     r=[]
# # #     for k in a:
# # #         if a[j]==k:
# # #             c=c+1
# # #     r.append(a[j])
# # #     r.append(c)
# # #     if r not in out:
# # #         out.append(r)
# # # print(out)


# # a = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
# # # s=a.replace("over","on")
# # # print(s)

# # s1=""
# # i=0
# # while i<len(a):
# #     b=a.split()
# #     i=i+1
# # print(b)
# # # for j in range(len(b)):
# # #     # print(b[j])

# # #     if b[j]=="over":
# #     # else:
# #     #     # c=b.insert(5,"top")
# #     #     s1=s1+" "+b[j]


# a= [10, 11, 12, 13, 14, 17, 18, 19]
# # b=30
# r=[]
# for i in a:
#     for j in a:
#         if i+j==30:
#             r.append([i,j])
# print(r)

# a=[[78, 76, 94, 86, 88],[91, 71, 98, 65, 76],[95, 45, 78, 52, 49]]
# sum=0
# i=0
# while i<len(a):
#     j=0
#     while j<len(a[i]):
#         sum=sum+a[i][j]
#         j=j+1
#     i=i+1
# print(sum)

# duplicates not
# a = [1,2,3,4,5,6]
# b = [2,3,1,0,6,7]
# r=[]
# i=0
# while i<len(a):
#     j=0
#     while j<1:
#         if a[i] not in b:
#             r.append(a[i])
#         j=j+1
#     i=i+1
# print(r)

# a = [1,2,3,4,5,6]
# b = [2,3,1,0,6,7]
# r=[]
# for i in a:
#     for j in b:
#         if a[i] not in b:
#             r.append(a[j])
#         print(r)

# a= [6,1,3,5,6,3,1]
# r=[]
# for i in a:
#     if i not in r:
#         r.append(i)
# print(r)



# # minimum length......
# a=[[0], [1, 3], [5, 7], [9, 11], [13, 15, 17]]
# ml=0
# i=0
# while i<len(a):
#     if len(a[i])>ml:
#         ml=len(a[i])
#         g=a[i]
#     i=i+1
# # print(ml,g)
# min=ml
# j=0
# while j<len(a):
#     if len(a[j])<min:
#         min=len(a[j])
#         c=a[j]
#     j=j+1
# print(min,c)

# [[2, 1], 2, 3, [2, 4], 5, 1]output
# a=[1, 1, 2, 3, 4, 4, 5, 1]
# r=[]
# c=0
# i=0
# while i<len(a):
#     j=0
#     c1=0
#     while j<len(a):
#         if a[i]==a[j]:
#             c1=c1+1
#         j=j+1
#     r.append(a[i])
#     i=i+1
# print(r,c1)

# a_list = [1,2,1,2,1,1,1,]
# occurrences = a_list.count(1)
# print(occurrences)




# char=["a","n","t","a","a","t","n","n","a","x","u","g","a","x","a"]
# i=0
# a=[]
# while i<len(char):
#     count=0
#     b=[]
#     j=0
#     while j<len(char):
#         if char[i]==char[j]:
#             count+=1
#         j=j+1
#     b.append(char[i])
#     b.append(count)
#     if b not in a:
#         a.append(b)
#     i+=1
# print(a)
# k=3
# p=[]
# i=0
# while i<len(a):
#     j=0
#     while j<len(a[i]):
#         if a[i][1]>=k:
#             p.append(a[i][0])
#         j+=1
#     i+=1
# print(p)


# l=[1,2 ,3]
# for i in l:
#     for j in l:
#         for k in l:
#             print(i,k,j)
# 

# a=[1 ,1 ,2,3, 4,5, 1, 2]
# i=0
# r=[]
# while i<len(a):
#     if a[i]==1:
#         # continue
#         pass
#     else:
#         r.append(a[i])
#     i=i+1
# print(r)

# a=[5, 6, [], 3, [], [], 9]
# r=[]
# for i in a:
#     if i!=[]:
#         r.append(i)
# print(r)

# a=[1, 1, 1, 64, 23, 64, 22, 22, 22]
# i=0
# r=[]
# while i<1:
# 	r.append(a[1])
# 	r.append(a[6])
# 	i=i+1
# print(r)

# a= [34.67, 12, -94.89, 'Python', 0, 'C#']
# r=[]
# b=a[1]
# c=a[4]
# r.append(b)
# r.append(c)
# print(r)


# a=['1', '2', '3', '4', '5', '6', '7', '8']
# i=0
# r=[]
# while i<len(a)-1:
#     j=1
#     while j<len(a):
#         c=a[i]+a[j]
#         r.append(c)
#         j=j+1
#         i=i+1
#     print(r)

# def solve(s):
#     i=0
#     while i<len(s):
#         a=s[i].capitalize()
#         print(a,end=" ")
#         i+=1
# solve(input("").split(" "))

n=input("enter no:-")
i=-1
s=""
while i>=-len(n):
    s=s+n[i]
    i=i-1
if n==s:
    print("pallin")
else:
    print("not pallin")
