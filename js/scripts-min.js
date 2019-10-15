(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _activeMenu = require("./modules/active-menu");

var _productos = require("./modules/productos");

var _sucursales = require("./modules/sucursales");

var _loading = require("./modules/loading");

var _form = require("./modules/form");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// ((w,d,dd,c)=>{
// })(window,document,document.documentElement,console);
// función para obtener el ancho de la barra de scroll
var getScrollBarWidth = function getScrollBarWidth() {
  return window.innerWidth - document.documentElement.getBoundingClientRect().width;
}; // funcion para asignar ese valor a una variable css


var cssScrollBarWidth = function cssScrollBarWidth() {
  return document.documentElement.style.setProperty('--scrollbar', "".concat(getScrollBarWidth(), "px"));
}; // asignar la variable css al cargar la página


addEventListener('load', cssScrollBarWidth); // reasignar la variable css al redimensionar la ventana

addEventListener('resize', cssScrollBarWidth);
var isMobile = {
  mobilecheck: function mobilecheck() {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
  }
};
var body = document.body;

if (isMobile.mobilecheck()) {
  body.classList.add('mobile');
  var mobEle = document.createElement('div');
  mobEle.className = "is-mobile";
  mobEle.id = "isMobile";
  mobEle.innerHTML = "\n    <img src=\"img/smartphonel.svg\" alt=\"Cell phone\">\n    <p>Por favor gire su tel\xE9fono</p>\n  ";
  body.appendChild(mobEle);
}

var scrollFunction = function scrollFunction(nav) {
  addEventListener('scroll', function (e) {
    var headerHeight = document.getElementById('mainHeader').clientHeight;
    scrollY >= headerHeight ? nav.classList.add('fixed') : nav.classList.remove('fixed');
  });
};

var nav = document.getElementById('main-nav');
var toggle = document.getElementById('toggle-menu');
var tabsContainer = document.getElementById('tabsProducts');
var panels = document.getElementById('panels');

var sucursales = _toConsumableArray(document.querySelectorAll('.sucursal__map'));

if (nav && toggle) (0, _activeMenu.activeMenu)(nav, toggle);
if (tabsContainer) (0, _productos.tabs)(tabsContainer);
if (panels) (0, _productos.lightBox)(panels);
var loadinEle = document.getElementById('loading');
if (loadinEle) (0, _loading.loading)(loadinEle);
if (body.classList.contains('Sucursales')) (0, _sucursales.sucursalMapHeight)(sucursales, isMobile.mobilecheck());

var phonesArr = _toConsumableArray(document.querySelectorAll('.jsPhone'));

if (phonesArr) (0, _sucursales.phones)(phonesArr, isMobile.mobilecheck());
var textAreaEle = document.getElementById('textarea');
if (textAreaEle) (0, _form.textarea)(textAreaEle);
var formPastel = document.getElementById('formPastel');

if (formPastel) {
  (0, _form.selectFill)(formPastel);
  (0, _form.toPDF)(formPastel);
}

scrollFunction(nav);

},{"./modules/active-menu":2,"./modules/form":3,"./modules/loading":4,"./modules/productos":5,"./modules/sucursales":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activeMenu = void 0;

var activeMenu = function activeMenu(nav, toggle) {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    nav.classList.toggle('show');
  });
};

exports.activeMenu = activeMenu;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toPDF = exports.selectFill = exports.textarea = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var mantequilla = ["Chocolate", "Cappuccino", "Frappuchino", "Nuez", "Zanahoria", "Naranja", "Choco-Café", "Marquez", "Napolitano", "Selva Negra", "Rollo De Chocolate", "Monte Carlo", "Vienés", "Alas De Angel", "Mil Hojas", "4 Chocolates", "Dominó", "Cheese Cake"];
var tresLeches = ["Moka", "Kahula", "3 Leches", "Crema de Caramelo"];

var textarea = function textarea(textareaElem) {
  var textArea = textareaElem.querySelector('textarea');
  var span = document.createElement('div');
  var max = textArea.getAttribute('maxlength');
  span.className = 'textCount';
  span.textContent = "0 / ".concat(max);
  textareaElem.appendChild(span);
  textArea.addEventListener('keyup', function (e) {
    var T = e.target;
    console.dir(T.value.length);
    span.textContent = "".concat(T.value.length, " / ").concat(max);
  });
};

exports.textarea = textarea;

var selectFill = function selectFill(form) {
  var selects = _toConsumableArray(form.querySelectorAll('select')); // console.log(selects)


  selects[0].addEventListener('change', function (e) {
    var val = e.target.value;

    if (val === '0') {
      selects[1].innerHTML = '<option value="0">Elija un tipo de pan</option>';
      e.target.focus();
    } else if (val === 'Tres Leches') {
      selects[1].innerHTML = '';
      tresLeches.map(function (f) {
        var op = document.createElement('option');
        op.setAttribute('value', "".concat(f));
        op.textContent = f;
        selects[1].appendChild(op);
      });
    } else if (val === "Mantequilla") {
      selects[1].innerHTML = '';
      mantequilla.map(function (f) {
        var op = document.createElement('option');
        op.setAttribute('value', "".concat(f));
        op.textContent = f;
        selects[1].appendChild(op);
      });
    }
  });
};

