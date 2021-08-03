def hi_hello
  p "hello ni hao"
  yield 5
end

hi_hello |x| do
 puts x
end