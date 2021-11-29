const mongoose = require('mongoose');

const merchantInformation = mongoose.Schema ({
    "0": {
        customerName: "PIZZA PLACE",
        merchantId: "0021463571",
        serialId: "78945",
        email: "lluigi@pizzaplace.com",
        phoneNumber: "800-100-1234",
        address: "2202 N IRVING ST, ALLENTOWN, PA, 18109"
    },
    "1" : {
        customerName: "PASTA PLACE",
        merchantId: "0021754813",
        serialId: "99513",
        email: "smario@pastaplace.com",
        phoneNumber: "800-100-4321",
        address: "2202 N IRVING ST, ALLENTOWN, PA, 18109"
    },
    "2" : {
        customerName: "CHINESE PLACE",
        merchantId: "0021754876",
        serialId: "33215",
        email: "lyang@chineseplace.com",
        phoneNumber: "800-100-4567",
        address: "2202 N IRVING ST, ALLENTOWN, PA, 18109",
    },
    "3" : {
        customerName: "WEST HOTEL",
        merchantId: "0021474258",
        serialId: "2254",
        email: "rpatel@westhotel.com",
        phoneNumber: "800-100-7564",
        address: "2202 N IRVING ST, ALLENTOWN, PA, 18109",
    },
    "4" : {
        customerName: "EAST HOTEL",
        merchantId: "0021641574",
        serialId: "4566",
        email: "jthomas@easthotel.com",
        phoneNumber: "800-100-9874",
        address: "2202 N IRVING ST, ALLENTOWN, PA, 18109"
    }
});

module.exports = mongoose.model('Posts', merchantInformation);