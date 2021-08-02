def f2c(f)
    c = (f-32) * (5/9) - 32
    return c
end

puts f2c(100)  # 印出 C 度