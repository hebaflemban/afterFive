/********************************** Python questions **********************************/

/** 1 **
 *
 * write a function that takes a list as an argument, and returns  an array of each element and its multiplication by 9
 * ex: Multi([1,2,3,4,5]) ===> [[1,9],[2,18],[3,27],.....]
 */

/** 2 **
 *
 * BubbleSort([20, -10, -10, 2, 4, 299]]) ==> [-10, -10, 2, 4, 20, 299]
 */

/** 3 **
 *
 * Write a function commonCharacters(str1, str2) which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in str1. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

/** 4 **
 *
 * Given an array of integers, return indices of the two numbers such that they add up to
 * a specific target.
 * You may assume that each input would have exactly one solution.
 * Example:
 * var nums = [2, 7, 11, 15], target = 9,
 * twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
 **/

/** 5 **
 *
 * class Stack:
 *   def __init__(self):
 *      self.items = []
 *   def isEmpty(self):
 *      return self.items == []
 *   def push(self, item):
 *     self.items.append(item)
 *     return self.items
 *   def pop(self):
 *    if self.items == []:
 *       return 0
 *   self.items.pop()
 *
 * def size(self):
 *    return len(self.items)
 * def getStackItems(self):
 *   return self.items
 *
 * write a function to reverse a string using the Stack.
 * def reverse(string):
 **/

/**
 * Write a function that receives an array and returns a set of each element of the array and how many times it is repeated.
 * ex:
 * print(repeated([1,1,2,3,4,3,4,4,4]) === > {1: 2 , 2:1, 3:2, 4:3}
 **/

/********************************** JS questions **********************************/

/** 1 **
 *
 * Create a function that takes a number as an argument.
 * Add up all the numbers from 1 to the number you passed to the function.
 * For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
 *
 * addUp(4) ➞ 10
 *
 * addUp(13) ➞ 91
 *
 * addUp(600) ➞ 180300
 *
 * Expect any positive number between 1 and 1000.
 **/

/** 2 **
 *
 * In this challenge you will be given a relation between two numbers, written as a string.
 *
 * Here are some example inputs:
 *
 * isTrue("2=2") ➞ true
 *
 * isTrue("8<7") ➞ false
 *
 * isTrue("5=13") ➞ false
 *
 * isTrue("15>4") ➞ true
 *
 * Tests will only have three types of relations: =, >, and <
 * Many approaches work here, but the eval() function is particularly useful!
 **/

/** 3 **
 *
 * A salesman has a number of cities to visit.
 * They want to calculate the total number of possible paths they could take,
 * visiting each city once before returning home.
 * Return the total number of possible paths a salesman can travel, given n cities.
 *
 * If we have cities A, B and C, possible paths would be:
 *
 * A -> B -> C
 * A -> C -> B
 * B -> A -> C
 * B -> C -> A
 * C -> B -> A
 * C -> A -> B
 * ... which gives us 6 as the possible number of paths.
 *
 * Examples
 *
 * paths(4) ➞ 24
 *
 * paths(1) ➞ 1
 *
 * paths(9) ➞ 362880
 *
 * Hint : Factorial
 **/

/** 4 **
 *
 * Create a function that takes two numbers as arguments (num, length)
 * and returns an array of multiples of num up to length.
 *
 * Examples
 * arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
 *
 * arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
 *
 * arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
 *
 * Notes: Notice that num is also included in the returned array.
 **/

/** 5 **
 *
 * Create a function that takes an array of numbers and
 * return "Boom!" if the number 7 appears in the array.
 * Otherwise, return "there is no 7 in the array".
 *
 * sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
 *
 * sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
 *
 * sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
 **/

/** 6 **
 *
 * Given a string, reverse all the words which have odd length.
 * The even length words are not changed.
 *
 * reverseOdd("Bananas") ➞ "sananaB"
 *
 * reverseOdd("One two three four") ➞ "enO owt eerht four"
 *
 * reverseOdd("Make sure uoy only esrever sdrow of ddo length") ➞ "Make sure you only reverse words of odd length"
 **/

/** 7 **
 *
 * Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
 *
 * Examples
 * insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"
 *
 * insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"
 *
 * insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History" /
 **/

