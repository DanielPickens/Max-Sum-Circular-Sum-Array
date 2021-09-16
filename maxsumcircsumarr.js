var maxSubarraySumCircular = function(nums) {
     const max_Sum = maxSumByKadane(nums);
        if (max_Sum < 0)
            return max_Sum;
        let arr_sum = 0;
        for (let i = 0; i < nums.length; i++) {
            arr_sum += nums[i];
            nums[i] =- nums[i];   // Inverting array.
        }
        let max_circuler = arr_sum+maxSumByKadane(nums);
        return Math.max(max_Sum,max_circuler);
    }
     const maxSumByKadane = function(arr) {
        let res = arr[0], maxEnding = arr[0];
        for (let i = 1; i < arr.length; i++) {
            maxEnding = Math.max(arr[i], maxEnding + arr[i]);
            res = Math.max(res, maxEnding);
        }
        return res;
    }
     
     
     /*
     Runtime: 84 ms, faster than 81.43% of JavaScript online submissions for Maximum Sum Circular Subarray.
Memory Usage: 46.7 MB, less than 18.57% of JavaScript online submissions for Maximum Sum Circular Subarray.

*/
