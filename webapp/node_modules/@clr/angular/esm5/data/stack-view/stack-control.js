/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Undocumented experimental feature: inline editing.
 */
import { EventEmitter } from '@angular/core';
var StackControl = /** @class */ (function () {
    function StackControl(stackView) {
        var _this = this;
        this.stackView = stackView;
        this.modelChange = new EventEmitter(false);
        // Make the ClrStackView editable, since it contains a StackControl
        this.stackView.editable = true;
        this.stackView.editingChange.subscribe(function (editing) {
            // Edit mode was closed
            if (!editing) {
                _this.modelChange.emit(_this.model);
            }
        });
    }
    return StackControl;
}());
export { StackControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvc3RhY2stdmlldy9zdGFjay1jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFDSDs7R0FFRztBQUVILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0M7SUFJRSxzQkFBc0IsU0FBdUI7UUFBN0MsaUJBU0M7UUFUcUIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUY3QyxnQkFBVyxHQUFzQixJQUFJLFlBQVksQ0FBTSxLQUFLLENBQUMsQ0FBQztRQUc1RCxtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQWdCO1lBQ3RELHVCQUF1QjtZQUN2QixJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQWRELElBY0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG4vKipcbiAqIFVuZG9jdW1lbnRlZCBleHBlcmltZW50YWwgZmVhdHVyZTogaW5saW5lIGVkaXRpbmcuXG4gKi9cblxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbHJTdGFja1ZpZXcgfSBmcm9tICcuL3N0YWNrLXZpZXcnO1xuXG5leHBvcnQgY2xhc3MgU3RhY2tDb250cm9sIHtcbiAgbW9kZWw6IGFueTtcbiAgbW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KGZhbHNlKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RhY2tWaWV3OiBDbHJTdGFja1ZpZXcpIHtcbiAgICAvLyBNYWtlIHRoZSBDbHJTdGFja1ZpZXcgZWRpdGFibGUsIHNpbmNlIGl0IGNvbnRhaW5zIGEgU3RhY2tDb250cm9sXG4gICAgdGhpcy5zdGFja1ZpZXcuZWRpdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuc3RhY2tWaWV3LmVkaXRpbmdDaGFuZ2Uuc3Vic2NyaWJlKChlZGl0aW5nOiBib29sZWFuKSA9PiB7XG4gICAgICAvLyBFZGl0IG1vZGUgd2FzIGNsb3NlZFxuICAgICAgaWYgKCFlZGl0aW5nKSB7XG4gICAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh0aGlzLm1vZGVsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19