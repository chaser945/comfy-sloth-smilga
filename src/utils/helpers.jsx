export const uniqueValues = (data, type) => {
  let allValues = data.map((item) => item[type])
  // console.log(allValues)
  if (type === "colors") {
    allValues = allValues.flat()
    // console.log(allValues)
  }
  const uniqueValues = [...new Set(allValues)]
  // console.log(uniqueValues)
  return uniqueValues
}

export const formatPrice = (price) => {
  const newPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100)
  return newPrice
}
