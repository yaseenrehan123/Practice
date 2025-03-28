import * as moneyUtil from '../utils/money.js';

if(moneyUtil.formatCurrency(2095) === '20.95'){
    console.log("Passed");
}
else{
    console.log("Failed");
}