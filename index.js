var katzDeliLine = []
let i = 0;
function takeANumber(line) {
  
  i++;
  line.push(i);
  return `Welcome, you are number ${i}.`
}


console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0 ) {
    var numbersAndName = "The line is currently: "
  for (let i=0; i<line.length; i++) {
    if (line.length-1 === i) {
      numbersAndName += `${i+1}. ${line[i]}`
    } else {
      numbersAndName += `${i+1}. ${line[i]}, `
    }
  }
  return numbersAndName
} else {
    return "The line is currently empty."
  }
}
