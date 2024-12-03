# Day 1: Historian Hysteria

## Part One

**Sort the Lists**: Sort both the left and right lists of numbers in ascending order.

**Pair the Numbers**: Pair each number in the sorted left list with the corresponding number in the sorted right list based on their order.

**Calculate Distances**: For each pair, calculate the distance by subtracting the smaller number from the larger one.

**Sum the Distances**: Add up all the distances to find the total distance between the two lists.

```text
3 4
4 3
2 5
1 3
3 9
3 3
```

**Sorted lists**:

- Sorted Left: 1, 2, 3, 3, 3, 4
- Sorted Right: 3, 3, 3, 4, 5, 9

**Pair and calculate distances**:

- Pair (1, 3): Distance = 2
- Pair (2, 3): Distance = 1
- Pair (3, 3): Distance = 0
- Pair (3, 4): Distance = 1
- Pair (3, 5): Distance = 2
- Pair (4, 9): Distance = 5

**Total distance** = 2 + 1 + 0 + 1 + 2 + 5 = 11

## Part Two

**Count Occurrences in Right List**: Create a frequency map for the numbers in the right list. This map will store each number as a key and the number of times it appears as its value.

**Calculate Similarity Score**: For each number in the left list, check how many times it appears in the right list using the frequency map:

- Multiply the number by its frequency in the right list.
- Add the result to the similarity score.

**Summarize the Process**:

- Iterate over each number in the left list.
- Use the frequency map to determine how often the number appears in the right list.
- Calculate and add the contribution of each number to the total similarity score.

```text
3   4
4   3
2   5
1   3
3   9
3   3
```

**Frequency Map for Right List**:

3 appears 3 times
4 appears 1 time
5, 9 appear 1 time each

**Calculate Similarity Score**:

3 in left list: Appears 3 times in right list → Contribution = 3 x 3 = 9
4 in left list: Appears 1 time in right list → Contribution = 4 x 1 = 4
2 in left list: Appears 0 times in right list → Contribution = 2 x 0 = 0
1 in left list: Appears 0 times in right list → Contribution = 1 x 0 = 0
3 in left list: Appears 3 times in right list → Contribution = 3 x 3 = 9
3 in left list: Appears 3 times in right list → Contribution = 3 x 3 = 9

**Total Similarity Score**:

Sum of all contributions: 9 + 4 + 0 + 0 + 9 + 9 = 31
