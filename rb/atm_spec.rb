class ATM
  def initialize(balance)
    @balance = balance #初始化進實體變數
  end

  def withdraw(money)
    if money > 0 and money <= @balance
      @balance = @balance - money
    return money
    else
      return 0 #領錢小於0的話 不給領錢
    end
  end

  def deposit(money)
    @balance = @balance + money if money > 0
  end

  def balance
    @balance #剩下就是餘額
  end
end

RSpec.describe ATM do
  context"領錢功能" do
    it "可以領錢" do
      atm = ATM.new(10)
      atm.withdraw(10)
      expect(atm.balance).to be 0
    end

    it "不能領0元" do
      atm = ATM.new(10)
      atm.withdraw(-50)
      expect(atm.balance).to be 10
    end

    it "不能領超過餘額" do
      atm = ATM.new(20)
      money = atm.withdraw(30)
      
      expect(atm.balance).to be 20
      expect(money).to be 0
    end
  end

  context"存錢功能" do
    it "可以存錢" do
      atm = ATM.new(10)
      atm.deposit(20)
      expect(atm.balance).to be 30 #(be(30)) 這是matcher
    end
  end

  context"存錢功能的限制" do
    it "不可存0元以下數額" do
      atm = ATM.new(10)
      atm.deposit(-20)
      expect(atm.balance).to be 10 #判斷餘額是否10元
    end
  end
end


