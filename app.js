
const accounts = new Map();
// createaccount 
function createAccount(){let getName = document.getElementById('accountHolderName').value;
      let getAccountNumber = document.getElementById('accountNo').value;
      let getBalance = Number(document.getElementById('initialBalance').value);
    
    accounts.set(getAccountNumber,{Name : getName, Balance : getBalance});
    displayAccounts();
    
    }
// deposit 
function deposit(){ let getAccountNumber = document.getElementById('accountNo').value;
      let add = Number(document.getElementById('addBalance').value);
if(accounts.has(getAccountNumber)){accounts.get(getAccountNumber).Balance += add;}
else{alert('No account found')}


displayAccounts()

    }
// withdraw 
function withdraw(){let getAccountNumber = document.getElementById('accountNo').value;
      let withdrawAmount = Number(document.getElementById('withdraw').value);
    if(accounts.has(getAccountNumber)){let account = accounts.get(getAccountNumber);
      if(account.Balance >= withdrawAmount){account.Balance = account.Balance -withdrawAmount;}
      else{alert('Insufficient Balance')}
    }
  else{alert('No account was found')}
displayAccounts()}


    // display account details 
    function displayAccounts(){let output = '';
      accounts.forEach((item,val)=>{output += `<p><br>Account:</b> ${val} | <b>Name:</b> ${item.Name} | <b>Balance</b> ${item.Balance}</p>`})
      document.getElementById('ul').innerHTML = output || 'No accounts yet...';
    }