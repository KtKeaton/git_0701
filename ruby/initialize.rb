class Cat

def initialize(name)
    @age = 1 #可以給預設值
end

def hey
        puts "I AM #{@age}"
end
end

k = Cat.new("KAO")
k.hey

