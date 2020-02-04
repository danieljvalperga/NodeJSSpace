let arr = [1, 3, 5, 7, 8, 9]
let start = 0
let end = arr.length

function search(array, value, start, end) {
	if (start < 0 || end > array.length) {
		return "Invalid value start[" + start + "] end[" + end + "] for array length[" + array.length + "]"
	}

	let mid = Math.floor((start + end) / 2)

	console.log("value[" + value + "] mid[" + mid + "] arraymid[" + array[mid] + "] start[" + start + "] end[" + end + "]")

	if (array[mid] === value) {
		return "Element found!"
	} else if ((end - start) <= 0) {
		return "Element not found!"
	} else if (array[mid] > value) {
		return search(array, value, start, (mid - 1))
	} else {
		return search(array, value, (mid + 1), end)
	}
}

console.log(search(arr, 5, 0, arr.length))

module.exports = {
	search
}
