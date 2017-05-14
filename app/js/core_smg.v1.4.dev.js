/*

    This is the alpha-version of the kernel, please do not use it in real projects!

*/

/**
 * Created by Wenceslaus on 28.12.2016.
 *  ENGLISH:
 *  Scheme:
 *  SETTINGS - contains module settings, a gesture map and localization
 *  ART_CONTROL - contains functions for gesture maps
 *  ART_MOVE - contains functions for determining the direction of mouse gestures
 *
 *  ART_MOVE_VIEW - visual representation of the selected gesture
 *  ART_DRAW - visual representation of mouse movement on the screen
 *
 *  MAP_CONTROL - names of gestures and their schemes
 *  MAP_CONTROL_API - additional names of gestures and their schemes (dynamic)
 *  MAP_CONTROL_LOCALIZATION - names of gestures and their localization
 *
 *  FONT art-mouse-gestures = has backward compatibility with FontAwesome (flag USED_FONT_AWESOME_FRONT). Created using https://icomoon.io/app/
 *  COLOR_SCHEME - choosing a color scheme from art_move_view.colors (default "blue")
 */
/**
 * Created by Wenceslaus on 28.12.2016.
 *  RUSSIAN:
 *  Scheme:
 *  SETTINGS - содержит в себе настройки для модулей, карту жестов и локализацию
 *  ART_CONTROL - содержит функции для карты жестов
 *  ART_MOVE - содержит функции для определения направления жестов мыши
 *
 *  ART_MOVE_VIEW - визуальное представление выбранного жеста
 *  ART_DRAW - визуальное представление движения мыши по экрану
 *
 *  MAP_CONTROL - наименования жестов и их схемы
 *  MAP_CONTROL_API - дополнительные наименования жестов и их схемы (динамическое)
 *  MAP_CONTROL_LOCALIZATION - наименования жестов и их локализация
 *
 *  FONT art-mouse-gestures = Имеет обратную совместимость с FontAwesome (флаг USED_FONT_AWESOME_FRONT). Cоздан с помощью https://icomoon.io/app/
 *  COLOR_SCHEME - выбор цветовой схемы из art_move_view.colors (по умолчанию "blue")
 */

// var TEST_LOGIC = {
//     SETTINGS: {
//         cool: "HELLO"
//     },
//     go: function () {
//         console.log(this.SETTINGS.cool);
//         var eva = {
//             go_2: function () {
//                 TEST_LOGIC.SETTINGS.cool = "Maria";
//                 console.log(TEST_LOGIC.SETTINGS.cool);
//             }
//         };
//         eva.go_2();
//     },
// };
// // var 1
// TEST_LOGIC.go();
// // var 2
// var aw = TEST_LOGIC;
// aw.SETTINGS.cool = "OMG";
// aw.go()


/* News ideas.

 For window_open
 Access to links "chrome://" only from extensions
 var urls_new_tab = {
                chrome: 'chrome://newtab',
                firefox: 'about:newtab',
                safari: 'chrome://newtab',
                other: ''
            };
 var urls_home_tab = {
                chrome: '?',
                firefox: 'about:home'
            };
 */

function myFunction(){
    alert("hello world!");
}

