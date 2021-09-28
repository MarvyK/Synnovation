window.addEventListener("DOMContentLoaded", function () {
    $(function () {
        window.onscroll = function () {
            applyFixed();
            console.log(window.scrollY);
        };

        var navigation = document.getElementsByClassName("navigation")[0];

        function applyFixed() {
            if (window.scrollY > 0) {
                navigation.classList.add("fixed")
            } else {
                navigation.classList.remove("fixed");
            }
        }

        $(".hamburger > a").click(function (event) {
            event.preventDefault();
            $("nav").toggleClass("show");
        });

    });

});
