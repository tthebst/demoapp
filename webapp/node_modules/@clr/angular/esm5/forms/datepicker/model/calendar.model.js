/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { getNumberOfDaysInTheMonth } from '../utils/date-utils';
import { DayModel } from './day.model';
var CalendarModel = /** @class */ (function () {
    function CalendarModel(year, month) {
        this.year = year;
        this.month = month;
        this.initializeDaysInCalendar();
    }
    /**
     * Populates the days array with the DayModels in the current Calendar.
     */
    CalendarModel.prototype.initializeDaysInCalendar = function () {
        var _this = this;
        var noOfDaysInCalendar = getNumberOfDaysInTheMonth(this.year, this.month);
        this.days = Array(noOfDaysInCalendar)
            .fill(null)
            .map(function (date, index) {
            return new DayModel(_this.year, _this.month, index + 1);
        });
    };
    /**
     * Checks if the calendar passed is equal to the current calendar.
     */
    CalendarModel.prototype.isEqual = function (calendar) {
        if (calendar) {
            return this.year === calendar.year && this.month === calendar.month;
        }
        return false;
    };
    /**
     * Checks if a DayModel is in the Calendar
     */
    CalendarModel.prototype.isDayInCalendar = function (day) {
        if (day) {
            return this.year === day.year && this.month === day.month;
        }
        return false;
    };
    /**
     * Returns CalendarModel of the previous month.
     */
    CalendarModel.prototype.previousMonth = function () {
        if (this.month === 0) {
            return new CalendarModel(this.year - 1, 11);
        }
        else {
            return new CalendarModel(this.year, this.month - 1);
        }
    };
    /**
     * Returns CalendarModel of the next month.
     */
    CalendarModel.prototype.nextMonth = function () {
        if (this.month === 11) {
            return new CalendarModel(this.year + 1, 0);
        }
        else {
            return new CalendarModel(this.year, this.month + 1);
        }
    };
    return CalendarModel;
}());
export { CalendarModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9kYXRlcGlja2VyL21vZGVsL2NhbGVuZGFyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXZDO0lBQ0UsdUJBQTRCLElBQVksRUFBa0IsS0FBYTtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQWtCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDckUsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUlEOztPQUVHO0lBQ0ssZ0RBQXdCLEdBQWhDO1FBQUEsaUJBT0M7UUFOQyxJQUFNLGtCQUFrQixHQUFXLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO2FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDVixHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztZQUNmLE9BQU8sSUFBSSxRQUFRLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNILCtCQUFPLEdBQVAsVUFBUSxRQUF1QjtRQUM3QixJQUFJLFFBQVEsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLEtBQUssQ0FBQztTQUNyRTtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOztPQUVHO0lBQ0gsdUNBQWUsR0FBZixVQUFnQixHQUFhO1FBQzNCLElBQUksR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQ0FBYSxHQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxPQUFPLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILGlDQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLE9BQU8sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQTVERCxJQTREQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgZ2V0TnVtYmVyT2ZEYXlzSW5UaGVNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtdXRpbHMnO1xuXG5pbXBvcnQgeyBEYXlNb2RlbCB9IGZyb20gJy4vZGF5Lm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9kZWwge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgeWVhcjogbnVtYmVyLCBwdWJsaWMgcmVhZG9ubHkgbW9udGg6IG51bWJlcikge1xuICAgIHRoaXMuaW5pdGlhbGl6ZURheXNJbkNhbGVuZGFyKCk7XG4gIH1cblxuICBkYXlzOiBEYXlNb2RlbFtdO1xuXG4gIC8qKlxuICAgKiBQb3B1bGF0ZXMgdGhlIGRheXMgYXJyYXkgd2l0aCB0aGUgRGF5TW9kZWxzIGluIHRoZSBjdXJyZW50IENhbGVuZGFyLlxuICAgKi9cbiAgcHJpdmF0ZSBpbml0aWFsaXplRGF5c0luQ2FsZW5kYXIoKTogdm9pZCB7XG4gICAgY29uc3Qgbm9PZkRheXNJbkNhbGVuZGFyOiBudW1iZXIgPSBnZXROdW1iZXJPZkRheXNJblRoZU1vbnRoKHRoaXMueWVhciwgdGhpcy5tb250aCk7XG4gICAgdGhpcy5kYXlzID0gQXJyYXkobm9PZkRheXNJbkNhbGVuZGFyKVxuICAgICAgLmZpbGwobnVsbClcbiAgICAgIC5tYXAoKGRhdGUsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF5TW9kZWwodGhpcy55ZWFyLCB0aGlzLm1vbnRoLCBpbmRleCArIDEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBjYWxlbmRhciBwYXNzZWQgaXMgZXF1YWwgdG8gdGhlIGN1cnJlbnQgY2FsZW5kYXIuXG4gICAqL1xuICBpc0VxdWFsKGNhbGVuZGFyOiBDYWxlbmRhck1vZGVsKSB7XG4gICAgaWYgKGNhbGVuZGFyKSB7XG4gICAgICByZXR1cm4gdGhpcy55ZWFyID09PSBjYWxlbmRhci55ZWFyICYmIHRoaXMubW9udGggPT09IGNhbGVuZGFyLm1vbnRoO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgRGF5TW9kZWwgaXMgaW4gdGhlIENhbGVuZGFyXG4gICAqL1xuICBpc0RheUluQ2FsZW5kYXIoZGF5OiBEYXlNb2RlbCk6IGJvb2xlYW4ge1xuICAgIGlmIChkYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnllYXIgPT09IGRheS55ZWFyICYmIHRoaXMubW9udGggPT09IGRheS5tb250aDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgQ2FsZW5kYXJNb2RlbCBvZiB0aGUgcHJldmlvdXMgbW9udGguXG4gICAqL1xuICBwcmV2aW91c01vbnRoKCk6IENhbGVuZGFyTW9kZWwge1xuICAgIGlmICh0aGlzLm1vbnRoID09PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IENhbGVuZGFyTW9kZWwodGhpcy55ZWFyIC0gMSwgMTEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IENhbGVuZGFyTW9kZWwodGhpcy55ZWFyLCB0aGlzLm1vbnRoIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgQ2FsZW5kYXJNb2RlbCBvZiB0aGUgbmV4dCBtb250aC5cbiAgICovXG4gIG5leHRNb250aCgpOiBDYWxlbmRhck1vZGVsIHtcbiAgICBpZiAodGhpcy5tb250aCA9PT0gMTEpIHtcbiAgICAgIHJldHVybiBuZXcgQ2FsZW5kYXJNb2RlbCh0aGlzLnllYXIgKyAxLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBDYWxlbmRhck1vZGVsKHRoaXMueWVhciwgdGhpcy5tb250aCArIDEpO1xuICAgIH1cbiAgfVxufVxuIl19