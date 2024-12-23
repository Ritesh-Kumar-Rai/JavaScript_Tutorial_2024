// reduce() method returns one value by adding up all values together, it accepts initial
// value which is called accumulator which is used for first time to add on current value

const cart_of_prices = [100,200,100];

const sum = cart_of_prices.reduce((accumulator, current_value)=>{
    return accumulator + current_value;
},0); // 0 is initial value passed to accumulator

console.log(`sum of items is ${sum}`);


const gst = 0.18; // GST 18%

const gst_amount = sum * gst;
const total_amount = sum + gst_amount;
console.log(`GST amount of 18% : ${gst_amount} and final amount ${total_amount}`);

