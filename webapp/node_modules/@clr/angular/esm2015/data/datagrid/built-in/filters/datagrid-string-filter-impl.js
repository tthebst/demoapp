/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Subject } from 'rxjs';
import { DatagridPropertyStringFilter } from './datagrid-property-string-filter';
export class DatagridStringFilterImpl {
    constructor(filterFn) {
        this.filterFn = filterFn;
        /**
         * The Observable required as part of the Filter interface
         */
        this._changes = new Subject();
        /**
         * Raw input value
         */
        this._rawValue = '';
        /**
         * Input value converted to lowercase
         */
        this._lowerCaseValue = '';
    }
    // We do not want to expose the Subject itself, but the Observable which is read-only
    get changes() {
        return this._changes.asObservable();
    }
    get value() {
        return this._rawValue;
    }
    get lowerCaseValue() {
        return this._lowerCaseValue;
    }
    /**
     * Common setter for the input value
     */
    set value(value) {
        if (!value) {
            value = '';
        }
        if (value !== this._rawValue) {
            this._rawValue = value;
            this._lowerCaseValue = value.toLowerCase().trim();
            this._changes.next(value);
        }
    }
    /**
     * Indicates if the filter is currently active, meaning the input is not empty
     */
    isActive() {
        return !!this.value;
    }
    /**
     * Tests if an item matches a search text
     */
    accepts(item) {
        // We always test with the lowercase value of the input, to stay case insensitive
        return this.filterFn.accepts(item, this.lowerCaseValue);
    }
    get state() {
        if (this.filterFn instanceof DatagridPropertyStringFilter) {
            return {
                property: this.filterFn.prop,
                value: this.value,
            };
        }
        return this;
    }
    equals(other) {
        if (other instanceof DatagridStringFilterImpl) {
            if (other.filterFn instanceof DatagridPropertyStringFilter) {
                return (this.filterFn instanceof DatagridPropertyStringFilter &&
                    other.filterFn.prop === this.filterFn.prop &&
                    other.value === this.value);
            }
            return other === this;
        }
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtc3RyaW5nLWZpbHRlci1pbXBsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9idWlsdC1pbi9maWx0ZXJzL2RhdGFncmlkLXN0cmluZy1maWx0ZXItaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0gsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUczQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVqRixNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLFlBQW1CLFFBQTZDO1FBQTdDLGFBQVEsR0FBUixRQUFRLENBQXFDO1FBRWhFOztXQUVHO1FBQ0ssYUFBUSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFNekM7O1dBRUc7UUFDSyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBSS9COztXQUVHO1FBQ0ssb0JBQWUsR0FBVyxFQUFFLENBQUM7SUFyQjhCLENBQUM7SUFNcEUscUZBQXFGO0lBQ3JGLElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQU1ELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBS0QsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0Q7O09BRUc7SUFDSCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ1o7UUFDRCxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksUUFBUTtRQUNiLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksT0FBTyxDQUFDLElBQU87UUFDcEIsaUZBQWlGO1FBQ2pGLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ2QsSUFBSSxJQUFJLENBQUMsUUFBUSxZQUFZLDRCQUE0QixFQUFFO1lBQ3pELE9BQU87Z0JBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtnQkFDNUIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ2xCLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUF5QztRQUNyRCxJQUFJLEtBQUssWUFBWSx3QkFBd0IsRUFBRTtZQUM3QyxJQUFJLEtBQUssQ0FBQyxRQUFRLFlBQVksNEJBQTRCLEVBQUU7Z0JBQzFELE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUSxZQUFZLDRCQUE0QjtvQkFDckQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO29CQUMxQyxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQzNCLENBQUM7YUFDSDtZQUNELE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQztTQUN2QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE5IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRGaWx0ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2ZpbHRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRTdHJpbmdGaWx0ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3N0cmluZy1maWx0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhdGFncmlkUHJvcGVydHlTdHJpbmdGaWx0ZXIgfSBmcm9tICcuL2RhdGFncmlkLXByb3BlcnR5LXN0cmluZy1maWx0ZXInO1xuXG5leHBvcnQgY2xhc3MgRGF0YWdyaWRTdHJpbmdGaWx0ZXJJbXBsPFQgPSBhbnk+IGltcGxlbWVudHMgQ2xyRGF0YWdyaWRGaWx0ZXJJbnRlcmZhY2U8VD4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlsdGVyRm46IENsckRhdGFncmlkU3RyaW5nRmlsdGVySW50ZXJmYWNlPFQ+KSB7fVxuXG4gIC8qKlxuICAgKiBUaGUgT2JzZXJ2YWJsZSByZXF1aXJlZCBhcyBwYXJ0IG9mIHRoZSBGaWx0ZXIgaW50ZXJmYWNlXG4gICAqL1xuICBwcml2YXRlIF9jaGFuZ2VzID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAvLyBXZSBkbyBub3Qgd2FudCB0byBleHBvc2UgdGhlIFN1YmplY3QgaXRzZWxmLCBidXQgdGhlIE9ic2VydmFibGUgd2hpY2ggaXMgcmVhZC1vbmx5XG4gIHB1YmxpYyBnZXQgY2hhbmdlcygpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJhdyBpbnB1dCB2YWx1ZVxuICAgKi9cbiAgcHJpdmF0ZSBfcmF3VmFsdWU6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd1ZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBJbnB1dCB2YWx1ZSBjb252ZXJ0ZWQgdG8gbG93ZXJjYXNlXG4gICAqL1xuICBwcml2YXRlIF9sb3dlckNhc2VWYWx1ZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBnZXQgbG93ZXJDYXNlVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvd2VyQ2FzZVZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBDb21tb24gc2V0dGVyIGZvciB0aGUgaW5wdXQgdmFsdWVcbiAgICovXG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcmF3VmFsdWUpIHtcbiAgICAgIHRoaXMuX3Jhd1ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLl9sb3dlckNhc2VWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgICAgdGhpcy5fY2hhbmdlcy5uZXh0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBmaWx0ZXIgaXMgY3VycmVudGx5IGFjdGl2ZSwgbWVhbmluZyB0aGUgaW5wdXQgaXMgbm90IGVtcHR5XG4gICAqL1xuICBwdWJsaWMgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0cyBpZiBhbiBpdGVtIG1hdGNoZXMgYSBzZWFyY2ggdGV4dFxuICAgKi9cbiAgcHVibGljIGFjY2VwdHMoaXRlbTogVCk6IGJvb2xlYW4ge1xuICAgIC8vIFdlIGFsd2F5cyB0ZXN0IHdpdGggdGhlIGxvd2VyY2FzZSB2YWx1ZSBvZiB0aGUgaW5wdXQsIHRvIHN0YXkgY2FzZSBpbnNlbnNpdGl2ZVxuICAgIHJldHVybiB0aGlzLmZpbHRlckZuLmFjY2VwdHMoaXRlbSwgdGhpcy5sb3dlckNhc2VWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0YXRlKCkge1xuICAgIGlmICh0aGlzLmZpbHRlckZuIGluc3RhbmNlb2YgRGF0YWdyaWRQcm9wZXJ0eVN0cmluZ0ZpbHRlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcGVydHk6IHRoaXMuZmlsdGVyRm4ucHJvcCxcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBlcXVhbHMob3RoZXI6IENsckRhdGFncmlkRmlsdGVySW50ZXJmYWNlPFQsIGFueT4pOiBib29sZWFuIHtcbiAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBEYXRhZ3JpZFN0cmluZ0ZpbHRlckltcGwpIHtcbiAgICAgIGlmIChvdGhlci5maWx0ZXJGbiBpbnN0YW5jZW9mIERhdGFncmlkUHJvcGVydHlTdHJpbmdGaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB0aGlzLmZpbHRlckZuIGluc3RhbmNlb2YgRGF0YWdyaWRQcm9wZXJ0eVN0cmluZ0ZpbHRlciAmJlxuICAgICAgICAgIG90aGVyLmZpbHRlckZuLnByb3AgPT09IHRoaXMuZmlsdGVyRm4ucHJvcCAmJlxuICAgICAgICAgIG90aGVyLnZhbHVlID09PSB0aGlzLnZhbHVlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3RoZXIgPT09IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19