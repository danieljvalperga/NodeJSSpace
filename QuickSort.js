
function quickSort(array) {
	if (array.length <= 1) {
		return array
	} else {
		const left = []
		const right = []
		const sorted = []
		const pivot = array.pop()
		const len = array.length

		for (let i = 0; i < array.length; i++) {
			if (array[i] <= pivot) {
				left.push(array[i])
			} else {
				right.push(array[i])
			}
		}

		return sorted.concat(quickSort(left), pivot, quickSort(right))
	}
}

const array = [4, 2, 3, 1, 5]
const sorted = quickSort(array)
console.log(sorted)
