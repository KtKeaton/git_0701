def my_select(arr)
  if yield ( % 2 != 0) 
    puts "ok"
  else 
    puts "no ok"
end

my_select([1, 2, 3, 4, 5]) {|i| i.odd?}
