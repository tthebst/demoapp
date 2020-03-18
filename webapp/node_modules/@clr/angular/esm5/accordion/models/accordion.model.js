/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { AccordionStrategy } from '../enums/accordion-strategy.enum';
import { AccordionStatus } from '../enums/accordion-status.enum';
var accordionCount = 0;
var AccordionPanelModel = /** @class */ (function () {
    function AccordionPanelModel(id, accordionId) {
        this.id = id;
        this.accordionId = accordionId;
        this.status = AccordionStatus.Inactive;
        this.index = null;
        this.disabled = false;
        this.open = false;
        this.templateId = this.id + "-" + this.accordionId;
    }
    return AccordionPanelModel;
}());
export { AccordionPanelModel };
var AccordionModel = /** @class */ (function () {
    function AccordionModel() {
        this.strategy = AccordionStrategy.Default;
        this.accordionCount = accordionCount++;
        this._panels = {};
    }
    Object.defineProperty(AccordionModel.prototype, "panels", {
        get: function () {
            var _this = this;
            return Object.keys(this._panels).map(function (id) { return _this._panels[id]; });
        },
        enumerable: true,
        configurable: true
    });
    AccordionModel.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    AccordionModel.prototype.updatePanelOrder = function (ids) {
        var _this = this;
        ids.forEach(function (id, index) { return (_this._panels[id].index = index); });
        this.removeOldPanels(ids);
    };
    AccordionModel.prototype.addPanel = function (id, open) {
        if (open === void 0) { open = false; }
        this._panels[id] = new AccordionPanelModel(id, this.accordionCount);
        this._panels[id].open = open;
    };
    AccordionModel.prototype.togglePanel = function (panelId, open) {
        var panelIsOpen = this._panels[panelId].open;
        if (this.strategy === AccordionStrategy.Default) {
            this.closeAllPanels();
        }
        this._panels[panelId].open = open !== undefined ? open : !panelIsOpen;
    };
    AccordionModel.prototype.disablePanel = function (panelId, disabled) {
        this._panels[panelId].disabled = disabled;
    };
    AccordionModel.prototype.closeAllPanels = function () {
        var _this = this;
        this.panels.forEach(function (panel) { return (_this._panels[panel.id].open = false); });
    };
    AccordionModel.prototype.removeOldPanels = function (ids) {
        var _this = this;
        this.panels
            .filter(function (panel) { return ids.find(function (id) { return id === panel.id; }) === undefined; })
            .forEach(function (panel) { return delete _this._panels[panel.id]; });
    };
    return AccordionModel;
}());
export { AccordionModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uL21vZGVscy9hY2NvcmRpb24ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVqRSxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFFdkI7SUFNRSw2QkFBbUIsRUFBVSxFQUFTLFdBQTRCO1FBQS9DLE9BQUUsR0FBRixFQUFFLENBQVE7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFMbEUsV0FBTSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDbEMsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNyQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixlQUFVLEdBQU0sSUFBSSxDQUFDLEVBQUUsU0FBSSxJQUFJLENBQUMsV0FBYSxDQUFDO0lBQ3VCLENBQUM7SUFDeEUsMEJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7QUFFRDtJQUFBO1FBQ1ksYUFBUSxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztRQUNyQyxtQkFBYyxHQUFHLGNBQWMsRUFBRSxDQUFDO1FBQ2xDLFlBQU8sR0FBMEMsRUFBRSxDQUFDO0lBMENoRSxDQUFDO0lBeENDLHNCQUFJLGtDQUFNO2FBQVY7WUFBQSxpQkFFQztZQURDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBQy9ELENBQUM7OztPQUFBO0lBRUQsb0NBQVcsR0FBWCxVQUFZLFFBQTJCO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsR0FBYTtRQUE5QixpQkFHQztRQUZDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFLEVBQUUsS0FBSyxJQUFLLE9BQUEsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxFQUFVLEVBQUUsSUFBWTtRQUFaLHFCQUFBLEVBQUEsWUFBWTtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksbUJBQW1CLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxPQUFlLEVBQUUsSUFBYztRQUN6QyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMvQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssaUJBQWlCLENBQUMsT0FBTyxFQUFFO1lBQy9DLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDeEUsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxPQUFlLEVBQUUsUUFBaUI7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzVDLENBQUM7SUFFTyx1Q0FBYyxHQUF0QjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTyx3Q0FBZSxHQUF2QixVQUF3QixHQUFhO1FBQXJDLGlCQUlDO1FBSEMsSUFBSSxDQUFDLE1BQU07YUFDUixNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLEtBQUssQ0FBQyxFQUFFLEVBQWYsQ0FBZSxDQUFDLEtBQUssU0FBUyxFQUE3QyxDQUE2QyxDQUFDO2FBQzlELE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE5IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBBY2NvcmRpb25TdHJhdGVneSB9IGZyb20gJy4uL2VudW1zL2FjY29yZGlvbi1zdHJhdGVneS5lbnVtJztcbmltcG9ydCB7IEFjY29yZGlvblN0YXR1cyB9IGZyb20gJy4uL2VudW1zL2FjY29yZGlvbi1zdGF0dXMuZW51bSc7XG5cbmxldCBhY2NvcmRpb25Db3VudCA9IDA7XG5cbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25QYW5lbE1vZGVsIHtcbiAgc3RhdHVzID0gQWNjb3JkaW9uU3RhdHVzLkluYWN0aXZlO1xuICBpbmRleDogbnVtYmVyID0gbnVsbDtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgb3BlbiA9IGZhbHNlO1xuICB0ZW1wbGF0ZUlkID0gYCR7dGhpcy5pZH0tJHt0aGlzLmFjY29yZGlvbklkfWA7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogc3RyaW5nLCBwdWJsaWMgYWNjb3JkaW9uSWQ6IG51bWJlciB8IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbk1vZGVsIHtcbiAgcHJvdGVjdGVkIHN0cmF0ZWd5ID0gQWNjb3JkaW9uU3RyYXRlZ3kuRGVmYXVsdDtcbiAgcHJvdGVjdGVkIGFjY29yZGlvbkNvdW50ID0gYWNjb3JkaW9uQ291bnQrKztcbiAgcHJvdGVjdGVkIF9wYW5lbHM6IHsgW2lkOiBzdHJpbmddOiBBY2NvcmRpb25QYW5lbE1vZGVsIH0gPSB7fTtcblxuICBnZXQgcGFuZWxzKCk6IEFjY29yZGlvblBhbmVsTW9kZWxbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3BhbmVscykubWFwKGlkID0+IHRoaXMuX3BhbmVsc1tpZF0pO1xuICB9XG5cbiAgc2V0U3RyYXRlZ3koc3RyYXRlZ3k6IEFjY29yZGlvblN0cmF0ZWd5KSB7XG4gICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICB9XG5cbiAgdXBkYXRlUGFuZWxPcmRlcihpZHM6IHN0cmluZ1tdKSB7XG4gICAgaWRzLmZvckVhY2goKGlkLCBpbmRleCkgPT4gKHRoaXMuX3BhbmVsc1tpZF0uaW5kZXggPSBpbmRleCkpO1xuICAgIHRoaXMucmVtb3ZlT2xkUGFuZWxzKGlkcyk7XG4gIH1cblxuICBhZGRQYW5lbChpZDogc3RyaW5nLCBvcGVuID0gZmFsc2UpIHtcbiAgICB0aGlzLl9wYW5lbHNbaWRdID0gbmV3IEFjY29yZGlvblBhbmVsTW9kZWwoaWQsIHRoaXMuYWNjb3JkaW9uQ291bnQpO1xuICAgIHRoaXMuX3BhbmVsc1tpZF0ub3BlbiA9IG9wZW47XG4gIH1cblxuICB0b2dnbGVQYW5lbChwYW5lbElkOiBzdHJpbmcsIG9wZW4/OiBib29sZWFuKSB7XG4gICAgY29uc3QgcGFuZWxJc09wZW4gPSB0aGlzLl9wYW5lbHNbcGFuZWxJZF0ub3BlbjtcbiAgICBpZiAodGhpcy5zdHJhdGVneSA9PT0gQWNjb3JkaW9uU3RyYXRlZ3kuRGVmYXVsdCkge1xuICAgICAgdGhpcy5jbG9zZUFsbFBhbmVscygpO1xuICAgIH1cblxuICAgIHRoaXMuX3BhbmVsc1twYW5lbElkXS5vcGVuID0gb3BlbiAhPT0gdW5kZWZpbmVkID8gb3BlbiA6ICFwYW5lbElzT3BlbjtcbiAgfVxuXG4gIGRpc2FibGVQYW5lbChwYW5lbElkOiBzdHJpbmcsIGRpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcGFuZWxzW3BhbmVsSWRdLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlQWxsUGFuZWxzKCkge1xuICAgIHRoaXMucGFuZWxzLmZvckVhY2gocGFuZWwgPT4gKHRoaXMuX3BhbmVsc1twYW5lbC5pZF0ub3BlbiA9IGZhbHNlKSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZU9sZFBhbmVscyhpZHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5wYW5lbHNcbiAgICAgIC5maWx0ZXIocGFuZWwgPT4gaWRzLmZpbmQoaWQgPT4gaWQgPT09IHBhbmVsLmlkKSA9PT0gdW5kZWZpbmVkKVxuICAgICAgLmZvckVhY2gocGFuZWwgPT4gZGVsZXRlIHRoaXMuX3BhbmVsc1twYW5lbC5pZF0pO1xuICB9XG59XG4iXX0=