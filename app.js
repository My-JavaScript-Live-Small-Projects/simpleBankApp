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





// another code 
/*
 const accounts = new Map();

    function createAccount() {
      let getName = document.getElementById('accountHolderName').value;
      let getAccountNumber = document.getElementById('accountNo').value;
      let getBalance = Number(document.getElementById('initialBalance').value);

      accounts.set(getAccountNumber, { Name: getName, Balance: getBalance });
      displayAccounts();
    }

    function deposit() {
      let getAccountNumber = document.getElementById('accountNo').value;
      let add = Number(document.getElementById('addBalance').value);

      if (accounts.has(getAccountNumber)) {
        accounts.get(getAccountNumber).Balance += add;
      } else {
        alert("Account not found!");
      }
      displayAccounts();
    }

    function withdraw() {
      let getAccountNumber = document.getElementById('accountNo').value;
      let withdrawAmount = Number(document.getElementById('withdraw').value);

      if (accounts.has(getAccountNumber)) {
        let account = accounts.get(getAccountNumber);
        if (account.Balance >= withdrawAmount) {
          account.Balance -= withdrawAmount;
        } else {
          alert("Insufficient Balance!");
        }
      } else {
        alert("Account not found!");
      }
      displayAccounts();
    }

    function displayAccounts() {
      let output = '';
      accounts.forEach((item, val) => {
        output += `<p><b>Account:</b> ${val} | <b>Name:</b> ${item.Name} | <b>Balance:</b> ${item.Balance}</p>`;
      });
      document.getElementById('ul').innerHTML = output || "No accounts yet...";
    }
*/