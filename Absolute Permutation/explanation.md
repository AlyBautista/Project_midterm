The function builds a permutation of numbers 1 to n such that the absolute difference between each element’s value and position is exactly k. 
If k = 0, it just returns the sequence 1…n. If n is not divisible by 2k, no valid permutation exists, so it returns [-1]. 
Otherwise, it alternates adding and subtracting k in blocks of size k to construct the valid permutation.