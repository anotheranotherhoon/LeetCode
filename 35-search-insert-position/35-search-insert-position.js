var searchInsert = function (nums, target) {
    let s = 0;
    let e = nums.length;

    while (s < e) {
        const m = Math.floor((s + e) / 2);

        if (nums[m] < target) {
            s = m + 1;
        } else {
            e = m;
        }
    }

    return s;
};