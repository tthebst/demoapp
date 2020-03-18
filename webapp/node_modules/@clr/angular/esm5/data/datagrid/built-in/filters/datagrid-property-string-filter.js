import { NestedProperty } from '../nested-property';
var DatagridPropertyStringFilter = /** @class */ (function () {
    function DatagridPropertyStringFilter(prop, exact) {
        if (exact === void 0) { exact = false; }
        this.prop = prop;
        this.exact = exact;
        this.nestedProp = new NestedProperty(prop);
    }
    DatagridPropertyStringFilter.prototype.accepts = function (item, search) {
        var propValue = this.nestedProp.getPropValue(item);
        if (typeof propValue === 'undefined') {
            return false;
        }
        else if (this.exact) {
            return ('' + propValue).toLowerCase() === search;
        }
        else {
            return ('' + propValue).toLowerCase().indexOf(search) >= 0;
        }
    };
    return DatagridPropertyStringFilter;
}());
export { DatagridPropertyStringFilter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtcHJvcGVydHktc3RyaW5nLWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvYnVpbHQtaW4vZmlsdGVycy9kYXRhZ3JpZC1wcm9wZXJ0eS1zdHJpbmctZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRDtJQUdFLHNDQUFtQixJQUFZLEVBQVMsS0FBYTtRQUFiLHNCQUFBLEVBQUEsYUFBYTtRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCw4Q0FBTyxHQUFQLFVBQVEsSUFBTyxFQUFFLE1BQWM7UUFDN0IsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLEVBQUU7WUFDcEMsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sQ0FBQztTQUNsRDthQUFNO1lBQ0wsT0FBTyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztJQUNILG1DQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IENsckRhdGFncmlkU3RyaW5nRmlsdGVySW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zdHJpbmctZmlsdGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOZXN0ZWRQcm9wZXJ0eSB9IGZyb20gJy4uL25lc3RlZC1wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhZ3JpZFByb3BlcnR5U3RyaW5nRmlsdGVyPFQgPSBhbnk+IGltcGxlbWVudHMgQ2xyRGF0YWdyaWRTdHJpbmdGaWx0ZXJJbnRlcmZhY2U8VD4ge1xuICBwcml2YXRlIG5lc3RlZFByb3A6IE5lc3RlZFByb3BlcnR5PFQ+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwcm9wOiBzdHJpbmcsIHB1YmxpYyBleGFjdCA9IGZhbHNlKSB7XG4gICAgdGhpcy5uZXN0ZWRQcm9wID0gbmV3IE5lc3RlZFByb3BlcnR5KHByb3ApO1xuICB9XG5cbiAgYWNjZXB0cyhpdGVtOiBULCBzZWFyY2g6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHByb3BWYWx1ZSA9IHRoaXMubmVzdGVkUHJvcC5nZXRQcm9wVmFsdWUoaXRlbSk7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV4YWN0KSB7XG4gICAgICByZXR1cm4gKCcnICsgcHJvcFZhbHVlKS50b0xvd2VyQ2FzZSgpID09PSBzZWFyY2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoJycgKyBwcm9wVmFsdWUpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gpID49IDA7XG4gICAgfVxuICB9XG59XG4iXX0=