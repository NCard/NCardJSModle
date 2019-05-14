let NCardAJAX = {
    request:  {
        post: function (url, data) {
            if (url == null) url = '';
            if (data == null) data = {};
            let $back = NCardAJAX.SendBackFun;
            $.ajax({
                async: false,
                type: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                url: url,
                data: JSON.stringify(data),
                dataType: "json",
                success: function (res) {
                    $back = NCardAJAX.SendBackFun.init(res);
                },
                error: function () {
                    alert('api error');
                }
            });
            return $back;
        },
        get: function (url, data) {
            if (url == null) url = '';
            if (data == null) data = {};
            let $back = NCardAJAX.SendBackFun;
            $.ajax({
                async: false,
                type: "GET",
                headers: {
                    'content-type': 'application/json'
                },
                url: url,
                data: JSON.stringify(data),
                dataType: "json",
                success: function (res) {
                    $back = NCardAJAX.SendBackFun.init(res);
                },
                error: function () {
                    alert('api error');
                }
            });
            return $back;
        },
        printMessage: function (message, res) {
            console.log(message);
            console.log(res);
        }
    },
    SendBackFun: {
        data: {},
        init: function (data) {
            this.data = data;
            return this;
        },
        then: function (next) {
            next(this.data)
        }
    },
    printMessage: function (message, res) {
        console.log(message);
        console.log(res);
    }
};
