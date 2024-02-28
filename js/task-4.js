const getTotalBalanceByGender = (users, gender) => 
users.filter(user => user.gender === gender)
.reduce((totalBalance, user)=> totalBalance += user.balance, 0);

const clients = [ 
	{ 
    name: "Moore Hensley", 
    gender: "male", 
    баланс: 2811 
  }, 
  { 
    name: "Sharlene Bush", 
    gender: "female", 
    баланс: 3821 
  }, 
  { 
    name: "Ross Vazquez", 
    gender: "male", 
    balance: 3793 
  }, 
  { 
    name: "Elma Head", 
    gender: "female", 
    balance: 2278 
  }, 
  { 
    name: "Carey Barr", 
    gender: "male", 
    balance: 3951 
  }, 
  { 
    name: "Blackburn Dotson", 
    gender: "male", 
    баланс: 1498 
  }, 
  { 
    name: "Sheree Anthony", 
    gender: "female", 
    баланс: 2764 
  } 
]; 

console.log(getTotalBalanceByGender(clients, "male")); // 12053 

console.log(getTotalBalanceByGender(clients, "female")); // 8863
