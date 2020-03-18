/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Generic accessor for deep object properties
 * that can be specified as simple dot-separated strings.
 */
export class NestedProperty {
    constructor(prop) {
        this.prop = prop;
        if (prop.indexOf('.') >= 0) {
            this.splitProp = prop.split('.');
        }
    }
    // Safe getter for a deep object property, will not throw an error but return
    // undefined if one of the intermediate properties is null or undefined.
    getPropValue(item) {
        if (this.splitProp) {
            let value = item;
            for (const nestedProp of this.splitProp) {
                if (value == null || typeof value === 'undefined' || typeof value[nestedProp] === 'undefined') {
                    return undefined;
                }
                value = value[nestedProp];
            }
            return value;
        }
        else {
            return item[this.prop];
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLXByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9idWlsdC1pbi9uZXN0ZWQtcHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUNIOzs7R0FHRztBQUNILE1BQU0sT0FBTyxjQUFjO0lBR3pCLFlBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELDZFQUE2RTtJQUM3RSx3RUFBd0U7SUFDakUsWUFBWSxDQUFDLElBQU87UUFDekIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFLLE1BQU0sVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3ZDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksT0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssV0FBVyxFQUFFO29CQUM3RixPQUFPLFNBQVMsQ0FBQztpQkFDbEI7Z0JBQ0QsS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMzQjtZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbi8qKlxuICogR2VuZXJpYyBhY2Nlc3NvciBmb3IgZGVlcCBvYmplY3QgcHJvcGVydGllc1xuICogdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGFzIHNpbXBsZSBkb3Qtc2VwYXJhdGVkIHN0cmluZ3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBOZXN0ZWRQcm9wZXJ0eTxUID0gYW55PiB7XG4gIHByaXZhdGUgc3BsaXRQcm9wOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb3A6IHN0cmluZykge1xuICAgIGlmIChwcm9wLmluZGV4T2YoJy4nKSA+PSAwKSB7XG4gICAgICB0aGlzLnNwbGl0UHJvcCA9IHByb3Auc3BsaXQoJy4nKTtcbiAgICB9XG4gIH1cblxuICAvLyBTYWZlIGdldHRlciBmb3IgYSBkZWVwIG9iamVjdCBwcm9wZXJ0eSwgd2lsbCBub3QgdGhyb3cgYW4gZXJyb3IgYnV0IHJldHVyblxuICAvLyB1bmRlZmluZWQgaWYgb25lIG9mIHRoZSBpbnRlcm1lZGlhdGUgcHJvcGVydGllcyBpcyBudWxsIG9yIHVuZGVmaW5lZC5cbiAgcHVibGljIGdldFByb3BWYWx1ZShpdGVtOiBUKTogYW55IHtcbiAgICBpZiAodGhpcy5zcGxpdFByb3ApIHtcbiAgICAgIGxldCB2YWx1ZSA9IGl0ZW07XG4gICAgICBmb3IgKGNvbnN0IG5lc3RlZFByb3Agb2YgdGhpcy5zcGxpdFByb3ApIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdmFsdWVbbmVzdGVkUHJvcF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHZhbHVlW25lc3RlZFByb3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXRlbVt0aGlzLnByb3BdO1xuICAgIH1cbiAgfVxufVxuIl19