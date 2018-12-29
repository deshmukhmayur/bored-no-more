"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var AppShell = /** @class */ (function () {
    function AppShell() {
        this.title = 'Hello World!';
        this.data = {};
        this.currentIndex = -1;
        document.body.classList;
        this.thing = document.querySelector('#thing');
        this.anotherIdeaButton = document.querySelector('#anotherIdea');
        this.feelingLuckyButton = document.querySelector('#feelingLucky');
    }
    AppShell.prototype.bootstrap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchData()];
                    case 1:
                        _a.sent();
                        if (this.anotherIdeaButton) {
                            this.anotherIdeaButton.addEventListener('click', function () {
                                _this.render();
                            });
                        }
                        if (this.feelingLuckyButton) {
                            this.feelingLuckyButton.addEventListener('click', function () {
                                if (_this.currentIndex >= 0) {
                                    var encodedSearch = encodeURI(_this.data.things[_this.currentIndex]);
                                    window.open("http://www.google.com/search?btnI&q=" + encodedSearch, '_blank');
                                }
                            });
                        }
                        this.render();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppShell.prototype.fetchData = function () {
        var _this = this;
        return fetch('things-to-do.json')
            .then(function (res) { return res.json(); })
            .then(function (res) {
            _this.data = res || {};
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    AppShell.prototype.render = function () {
        if (this.thing) {
            this.currentIndex = Math.round(Math.random() * (this.data.things.length - 1));
            this.thing.innerHTML = "\n      <span>#" + (this.currentIndex + 1) + "</span>\n      <p>" + this.data.things[this.currentIndex] + "</p>\n      ";
        }
        this.randomTheme();
    };
    AppShell.prototype.randomTheme = function () {
        var themes = [
            '#9DA5A8',
            '#20990A',
            '#853624',
            '#D91A7B',
            '#401A31',
            '#F4E1B0',
            '#86082E',
            '#FFFFFF',
            '#000000'
        ];
        var randomThemeIndex = Math.round(Math.random() * (themes.length - 1));
        /* Setting the background */
        document.body.style.background = themes[randomThemeIndex];
        /* Setting the text colour */
        var contrast = this.getContrast(themes[randomThemeIndex].slice(1));
        document.body.classList.value = contrast;
    };
    AppShell.prototype.getContrast = function (hex) {
        var r = parseInt(hex.substr(0, 2), 16);
        var g = parseInt(hex.substr(2, 2), 16);
        var b = parseInt(hex.substr(4, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? 'dark' : 'light';
    };
    return AppShell;
}());
