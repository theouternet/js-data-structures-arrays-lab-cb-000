const drivers = ["Milo",'Otis','Garfield']

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() { 
 drivers.shift()
}

function appendDriver (name) {
  let newArr = drivers.push(name)
}

function prependDriver (name) {
 
}

function removeFirstDriver () {
  
}

function removeLastDriver () {
  
}
