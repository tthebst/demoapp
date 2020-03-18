/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var ResponsiveNavControlMessage = /** @class */ (function () {
    function ResponsiveNavControlMessage(_controlCode, _navLevel) {
        this._controlCode = _controlCode;
        this._navLevel = _navLevel;
    }
    Object.defineProperty(ResponsiveNavControlMessage.prototype, "controlCode", {
        get: function () {
            return this._controlCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveNavControlMessage.prototype, "navLevel", {
        get: function () {
            return this._navLevel;
        },
        enumerable: true,
        configurable: true
    });
    return ResponsiveNavControlMessage;
}());
export { ResponsiveNavControlMessage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1uYXYtY29udHJvbC1tZXNzYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGF5b3V0L25hdi9yZXNwb25zaXZlLW5hdi1jb250cm9sLW1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVIO0lBQ0UscUNBQW9CLFlBQW9CLEVBQVUsU0FBaUI7UUFBL0MsaUJBQVksR0FBWixZQUFZLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFRO0lBQUcsQ0FBQztJQUV2RSxzQkFBSSxvREFBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksaURBQVE7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUNILGtDQUFDO0FBQUQsQ0FBQyxBQVZELElBVUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlTmF2Q29udHJvbE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250cm9sQ29kZTogc3RyaW5nLCBwcml2YXRlIF9uYXZMZXZlbDogbnVtYmVyKSB7fVxuXG4gIGdldCBjb250cm9sQ29kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb250cm9sQ29kZTtcbiAgfVxuXG4gIGdldCBuYXZMZXZlbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uYXZMZXZlbDtcbiAgfVxufVxuIl19