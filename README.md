# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

I submitted this work Fall 2024. 

I used the slides and video from class to look at how merge works and how it sorts and looked at the runtime analysis from the slides. The TA helped me in office hours with runtime analysis. I also used https://www.geeksforgeeks.org/time-and-space-complexity-analysis-of-merge-sort/ to look over the analysis of recursive mergesort. While looking at runtimes for for loops I used https://www.geeksforgeeks.org/how-to-analyse-loops-for-complexity-analysis-of-algorithms/. 
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

In the first for loop, we say how many elements should be in the current "subarrays", which essentially comparative to recursive mergesort is our "separated array" that then keeps making the "subarrays" bigger as we merge and is equal to $log2(n)$. Our then second for loop just moves through each "subarray", to merge using nested loops. In this for loop, we compare the first elements to the next few elements which is done by nested for loops, which would give us a complexity of $n^2$. While in the recursive mergesort this is only n, there is not nested for loops in the merge function hence why it is different. The inplace method moves this up to $n^2$ since we have to work in the same array. With this, our worst run time complexity would be $\Theta(n^2log2(n))$.
