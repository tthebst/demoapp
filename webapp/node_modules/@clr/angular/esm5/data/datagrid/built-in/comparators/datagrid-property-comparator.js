import { NestedProperty } from '../nested-property';
var DatagridPropertyComparator = /** @class */ (function () {
    function DatagridPropertyComparator(prop) {
        this.prop = prop;
        this.nestedProp = new NestedProperty(prop);
    }
    DatagridPropertyComparator.prototype.compare = function (a, b) {
        var propA = this.nestedProp.getPropValue(a);
        var propB = this.nestedProp.getPropValue(b);
        if (typeof propA === 'string') {
            propA = propA.toLowerCase();
        }
        if (typeof propB === 'string') {
            propB = propB.toLowerCase();
        }
        if (typeof propA === 'undefined' || propA === null) {
            if (typeof propB === 'undefined' || propB === null) {
                return 0;
            }
            else {
                return 1;
            }
        }
        else {
            if (typeof propB === 'undefined' || propB === null) {
                return -1;
            }
            else if (propA < propB) {
                return -1;
            }
            else if (propA > propB) {
                return 1;
            }
            else {
                return 0;
            }
        }
    };
    return DatagridPropertyComparator;
}());
export { DatagridPropertyComparator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtcHJvcGVydHktY29tcGFyYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvYnVpbHQtaW4vY29tcGFyYXRvcnMvZGF0YWdyaWQtcHJvcGVydHktY29tcGFyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQ7SUFHRSxvQ0FBbUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sNENBQU8sR0FBZCxVQUFlLENBQUksRUFBRSxDQUFJO1FBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDN0I7UUFFRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUNsRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUNsRCxPQUFPLENBQUMsQ0FBQzthQUNWO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7U0FDRjthQUFNO1lBQ0wsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtnQkFDbEQsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNYO2lCQUFNLElBQUksS0FBSyxHQUFHLEtBQUssRUFBRTtnQkFDeEIsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNYO2lCQUFNLElBQUksS0FBSyxHQUFHLEtBQUssRUFBRTtnQkFDeEIsT0FBTyxDQUFDLENBQUM7YUFDVjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsQ0FBQzthQUNWO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRDb21wYXJhdG9ySW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9jb21wYXJhdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOZXN0ZWRQcm9wZXJ0eSB9IGZyb20gJy4uL25lc3RlZC1wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhZ3JpZFByb3BlcnR5Q29tcGFyYXRvcjxUID0gYW55PiBpbXBsZW1lbnRzIENsckRhdGFncmlkQ29tcGFyYXRvckludGVyZmFjZTxUPiB7XG4gIHByaXZhdGUgbmVzdGVkUHJvcDogTmVzdGVkUHJvcGVydHk8VD47XG5cbiAgY29uc3RydWN0b3IocHVibGljIHByb3A6IHN0cmluZykge1xuICAgIHRoaXMubmVzdGVkUHJvcCA9IG5ldyBOZXN0ZWRQcm9wZXJ0eShwcm9wKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wYXJlKGE6IFQsIGI6IFQpOiBudW1iZXIge1xuICAgIGxldCBwcm9wQSA9IHRoaXMubmVzdGVkUHJvcC5nZXRQcm9wVmFsdWUoYSk7XG4gICAgbGV0IHByb3BCID0gdGhpcy5uZXN0ZWRQcm9wLmdldFByb3BWYWx1ZShiKTtcblxuICAgIGlmICh0eXBlb2YgcHJvcEEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwcm9wQSA9IHByb3BBLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9wQiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHByb3BCID0gcHJvcEIudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb3BBID09PSAndW5kZWZpbmVkJyB8fCBwcm9wQSA9PT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wQiA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcEIgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wQiA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcEIgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIGlmIChwcm9wQSA8IHByb3BCKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcEEgPiBwcm9wQikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19