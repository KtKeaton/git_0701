#把陣列 [1, 2, 3, 4, 5] 變成 [1, 3, 5, 7, 9]

a = [1, 2, 3, 4, 5]
p a.map {|num| num * 2 - 1}

#把陣列 [1, 3, 4, 1, 7, nil, 7] 由小到大排序，並且移除 nil 以及重複的數字。

# a = [1, 3, 4, 1, 7, nil, 7].uniq
# a.compact!
# p a.sort!

#印出 1 ~ 100 之間所有的單數

# 1.upto(100) do |num|
#     if (num % 2 != 0)
#         puts num
#     end
# end    

#計算 1 ~ 100 的總和

# sum = 0
# (1..100).to_a.each do |num|
#     sum = sum + num
# end

# puts sum

#印出 5 個小於 100 且不重複的亂數

# 5.times do a = rand(1..100)
# p a
# end

#陣列 a = [1, 2, 3, 1, 2, 1, 3, 1, 2, 3, 4, 5, 6]，請計算在陣列 a 中，每個數字出現的次數。

# num = Hash.new(0)
# a = [1, 2, 3, 1, 2, 1, 3, 1, 2, 3, 4, 5, 6].each do |key|
#     num [key] +=1
# end

# p num




