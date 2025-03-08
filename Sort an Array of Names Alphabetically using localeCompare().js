function sortNames(namesArray) {
    return namesArray.sort((a, b) => a.localeCompare(b))
  }
  let names = ["Charlie", "Alice", "Bob"]
  let sortedNames = sortNames(names)
  console.log(sortedNames)