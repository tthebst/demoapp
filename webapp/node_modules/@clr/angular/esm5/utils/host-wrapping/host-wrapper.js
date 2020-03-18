/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ComponentFactoryResolver, ElementRef, } from '@angular/core';
import { EmptyAnchor } from './empty-anchor';
/**
 * HostWrapper must be called in OnInit to ensure that the Views are ready. If its called in a constructor the view is
 * still undefined.
 * TODO - make sure these comment annotations do not break ng-packgr.
 */
var HostWrapper = /** @class */ (function () {
    function HostWrapper(containerType, vcr, index) {
        if (index === void 0) { index = 0; }
        this.injector = vcr.injector;
        // If the host is already wrapped, we don't do anything
        if (!this.injector.get(containerType, null)) {
            var cfr = this.injector.get(ComponentFactoryResolver);
            var el = this.injector.get(ElementRef);
            // We need a new anchor, since we're projecting the current one.
            vcr.createComponent(cfr.resolveComponentFactory(EmptyAnchor));
            var factory = cfr.resolveComponentFactory(containerType);
            // Craft the element array based on what slot to use. Angular only uses the index to determine
            // which ng-content to project into, so if you have more than one ng-content you'll need to set
            // the index in the constructor appropriately
            var element = [];
            element[index] = [el.nativeElement];
            // We're assuming only one projection slot, but in more complex cases we might want to provide
            // a different array of projected elements.
            var containerRef = vcr.createComponent(factory, undefined, undefined, element);
            // We can now remove the useless anchor
            vcr.remove(0);
            // We note that the container was dynamically created
            containerRef.instance._dynamic = true;
            // We keep the wrapper's injector to access the dependencies that weren't available before.
            this.injector = containerRef.injector;
        }
    }
    HostWrapper.prototype.get = function (token, notFoundValue) {
        return this.injector.get(token, notFoundValue);
    };
    return HostWrapper;
}());
export { HostWrapper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvaG9zdC13cmFwcGluZy9ob3N0LXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFFTCx3QkFBd0IsRUFDeEIsVUFBVSxHQUtYLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3Qzs7OztHQUlHO0FBQ0g7SUFDRSxxQkFBWSxhQUFzQixFQUFFLEdBQXFCLEVBQUUsS0FBaUI7UUFBakIsc0JBQUEsRUFBQSxTQUFpQjtRQUMxRSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDN0IsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDM0MsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN4RCxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUV6QyxnRUFBZ0U7WUFDaEUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM5RCxJQUFNLE9BQU8sR0FBd0IsR0FBRyxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2hGLDhGQUE4RjtZQUM5RiwrRkFBK0Y7WUFDL0YsNkNBQTZDO1lBQzdDLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEMsOEZBQThGO1lBQzlGLDJDQUEyQztZQUMzQyxJQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2pGLHVDQUF1QztZQUN2QyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWQscURBQXFEO1lBQ3JELFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUV0QywyRkFBMkY7WUFDM0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUlELHlCQUFHLEdBQUgsVUFBTyxLQUFrQyxFQUFFLGFBQWlCO1FBQzFELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdGlvblRva2VuLFxuICBJbmplY3RvcixcbiAgVHlwZSxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER5bmFtaWNXcmFwcGVyIH0gZnJvbSAnLi9keW5hbWljLXdyYXBwZXInO1xuaW1wb3J0IHsgRW1wdHlBbmNob3IgfSBmcm9tICcuL2VtcHR5LWFuY2hvcic7XG5cbi8qKlxuICogSG9zdFdyYXBwZXIgbXVzdCBiZSBjYWxsZWQgaW4gT25Jbml0IHRvIGVuc3VyZSB0aGF0IHRoZSBWaWV3cyBhcmUgcmVhZHkuIElmIGl0cyBjYWxsZWQgaW4gYSBjb25zdHJ1Y3RvciB0aGUgdmlldyBpc1xuICogc3RpbGwgdW5kZWZpbmVkLlxuICogVE9ETyAtIG1ha2Ugc3VyZSB0aGVzZSBjb21tZW50IGFubm90YXRpb25zIGRvIG5vdCBicmVhayBuZy1wYWNrZ3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBIb3N0V3JhcHBlcjxXIGV4dGVuZHMgRHluYW1pY1dyYXBwZXI+IGltcGxlbWVudHMgSW5qZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXJUeXBlOiBUeXBlPFc+LCB2Y3I6IFZpZXdDb250YWluZXJSZWYsIGluZGV4OiBudW1iZXIgPSAwKSB7XG4gICAgdGhpcy5pbmplY3RvciA9IHZjci5pbmplY3RvcjtcbiAgICAvLyBJZiB0aGUgaG9zdCBpcyBhbHJlYWR5IHdyYXBwZWQsIHdlIGRvbid0IGRvIGFueXRoaW5nXG4gICAgaWYgKCF0aGlzLmluamVjdG9yLmdldChjb250YWluZXJUeXBlLCBudWxsKSkge1xuICAgICAgY29uc3QgY2ZyID0gdGhpcy5pbmplY3Rvci5nZXQoQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKTtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5pbmplY3Rvci5nZXQoRWxlbWVudFJlZik7XG5cbiAgICAgIC8vIFdlIG5lZWQgYSBuZXcgYW5jaG9yLCBzaW5jZSB3ZSdyZSBwcm9qZWN0aW5nIHRoZSBjdXJyZW50IG9uZS5cbiAgICAgIHZjci5jcmVhdGVDb21wb25lbnQoY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEVtcHR5QW5jaG9yKSk7XG4gICAgICBjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFc+ID0gY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbnRhaW5lclR5cGUpO1xuICAgICAgLy8gQ3JhZnQgdGhlIGVsZW1lbnQgYXJyYXkgYmFzZWQgb24gd2hhdCBzbG90IHRvIHVzZS4gQW5ndWxhciBvbmx5IHVzZXMgdGhlIGluZGV4IHRvIGRldGVybWluZVxuICAgICAgLy8gd2hpY2ggbmctY29udGVudCB0byBwcm9qZWN0IGludG8sIHNvIGlmIHlvdSBoYXZlIG1vcmUgdGhhbiBvbmUgbmctY29udGVudCB5b3UnbGwgbmVlZCB0byBzZXRcbiAgICAgIC8vIHRoZSBpbmRleCBpbiB0aGUgY29uc3RydWN0b3IgYXBwcm9wcmlhdGVseVxuICAgICAgY29uc3QgZWxlbWVudCA9IFtdO1xuICAgICAgZWxlbWVudFtpbmRleF0gPSBbZWwubmF0aXZlRWxlbWVudF07XG4gICAgICAvLyBXZSdyZSBhc3N1bWluZyBvbmx5IG9uZSBwcm9qZWN0aW9uIHNsb3QsIGJ1dCBpbiBtb3JlIGNvbXBsZXggY2FzZXMgd2UgbWlnaHQgd2FudCB0byBwcm92aWRlXG4gICAgICAvLyBhIGRpZmZlcmVudCBhcnJheSBvZiBwcm9qZWN0ZWQgZWxlbWVudHMuXG4gICAgICBjb25zdCBjb250YWluZXJSZWYgPSB2Y3IuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBlbGVtZW50KTtcbiAgICAgIC8vIFdlIGNhbiBub3cgcmVtb3ZlIHRoZSB1c2VsZXNzIGFuY2hvclxuICAgICAgdmNyLnJlbW92ZSgwKTtcblxuICAgICAgLy8gV2Ugbm90ZSB0aGF0IHRoZSBjb250YWluZXIgd2FzIGR5bmFtaWNhbGx5IGNyZWF0ZWRcbiAgICAgIGNvbnRhaW5lclJlZi5pbnN0YW5jZS5fZHluYW1pYyA9IHRydWU7XG5cbiAgICAgIC8vIFdlIGtlZXAgdGhlIHdyYXBwZXIncyBpbmplY3RvciB0byBhY2Nlc3MgdGhlIGRlcGVuZGVuY2llcyB0aGF0IHdlcmVuJ3QgYXZhaWxhYmxlIGJlZm9yZS5cbiAgICAgIHRoaXMuaW5qZWN0b3IgPSBjb250YWluZXJSZWYuaW5qZWN0b3I7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3I7XG5cbiAgZ2V0PFQ+KHRva2VuOiBUeXBlPFQ+IHwgSW5qZWN0aW9uVG9rZW48VD4sIG5vdEZvdW5kVmFsdWU/OiBUKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KHRva2VuLCBub3RGb3VuZFZhbHVlKTtcbiAgfVxufVxuIl19