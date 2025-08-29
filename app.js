function createAccount(){let getName = document.getElementById('accountHolderName').value;
  let getAccountNumber = document.getElementById('accountNo').value; 
  let getBalance = Number(document.getElementById('initialBalance').value);
  console.log(getName);
  console.log(getAccountNumber);
  console.log(getBalance);
  const account = new Map();
  account.set(getAccountNumber,{Name : getName, Balance : getBalance});
  console.log(account)
  let output = '';
  account.forEach((item,val)=>{output += `Account Number : ${val}| Name : ${item.Name}| Balance : ${item.Balance}`})
  let ul = document.getElementById('ul');
  ul.innerHTML = output;
  
}
// deposit 
function deposit(){let getName = document.getElementById('accountHolderName').value;
  let getAccountNumber = document.getElementById('accountNo').value; 
  let getBalance = Number(document.getElementById('initialBalance').value);
  let add = Number(document.getElementById('addBalance').value);
  let newBalance = getBalance + add;
  const account = new Map();
  account.set(getAccountNumber,{Name : getName, Balance : newBalance});
  console.log(account)
  let output = '';
  account.forEach((item,val)=>{output += `Account Number : ${val}| Name : ${item.Name}| Balance : ${item.Balance}`})
  let ul = document.getElementById('ul');
  ul.innerHTML = output;
  
}
// withdraw 
function withdraw(){let getName = document.getElementById('accountHolderName').value;
  let getAccountNumber = document.getElementById('accountNo').value; 
  let getBalance = Number(document.getElementById('initialBalance').value);
  let add = Number(document.getElementById('addBalance').value);
  let newBalance = getBalance + add;
  let withdraw = Number(document.getElementById('withdraw').value);
  let availalbleBalance = newBalance - withdraw;
  const account = new Map();
  account.set(getAccountNumber,{Name : getName, Balance : availalbleBalance});
  console.log(account)
  let output = '';
  account.forEach((item,val)=>{output += `Account Number : ${val}| Name : ${item.Name}| Balance : ${item.Balance}`})
  let ul = document.getElementById('ul');
  ul.innerHTML = output;
  
}

