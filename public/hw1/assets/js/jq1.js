        $(document).ready(function () {
            /**
             * change source and alt in and img component descendant of a figure component
             * @param  {string} in_src location of image source
             * @param  {string} in_alt image alt text
             */
            function f_chng_figureImg(in_src, in_alt) {
                $('figure img').attr({'src': in_src, 'alt': in_alt})
            }

            $('button#light').on('click', function () {
                f_chng_figureImg('assets/images/sun.jpeg', 'cartoon sun')
                $("body").css({"background-color": "white", "color": "black"})
            });
            $('button#dark').on('click', function () {
                f_chng_figureImg('assets/images/moon.jpeg', 'cartoon moon')
                $("body").css({"background-color": "black", "color": "white"})
            });
        });