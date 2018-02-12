const map = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i']
};

const input = '23';

function main(input) {
    const inputList = input.split('');
    const result = [];
    add(result, '', inputList.length, 0, inputList);
    return result;

}

function add(result, curr, length, index, inputList) {
    if (index === length) {
        if (curr !== '') {
            result.push(curr);
        }
        return;
    }
    for (let i = 0, len = map[inputList[index]].length; i < len; i++) {
        add(result, curr + map[inputList[index]][i], length, index + 1, inputList);
    }
}
