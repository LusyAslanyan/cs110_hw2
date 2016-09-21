<script>

const factorial = function (n) {
	if (n===0 || n===1) {
		return 1
	}
	else if (n > 1) {
		return (n * factorial (n-1))
	}
	else {
		return ""
	}
}

const F = factorial (3);
console.log (F);

</script>