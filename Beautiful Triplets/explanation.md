I start by creating a counter count = 0 to keep track of how many beautiful triplets are found, I put all elements of the array into a 
Set called values so that checking if a number exists is fast.
Then I loop through each number in arr.
For every number, I check if both num + d and num + 2 * d also exist in the set.
If they do, it means (num, num + d, num + 2*d) is a beautiful triplet, so I increase the counter.
Finally, I return the counter as the total number of beautiful triplets.