/** 8 **
 * Create a function that returns the sum of missing numbers.
 *
 * sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29
 * ( 2 + 4 + 6 + 8 + 9 )
 *
 * sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29
 *
 * sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575
 *
 **/

/** 9 **
 *
 * Create a function that takes an array of integers arr
 * and sort the elements of the array by decreasing frequency of the elements.
 * If two elements have the same frequency, sort them by increasing value.
 *
 * Examples
 * sortFreq([2, 3, 5, 3, 7, 9, 5, 3, 7]) ➞ [3, 3, 3, 5, 5, 7, 7, 2, 9]
 *
 * sortFreq([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]) ➞ [1, 1, 1, 0, 0, 6, 6, 8, 8, 2, 3, 5, 9]
 *
 * sortFreq([4, 4, 2, 5, 1, 1, 3, 3, 2, 8]) ➞ [1, 1, 2, 2, 3, 3, 4, 4, 5, 8]
 */

/** 10 **
 * Create a function that returns true when num1 is equal to num2; otherwise return false.
 *
 * Examples
 * isSameNum(4, 8) ➞ false
 *
 * isSameNum(2, 2) ➞  true
 *
 * isSameNum(2, "2") ➞ false
 **/

/** 11 **
 *
 * An array is positive dominant if it contains strictly more unique positive values than unique negative values.
 * Write a function that returns true if an array is positive dominant.
 *
 * Examples
 * isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
 * there is only 1 unique positive value (1)
 * there are 2 unique negative values (-3, -4)
 *
 * isPositiveDominant([5, 99, 832, -3, -4]) ➞ true
 *
 * isPositiveDominant([5, 0]) ➞ true
 *
 * isPositiveDominant([0, -4, -1]) ➞ false
 *
 * Notes: 0 counts as neither a positive nor a negative value.
 * */

/** 12 **
 *
 * Given any number, we can create a new number by adding the sums of squares of digits of that number.
 * For example, given 203, our new number is 4 + 0 + 9 = 13.
 * If we repeat this process, we get a sequence of numbers:
 * 203 -> 13 -> 10 -> 1 -> 1
 * Sometimes, like with 203, the sequence reaches (and stays at) 1. Numbers like this are called happy.
 *
 * Not all numbers are happy. If we started with 11, the sequence would be:
 *
 * 11 -> 2 -> 4 -> 16 -> ...
 *
 * This sequence will never reach 1, and so the number 11 is called unhappy.
 *
 * Given a positive whole number, you have to determine whether that number is happy or unhappy.
 *
 * Examples
 * happy(203) ➞ true
 *
 * happy(11) ➞ false
 *
 * happy(107) ➞ false
 *
 * Notes:
 * You can assume (and it is actually true!) that all positive whole numbers are either happy or unhappy.
 * Any happy number will have a 1 in its sequence, and every unhappy number will have a 4 in its sequence.
 * The only numbers passed to your function will be positive whole numbers.
 */

/** 13 **
 *
 * In number theory, a prime number is balanced if it is equidistant from the prime before it and the prime after it.
 * It is therefore the arithmetic mean of those primes.
 *
 * For example,
 * 5 is a balanced prime, two units away from 3, and two from 7.
 * 211 is 12 units away from the previous prime, 199, and 12 away from the next, 223.
 *
 * A prime that is greater than the arithmetic mean of the primes before and after it is called a strong prime.
 * It is closer to the prime after it than the one before it.
 *
 * For example,
 * the strong prime 17 is closer to 19 than it is to 13 (see note at bottom).
 *
 * A prime that is lesser than the arithmetic mean of the primes before and after it is called weak prime.
 *
 * For example, 19.
 *
 * Create a function that takes a prime number as input and returns
 * "Strong" if it is a strong prime,
 * "Weak" if it is a weak prime, or
 * "Balanced".
 *
 * Examples
 * primalStrength(211) ➞ "Balanced"
 *
 * primalStrength(17) ➞ "Strong"
 *
 * primalStrength(19) ➞ "Weak"
 *
 * Notes
 * This definition of strong primes is not to be confused with strong primes as defined in cryptography,
 * which are much more complicated than this. You are all welcome to make a challenge based on cryptographically strong primes.
 */
