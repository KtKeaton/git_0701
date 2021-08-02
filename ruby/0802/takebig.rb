p [5, 2, 9, 10, 7, 89, 70].reduce(0) { |x, y| 
    if x > y
        y = x
    else
        x
    end
}