var ART_MOUSE_GESTURES = {
    HELP: {
        name: 'Simple Mouse Gestures',
        version: '1.4.dev',
        authors: 'Vyacheslav Vasiliev',
        copyright: '2017, MIT, Vyach.Vasiliev',
    },
    SETTINGS: {
        CSS: '@font-face{font-family:art-mouse-gestures;src:url(../fonts/icomoon.woff?levi88) format("woff");font-weight:400;font-style:normal}#art-mouse-gestures .amg-stop[class*=" fa"],#art-mouse-gestures .amg-stop[class^=fa]{font-family:art-mouse-gestures!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;display:inline-block;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}#art-mouse-gestures .amg-stop.fa-lg{font-size:1.8em;line-height:.75em;vertical-align:-15%}#art-mouse-gestures .amg-stop.fa-2x{font-size:2em}#art-mouse-gestures .amg-stop.fa-3x{font-size:3em}#art-mouse-gestures .amg-stop.fa-4x{font-size:4em}#art-mouse-gestures .amg-stop.fa-5x{font-size:5em}#art-mouse-gestures .amg-stop.fa.fa-arrow-down:before{content:"\f063"}#art-mouse-gestures .amg-stop.fa.fa-arrow-up:before{content:"\f062"}#art-mouse-gestures .amg-stop.fa.fa-arrow-left:before{content:"\f060"}#art-mouse-gestures .amg-stop.fa.fa-arrow-right:before{content:"\f061"}#art-mouse-gestures #art-draw-wrap{position:absolute;top:0;left:0;z-index:998}#art-mouse-gestures #art-draw{background-color:rgba(173,216,230,0);width:100%;height:100%}#art-mouse-gestures{width:100%;z-index:999;top:0;position:fixed}#art-mouse-gestures #art-move-view{max-width:500px;min-width:150px;display:block;margin:10px auto 0;text-align:center;padding:.5em;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;top:0;z-index:999;position:relative}#art-mouse-gestures #art-move-view>i{padding:.2em}#art-mouse-gestures #art-move-view>#art-move-view-status{height:1.2em;font-size:1.2em;margin:0;padding:.2em}#art-mouse-gestures #art-move-view.blue,#art-mouse-gestures #art-move-view.red{background:#61abea;color:#fff}#art-mouse-gestures #art-move-view.orange{background:#fb9136;color:#fff}#art-mouse-gestures #art-move-view.yellow{background:#f3f300;color:#737373}#art-mouse-gestures #art-move-view.green{background:#70ce29;color:#fff}#art-mouse-gestures #art-move-view.black{background:#737373;color:#fff}#art-mouse-gestures #art-move-view.white{background:#fff;color:#737373}',
        ONOFF: true, // включает/отключает работу ядра
        SHOW_CONTEXT_MENU_IF_NO_MATCH: true, // показывать контекстное меню, если не найдено подходящих схеме жестов
        SHOW_MOVIE_STATUS: true, // показывать наименование текущей схемы жестов
        SHOW_MOVIE_GESTURES: true, // показывать схему жестов
        USED_FONT_AWESOME_FRONT: false, // используется подключённый сторроний шрифт FontAwesome
        COLOR_SCHEME: 'black', // выбор цветовой схемы из art_move_view.colors (по умолчанию "blue")
        OVERALL_COLOR_SCHEME_FOR_ART_DRAW: true, // выбор общий цветовой схемы из art_move_view.colors (по умолчанию "blue") для art_draw модуля
        USER_LANGUAGE: "en_US",
        i_color: 0,
        art_mouse_gestures: {
            selector: "#art-mouse-gestures"
        },
        // art_draw: {
        //     color: "#61abea",
        //     size: 3
        // },
        art_draw: {
            selector: "#art-draw",
            selector_wrap: "#art-draw-wrap",
            width: 500,
            height: 500,
            color: "#61abea",
            size: 3
        },
        art_move_view: {
            selector: "#art-move-view",
            selector_status: "#art-move-view-status",
            selector_icons: "#art-movie-view-icons",
            arrow_size: "1", // 1 - 5
            colors: {
                blue: {
                    background: '#61abea',
                    color: 'white'
                },
                red: {
                    background: '#61abea',
                    color: 'white'
                },
                orange: {
                    background: '#fb9136',
                    color: 'white'
                },
                yellow: {
                    background: '#f3f300',
                    color: '#737373'
                },
                green: {
                    background: '#70ce29',
                    color: 'white'
                },
                black: {
                    background: '#737373',
                    color: 'white'
                },
                white: {
                    background: 'white',
                    color: '#737373' /* #3e3e3e*/
                }
            }
        },
        art_move: {
            COUNT_X: 50, // кол-во для срабатывания обработчика
            COUNT_Y: 50, // кол-во для срабатывания обработчика
            DOP_BORDER_X: 25, // допуск для каждой из границ границ с одной и с другой стороны ( для косых линий - не используется )
            DOP_BORDER_Y: 25, // допуск для каждой из границ границ с одной и с другой стороны ( для косых линий - не используется )
            last_X: 0,
            last_Y: 0,
            raw_status: "",
            text_status: "",
            control_status: "",
            listener_status: false
        },
        /* All keys MAP_CONTROL
        navigation_forward
        navigation_backward
        navigation_refresh (if extension then with save POST-options)
        navigation_homepage_open (extension)
        tab_scroll_up
        tab_scroll_down
        tab_scroll_start
        tab_scroll_end
        tab_previous (extension)
        tab_next (extension)
        tab_open
        tab_current_close
        tab_previous_tabs_close (extension)
        tab_next_tabs_close (extension)
        tab_another_tabs_close (extension)
        tab_restore_tab_closed (extension)
        tab_switch_fullscreen (extension)
        tab_duplicate (extension)
        tab_pin (extension)
        window_current_close (extension)
        window_standard_open (extension)
        window_incognito_open (extension)
        window_restore_window_closed (extension)
        -
        window_minimize (if supported)
         window_switch_fullscreen (if supported)
        -
        ideas
        navigation_top_refresh (is used now as navigation_refresh)
        navigation_parent_refresh
        navigation_window_refresh

         */
        MAP_CONTROL: {
            navigation_forward: "r",
            navigation_backward: "l",
            navigation_refresh: "du",
            tab_open: "dru",
            tab_current_close: "dr",
            tab_next: "ur",
            tab_previous: "ul",
            tab_scroll_up: "u",
            tab_scroll_down: "d",
            tab_scroll_start: "ru",
            tab_scroll_end: "rd",
            window_standard_open: "urd",
            window_minimize: "rd",
        },
        MAP_CONTROL_API: {
            // NOTE: возможно назначить обработчик на схему жестов, но саму схема через API изменить нельзя (ex. tab_open: myFunction, но не tab_open: "duru")
            // Example:
            // tab_current_close: myFunction,
        },
        MAP_CONTROL_LOCALIZATION: {
            en_US: {
                navigation_forward: "Go to forward",
                navigation_backward: "Go to backward",
                navigation_refresh: "Reload page",
                navigation_homepage_open: "Go to Homepage",
                tab_scroll_up: "Scroll to up",
                tab_scroll_down: "Scroll to down",
                tab_scroll_start: "Scroll to start page",
                tab_scroll_end: "Scroll to end page",
                tab_previous: "Go to previous tab",
                tab_next: "Go to next tab",
                tab_open: "Open new tab \u2750",
                tab_current_close: "Close current tab",
                tab_previous_tabs_close: "Close all previous tabs",
                tab_next_tabs_close: "Close all next tabs",
                tab_another_tabs_close: "Close other tabs",
                tab_restore_tab_closed: "Restore closed tab",
                tab_switch_fullscreen: "Switch tab to full-screen",
                tab_duplicate: "Duplicate current tab",
                tab_pin: "Pin current tab",
                window_current_close: "Close current window",
                window_standard_open: "Open new window \u2750",
                window_incognito_open: "Open new incognito window \u2750",
                window_restore_window_closed: "Restore closed window",
                window_minimize: "Minimize current window",
                window_switch_fullscreen: "Switch window to full-screen",

            },
            ru: {
                navigation_forward: "Перейти вперёд",
                navigation_backward: "Вернуться назад",
                navigation_refresh: "Обновить страницу",
                navigation_homepage_open: "Открыть Домашнюю страницу",
                tab_scroll_up: "Прокрутить страницу вверх",
                tab_scroll_down: "Прокрутить страницу вниз",
                tab_scroll_start: "Прокрутить страницу к началу",
                tab_scroll_end: "Прокрутить страницу к концу",
                tab_previous: "Перейти на предыдущю вкладку",
                tab_next: "Перейти на следующую вкладку",
                tab_open: "Открыть новую вкладку \u2750",
                tab_current_close: "Закрыть текущую вкладку",
                tab_previous_tabs_close: "Закрыть все вкладки слева",
                tab_next_tabs_close: "Закрыть все вкладки справа",
                tab_another_tabs_close: "Закрыть все вкладки, кроме текущей",
                tab_restore_tab_closed: "Восстановить закрытую вкладку",
                tab_switch_fullscreen: "Переключить вкладку в полноэкранный режим",
                tab_duplicate: "Дублировать вкладку",
                tab_pin: "Закрепить текущую вкладку",
                window_current_close: "Закрыть текущее окно",
                window_standard_open: "Открыть новое окно \u2750",
                window_incognito_open: "Открыть новое окно в Инкогнито \u2750",
                window_restore_window_closed: "Восстановить закрытое окно",
                window_minimize: "Свернуть текущее окно",
                window_switch_fullscreen: "Переключить окно в полноэкранный режим",

            }
        },


        /* version 2. Use now.
         * all:
         *  status for switch on/off for add listener (required repeated call init() )
         * keyboard:
         *   single_code for event.keyCode
         * mouse:
         *   single_code for event.button
         *   multi_code for event.buttons - "If two or more buttons are pressed, returns the logical sum of the values."
         * */
        event_for_key_v2: {
            ctrlKey: {
                status: true,
                single_code: 17
            },
            shiftKey: {
                status: false,
                single_code: 16
            },
            altKey: {
                status: false,
                single_code: 18
            },
            metaKey: {
                status: false,
                single_code: 91
            },
            mouseLeft: {
                status: false,
                single_code: 0,
                multi_code: 1
            },
            mouseRight: {
                status: true,
                single_code: 2,
                multi_code: 2
            },
            mouseMiddle: {
                status: false,
                single_code: 1,
                multi_code: 4
            },
            mouseFourth: {
                status: false,
                single_code: 3,
                multi_code: 8
            },
            mouseFifth: {
                status: false,
                single_code: 4,
                multi_code: 16
            }
        }

    },

    art_control: {
        keyUp: function () {
            console.log("KEY UP");
            ART_MOUSE_GESTURES.hide();
            ART_MOUSE_GESTURES.art_control.callControl();
            ART_MOUSE_GESTURES.art_move.clear();
            ART_MOUSE_GESTURES.art_move_view.clear();
            ART_MOUSE_GESTURES.art_draw.clear();
        },
        callControl: function () {
            var SETTINGS = ART_MOUSE_GESTURES.SETTINGS;
            var _control_status = SETTINGS.art_move.control_status;
            console.warn("Call Control ==>", _control_status, SETTINGS.MAP_CONTROL[_control_status]);
            if (SETTINGS.MAP_CONTROL_API[_control_status]) {
                var ufunc = SETTINGS.MAP_CONTROL_API[_control_status];
                console.info(SETTINGS.MAP_CONTROL_API[_control_status], _control_status);
                ufunc();
                return true;
            }
            if (SETTINGS.MAP_CONTROL[_control_status] && ART_MOUSE_GESTURES.art_control[_control_status]) {
                var ufunc = ART_MOUSE_GESTURES.art_control[_control_status];
                console.info(SETTINGS.MAP_CONTROL[_control_status], _control_status);
                ufunc();
                return true;
            }
        },
        contextmenu: function (e) {
            var SETTINGS = ART_MOUSE_GESTURES.SETTINGS;

            console.log('+ oncontextmenu',
                ART_MOUSE_GESTURES.SETTINGS.art_move.text_status.length,
                ART_MOUSE_GESTURES.art_draw.contextmenu_wait);
            if (!ART_MOUSE_GESTURES.isONOFF()) {
                return true;
            }
            if (SETTINGS.art_move.text_status) {
                console.log('+ prevent', SETTINGS.art_move.text_status, SETTINGS.art_move.text_status.length);
                ART_MOUSE_GESTURES.art_draw.contextmenu_wait = false;
                // TODO: Как-то логично привести это в порядок
                // ART_MOUSE_GESTURES.art_draw.clear();
                // art_move.clear();
                ART_MOUSE_GESTURES.globalClear();
                return false; // отменяем показ контекстного меню
            } else {
                ART_MOUSE_GESTURES.art_draw.contextmenu_wait = false;
                // TODO: Как-то логично привести это в порядок
                // ART_MOUSE_GESTURES.art_draw.clear();
                // art_move.clear();
                ART_MOUSE_GESTURES.globalClear();

                if (!SETTINGS.SHOW_CONTEXT_MENU_IF_NO_MATCH) {
                    return false;
                }
                return true; //  показываем контекстноое меню
            }
        },
        /*
         navigation_forward
         navigation_backward
         navigation_refresh
         tab_open
         tab_current_close
         tab_scroll_up
         tab_scroll_down
         tab_scroll_start
         tab_scroll_end
         window_minimize

         */
        navigation_forward: function () {
            console.log("navigation_forward ok");
            if(window.history) {
                window.history.forward();
            }else{
                console.warn("%s: window.history is missing", ART_MOUSE_GESTURES.HELP.name);
            }
        },
        navigation_backward: function () {
            console.log("navigation_backward ok");
            if(window.history) {
                window.history.back();
            }else{
                console.warn("%s: window.history is missing", ART_MOUSE_GESTURES.HELP.name);
            }
        },
        navigation_refresh: function () {
            console.log("navigation_refresh ok");
            if(window.top.location.reload) {
                window.top.location.reload();
            }else{
                console.warn("%s: window.top.location.reload is missing", ART_MOUSE_GESTURES.HELP.name);
            }
        },
        tab_open: function () {
            console.log("tab_open ok");
            if(window.open) {
                window.open('', '_blank');
            }else{
                console.warn("%s: window.open is missing", ART_MOUSE_GESTURES.HELP.name);
            }
        },
        tab_current_close: function () {
            // BUG: Not close in incognito mode (chrome)
            console.log("tab_current_close ok");
            if(window.top.close) {
                window.top.close();
            }else{
                console.warn("%s: window.top.close is missing", ART_MOUSE_GESTURES.HELP.name);
            }
        },
        tab_scroll_up: function () {
            console.log("tab_scroll_up ok");
            if(window.top.scrollTo && document.body.scrollHeight && document.body.scrollTop) {
                window.top.scrollTo(0, document.body.scrollTop - (document.body.scrollHeight / 6));
            }else{
                console.warn("%s: window.top.scrollTo is missing", ART_MOUSE_GESTURES.HELP.name);
            }
        },
        tab_scroll_down: function () {
            console.log("tab_scroll_down ok");
            if(window.top.scrollTo && document.body.scrollHeight && document.body.scrollTop) {
                window.top.scrollTo(0, document.body.scrollTop + (document.body.scrollHeight / 6));
            }else{
                console.warn("%s: window.top.scrollTo is missing", ART_MOUSE_GESTURES.HELP.name);
            }
        },
        tab_scroll_start: function () {
            console.log("tab_scroll_start ok");
            if(window.top.scrollTo) {
                window.top.scrollTo(0, 0);
            }else{
                console.warn("%s: window.top.scrollTo is missing", ART_MOUSE_GESTURES.HELP.name);
            }
        },
        tab_scroll_end: function () {
            console.log("tab_scroll_end ok");
            if(window.top.scrollTo && document.body.scrollHeight) {
                window.top.scrollTo(0, document.body.scrollHeight);
            }else{
                console.warn("%s: window.top.scrollTo is missing", ART_MOUSE_GESTURES.HELP.name);
            }
        },
        window_minimize: function () {
            console.log("window_minimize ok");
        },

    },
    art_move: {
        set_status: function () {
            var SETTINGS = ART_MOUSE_GESTURES.SETTINGS;
            for (var name_gesture in SETTINGS.MAP_CONTROL) {
                if (SETTINGS.MAP_CONTROL[name_gesture] == SETTINGS.art_move.raw_status) {
                    console.log("name_gesture [%s] [%s]", name_gesture, "MAP_CONTROL");
                    var status = SETTINGS.MAP_CONTROL_LOCALIZATION[SETTINGS.USER_LANGUAGE][name_gesture];
                    if (SETTINGS.SHOW_MOVIE_STATUS) ART_MOUSE_GESTURES.art_move_view.set_status(status);
                    SETTINGS.art_move.text_status = status;
                    SETTINGS.art_move.control_status = name_gesture;

                    console.log("add [text_status][len]: [%s] [%s]", status, status.length);
                    return;
                }
            }
            console.info('+ clearStatus');
            SETTINGS.art_move.text_status = "";
            SETTINGS.art_move.text_status = "";
            SETTINGS.art_move.control_status = "";
            ART_MOUSE_GESTURES.art_move_view.clearStatus();
        },
        clear: function () {
            /* Очистка значений для artMouseMove */
            var SETTINGS = ART_MOUSE_GESTURES.SETTINGS;
            var art_move = SETTINGS.art_move;
            art_move.last_X = 0;
            art_move.last_Y = 0;
            art_move.raw_status = "";
            art_move.text_status = "";
            art_move.control_status = "";
        },
        up: function () {
            var SETTINGS = ART_MOUSE_GESTURES.SETTINGS;
            var raw_status = SETTINGS.art_move.raw_status;
            if (raw_status[raw_status.length - 1] != "u") {
                SETTINGS.art_move.raw_status += 'u';
                if (SETTINGS.SHOW_MOVIE_GESTURES) ART_MOUSE_GESTURES.art_move_view.up();
                this.set_status();
            }
        },
        down: function () {
            var SETTINGS = ART_MOUSE_GESTURES.SETTINGS;
            var raw_status = SETTINGS.art_move.raw_status;
            if (raw_status[raw_status.length - 1] != "d") {
                SETTINGS.art_move.raw_status += 'd';
                if (SETTINGS.SHOW_MOVIE_GESTURES) ART_MOUSE_GESTURES.art_move_view.down();
                this.set_status();
            }
        },
        left: function () {
            var SETTINGS = ART_MOUSE_GESTURES.SETTINGS;
            var raw_status = SETTINGS.art_move.raw_status;
            if (raw_status[raw_status.length - 1] != "l") {
                SETTINGS.art_move.raw_status += 'l';
                if (SETTINGS.SHOW_MOVIE_GESTURES) ART_MOUSE_GESTURES.art_move_view.left();
                this.set_status();
            }
        },
        right: function () {
            var SETTINGS = ART_MOUSE_GESTURES.SETTINGS;
            var raw_status = SETTINGS.art_move.raw_status;
            if (raw_status[raw_status.length - 1] != "r") {
                SETTINGS.art_move.raw_status += 'r';
                if (SETTINGS.SHOW_MOVIE_GESTURES) ART_MOUSE_GESTURES.art_move_view.right();
                this.set_status();
            }
        },
        mouse_move: function (event) {
            /* Очистка значений */
            var SETTINGS = ART_MOUSE_GESTURES.SETTINGS;

            /* Всегда переводим разницу в положительный результат */
            var x_ost = Math.abs(event.screenX - SETTINGS.art_move.last_X);
            var y_ost = Math.abs(event.screenY - SETTINGS.art_move.last_Y);

            // console.log("SETTINGS.art_move.listener_status", SETTINGS.art_move.listener_status);
            if (SETTINGS.art_move.listener_status && ART_MOUSE_GESTURES.isCheckSingleRules(event)) {
                ART_MOUSE_GESTURES.show();
                ART_MOUSE_GESTURES.art_draw.move(event);
                console.info('---- move ----');

                if (SETTINGS.art_move.last_X == 0 && SETTINGS.art_move.last_Y == 0) {
                    /* если значения сброшены или это первый вызов обработчика */
                    SETTINGS.art_move.last_X = event.screenX;
                    SETTINGS.art_move.last_Y = event.screenY;

                } else if (x_ost >= SETTINGS.art_move.COUNT_X || y_ost >= SETTINGS.art_move.COUNT_Y) {
                    console.log('-----------');
                    if (x_ost > y_ost) {
                        if (event.screenX > SETTINGS.art_move.last_X) {
                            /* right move */
                            console.log('right x,y: [%s],[%s]', event.screenX, event.screenY);
                            SETTINGS.art_move.last_X = event.screenX;
                            SETTINGS.art_move.last_Y = event.screenY;
                            ART_MOUSE_GESTURES.art_move.right()

                        } else {
                            /* left move */
                            console.log('left x,y: [%s],[%s]', event.screenX, event.screenY);
                            SETTINGS.art_move.last_X = event.screenX;
                            SETTINGS.art_move.last_Y = event.screenY;
                            ART_MOUSE_GESTURES.art_move.left()
                        }

                    } else {
                        if (event.screenY > SETTINGS.art_move.last_Y) {
                            /* down move */
                            console.log('down x,y: [%s],[%s]', event.screenX, event.screenY);
                            SETTINGS.art_move.last_X = event.screenX;
                            SETTINGS.art_move.last_Y = event.screenY;
                            ART_MOUSE_GESTURES.art_move.down()

                        } else {
                            /* up move */
                            console.log('up x,y: [%s],[%s]', event.screenX, event.screenY);
                            SETTINGS.art_move.last_X = event.screenX;
                            SETTINGS.art_move.last_Y = event.screenY;
                            ART_MOUSE_GESTURES.art_move.up()
                        }
                    }
                }
            }
        }
    },
    art_move_view: {
        _arrows: {
            up: 'fa-arrow-up',
            down: 'fa-arrow-down',
            left: 'fa-arrow-left',
            right: 'fa-arrow-right'
        },
        _add: function (arrow_name) {
            var SETTINGS = ART_MOUSE_GESTURES.SETTINGS;
            var el = document.createElement('i');
            el.className = 'arrow fa ' + arrow_name;
            SETTINGS.art_move_view.arrow_size == 1 ? el.className += ' fa-lg ' : el.className += ' fa-' + SETTINGS.art_move_view.arrow_size + 'x ';
            if (!SETTINGS.USED_FONT_AWESOME_FRONT) el.className += 'amg-stop';

            /* Set color */
            var amv = document.querySelector(SETTINGS.art_move_view.selector);
            var color_scheme = SETTINGS.art_move_view.colors[SETTINGS.COLOR_SCHEME];
            if(color_scheme){
                amv.style.backgroundColor = color_scheme.background;
                amv.style.color = color_scheme.color;
            }else{
                color_scheme = ART_MOUSE_GESTURES.art_move_view.colors["blue"];
                amv.style.backgroundColor = color_scheme.background;
                amv.style.color = color_scheme.color;
            }
            document.querySelector(SETTINGS.art_move_view.selector_icons).appendChild(el);
        },
        init: function () {
            var SETTINGS = ART_MOUSE_GESTURES.SETTINGS;
            var amv = document.createElement('div');
            amv.id = SETTINGS.art_move_view.selector.replace('#', '');
            var amv_status = document.createElement('p');
            amv_status.id = SETTINGS.art_move_view.selector_status.replace('#', '');
            amv.appendChild(amv_status);

            var amv_icons = document.createElement('div');
            amv_icons.id = SETTINGS.art_move_view.selector_icons.replace('#', '');
            amv.appendChild(amv_icons);

            var amv_draw_wrap = document.createElement('div');
            amv_draw_wrap.id = SETTINGS.art_draw.selector_wrap.replace('#', '');
            var amv_draw = document.createElement('canvas');
            amv_draw.id = SETTINGS.art_draw.selector.replace('#', '');
            amv_draw_wrap.appendChild(amv_draw);

            var amg = document.querySelector(SETTINGS.art_mouse_gestures.selector);
            if (amg) {
                amg.innerHTML = '';
                amg.appendChild(amv);
                amg.appendChild(amv_draw_wrap);
            } else {
                console.error("Not found ART_MOUSE_GESTURES main selector!")
            }
        },
        set_status: function (status) {
            document.querySelector(ART_MOUSE_GESTURES.SETTINGS.art_move_view.selector_status).innerText = status;
        },
        clear: function () {
            // var items = document.querySelectorAll('#art-move-view i.fa.arrow');
            // if (items.length) {
            //     for (var i = 0; i < items.length; i++) {
            //         document.querySelector(SETTINGS.art_move_view.selector).removeChild(items[i]);
            //     }
            // }
            // document.querySelector(SETTINGS.art_move_view.selector_status).innerText = '';
            ART_MOUSE_GESTURES.art_move_view.clearStatus();
            ART_MOUSE_GESTURES.art_move_view.clearIcons();
        },
        clearStatus: function () {
            document.querySelector(ART_MOUSE_GESTURES.SETTINGS.art_move_view.selector_status).innerText = '';
        },
        clearIcons: function () {
            document.querySelector(ART_MOUSE_GESTURES.SETTINGS.art_move_view.selector_icons).innerText = '';
        },

        up: function () {
            this._add(this._arrows.up);
        },
        down: function () {
            this._add(this._arrows.down);
        },
        left: function () {
            this._add(this._arrows.left);
        },
        right: function () {
            this._add(this._arrows.right);
        }
    },
    art_draw: {
        init: function (canvas_element) {
            canvas = canvas_element;
            ctx = canvas.getContext("2d");
            flag = false;
            prevX = 0;
            currX = 0;
            prevY = 0;
            currY = 0;
            dot_flag = false;
            draw_color = this.getDrawColor();
            // console.log('SET draw_color', draw_color);
            draw_width = ART_MOUSE_GESTURES.SETTINGS.art_draw.size;
            flag_down = false;
            contextmenu_wait = false;

            canvas.addEventListener("mouseout", function (e) {
                    ART_MOUSE_GESTURES.art_draw._findxy('out', e);
                    console.info('-> mouseout');
                }, false
            )
            ;
        },
        getDrawColor: function () {
            var SETTINGS = ART_MOUSE_GESTURES.SETTINGS;
            if(SETTINGS.OVERALL_COLOR_SCHEME_FOR_ART_DRAW){
                var color_scheme = SETTINGS.art_move_view.colors[SETTINGS.COLOR_SCHEME];
                // console.log("color debug", color_scheme['background'], SETTINGS.art_move_view.colors['blue']['background']);
                // console.log("color debug", color_scheme['background'], SETTINGS.art_move_view.colors['blue']['background']);
                if(color_scheme ) {
                    return color_scheme['background']
                }else{
                    return SETTINGS.art_move_view.colors['blue']['background'];
                }
            }else{
                return SETTINGS.art_draw.color;
            }
        },
        down: function (e) {
            console.log("++ down");
            if (!flag_down) {
                // var _color = ART_MOUSE_GESTURES.getNextColor(); // for other colors
                // ART_MOUSE_GESTURES.art_draw._findxy('down', e, _color);
                // console.info('down', _color);
                ART_MOUSE_GESTURES.art_draw._findxy('down', e);
                console.info('-> down');
            }
        }
        ,
        up: function (e) {
            ART_MOUSE_GESTURES.art_draw._findxy('up', e);
            console.info('-> up');
            // ART_MOUSE_GESTURES.hide();
        }
        ,
        move: function (e) {
            ART_MOUSE_GESTURES.art_draw._findxy('move', e);
        }
        ,
        draw: function (e) {
            if (ART_MOUSE_GESTURES.SETTINGS.art_move.listener_status && ART_MOUSE_GESTURES.isCheckSingleRules(e)) {
                // console.warn("ok", ART_MOUSE_GESTURES.isCheckSingleRules(e));
                ctx.beginPath();
                ctx.moveTo(prevX, prevY);
                ctx.lineTo(currX, currY);
                ctx.strokeStyle = this.getDrawColor();
                ctx.lineWidth = draw_width;
                ctx.stroke();
                ctx.closePath();
            }
        }
        ,
        _findxy: function (res, e, color) {
            if (res == 'down') {
                prevX = currX;
                prevY = currY;
                currX = e.clientX - canvas.offsetLeft;
                currY = e.clientY - canvas.offsetTop;

                flag_down = true;
                contextmenu_wait = true;
                dot_flag = true;
                if (dot_flag) {
                    ctx.beginPath();
                    if (color)
                        draw_color = color;
                    ctx.fillStyle = this.getDrawColor();
                    ctx.fillRect(currX, currY, 2, 2);
                    ctx.closePath();
                    dot_flag = false;
                }
            }
            if (res == 'up' || res == "out") {
                flag_down = false;
            }
            if (res == 'move') {
                if (flag_down) {
                    prevX = currX;
                    prevY = currY;
                    currX = e.clientX - canvas.offsetLeft;
                    currY = e.clientY - canvas.offsetTop;
                    this.draw(e);
                }
            }
        }
        ,
        clear: function () {
            ctx.clearRect(0, 0, canvas.width, canvas.width);
        }

    },

    API: {
        addControl: function (map_control_item_or_raw_status, callback) {
            /* Здесь можно переназначить обработчик поведения или же задать новую комбинацию
             * Первым аргументом, должен быть либо ключ из MAP_CONTROL либо сценарий жестов
             * Вторым - обработчик
             * -
             * Прямое изменение сценариев жестов из стандартнаго набора, через API невозможно.
             * */
            for (var key in ART_MOUSE_GESTURES.SETTINGS.MAP_CONTROL) {
                if (key == map_control_item_or_raw_status || ART_MOUSE_GESTURES.SETTINGS.MAP_CONTROL[key] == map_control_item_or_raw_status) {
                    ART_MOUSE_GESTURES.SETTINGS.MAP_CONTROL_API[key] = callback;
                    return true;
                }

            }
            ART_MOUSE_GESTURES.SETTINGS.MAP_CONTROL[map_control_item_or_raw_status] = map_control_item_or_raw_status;
            ART_MOUSE_GESTURES.SETTINGS.MAP_CONTROL_API[map_control_item_or_raw_status] = callback;
            return true;
        },
        addColorScheme(color_scheme){
            /*
            Exmple:
                ART_MOUSE_GESTURES.API.addColorScheme({name:"my_name", background: '#fb9136', color: 'white'});
                ART_MOUSE_GESTURES.SETTINGS.COLOR_SCHEME = "my_name";
                ART_MOUSE_GESTURES.SETTINGS.art_move_view.colors;

             */
            if(Object.keys(color_scheme).length == 3 && color_scheme.name && color_scheme.background && color_scheme.color) {
                console.info("color_scheme.name", color_scheme.name);
                ART_MOUSE_GESTURES.SETTINGS.art_move_view.colors[color_scheme.name] = {'background':color_scheme.background, 'color':color_scheme.color};
                return true;
            }else{
                console.error("API::addColorScheme::Error: Color scheme options are incorrect");
                return false;
            }
        }
    },
    init: function () {


        console.log("Initialization...");
        var amv_main = document.querySelector(ART_MOUSE_GESTURES.SETTINGS.art_mouse_gestures.selector);
        if (amv_main) {
            amv_main.parentNode.removeChild(amv_main);
        }
        amv_main = document.createElement('div');
        amv_main.id = ART_MOUSE_GESTURES.SETTINGS.art_mouse_gestures.selector.replace('#', '');
        document.querySelector('body').appendChild(amv_main);
        document.querySelector('head').innerHTML += "<style>"+ART_MOUSE_GESTURES.SETTINGS.CSS+"</style>";

        ART_MOUSE_GESTURES.art_move_view.init();

        var art_draw = document.querySelector(ART_MOUSE_GESTURES.SETTINGS.art_draw.selector);
        // art_draw.style.visibility = 'hidden';
        ART_MOUSE_GESTURES.hide();

        // art_draw.width = this.SETTINGS.art_draw.width;
        // art_draw.height = this.SETTINGS.art_draw.height;
        art_draw.width = document.documentElement.clientWidth;
        art_draw.height = document.documentElement.clientHeight;
        // art_draw.onmouseover = art_draw.onmouseout = art_draw.onmousemove = handler;
        // art_draw.onmousemove = artMouseMove; // установка обработчика на событие
        // document.onmousemove = artMouseMove; // установка обработчика на событие
        document.onmousemove = ART_MOUSE_GESTURES.art_move.mouse_move; // установка обработчика на событие
        ART_MOUSE_GESTURES.initListeners();
        ART_MOUSE_GESTURES.art_draw.init(art_draw);
        document.oncontextmenu = ART_MOUSE_GESTURES.art_control.contextmenu;
        ART_MOUSE_GESTURES.globalClear();
        console.log("Initialization [OK]");
    },
    showArtSpace: function () {
        var art_draw = document.querySelector(this.SETTINGS.art_draw.selector);
        var art_move_view = document.querySelector(this.SETTINGS.art_move_view.selector);
        if (art_draw && art_move_view) {
            art_draw.style.visibility = 'visible';
            art_move_view.style.visibility = 'visible';
        }
    },
    hideArtSpace: function () {
        var art_draw = document.querySelector(this.SETTINGS.art_draw.selector);
        var art_move_view = document.querySelector(this.SETTINGS.art_move_view.selector);
        if (art_draw && art_move_view) {
            art_draw.style.visibility = 'hidden';
            art_move_view.style.visibility = 'hidden';
        }
    },
    show: function () {
        var art_mouse_gesture = document.querySelector(this.SETTINGS.art_mouse_gestures.selector);
        if (art_mouse_gesture) art_mouse_gesture.style.visibility = 'visible';
    },
    hide: function () {
        var art_mouse_gesture = document.querySelector(this.SETTINGS.art_mouse_gestures.selector);
        if (art_mouse_gesture) art_mouse_gesture.style.visibility = 'hidden';

    },
    globalClear: function () {
        ART_MOUSE_GESTURES.art_draw.clear();
        ART_MOUSE_GESTURES.art_move_view.clear();
        ART_MOUSE_GESTURES.art_move.clear();
    },
    initListeners: function () {

        console.log("initListeners...");
        var art_draw_wrap = document;
        var onoff = ART_MOUSE_GESTURES.SETTINGS.ONOFF;
        var event_for_key_v2 = ART_MOUSE_GESTURES.SETTINGS.event_for_key_v2;
        for (var key in event_for_key_v2) {
            var code_value, code_key;
            if (event_for_key_v2[key]["status"]) {
                if (key.indexOf("mouse") > -1) {
                    code_value = event_for_key_v2[key]["single_code"];
                    code_key = key;
                    console.info("add Listener", key, code_value, art_draw_wrap);
                    eval('art_draw_wrap.addEventListener("mousedown", function(e){\
                    if(ART_MOUSE_GESTURES.isONOFF() && e.button == ' + code_value.toString() + ') {\
                        ART_MOUSE_GESTURES.SETTINGS.art_move.listener_status=true;\
                        ART_MOUSE_GESTURES.art_draw.down(e);\
                    }\
                }, false);\
                art_draw_wrap.addEventListener("mouseup", function(e){\
                    if(ART_MOUSE_GESTURES.isONOFF() && e.button == ' + code_value.toString() + ') {\
                        ART_MOUSE_GESTURES.SETTINGS.art_move.listener_status=false;\
                        ART_MOUSE_GESTURES.art_draw.up(e);\
                        ART_MOUSE_GESTURES.art_control.keyUp(e);\
                    }\
                }, false);');
                } else {
                    code_value = event_for_key_v2[key]["single_code"];
                    code_key = key;
                    console.info("add Listener", key, code_value, art_draw_wrap);
                    // console.info("keydown", e.keyCode, "'+key.toString()+'", '+listeners_code[key].toString()+');\
                    eval('\
                art_draw_wrap.addEventListener("keydown", function(e){\
                    if(ART_MOUSE_GESTURES.isONOFF() && e.keyCode == ' + code_value.toString() + ') {\
                        ART_MOUSE_GESTURES.SETTINGS.art_move.listener_status=true;\
                        ART_MOUSE_GESTURES.art_draw.down(e);\
                    }\
                }, false);\
                art_draw_wrap.addEventListener("keyup", function(e){\
                    if(ART_MOUSE_GESTURES.isONOFF() && e.keyCode == ' + code_value.toString() + ') {\
                        ART_MOUSE_GESTURES.SETTINGS.art_move.listener_status=false;\
                        ART_MOUSE_GESTURES.art_draw.up(e);\
                        ART_MOUSE_GESTURES.art_control.keyUp(e);\
                    }\
                }, false);');
                }
            }
        }

        console.log("initListeners [OK]");
    },
    isCheckSingleRules: function (event) {
        /* ONLY for check SINGLE press on button (x or y, but xy or yx) */
        var event_for_key_v2 = ART_MOUSE_GESTURES.SETTINGS.event_for_key_v2;

        for (var key in event_for_key_v2) {
            if (key.indexOf("mouse") > -1) {
                if (event_for_key_v2[key]["multi_code"] == event.buttons) {
                    return true;
                }
            }
            if (event_for_key_v2[key]["single_code"] && event[key]) {
                return true;
            }

        }
        return false;
    },
    isONOFF: function () {
        return ART_MOUSE_GESTURES.SETTINGS.ONOFF;
    },
    enable: function () {
        ART_MOUSE_GESTURES.SETTINGS.ONOFF = true;
    },
    disable: function () {
        ART_MOUSE_GESTURES.SETTINGS.ONOFF = false;
    },
    getNextColor: function () {
        var color = ["black", "green", "yellow"];
        ART_MOUSE_GESTURES.SETTINGS.i_color++;
        if (ART_MOUSE_GESTURES.SETTINGS.i_color > 2) {
            ART_MOUSE_GESTURES.SETTINGS.i_color = 0;
        }
        return color[i_color];
    }
};


document.onload = setTimeout(ART_MOUSE_GESTURES.init, 50); // without cross-browse
// cross-browse solution for DOMContentLoaded (stable work without it)
//     <!--<script src="//js.cx/script/jquery.documentReady.js"></script>-->
// $(function () {
//     ART_MOUSE_GESTURES.init();
// });