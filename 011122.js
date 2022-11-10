function cariTerbesar(a,b) {
	if (a > b) {
		return a
    } else if (a < b) {
    	return b
	}else {
		return "Nilai Sama"
	}
}

let hasil = cariTerbesar(40,40)

console.log(hasil)