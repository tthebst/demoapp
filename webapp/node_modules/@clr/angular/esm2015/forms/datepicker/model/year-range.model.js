/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
const YEARS_TO_DISPLAY = 10;
export class YearRangeModel {
    constructor(year) {
        this.year = year;
        this.yearRange = [];
        this.generateYearRange();
    }
    /**
     * Gets the number in the middle of the range.
     */
    get middleYear() {
        return this.yearRange[Math.floor(this.yearRange.length / 2)];
    }
    /**
     * Generates the year range based on the year parameter.
     * eg: If 2018 is passed the output will be [2010, 2011, ..., 2019]
     */
    generateYearRange() {
        const remainder = this.year % YEARS_TO_DISPLAY;
        const floor = this.year - remainder;
        const ceil = floor + YEARS_TO_DISPLAY;
        this.yearRange = this.generateRange(floor, ceil);
    }
    /**
     * Function which generate a range of numbers from floor to ceil.
     */
    generateRange(floor, ceil) {
        return Array.from({ length: ceil - floor }, (v, k) => k + floor);
    }
    /**
     * Generates the YearRangeModel for the next decade.
     */
    nextDecade() {
        return new YearRangeModel(this.year + 10);
    }
    /**
     * Generates the YearRangeModel for the previous decade.
     */
    previousDecade() {
        return new YearRangeModel(this.year - 10);
    }
    /**
     * Generates the YearRangeModel for the current decade.
     */
    currentDecade() {
        return new YearRangeModel(new Date().getFullYear());
    }
    /**
     * Checks if the value is in the YearRangeModel.
     */
    inRange(value) {
        return this.yearRange.indexOf(value) > -1;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1yYW5nZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL2RhdGVwaWNrZXIvbW9kZWwveWVhci1yYW5nZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsTUFBTSxnQkFBZ0IsR0FBVyxFQUFFLENBQUM7QUFFcEMsTUFBTSxPQUFPLGNBQWM7SUFDekIsWUFBNkIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFJekMsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUh2QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBSUQ7O09BRUc7SUFDSCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7O09BR0c7SUFDSyxpQkFBaUI7UUFDdkIsTUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztRQUN2RCxNQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUM1QyxNQUFNLElBQUksR0FBVyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxhQUFhLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDL0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVO1FBQ1IsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWM7UUFDWixPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsYUFBYTtRQUNYLE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU8sQ0FBQyxLQUFhO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5jb25zdCBZRUFSU19UT19ESVNQTEFZOiBudW1iZXIgPSAxMDtcblxuZXhwb3J0IGNsYXNzIFllYXJSYW5nZU1vZGVsIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB5ZWFyOiBudW1iZXIpIHtcbiAgICB0aGlzLmdlbmVyYXRlWWVhclJhbmdlKCk7XG4gIH1cblxuICB5ZWFyUmFuZ2U6IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG51bWJlciBpbiB0aGUgbWlkZGxlIG9mIHRoZSByYW5nZS5cbiAgICovXG4gIGdldCBtaWRkbGVZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMueWVhclJhbmdlW01hdGguZmxvb3IodGhpcy55ZWFyUmFuZ2UubGVuZ3RoIC8gMildO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgeWVhciByYW5nZSBiYXNlZCBvbiB0aGUgeWVhciBwYXJhbWV0ZXIuXG4gICAqIGVnOiBJZiAyMDE4IGlzIHBhc3NlZCB0aGUgb3V0cHV0IHdpbGwgYmUgWzIwMTAsIDIwMTEsIC4uLiwgMjAxOV1cbiAgICovXG4gIHByaXZhdGUgZ2VuZXJhdGVZZWFyUmFuZ2UoKSB7XG4gICAgY29uc3QgcmVtYWluZGVyOiBudW1iZXIgPSB0aGlzLnllYXIgJSBZRUFSU19UT19ESVNQTEFZO1xuICAgIGNvbnN0IGZsb29yOiBudW1iZXIgPSB0aGlzLnllYXIgLSByZW1haW5kZXI7XG4gICAgY29uc3QgY2VpbDogbnVtYmVyID0gZmxvb3IgKyBZRUFSU19UT19ESVNQTEFZO1xuICAgIHRoaXMueWVhclJhbmdlID0gdGhpcy5nZW5lcmF0ZVJhbmdlKGZsb29yLCBjZWlsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB3aGljaCBnZW5lcmF0ZSBhIHJhbmdlIG9mIG51bWJlcnMgZnJvbSBmbG9vciB0byBjZWlsLlxuICAgKi9cbiAgcHJpdmF0ZSBnZW5lcmF0ZVJhbmdlKGZsb29yOiBudW1iZXIsIGNlaWw6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogY2VpbCAtIGZsb29yIH0sICh2LCBrKSA9PiBrICsgZmxvb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgWWVhclJhbmdlTW9kZWwgZm9yIHRoZSBuZXh0IGRlY2FkZS5cbiAgICovXG4gIG5leHREZWNhZGUoKTogWWVhclJhbmdlTW9kZWwge1xuICAgIHJldHVybiBuZXcgWWVhclJhbmdlTW9kZWwodGhpcy55ZWFyICsgMTApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgWWVhclJhbmdlTW9kZWwgZm9yIHRoZSBwcmV2aW91cyBkZWNhZGUuXG4gICAqL1xuICBwcmV2aW91c0RlY2FkZSgpOiBZZWFyUmFuZ2VNb2RlbCB7XG4gICAgcmV0dXJuIG5ldyBZZWFyUmFuZ2VNb2RlbCh0aGlzLnllYXIgLSAxMCk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSBZZWFyUmFuZ2VNb2RlbCBmb3IgdGhlIGN1cnJlbnQgZGVjYWRlLlxuICAgKi9cbiAgY3VycmVudERlY2FkZSgpOiBZZWFyUmFuZ2VNb2RlbCB7XG4gICAgcmV0dXJuIG5ldyBZZWFyUmFuZ2VNb2RlbChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgdmFsdWUgaXMgaW4gdGhlIFllYXJSYW5nZU1vZGVsLlxuICAgKi9cbiAgaW5SYW5nZSh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMueWVhclJhbmdlLmluZGV4T2YodmFsdWUpID4gLTE7XG4gIH1cbn1cbiJdfQ==