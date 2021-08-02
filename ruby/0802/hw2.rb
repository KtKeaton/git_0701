#把陣列 [1, 3, 4, 1, 7, nil, 7] 由小到大排序，並且移除 nil 以及重複的數字。

a = [1, 3, 4, 1, 7, nil, 7].uniq
a.compact!
p a.sort!
