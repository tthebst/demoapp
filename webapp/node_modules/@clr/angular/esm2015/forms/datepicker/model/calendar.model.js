/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { getNumberOfDaysInTheMonth } from '../utils/date-utils';
import { DayModel } from './day.model';
export class CalendarModel {
    constructor(year, month) {
        this.year = year;
        this.month = month;
        this.initializeDaysInCalendar();
    }
    /**
     * Populates the days array with the DayModels in the current Calendar.
     */
    initializeDaysInCalendar() {
        const noOfDaysInCalendar = getNumberOfDaysInTheMonth(this.year, this.month);
        this.days = Array(noOfDaysInCalendar)
            .fill(null)
            .map((date, index) => {
            return new DayModel(this.year, this.month, index + 1);
        });
    }
    /**
     * Checks if the calendar passed is equal to the current calendar.
     */
    isEqual(calendar) {
        if (calendar) {
            return this.year === calendar.year && this.month === calendar.month;
        }
        return false;
    }
    /**
     * Checks if a DayModel is in the Calendar
     */
    isDayInCalendar(day) {
        if (day) {
            return this.year === day.year && this.month === day.month;
        }
        return false;
    }
    /**
     * Returns CalendarModel of the previous month.
     */
    previousMonth() {
        if (this.month === 0) {
            return new CalendarModel(this.year - 1, 11);
        }
        else {
            return new CalendarModel(this.year, this.month - 1);
        }
    }
    /**
     * Returns CalendarModel of the next month.
     */
    nextMonth() {
        if (this.month === 11) {
            return new CalendarModel(this.year + 1, 0);
        }
        else {
            return new CalendarModel(this.year, this.month + 1);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9kYXRlcGlja2VyL21vZGVsL2NhbGVuZGFyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXZDLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQTRCLElBQVksRUFBa0IsS0FBYTtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQWtCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDckUsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUlEOztPQUVHO0lBQ0ssd0JBQXdCO1FBQzlCLE1BQU0sa0JBQWtCLEdBQVcseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUM7YUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNWLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNuQixPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPLENBQUMsUUFBdUI7UUFDN0IsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDckU7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7T0FFRztJQUNILGVBQWUsQ0FBQyxHQUFhO1FBQzNCLElBQUksR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxPQUFPLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLE9BQU8sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBnZXROdW1iZXJPZkRheXNJblRoZU1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7IERheU1vZGVsIH0gZnJvbSAnLi9kYXkubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSB5ZWFyOiBudW1iZXIsIHB1YmxpYyByZWFkb25seSBtb250aDogbnVtYmVyKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRGF5c0luQ2FsZW5kYXIoKTtcbiAgfVxuXG4gIGRheXM6IERheU1vZGVsW107XG5cbiAgLyoqXG4gICAqIFBvcHVsYXRlcyB0aGUgZGF5cyBhcnJheSB3aXRoIHRoZSBEYXlNb2RlbHMgaW4gdGhlIGN1cnJlbnQgQ2FsZW5kYXIuXG4gICAqL1xuICBwcml2YXRlIGluaXRpYWxpemVEYXlzSW5DYWxlbmRhcigpOiB2b2lkIHtcbiAgICBjb25zdCBub09mRGF5c0luQ2FsZW5kYXI6IG51bWJlciA9IGdldE51bWJlck9mRGF5c0luVGhlTW9udGgodGhpcy55ZWFyLCB0aGlzLm1vbnRoKTtcbiAgICB0aGlzLmRheXMgPSBBcnJheShub09mRGF5c0luQ2FsZW5kYXIpXG4gICAgICAuZmlsbChudWxsKVxuICAgICAgLm1hcCgoZGF0ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXlNb2RlbCh0aGlzLnllYXIsIHRoaXMubW9udGgsIGluZGV4ICsgMSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGNhbGVuZGFyIHBhc3NlZCBpcyBlcXVhbCB0byB0aGUgY3VycmVudCBjYWxlbmRhci5cbiAgICovXG4gIGlzRXF1YWwoY2FsZW5kYXI6IENhbGVuZGFyTW9kZWwpIHtcbiAgICBpZiAoY2FsZW5kYXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnllYXIgPT09IGNhbGVuZGFyLnllYXIgJiYgdGhpcy5tb250aCA9PT0gY2FsZW5kYXIubW9udGg7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBEYXlNb2RlbCBpcyBpbiB0aGUgQ2FsZW5kYXJcbiAgICovXG4gIGlzRGF5SW5DYWxlbmRhcihkYXk6IERheU1vZGVsKTogYm9vbGVhbiB7XG4gICAgaWYgKGRheSkge1xuICAgICAgcmV0dXJuIHRoaXMueWVhciA9PT0gZGF5LnllYXIgJiYgdGhpcy5tb250aCA9PT0gZGF5Lm1vbnRoO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBDYWxlbmRhck1vZGVsIG9mIHRoZSBwcmV2aW91cyBtb250aC5cbiAgICovXG4gIHByZXZpb3VzTW9udGgoKTogQ2FsZW5kYXJNb2RlbCB7XG4gICAgaWYgKHRoaXMubW9udGggPT09IDApIHtcbiAgICAgIHJldHVybiBuZXcgQ2FsZW5kYXJNb2RlbCh0aGlzLnllYXIgLSAxLCAxMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgQ2FsZW5kYXJNb2RlbCh0aGlzLnllYXIsIHRoaXMubW9udGggLSAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBDYWxlbmRhck1vZGVsIG9mIHRoZSBuZXh0IG1vbnRoLlxuICAgKi9cbiAgbmV4dE1vbnRoKCk6IENhbGVuZGFyTW9kZWwge1xuICAgIGlmICh0aGlzLm1vbnRoID09PSAxMSkge1xuICAgICAgcmV0dXJuIG5ldyBDYWxlbmRhck1vZGVsKHRoaXMueWVhciArIDEsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IENhbGVuZGFyTW9kZWwodGhpcy55ZWFyLCB0aGlzLm1vbnRoICsgMSk7XG4gICAgfVxuICB9XG59XG4iXX0=