class Animal
  def breath
    puts "live"
  end
end

class Puppy < Animal
  def play
    puts "touch it"
  end
end

class Kitty < Animal
  def smell
    puts "watch it"
  end
end

Wang = Puppy.new
Wang.play
Wang.breath

Mew = Kitty.new
Mew.smell
Mew.breath