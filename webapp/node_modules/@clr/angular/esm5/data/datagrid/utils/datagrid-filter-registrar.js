import { RegisteredFilter } from '../providers/filters';
var DatagridFilterRegistrar = /** @class */ (function () {
    function DatagridFilterRegistrar(filters) {
        this.filters = filters;
    }
    Object.defineProperty(DatagridFilterRegistrar.prototype, "filter", {
        get: function () {
            return this.registered && this.registered.filter;
        },
        enumerable: true,
        configurable: true
    });
    DatagridFilterRegistrar.prototype.setFilter = function (filter) {
        // If we previously had another filter, we unregister it
        this.deleteFilter();
        if (filter instanceof RegisteredFilter) {
            this.registered = filter;
        }
        else if (filter) {
            this.registered = this.filters.add(filter);
        }
    };
    DatagridFilterRegistrar.prototype.deleteFilter = function () {
        if (this.registered) {
            this.registered.unregister();
            delete this.registered;
        }
    };
    DatagridFilterRegistrar.prototype.ngOnDestroy = function () {
        this.deleteFilter();
    };
    return DatagridFilterRegistrar;
}());
export { DatagridFilterRegistrar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtZmlsdGVyLXJlZ2lzdHJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvdXRpbHMvZGF0YWdyaWQtZmlsdGVyLXJlZ2lzdHJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxPQUFPLEVBQW1CLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekU7SUFDRSxpQ0FBb0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDO0lBSW5ELHNCQUFXLDJDQUFNO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBRU0sMkNBQVMsR0FBaEIsVUFBaUIsTUFBa0M7UUFDakQsd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLE1BQU0sWUFBWSxnQkFBZ0IsRUFBRTtZQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztTQUMxQjthQUFNLElBQUksTUFBTSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRU0sOENBQVksR0FBbkI7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM3QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRU0sNkNBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRGaWx0ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ZpbHRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRmlsdGVyc1Byb3ZpZGVyLCBSZWdpc3RlcmVkRmlsdGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2ZpbHRlcnMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0YWdyaWRGaWx0ZXJSZWdpc3RyYXI8VCwgRiBleHRlbmRzIENsckRhdGFncmlkRmlsdGVySW50ZXJmYWNlPFQ+PiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsdGVyczogRmlsdGVyc1Byb3ZpZGVyPFQ+KSB7fVxuXG4gIHB1YmxpYyByZWdpc3RlcmVkOiBSZWdpc3RlcmVkRmlsdGVyPFQsIEY+O1xuXG4gIHB1YmxpYyBnZXQgZmlsdGVyKCk6IEYge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyZWQgJiYgdGhpcy5yZWdpc3RlcmVkLmZpbHRlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRGaWx0ZXIoZmlsdGVyOiBGIHwgUmVnaXN0ZXJlZEZpbHRlcjxULCBGPikge1xuICAgIC8vIElmIHdlIHByZXZpb3VzbHkgaGFkIGFub3RoZXIgZmlsdGVyLCB3ZSB1bnJlZ2lzdGVyIGl0XG4gICAgdGhpcy5kZWxldGVGaWx0ZXIoKTtcbiAgICBpZiAoZmlsdGVyIGluc3RhbmNlb2YgUmVnaXN0ZXJlZEZpbHRlcikge1xuICAgICAgdGhpcy5yZWdpc3RlcmVkID0gZmlsdGVyO1xuICAgIH0gZWxzZSBpZiAoZmlsdGVyKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWQgPSB0aGlzLmZpbHRlcnMuYWRkKGZpbHRlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRlbGV0ZUZpbHRlcigpIHtcbiAgICBpZiAodGhpcy5yZWdpc3RlcmVkKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWQudW5yZWdpc3RlcigpO1xuICAgICAgZGVsZXRlIHRoaXMucmVnaXN0ZXJlZDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZWxldGVGaWx0ZXIoKTtcbiAgfVxufVxuIl19