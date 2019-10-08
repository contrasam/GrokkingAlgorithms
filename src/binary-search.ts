import { maybe, Maybe } from "folktale"

export default function binarySearch(sortedArr: Array<number>): (item: number) => Maybe<number>  {
    return (item: number) => {
        return _binarySearch(sortedArr, item, 0, sortedArr.length - 1);
    };
}

function _binarySearch(sortedArr: Array<number>, item: number, low: number, high: number): Maybe<number> {
    if (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = sortedArr[mid];
        if (guess === item) {
            return maybe.Just(mid);
        } else if (guess > item) {
            return _binarySearch(sortedArr, item, low, mid - 1);
        } else {
            return _binarySearch(sortedArr, item, mid + 1, high);
        }
    } else {
        return maybe.Nothing();
    }
}
