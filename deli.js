function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.splice(0,1) + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var string = "The line is currently:";
    katzDeliLine.forEach(function(person, index) {
      var number = index + 1;
      string = string + " " + number + ". " + person + ",";
    });
    return string.slice(0,(string.length-1));
  }
}
