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
  let newArr = drivers.concat(name)
  return newArr
}

function prependDriver (name) {
   let newArr = [name,...drivers]
  return newArr
}

function removeFirstDriver () {
  
}

function removeLastDriver () {
  
}
