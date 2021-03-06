module.exports = [
    {
        route: 'power-bi/purchasing',
        name: 'power-bi-purchasing',
        moduleId: './modules/power-bi/purchasing/index',
        nav: true,
        title: 'Power BI: Purchasing Reports',
        auth: true,
        settings: {
            group: "reports",
            permission: { "P1": 7, "P3": 7, "P4": 7, "P6": 7, "P7": 7, "C9": 1, "PG": 7, "AG1P": 7, "AG2P": 7 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'power-bi/finishing-printing',
        name: 'power-bi-finishing-printing',
        moduleId: './modules/power-bi/finishing-printing/index',
        nav: true,
        title: 'Power BI: Finishing Printing Reports',
        auth: true,
        settings: {
            group: "reports",
            iconClass: 'fa fa-dashboard'
        }
    }, {
        route: 'power-bi/sales',
        name: 'power-bi-sales',
        moduleId: './modules/power-bi/sales/index',
        nav: true,
        title: 'Power BI: Sales Reports',
        auth: true,
        settings: {
            group: "reports",
            iconClass: 'fa fa-dashboard'
        }
    }]
