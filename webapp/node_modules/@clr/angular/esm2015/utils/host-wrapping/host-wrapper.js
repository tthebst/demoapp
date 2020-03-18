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
export class HostWrapper {
    constructor(containerType, vcr, index = 0) {
        this.injector = vcr.injector;
        // If the host is already wrapped, we don't do anything
        if (!this.injector.get(containerType, null)) {
            const cfr = this.injector.get(ComponentFactoryResolver);
            const el = this.injector.get(ElementRef);
            // We need a new anchor, since we're projecting the current one.
            vcr.createComponent(cfr.resolveComponentFactory(EmptyAnchor));
            const factory = cfr.resolveComponentFactory(containerType);
            // Craft the element array based on what slot to use. Angular only uses the index to determine
            // which ng-content to project into, so if you have more than one ng-content you'll need to set
            // the index in the constructor appropriately
            const element = [];
            element[index] = [el.nativeElement];
            // We're assuming only one projection slot, but in more complex cases we might want to provide
            // a different array of projected elements.
            const containerRef = vcr.createComponent(factory, undefined, undefined, element);
            // We can now remove the useless anchor
            vcr.remove(0);
            // We note that the container was dynamically created
            containerRef.instance._dynamic = true;
            // We keep the wrapper's injector to access the dependencies that weren't available before.
            this.injector = containerRef.injector;
        }
    }
    get(token, notFoundValue) {
        return this.injector.get(token, notFoundValue);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvaG9zdC13cmFwcGluZy9ob3N0LXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFFTCx3QkFBd0IsRUFDeEIsVUFBVSxHQUtYLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3Qzs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLFdBQVc7SUFDdEIsWUFBWSxhQUFzQixFQUFFLEdBQXFCLEVBQUUsUUFBZ0IsQ0FBQztRQUMxRSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDN0IsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDM0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN4RCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUV6QyxnRUFBZ0U7WUFDaEUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM5RCxNQUFNLE9BQU8sR0FBd0IsR0FBRyxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2hGLDhGQUE4RjtZQUM5RiwrRkFBK0Y7WUFDL0YsNkNBQTZDO1lBQzdDLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEMsOEZBQThGO1lBQzlGLDJDQUEyQztZQUMzQyxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2pGLHVDQUF1QztZQUN2QyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWQscURBQXFEO1lBQ3JELFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUV0QywyRkFBMkY7WUFDM0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUlELEdBQUcsQ0FBSSxLQUFrQyxFQUFFLGFBQWlCO1FBQzFELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIEluamVjdG9yLFxuICBUeXBlLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHluYW1pY1dyYXBwZXIgfSBmcm9tICcuL2R5bmFtaWMtd3JhcHBlcic7XG5pbXBvcnQgeyBFbXB0eUFuY2hvciB9IGZyb20gJy4vZW1wdHktYW5jaG9yJztcblxuLyoqXG4gKiBIb3N0V3JhcHBlciBtdXN0IGJlIGNhbGxlZCBpbiBPbkluaXQgdG8gZW5zdXJlIHRoYXQgdGhlIFZpZXdzIGFyZSByZWFkeS4gSWYgaXRzIGNhbGxlZCBpbiBhIGNvbnN0cnVjdG9yIHRoZSB2aWV3IGlzXG4gKiBzdGlsbCB1bmRlZmluZWQuXG4gKiBUT0RPIC0gbWFrZSBzdXJlIHRoZXNlIGNvbW1lbnQgYW5ub3RhdGlvbnMgZG8gbm90IGJyZWFrIG5nLXBhY2tnci5cbiAqL1xuZXhwb3J0IGNsYXNzIEhvc3RXcmFwcGVyPFcgZXh0ZW5kcyBEeW5hbWljV3JhcHBlcj4gaW1wbGVtZW50cyBJbmplY3RvciB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lclR5cGU6IFR5cGU8Vz4sIHZjcjogVmlld0NvbnRhaW5lclJlZiwgaW5kZXg6IG51bWJlciA9IDApIHtcbiAgICB0aGlzLmluamVjdG9yID0gdmNyLmluamVjdG9yO1xuICAgIC8vIElmIHRoZSBob3N0IGlzIGFscmVhZHkgd3JhcHBlZCwgd2UgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICBpZiAoIXRoaXMuaW5qZWN0b3IuZ2V0KGNvbnRhaW5lclR5cGUsIG51bGwpKSB7XG4gICAgICBjb25zdCBjZnIgPSB0aGlzLmluamVjdG9yLmdldChDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpO1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmluamVjdG9yLmdldChFbGVtZW50UmVmKTtcblxuICAgICAgLy8gV2UgbmVlZCBhIG5ldyBhbmNob3IsIHNpbmNlIHdlJ3JlIHByb2plY3RpbmcgdGhlIGN1cnJlbnQgb25lLlxuICAgICAgdmNyLmNyZWF0ZUNvbXBvbmVudChjZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRW1wdHlBbmNob3IpKTtcbiAgICAgIGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8Vz4gPSBjZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29udGFpbmVyVHlwZSk7XG4gICAgICAvLyBDcmFmdCB0aGUgZWxlbWVudCBhcnJheSBiYXNlZCBvbiB3aGF0IHNsb3QgdG8gdXNlLiBBbmd1bGFyIG9ubHkgdXNlcyB0aGUgaW5kZXggdG8gZGV0ZXJtaW5lXG4gICAgICAvLyB3aGljaCBuZy1jb250ZW50IHRvIHByb2plY3QgaW50bywgc28gaWYgeW91IGhhdmUgbW9yZSB0aGFuIG9uZSBuZy1jb250ZW50IHlvdSdsbCBuZWVkIHRvIHNldFxuICAgICAgLy8gdGhlIGluZGV4IGluIHRoZSBjb25zdHJ1Y3RvciBhcHByb3ByaWF0ZWx5XG4gICAgICBjb25zdCBlbGVtZW50ID0gW107XG4gICAgICBlbGVtZW50W2luZGV4XSA9IFtlbC5uYXRpdmVFbGVtZW50XTtcbiAgICAgIC8vIFdlJ3JlIGFzc3VtaW5nIG9ubHkgb25lIHByb2plY3Rpb24gc2xvdCwgYnV0IGluIG1vcmUgY29tcGxleCBjYXNlcyB3ZSBtaWdodCB3YW50IHRvIHByb3ZpZGVcbiAgICAgIC8vIGEgZGlmZmVyZW50IGFycmF5IG9mIHByb2plY3RlZCBlbGVtZW50cy5cbiAgICAgIGNvbnN0IGNvbnRhaW5lclJlZiA9IHZjci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGVsZW1lbnQpO1xuICAgICAgLy8gV2UgY2FuIG5vdyByZW1vdmUgdGhlIHVzZWxlc3MgYW5jaG9yXG4gICAgICB2Y3IucmVtb3ZlKDApO1xuXG4gICAgICAvLyBXZSBub3RlIHRoYXQgdGhlIGNvbnRhaW5lciB3YXMgZHluYW1pY2FsbHkgY3JlYXRlZFxuICAgICAgY29udGFpbmVyUmVmLmluc3RhbmNlLl9keW5hbWljID0gdHJ1ZTtcblxuICAgICAgLy8gV2Uga2VlcCB0aGUgd3JhcHBlcidzIGluamVjdG9yIHRvIGFjY2VzcyB0aGUgZGVwZW5kZW5jaWVzIHRoYXQgd2VyZW4ndCBhdmFpbGFibGUgYmVmb3JlLlxuICAgICAgdGhpcy5pbmplY3RvciA9IGNvbnRhaW5lclJlZi5pbmplY3RvcjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcjtcblxuICBnZXQ8VD4odG9rZW46IFR5cGU8VD4gfCBJbmplY3Rpb25Ub2tlbjxUPiwgbm90Rm91bmRWYWx1ZT86IFQpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQodG9rZW4sIG5vdEZvdW5kVmFsdWUpO1xuICB9XG59XG4iXX0=