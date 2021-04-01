(function() {
    var _display = function(g) {
        if (typeof(g) != "object") {
            return;
        }
        var k = Object.keys(g);
        for(var i=0;i<k.length;i++) {
            var e = document.getElementById(k[i]);
            if (!e) {
                continue;
            }
            e = e.closest(".xhm-grid");
            if (e) {
                e.style.display = g[k[i]];
            }
        }
    };

    window.xhmForm = function(form) {
       var _checkSelect = function(idx) {
           idx = idx||0;
           if (idx==1 || idx==2) {
               _display({"xhm_1604454697_parts": "flex","xhm_1604454701_parts": "none"});
               form.set("#xhm_1604454701_parts",null);
           } else if (idx==4 || idx==5) {
               _display({"xhm_1604454697_parts": "none","xhm_1604454701_parts": "flex"});
               form.set("#xhm_1604454697_parts",null);
           } else {
               _display({"xhm_1604454697_parts": "none","xhm_1604454701_parts": "none"});
               form.set("#xhm_1604454697_parts",null);
               form.set("#xhm_1604454701_parts",null);
           }
        };
        var s1 = "#xhm_1604454696_parts input[type='radio']";
        var s2 = "#xhm_1604454706_parts input[type='radio']";
        var _checkRadio = function(e) {
            var ds = "none";
            if (document.querySelector(s1+":checked") && document.querySelector(s2+":checked")) {
                var r1 = document.querySelector(s1+":nth-child(1)");
                var r2 = document.querySelector(s2+":nth-child(1)");
                if (r1 && r1.checked && r2 && !r2.checked) {
                    ds = "flex";
                }
            }
            if (ds == "none") {
                form.set("#xhm_1604454705_parts",0);
            }
            _display({"xhm_1604454705_parts": ds});
        };

        // 初期表示しない設問は見えなくする
        var select = document.getElementById("xhm_1604454698");
        _checkSelect(select.selectedIndex);
        _checkRadio(e);

        // 接客の印象による設問の出し分け
        select.addEventListener("change", function(e) {
            _checkSelect(this.selectedIndex);
        });

        // 家族構成によっての出し分け
        var e = document.querySelectorAll(s1+","+s2);
        for (var i=0;i<e.length;i++) {
            e[i].addEventListener("change",_check_radio);
        }
    };
})();