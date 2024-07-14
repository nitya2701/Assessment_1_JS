//Write a JavaScript program which returns a subset of a string.

class SubsetGenerator {
    constructor(str) {
        this.str = str;
        this.result = {};
        this.generateSubsets();
    }

    generateSubsets() {
        const len = this.str.length;
        // Outer loop for starting index
        for (let i = 0; i < len; i++) {
            // Inner loop for ending index
            for (let j = i + 1; j <= len; j++) {
                // Get substring from index i to j
                const subset = this.str.slice(i, j);
                this.result[subset] = true; // Store subset in object to ensure uniqueness
            }
        }
    }

    getSubsets() {
        return Object.keys(this.result);
    }
}

const subsetGenerator = new SubsetGenerator('dog');
console.log(subsetGenerator.getSubsets());
