// insert SC : o(n), if 5 letter it will take 5 nodes x 26 (or more depending on char set) letter each but this 26 is constant
// insert TC = o(n)

// search SC = o(1)
// search TC = o(n)

class TrieNode {
    constructor(){
        this.links = {}
        this.isEndNode = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let i=0; i<word.length; i++) {
            const letter = word[i];
            if (!node.links[letter]) {
                node.links[letter] = new TrieNode();
            }
            node = node.links[letter]
        }
        node.isEndNode = true;
    }

    exactSearch(word) {
        let node = this.root;
        for (let i=0; i<word.length; i++) {
            const letter = word[i];
            if (!node.links[letter]) return 'not found'
            else {
                node = node.links[letter]
            }
        }
        if (!node.isEndNode) return 'not found'
        else return 'found'
    }

    // similarly can be prefix search
}

const trie = new Trie();

// Test 1: Basic Insertion & Search
trie.insert("apple");
console.log(trie.exactSearch("apple")); // Expected: 'found'
console.log(trie.exactSearch("app"));   // Expected: 'not found' (since "app" is only a prefix, not a full word)

console.log('\n')
// Test 2: Searching for a word that was never inserted
console.log(trie.exactSearch("banana")); // Expected: 'not found'
console.log('\n')
// Test 3: Inserting multiple words & searching them
trie.insert("app");
console.log(trie.exactSearch("app"));   // Expected: 'found'
console.log(trie.exactSearch("appl"));  // Expected: 'not found'
console.log('\n')
// Test 4: Case Sensitivity Check
trie.insert("Tree");
console.log(trie.exactSearch("tree")); // Expected: 'not found' (since "Tree" ≠ "tree")
console.log(trie.exactSearch("Tree")); // Expected: 'found'
console.log('\n')
// Test 5: Edge Case - Empty String Insertion
trie.insert("");
console.log(trie.exactSearch("")); // Expected: 'found' (if empty strings are allowed)
