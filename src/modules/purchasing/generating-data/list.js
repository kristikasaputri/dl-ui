import { inject } from 'aurelia-framework';
import { Service } from "./service";
import { Router } from 'aurelia-router';

@inject(Router, Service)
export class List {
 
    constructor(router, service) {
        this.service = service;
        this.router = router;
        this.today = new Date();
    }
    attached() {
    }

    activate() {

    }

    ExportToExcel() {
        // this.service.generatePurchaseRequest(this.dateFrom, this.dateTo);
        // this.service.generatePurchaseOrderExternal(this.dateFrom, this.dateTo);
        // this.service.generateDeliveryOrder(this.dateFrom, this.dateTo);
        // this.service.generateUnitReceiptNote(this.dateFrom, this.dateTo);
        // this.service.generateUnitPaymentOrder(this.dateFrom, this.dateTo);
        // this.service.generatePaymentCorrectionNote(this.dateFrom, this.dateTo);
        this.service.exportData(this.dateFrom,this.dateTo)
        .then(response => {
            if (response)
            {
                alert("Data Berhasil Di Generate");
            }
        })
    }

    dateFromChanged(e) {
        var _startDate = new Date(e.srcElement.value);
        var _endDate = new Date(this.dateTo);

        if (_startDate > _endDate)
            this.dateTo = e.srcElement.value;
    }
    reset() {
        this.dateFrom = undefined;
        this.dateTo = undefined;
    }
}