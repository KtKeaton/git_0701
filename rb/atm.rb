class ATM
  def initialize(bankSave)
    @bankSave = bankSave #初始化進實體變數
  end

  def withdraw(money)
    if money > 0
      @bankSave = @bankSave - money
    return money
    else
      #領錢小於0的話    
      return
    end

  def deposit(money)
    @bankSave = @bankSave + money if money > 0
  end

  def balance
    @bankSave #剩下就是餘額
  end
end