(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _scrollMenu = require("./modules/scroll-menu");

var _products = require("./modules/products");

var _toPdf = require("./modules/to-pdf");

var _sucursales = require("./modules/sucursales");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// ((w,d,dd,c)=>{
// })(window,document,document.documentElement,console);
var isMobile = {
  mobilecheck: function mobilecheck() {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
  }
};

(function (w, d, dd, c) {
  var mobileEle = document.getElementById('isMobile');

  if (isMobile.mobilecheck()) {
    mobileEle.classList.add('show');
    document.body.classList.add('mobile');
  } else {
    mobileEle.remove();
  }
})(window, document, document.documentElement, console);

(function (w, d, dd, c) {
  var logo = d.getElementById('main-logo');
  dd.style.setProperty('--header-height', "".concat(logo.clientHeight * 2.2, "px"));
})(window, document, document.documentElement, console);

(function (w, d, dd, c) {
  var toggleEle = d.getElementById('toggle-menu');
  var navEle = d.getElementById('menu-wraper');
  toggleEle.addEventListener('click', function (e) {
    e.preventDefault();
    navEle.classList.toggle('show');
  });
})(window, document, document.documentElement, console);

var nav = document.getElementById('menu-wraper');
var header = document.getElementById('mainHeader');
var tabsContainer = document.getElementById('tabsProducts');
var panels = document.getElementById('panels');
var formPastel = document.getElementById('formPastel');

var sucursales = _toConsumableArray(document.querySelectorAll('.sucursal__map')); // if (nav && header) 


(0, _scrollMenu.scrollMenu)(nav, header, isMobile.mobilecheck());
if (tabsContainer) (0, _products.tabs)(tabsContainer);
if (panels) (0, _products.lightBox)(panels);
if (formPastel) (0, _toPdf.toPDF)(formPastel);
if (sucursales) (0, _sucursales.sucursalMapHeight)(sucursales, isMobile.mobilecheck());

var phonesArr = _toConsumableArray(document.querySelectorAll('.jsPhone'));

if (phonesArr) (0, _sucursales.phones)(phonesArr, isMobile.mobilecheck());
/*
  102 -> 100%
  250 -> ?
*/

},{"./modules/products":2,"./modules/scroll-menu":3,"./modules/sucursales":4,"./modules/to-pdf":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightBox = exports.tabs = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var tabs = function tabs(tabsContainer) {
  var links = tabsContainer.querySelector('.products-menu');

  var panels = _toConsumableArray(tabsContainer.querySelectorAll('.products-gallery'));

  var linksArr = _toConsumableArray(links.querySelectorAll('A'));

  links.addEventListener('click', function (e) {
    e.preventDefault();
    var t = e.target;

    if (t.nodeName === 'A') {
      var index = t.dataset.index;
      panels.map(function (panel) {
        return panel.classList.remove('active');
      });
      panels[index].classList.add('active');
      linksArr.map(function (link) {
        return link.classList.remove('active');
      });
      linksArr[index].classList.add('active');
    }
  });
};

exports.tabs = tabs;

var lightBox = function lightBox(panels) {
  var items = _toConsumableArray(panels.querySelectorAll('.gallery-item'));

  var pastelesArray = items.filter(function (item) {
    return item.dataset.type === 'pasteles';
  });
  var gelatinasArray = items.filter(function (item) {
    return item.dataset.type === 'gelatinas';
  });
  var panaderiaArray = items.filter(function (item) {
    return item.dataset.type === 'panaderia';
  });
  var bebidasArray = items.filter(function (item) {
    return item.dataset.type === 'bebidas';
  });
  panels.addEventListener('click', function (e) {
    e.preventDefault();
    var t = e.target.parentElement;
    getData(t, pastelesArray, gelatinasArray, panaderiaArray, bebidasArray);
  });
};

exports.lightBox = lightBox;

var getData = function getData(t, pastelesArray, gelatinasArray, panaderiaArray, bebidasArray) {
  var type = t.dataset.type; // console.log(type)

  if (type === 'pasteles') {
    showData(t, pastelesArray);
  } else if (type === 'gelatinas') {
    showData(t, gelatinasArray);
  } else if (type === 'panaderia') {
    showData(t, panaderiaArray);
  } else if (type === 'bebidas') {
    showData(t, bebidasArray);
  }
};

var showData = function showData(active, type) {
  var modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = "\n    <div class=\"modal__close\"><img src=\"img/icons/close.svg\" alt=\"\" class=\"close\"></div>\n    <div class=\"arrow left prev\"><img src=\"img/icons/left.svg\" alt=\"\"></div>\n    <div class=\"arrow right next\"><img src=\"img/icons/right.svg\" alt=\"\"></div>\n    <div class=\"modal__container\">\n        <img src=\"".concat(active.dataset.url, "\" class=\"modal__img\" alt=\"\">\n        <p class=\"modal__name\">").concat(active.dataset.name, "</p>\n        <p class=\"modal__description\">").concat(active.dataset.description, "</p>\n\n    </div>\n  ");
  document.body.appendChild(modal);
  closeModal(modal);
  navigateModal(modal, type, active);
};

var closeModal = function closeModal(modal) {
  modal.addEventListener('click', function (e) {
    var t = e.target.parentElement;
    e.preventDefault();

    if (t.classList.contains('modal__close')) {
      modal.remove();
    }
  });
};

var navigateModal = function navigateModal(modal, type, active) {
  modal.addEventListener('click', function (e) {
    e.preventDefault();
    var t = e.target.parentElement;
    var current = type.indexOf(active);
    var currentNew; // console.log(current)

    if (t.classList.contains('prev')) {
      if (current === 0) {
        currentNew = type.length - 1;
      } else {
        currentNew = current - 1;
      }

      modal.remove();
    }

    if (t.classList.contains('next')) {
      if (current === type.length - 1) {
        currentNew = 0;
      } else {
        currentNew = current + 1;
      }

      modal.remove();
    } // console.log(type.length, type[currentNew-1])
    // modal.remove()
    // closeModal(modal)


    showData(type[currentNew], type);
  });
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollMenu = void 0;

var scrollMenu = function scrollMenu(nav, header, isMobile) {
  var headerHeight = header.clientHeight;

  if (isMobile) {
    header.classList.add('fixed');
  } else {
    window.addEventListener('scroll', function (e) {
      var scrollPos = window.scrollY;

      if (scrollPos >= headerHeight) {
        nav.classList.add('fixed');
      } else {
        nav.classList.remove('fixed');
      }
    });
  }
};

exports.scrollMenu = scrollMenu;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phones = exports.sucursalMapHeight = void 0;

var sucursalMapHeight = function sucursalMapHeight(sucursales, isMobile) {
  var sW = sucursales[0].clientWidth;
  sucursales.forEach(function (el, i) {
    var path = '';

    if (isMobile) {
      el.style.height = "".concat(sW * .75, "px");
      path = "img/maps/map0".concat(i + 1, "-m.jpg");
    } else {
      el.style.height = "".concat(sW, "px");
      path = "img/maps/map0".concat(i + 1, ".jpg");
    }

    var img = document.createElement('img');
    img.src = path;
    img.alt = 'Mapa de Sucursal';
    el.appendChild(img);
  });
  document.addEventListener('click', function (e) {
    var t = e.target;
    var parent = t.parentElement;

    if (parent.classList.contains('sucursal__map')) {
      e.preventDefault();
      showMap(parent.dataset);
    }
  });
};

exports.sucursalMapHeight = sucursalMapHeight;

var showMap = function showMap(data) {
  var modal = document.createElement('div');
  console.log(data.map);
  modal.className = 'modal modal-map';
  modal.innerHTML = "\n    <div class=\"modal__close\"><img src=\"img/icons/close.svg\" alt=\"\" class=\"close\"></div>\n    <div class=\"modal__container\">\n      <iframe src=\"".concat(data.map, "\" frameborder=\"0\"></iframe>\n    </div>\n  ");
  document.body.appendChild(modal);
  closeModal(modal);
};

var closeModal = function closeModal(modal) {
  modal.addEventListener('click', function (e) {
    var t = e.target.parentElement;
    e.preventDefault();

    if (t.classList.contains('modal__close')) {
      modal.remove();
    }
  });
};

var phones = function phones(phonesArr, ismobile) {
  phonesArr.map(function (phone) {
    var phoneNewText = phone.textContent.replace(/ /g, "");
    var phoneNewText1 = phoneNewText.replace('Tel.:', '');

    if (isMobile) {
      phone.innerHTML = "<a href=\"tel:".concat(phoneNewText1, "\">").concat(phone.textContent, "</a>");
    }
  });
};

exports.phones = phones;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toPDF = void 0;

var toPDF = function toPDF(form) {
  var logo = new Image();
  logo.src = 'img/logo.jpg';
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(e.target);
    var doc = new jsPDF("p", "mm", "letter");
    var pageWidth = doc.internal.pageSize.getWidth();
    var PageHeight = doc.internal.pageSize.getHeight();
    var posX = 53;
    var posY = 40;
    var imgWidth = 50;
    var imgHeight = imgWidth * .2265;
    var imgPosX = (pageWidth - imgWidth) / 2;
    doc.addImage(logo, 'JPG', imgPosX, 10, imgWidth, imgHeight);
    doc.setFontSize(10);
    doc.text('Numero de personas:', 15, posY);
    doc.text(data.get('person-number'), posX, posY);
    doc.text('Tipo de evento:', 15, posY + 10);
    doc.text(data.get('event-type'), posX, posY + 10);
    doc.text('Sabor de Pan:', 15, posY + 20);
    doc.text(data.get('bread-flavor'), posX, posY + 20);
    doc.text('Descripción:', 15, posY + 30);
    doc.text(data.get('description'), posX, posY + 30);
    doc.text('Información Adicional:', 15, posY + 40);
    doc.text(data.get('info'), posX, posY + 40);
    doc.setFontSize(9);
    doc.text('Por favor, imprima este documento y presentelo en la sucursal de LA COCHERA de su elección', 35, posY + 60);
    doc.save('mi-pastel.pdf');
  });
};

exports.toPDF = toPDF;

},{}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map
