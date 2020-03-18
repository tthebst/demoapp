/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var YEARS_TO_DISPLAY = 10;
var YearRangeModel = /** @class */ (function () {
    function YearRangeModel(year) {
        this.year = year;
        this.yearRange = [];
        this.generateYearRange();
    }
    Object.defineProperty(YearRangeModel.prototype, "middleYear", {
        /**
         * Gets the number in the middle of the range.
         */
        get: function () {
            return this.yearRange[Math.floor(this.yearRange.length / 2)];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Generates the year range based on the year parameter.
     * eg: If 2018 is passed the output will be [2010, 2011, ..., 2019]
     */
    YearRangeModel.prototype.generateYearRange = function () {
        var remainder = this.year % YEARS_TO_DISPLAY;
        var floor = this.year - remainder;
        var ceil = floor + YEARS_TO_DISPLAY;
        this.yearRange = this.generateRange(floor, ceil);
    };
    /**
     * Function which generate a range of numbers from floor to ceil.
     */
    YearRangeModel.prototype.generateRange = function (floor, ceil) {
        return Array.from({ length: ceil - floor }, function (v, k) { return k + floor; });
    };
    /**
     * Generates the YearRangeModel for the next decade.
     */
    YearRangeModel.prototype.nextDecade = function () {
        return new YearRangeModel(this.year + 10);
    };
    /**
     * Generates the YearRangeModel for the previous decade.
     */
    YearRangeModel.prototype.previousDecade = function () {
        return new YearRangeModel(this.year - 10);
    };
    /**
     * Generates the YearRangeModel for the current decade.
     */
    YearRangeModel.prototype.currentDecade = function () {
        return new YearRangeModel(new Date().getFullYear());
    };
    /**
     * Checks if the value is in the YearRangeModel.
     */
    YearRangeModel.prototype.inRange = function (value) {
        return this.yearRange.indexOf(value) > -1;
    };
    return YearRangeModel;
}());
export { YearRangeModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1yYW5nZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL2RhdGVwaWNrZXIvbW9kZWwveWVhci1yYW5nZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsSUFBTSxnQkFBZ0IsR0FBVyxFQUFFLENBQUM7QUFFcEM7SUFDRSx3QkFBNkIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFJekMsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUh2QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBT0Qsc0JBQUksc0NBQVU7UUFIZDs7V0FFRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDOzs7T0FBQTtJQUVEOzs7T0FHRztJQUNLLDBDQUFpQixHQUF6QjtRQUNFLElBQU0sU0FBUyxHQUFXLElBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7UUFDdkQsSUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDNUMsSUFBTSxJQUFJLEdBQVcsS0FBSyxHQUFHLGdCQUFnQixDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOztPQUVHO0lBQ0ssc0NBQWEsR0FBckIsVUFBc0IsS0FBYSxFQUFFLElBQVk7UUFDL0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsS0FBSyxFQUFULENBQVMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7T0FFRztJQUNILG1DQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsdUNBQWMsR0FBZDtRQUNFLE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQ0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0NBQU8sR0FBUCxVQUFRLEtBQWE7UUFDbkIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5jb25zdCBZRUFSU19UT19ESVNQTEFZOiBudW1iZXIgPSAxMDtcblxuZXhwb3J0IGNsYXNzIFllYXJSYW5nZU1vZGVsIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB5ZWFyOiBudW1iZXIpIHtcbiAgICB0aGlzLmdlbmVyYXRlWWVhclJhbmdlKCk7XG4gIH1cblxuICB5ZWFyUmFuZ2U6IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG51bWJlciBpbiB0aGUgbWlkZGxlIG9mIHRoZSByYW5nZS5cbiAgICovXG4gIGdldCBtaWRkbGVZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMueWVhclJhbmdlW01hdGguZmxvb3IodGhpcy55ZWFyUmFuZ2UubGVuZ3RoIC8gMildO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgeWVhciByYW5nZSBiYXNlZCBvbiB0aGUgeWVhciBwYXJhbWV0ZXIuXG4gICAqIGVnOiBJZiAyMDE4IGlzIHBhc3NlZCB0aGUgb3V0cHV0IHdpbGwgYmUgWzIwMTAsIDIwMTEsIC4uLiwgMjAxOV1cbiAgICovXG4gIHByaXZhdGUgZ2VuZXJhdGVZZWFyUmFuZ2UoKSB7XG4gICAgY29uc3QgcmVtYWluZGVyOiBudW1iZXIgPSB0aGlzLnllYXIgJSBZRUFSU19UT19ESVNQTEFZO1xuICAgIGNvbnN0IGZsb29yOiBudW1iZXIgPSB0aGlzLnllYXIgLSByZW1haW5kZXI7XG4gICAgY29uc3QgY2VpbDogbnVtYmVyID0gZmxvb3IgKyBZRUFSU19UT19ESVNQTEFZO1xuICAgIHRoaXMueWVhclJhbmdlID0gdGhpcy5nZW5lcmF0ZVJhbmdlKGZsb29yLCBjZWlsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB3aGljaCBnZW5lcmF0ZSBhIHJhbmdlIG9mIG51bWJlcnMgZnJvbSBmbG9vciB0byBjZWlsLlxuICAgKi9cbiAgcHJpdmF0ZSBnZW5lcmF0ZVJhbmdlKGZsb29yOiBudW1iZXIsIGNlaWw6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogY2VpbCAtIGZsb29yIH0sICh2LCBrKSA9PiBrICsgZmxvb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgWWVhclJhbmdlTW9kZWwgZm9yIHRoZSBuZXh0IGRlY2FkZS5cbiAgICovXG4gIG5leHREZWNhZGUoKTogWWVhclJhbmdlTW9kZWwge1xuICAgIHJldHVybiBuZXcgWWVhclJhbmdlTW9kZWwodGhpcy55ZWFyICsgMTApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgWWVhclJhbmdlTW9kZWwgZm9yIHRoZSBwcmV2aW91cyBkZWNhZGUuXG4gICAqL1xuICBwcmV2aW91c0RlY2FkZSgpOiBZZWFyUmFuZ2VNb2RlbCB7XG4gICAgcmV0dXJuIG5ldyBZZWFyUmFuZ2VNb2RlbCh0aGlzLnllYXIgLSAxMCk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSBZZWFyUmFuZ2VNb2RlbCBmb3IgdGhlIGN1cnJlbnQgZGVjYWRlLlxuICAgKi9cbiAgY3VycmVudERlY2FkZSgpOiBZZWFyUmFuZ2VNb2RlbCB7XG4gICAgcmV0dXJuIG5ldyBZZWFyUmFuZ2VNb2RlbChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgdmFsdWUgaXMgaW4gdGhlIFllYXJSYW5nZU1vZGVsLlxuICAgKi9cbiAgaW5SYW5nZSh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMueWVhclJhbmdlLmluZGV4T2YodmFsdWUpID4gLTE7XG4gIH1cbn1cbiJdfQ==