var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Q no 46
var laptop = {
    make: "hp",
    model: "xps 17",
    year: "2022",
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
laptop.describe();
// Q no 47
var laptops = [{
        make: "hp",
        model: "xps 17",
        year: "2022"
    },
    { make: "dell",
        model: "5 generation",
        year: "2021" },
    { make: "lenovo",
        model: "3 generation",
        year: "2020" },
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
// Q no 48
var setPrice1 = [500, 1000, 1500];
var setPrice2 = [2000, 2500, 3000];
var combinedSetPrice = __spreadArray(__spreadArray([], setPrice1, true), setPrice2, true).sort(function (a, b) { return a - b; });
console.log(combinedSetPrice);
