### Orders of Growth
|  |  |  |
|:----|:----:|----:|
| O(1)       | Constant     | Fast |
| O(log n)   | Logarithmic  |      |
| O(n)       | Linear       |      |
| O(n log n) | Linearithmic |      |
| O(n^2)     | Quadratic    |      |
| O(n^3)     | Cubic        |      |
| O(2^n)     | Exponential  |      |
| O(n!)      | Factorial    | Slow |

### O(1) 
O(1) describes algorithms that take the same amount of time to compute regardless of the input size. <br /> 
_For instance, if a function takes the same time to process 10 or 10...0 elements, then we it has a constant growth rate or O(1)._

### O(n^2) 
O(n^2) quadratic time: Given an input of size n, the number of steps it takes to accomplish a task is square of n.

### O(log n) — Logarithmic
O(log n) logarithmic time: complexities usually apply to algorithms that divide problems in half every time.
_(Binary search)_

### O(n log n) — Linearithmic
O(n log n) linearithmic time: repeatedly divide a set of data in half, and then process those halves independently with a sub algorithm that has a time complexity of O(N), will have an overall time complexity of O(N log N).
_(Merge sort, Quicksort, Heap sort and others.)_

_______
```
let n = 16;
O(1) = 1 step  +awesome
O(log n) = 4 steps  "(awesome!)" -- assumed base 2
O(n) = 16 steps "(pretty good!)"
O(n^2) = 256 steps "(uhh..we can work with this?)"
O(2^n) = 65,536 steps "(...)"
```
_______
#### Auxiliary Space 
Auxiliary Space is the extra space or temporary space used by an algorithm. 
#### Space Complexity 
Space Complexity of an algorithm is the total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input.