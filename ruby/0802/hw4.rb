#計算 1 ~ 100 的總和

sum = 0
(1..100).to_a.each do |num|
    sum = sum + num
  end
  
  puts sum  

# p (0..100).sum