exports.selectFill = selectFill;

var toPDF = function toPDF(form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (verifyForm(form)) createPDF(new FormData(e.target));
  });
};

exports.toPDF = toPDF;

var verifyForm = function verifyForm(form) {
  var count = 0;

  var inputs = _toConsumableArray(form.querySelectorAll('input,select'));

  inputs.map(function (input) {
    if (input.value === '0' || input.value === '') {
      count++;
      input.classList.add('error');
      input.focus();
    } else {
      input.classList.remove('error');
    }
  });

  if (count > 0) {
    return false;
  } else {
    return true;
  }
};

var createPDF = function createPDF(data) {
  console.log(data.get('person-number'));
  var logo = new Image();
  logo.src = 'img/logo.jpg';
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
  posY += 10;
  doc.text('Tipo de Evento:', 15, posY);
  doc.text(data.get('event-type'), posX, posY);
  posY += 10;
  doc.text('Tipo de Pan:', 15, posY);
  doc.text(data.get('bread-type'), posX, posY);
  posY += 10;
  doc.text('Sabor de Pan:', 15, posY);
  doc.text(data.get('bread-flavor'), posX, posY);
  posY += 10;
  doc.text('Tamaño:', 15, posY);
  doc.text(data.get('size'), posX, posY);
  posY += 10;
  doc.text('Forma:', 15, posY);
  doc.text(data.get('forma'), posX, posY);
  posY += 10;
  doc.text('Acomodo:', 15, posY);
  doc.text(data.get('acomodo'), posX, posY);
  posY += 10;
  doc.text('Relleno:', 15, posY);
  doc.text(data.get('relleno'), posX, posY);
  posY += 10;
  doc.text('Dibujo:', 15, posY);
  doc.text(data.get('dibujo'), posX, posY);
  posY += 10;
  doc.text('Base:', 15, posY);
  doc.text(data.get('base'), posX, posY);
  posY += 10;
  doc.text('Información Adicional:', 15, posY);
  doc.text(data.get('info'), posX, posY);
  doc.setFontSize(9);
  posY += 20;
  doc.text('Por favor, imprima este documento y presentelo en la sucursal de LA COCHERA de su elección', 35, posY);
  doc.save('mi-pastel.pdf');
  alert('Documento creado con éxito');
};

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loading = void 0;

var loading = function loading(loadingEle) {
  addEventListener('load', function (e) {
    setTimeout(function () {
      loadingEle.remove();
    }, 0);
  });
};

exports.loading = loading;

},{}],5:[function(require,module,exports){
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
  var lengthType = type.length - 1;
  var itemIndex = active.dataset.index;
  var lS = '';
  var rS = '';
  if (itemIndex === '0') lS = 'noshow';
  if (type.indexOf(active) === lengthType) rS = 'noshow';
  var modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = "\n    <div class=\"modal__close\"><img src=\"img/icons/close.svg\" alt=\"\" class=\"close\"></div>    \n    <div class=\"arrow left prev ".concat(lS, "\"><img src=\"img/icons/left.svg\" alt=\"\"></div>\n    <div class=\"arrow right next ").concat(rS, "\"><img src=\"img/icons/right.svg\" alt=\"\"></div>\n    <div class=\"modal__container\">\n        <img src=\"").concat(active.dataset.url, "\" class=\"modal__img\" alt=\"\">\n        <p class=\"modal__name\">").concat(active.dataset.name, "</p>\n        <p class=\"modal__description\">").concat(active.dataset.description, "</p>\n\n    </div>\n  ");
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

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phones = exports.sucursalMapHeight = void 0;

var sucursalMapHeight = function sucursalMapHeight(sucursales, isMobile) {
  var sW = sucursales[0].clientWidth; // console.log(sucursales)

  sucursales.forEach(function (el, i) {
    var path = '';
    var imgSrc = el.dataset.img;

    if (isMobile) {
      el.style.height = "".concat(sW * .75, "px");
      path = "img/maps/".concat(imgSrc, "-m.jpg");
    } else {
      el.style.height = "".concat(sW, "px");
      path = "img/maps/".concat(imgSrc, ".jpg");
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

var phones = function phones(phonesArr, isMobile) {
  phonesArr.map(function (phone) {
    var phoneNewText = phone.textContent.replace(/ /g, "");
    var phoneNewText1 = phoneNewText.replace('Tel.:', '');

    if (isMobile) {
      phone.innerHTML = "<a href=\"tel:".concat(phoneNewText1, "\">").concat(phone.textContent, "</a>");
    }
  });
};

exports.phones = phones;

},{}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map
