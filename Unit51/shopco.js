
const shopName = "tech world";
const customerName = "Thandi Mokoena";

// --- ITEMS ---
const Laptop = "Asus Laptop";
const Headphones  = "JBL Earphones";
const Mouse       = "Valcaono Mouse";

 
const Laptop_price     = 1200;
const Headphones_price = 150;
const Mouse_price      = 25;

 

// --- CART ---

let cartItem1      = Laptop;
let cartItem1Price = Laptop_price;
let cartItem2      = Headphones;
let cartItem2Price = Headphones_price;
let cartItem3      = Mouse;
let cartItem3Price = Mouse_price;

 

// --- DISCOUNTS & TOTALS ---

let loyaltyDiscount   = 500;
let subtotal          = cartItem1Price + cartItem2Price + cartItem3Price;
let discountedTotal   = subtotal - loyaltyDiscount;
const VAT_RATE        = 0.15;
let vatAmount         = discountedTotal * VAT_RATE;
let finalTotal        = discountedTotal + vatAmount;
let savingsPercentage = ((loyaltyDiscount / subtotal) * 100).toFixed(2);

 

// --- CUSTOMER ACCOUNT INFO ---

const customerAge     = 19;

const accountBalance  = 18500;

const isVerified      = true;

const hasDeliveryAddr = true;

const creditScore     = 720;

const paymentMethod   = "card";

 

// --- ORDER LOGIC ---

let afford             = accountBalance >= finalTotal;

let isAdult            = customerAge >= 18;

let hasGoodCredit      = creditScore >= 650;

let usesCard           = paymentMethod === "card";

let usesCash           = paymentMethod === "cash";

let usesValidMethod    = usesCard || usesCash;

 

let orderCanProcess    = isVerified && hasDeliveryAddr && afford && isAdult && hasGoodCredit && usesValidMethod;

let isEligibleForFinance = !afford && hasGoodCredit && usesCard;

 

// --- RECEIPT ---

console.log(`

${shopName.toUpperCase()} RECEIPT

 

Customer: ${customerName.charAt(0).toUpperCase() + customerName.slice(1)}

 

Items:

${cartItem1} - R${cartItem1Price}

${cartItem2} - R${cartItem2Price}

${cartItem3} - R${cartItem3Price}

 

Subtotal: R${subtotal}

Loyalty Discount: -R${loyaltyDiscount}

VAT (15%): R${vatAmount}

Final Total: R${finalTotal}

 

You saved ${savingsPercentage}%!

 

Order Status:

${orderCanProcess ? "Order approved" : isEligibleForFinance ? "Eligible for financing options" : "Order declined"}

 

Footer:

Final Total type: ${typeof finalTotal}

OrderCanProcess type: ${typeof orderCanProcess}

`);

 

