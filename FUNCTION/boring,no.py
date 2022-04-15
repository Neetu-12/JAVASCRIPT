# // var n=require("readline-sync").questionInt("enter no:-")
# // var sum=0
# // while (n!=0) {
# //     a=n%10
# //     sum=sum*10+a
# //     n=Math.floor(n/10)
# // }
# // // console.log(sum);
# // var j=sum
# // var r=0
# // while (j!=0) {
# //     a=n%10
# //     r=r*10+a
# //     j=Math.floor(j/10)
# // }
# // console.log(sum);

# var n=require("readline-sync").questionInt("enter no:-")
# var sum=0
# while (n!=0) {
#     a=n%10
#     sum=sum*10+a
#     n=Math.floor(n/10)
# }
# console.log(sum);

# h=input("enter no:")
# sum=""
# i=0
# while i<len(h):
#     if h[i]!="0":
#         sum+=h[i]
#     i+=1
# print(sum)
# n=int(input("enter no:-"))
# i=1
# while i<=n:
#     j=1
#     while j<=10:
#         print(j*i)
#         j=j+1
#     i=i+1
#     print("...........")


# a=[12,3,43,43]
# a.insert(1,90)
# print(a)


# a=['dog','dog','dog','cat','cat','elephant','pearot','pearot','pearot','pearot','pearot']
# r=[]
# i=0
# while i<len(a):
# 	if i not in r:
# 		r.append(a[i])
# 	i=i+1
# print(r)

# a="so in which we have to use higher order function"#how many words are present in this string...
# # for i in a:

# b=a.count("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z")
# print(b)


# char_list="so in which we have to use higher order function"
# i=0
# a=[]
# while i<len(char_list):
#     j=0
#     count=0
#     b=[]
#     while j<len(char_list):
#         if char_list[i]==char_list[j]:
#             count+=1
#         j+=1
#     b.append(char_list[i])
#     b.append(count)
#     if b not in a:
#         a.append(b)
#     i=i+1
# print(a)



a=[-2,5,"6",7,9,0,"0",1,-26,72,"hi","6",99,"a",0.7,"0.666",72,54,1.11]
b=a.sort()
print(b)