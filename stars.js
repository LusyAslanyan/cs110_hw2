<script>

const triangleStars = function (i, n) {
        if (i < n) {
                printline ("", 0, i, n)
                triangleStars (i+1, n)
        }
}

const printline = function (str, j, i, n) {
        if (j < n+1 - i) {
                return printline (str + " ", j+1, i, n)
        }

        else {
                if (j <= n+1 + i) {
                        return printline (str + "*", j+1, i, n)
                }

                else {
                        console.log (str);
                                        return "";
                        }
        }
}

triangleStars(0,5);

</script>