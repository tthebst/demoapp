/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Subject } from 'rxjs';
import { DatagridPropertyStringFilter } from './datagrid-property-string-filter';
var DatagridStringFilterImpl = /** @class */ (function () {
    function DatagridStringFilterImpl(filterFn) {
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
    Object.defineProperty(DatagridStringFilterImpl.prototype, "changes", {
        // We do not want to expose the Subject itself, but the Observable which is read-only
        get: function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridStringFilterImpl.prototype, "value", {
        get: function () {
            return this._rawValue;
        },
        /**
         * Common setter for the input value
         */
        set: function (value) {
            if (!value) {
                value = '';
            }
            if (value !== this._rawValue) {
                this._rawValue = value;
                this._lowerCaseValue = value.toLowerCase().trim();
                this._changes.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridStringFilterImpl.prototype, "lowerCaseValue", {
        get: function () {
            return this._lowerCaseValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Indicates if the filter is currently active, meaning the input is not empty
     */
    DatagridStringFilterImpl.prototype.isActive = function () {
        return !!this.value;
    };
    /**
     * Tests if an item matches a search text
     */
    DatagridStringFilterImpl.prototype.accepts = function (item) {
        // We always test with the lowercase value of the input, to stay case insensitive
        return this.filterFn.accepts(item, this.lowerCaseValue);
    };
    Object.defineProperty(DatagridStringFilterImpl.prototype, "state", {
        get: function () {
            if (this.filterFn instanceof DatagridPropertyStringFilter) {
                return {
                    property: this.filterFn.prop,
                    value: this.value,
                };
            }
            return this;
        },
        enumerable: true,
        configurable: true
    });
    DatagridStringFilterImpl.prototype.equals = function (other) {
        if (other instanceof DatagridStringFilterImpl) {
            if (other.filterFn instanceof DatagridPropertyStringFilter) {
                return (this.filterFn instanceof DatagridPropertyStringFilter &&
                    other.filterFn.prop === this.filterFn.prop &&
                    other.value === this.value);
            }
            return other === this;
        }
        return false;
    };
    return DatagridStringFilterImpl;
}());
export { DatagridStringFilterImpl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtc3RyaW5nLWZpbHRlci1pbXBsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9idWlsdC1pbi9maWx0ZXJzL2RhdGFncmlkLXN0cmluZy1maWx0ZXItaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0gsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUczQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVqRjtJQUNFLGtDQUFtQixRQUE2QztRQUE3QyxhQUFRLEdBQVIsUUFBUSxDQUFxQztRQUVoRTs7V0FFRztRQUNLLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBTXpDOztXQUVHO1FBQ0ssY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUkvQjs7V0FFRztRQUNLLG9CQUFlLEdBQVcsRUFBRSxDQUFDO0lBckI4QixDQUFDO0lBT3BFLHNCQUFXLDZDQUFPO1FBRGxCLHFGQUFxRjthQUNyRjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQU1ELHNCQUFXLDJDQUFLO2FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7UUFRRDs7V0FFRzthQUNILFVBQWlCLEtBQWE7WUFDNUIsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ1o7WUFDRCxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1FBQ0gsQ0FBQzs7O09BcEJBO0lBS0Qsc0JBQVcsb0RBQWM7YUFBekI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFlRDs7T0FFRztJQUNJLDJDQUFRLEdBQWY7UUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNJLDBDQUFPLEdBQWQsVUFBZSxJQUFPO1FBQ3BCLGlGQUFpRjtRQUNqRixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHNCQUFXLDJDQUFLO2FBQWhCO1lBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxZQUFZLDRCQUE0QixFQUFFO2dCQUN6RCxPQUFPO29CQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7b0JBQzVCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztpQkFDbEIsQ0FBQzthQUNIO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDOzs7T0FBQTtJQUVNLHlDQUFNLEdBQWIsVUFBYyxLQUF5QztRQUNyRCxJQUFJLEtBQUssWUFBWSx3QkFBd0IsRUFBRTtZQUM3QyxJQUFJLEtBQUssQ0FBQyxRQUFRLFlBQVksNEJBQTRCLEVBQUU7Z0JBQzFELE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUSxZQUFZLDRCQUE0QjtvQkFDckQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO29CQUMxQyxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQzNCLENBQUM7YUFDSDtZQUNELE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQztTQUN2QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQTlFRCxJQThFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOSBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENsckRhdGFncmlkRmlsdGVySW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9maWx0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IENsckRhdGFncmlkU3RyaW5nRmlsdGVySW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zdHJpbmctZmlsdGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYXRhZ3JpZFByb3BlcnR5U3RyaW5nRmlsdGVyIH0gZnJvbSAnLi9kYXRhZ3JpZC1wcm9wZXJ0eS1zdHJpbmctZmlsdGVyJztcblxuZXhwb3J0IGNsYXNzIERhdGFncmlkU3RyaW5nRmlsdGVySW1wbDxUID0gYW55PiBpbXBsZW1lbnRzIENsckRhdGFncmlkRmlsdGVySW50ZXJmYWNlPFQ+IHtcbiAgY29uc3RydWN0b3IocHVibGljIGZpbHRlckZuOiBDbHJEYXRhZ3JpZFN0cmluZ0ZpbHRlckludGVyZmFjZTxUPikge31cblxuICAvKipcbiAgICogVGhlIE9ic2VydmFibGUgcmVxdWlyZWQgYXMgcGFydCBvZiB0aGUgRmlsdGVyIGludGVyZmFjZVxuICAgKi9cbiAgcHJpdmF0ZSBfY2hhbmdlcyA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgLy8gV2UgZG8gbm90IHdhbnQgdG8gZXhwb3NlIHRoZSBTdWJqZWN0IGl0c2VsZiwgYnV0IHRoZSBPYnNlcnZhYmxlIHdoaWNoIGlzIHJlYWQtb25seVxuICBwdWJsaWMgZ2V0IGNoYW5nZXMoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlcy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSYXcgaW5wdXQgdmFsdWVcbiAgICovXG4gIHByaXZhdGUgX3Jhd1ZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9yYXdWYWx1ZTtcbiAgfVxuICAvKipcbiAgICogSW5wdXQgdmFsdWUgY29udmVydGVkIHRvIGxvd2VyY2FzZVxuICAgKi9cbiAgcHJpdmF0ZSBfbG93ZXJDYXNlVmFsdWU6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZ2V0IGxvd2VyQ2FzZVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9sb3dlckNhc2VWYWx1ZTtcbiAgfVxuICAvKipcbiAgICogQ29tbW9uIHNldHRlciBmb3IgdGhlIGlucHV0IHZhbHVlXG4gICAqL1xuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3Jhd1ZhbHVlKSB7XG4gICAgICB0aGlzLl9yYXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fbG93ZXJDYXNlVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICAgIHRoaXMuX2NoYW5nZXMubmV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGUgZmlsdGVyIGlzIGN1cnJlbnRseSBhY3RpdmUsIG1lYW5pbmcgdGhlIGlucHV0IGlzIG5vdCBlbXB0eVxuICAgKi9cbiAgcHVibGljIGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVGVzdHMgaWYgYW4gaXRlbSBtYXRjaGVzIGEgc2VhcmNoIHRleHRcbiAgICovXG4gIHB1YmxpYyBhY2NlcHRzKGl0ZW06IFQpOiBib29sZWFuIHtcbiAgICAvLyBXZSBhbHdheXMgdGVzdCB3aXRoIHRoZSBsb3dlcmNhc2UgdmFsdWUgb2YgdGhlIGlucHV0LCB0byBzdGF5IGNhc2UgaW5zZW5zaXRpdmVcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJGbi5hY2NlcHRzKGl0ZW0sIHRoaXMubG93ZXJDYXNlVmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGdldCBzdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5maWx0ZXJGbiBpbnN0YW5jZW9mIERhdGFncmlkUHJvcGVydHlTdHJpbmdGaWx0ZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BlcnR5OiB0aGlzLmZpbHRlckZuLnByb3AsXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgZXF1YWxzKG90aGVyOiBDbHJEYXRhZ3JpZEZpbHRlckludGVyZmFjZTxULCBhbnk+KTogYm9vbGVhbiB7XG4gICAgaWYgKG90aGVyIGluc3RhbmNlb2YgRGF0YWdyaWRTdHJpbmdGaWx0ZXJJbXBsKSB7XG4gICAgICBpZiAob3RoZXIuZmlsdGVyRm4gaW5zdGFuY2VvZiBEYXRhZ3JpZFByb3BlcnR5U3RyaW5nRmlsdGVyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdGhpcy5maWx0ZXJGbiBpbnN0YW5jZW9mIERhdGFncmlkUHJvcGVydHlTdHJpbmdGaWx0ZXIgJiZcbiAgICAgICAgICBvdGhlci5maWx0ZXJGbi5wcm9wID09PSB0aGlzLmZpbHRlckZuLnByb3AgJiZcbiAgICAgICAgICBvdGhlci52YWx1ZSA9PT0gdGhpcy52YWx1ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG90aGVyID09PSB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==