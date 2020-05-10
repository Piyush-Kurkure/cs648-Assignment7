

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) {
  return function () {
    const self = this; const
      args = arguments; return new Promise(((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); }));
  };
}

function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) {
  return function () {
    const Super = _getPrototypeOf(Derived); let
      result; if (_isNativeReflectConstruct()) { const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], () => {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint "react/react-in-jsx-scope": "off" */

/* globals React ReactDOM */

/* eslint "react/jsx-no-undef": "off" */

/* eslint "react/no-multi-comp": "off" */
// eslint-disable-next-line react/prefer-stateless-function
const ProductTable = /* #__PURE__ */(function (_React$Component) {
  _inherits(ProductTable, _React$Component);

  const _super = _createSuper(ProductTable);

  function ProductTable() {
    _classCallCheck(this, ProductTable);

    return _super.apply(this, arguments);
  }

  _createClass(ProductTable, [{
    key: 'render',
    value: function render() {
      const { products } = this.props;
      const productRows = products.map(product =>
      /* #__PURE__ */React.createElement(ProductRow, {
          key: product.id,
          product,
        }));
      return /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement('p', null, ' Showing all available products'), ' ', /* #__PURE__ */React.createElement('hr', null), /* #__PURE__ */React.createElement('table', {
        className: 'bordered-table',
      }, /* #__PURE__ */React.createElement('thead', null, /* #__PURE__ */React.createElement('tr', null, /* #__PURE__ */React.createElement('th', null, 'Product Name'), /* #__PURE__ */React.createElement('th', null, 'Price'), /* #__PURE__ */React.createElement('th', null, 'Category'), /* #__PURE__ */React.createElement('th', null, 'Image'))), /* #__PURE__ */React.createElement('tbody', null, productRows)));
    },
  }]);

  return ProductTable;
}(React.Component)); // eslint-disable-next-line react/prefer-stateless-function


var ProductRow = /* #__PURE__ */(function (_React$Component2) {
  _inherits(ProductRow, _React$Component2);

  const _super2 = _createSuper(ProductRow);

  function ProductRow() {
    _classCallCheck(this, ProductRow);

    return _super2.apply(this, arguments);
  }

  _createClass(ProductRow, [{
    key: 'render',
    value: function render() {
      const { product } = this.props;
      return /* #__PURE__ */React.createElement('tr', null, /* #__PURE__ */React.createElement('td', null, product.name), /* #__PURE__ */React.createElement('td', null, '$', product.price), /* #__PURE__ */React.createElement('td', null, product.category), /* #__PURE__ */React.createElement('td', null, /* #__PURE__ */React.createElement('a', {
        href: product.image,
      }, 'View')));
    },
  }]);

  return ProductRow;
}(React.Component));

const ProductAdd = /* #__PURE__ */(function (_React$Component3) {
  _inherits(ProductAdd, _React$Component3);

  const _super3 = _createSuper(ProductAdd);

  function ProductAdd() {
    let _this;

    _classCallCheck(this, ProductAdd);

    _this = _super3.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductAdd, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      const { createProduct } = this.props;
      e.preventDefault();
      const form = document.forms.productAdd;
      const product = {
        category: form.category.value,
        price: form.price.value.slice(1),
        name: form.name.value,
        image: form.image.value,
      };
      createProduct(product);
    },
  }, {
    key: 'render',
    value: function render() {
      return /* #__PURE__ */React.createElement('section', null, /* #__PURE__ */React.createElement('p', null, 'Add a new product to inventory'), /* #__PURE__ */React.createElement('hr', null), /* #__PURE__ */React.createElement('form', {
        name: 'productAdd',
        onSubmit: this.handleSubmit,
      }, /* #__PURE__ */React.createElement('div', {
        className: 'inputs',
      }, /* #__PURE__ */React.createElement('label', {
        htmlFor: 'category',
      }, 'Category', /* #__PURE__ */React.createElement('select', {
        name: 'category',
        id: 'category',
      }, /* #__PURE__ */React.createElement('option', {
        value: 'Accessories',
      }, 'Accessories'), /* #__PURE__ */React.createElement('option', {
        value: 'Shirts',
      }, 'Shirts'), /* #__PURE__ */React.createElement('option', {
        value: 'Jeans',
      }, 'Jeans'), /* #__PURE__ */React.createElement('option', {
        value: 'Jackets',
      }, 'Jackets'), /* #__PURE__ */React.createElement('option', {
        value: 'Sweaters',
      }, 'Sweaters')))), /* #__PURE__ */React.createElement('div', {
        className: 'inputs',
      }, /* #__PURE__ */React.createElement('label', {
        htmlFor: 'price',
      }, 'Price per unit', /* #__PURE__ */React.createElement('input', {
        type: 'text',
        id: 'price',
        defaultValue: '$',
      }))), /* #__PURE__ */React.createElement('div', {
        className: 'inputs',
      }, /* #__PURE__ */React.createElement('label', {
        htmlFor: 'name',
      }, 'Product Name', /* #__PURE__ */React.createElement('input', {
        type: 'text',
        id: 'name',
      }))), /* #__PURE__ */React.createElement('div', {
        className: 'inputs',
      }, /* #__PURE__ */React.createElement('label', {
        htmlFor: 'image',
      }, 'Image URL', /* #__PURE__ */React.createElement('input', {
        type: 'text',
        id: 'image',
      }))), /* #__PURE__ */React.createElement('button', {
        type: 'submit',
      }, 'Add Product')));
    },
  }]);

  return ProductAdd;
}(React.Component));

const ProductList = /* #__PURE__ */(function (_React$Component4) {
  _inherits(ProductList, _React$Component4);

  const _super4 = _createSuper(ProductList);

  function ProductList() {
    let _this2;

    _classCallCheck(this, ProductList);

    _this2 = _super4.call(this);
    _this2.state = {
      products: [],
    };
    _this2.createProduct = _this2.createProduct.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(ProductList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    },
  }, {
    key: 'loadData',
    value: (function () {
      const _loadData = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee() {
        let query; let response; let
          result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = 'query {\n      productList {\n        id name category price image\n        \n      }\n    }';
                _context.next = 3;
                return fetch(window.ENV.UI_API_ENDPOINT, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    query,
                  }),
                });

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                result = _context.sent;
                this.setState({
                  products: result.data.productList,
                });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()),
  }, {
    key: 'createProduct',
    value: (function () {
      const _createProduct = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee2(product) {
        let query;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // product.id = this.state.products.length + 1;
                // const newProductList = this.state.products.slice();
                // newProductList.push(product);
                // this.setState({ products: newProductList });
                query = 'mutation productAdd($product: ProductInputs!) {\n      productAdd(product: $product) {\n        id\n      }\n    }';
                _context2.next = 3;
                return fetch(window.ENV.UI_API_ENDPOINT, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    query,
                    variables: {
                      product,
                    },
                  }),
                });

              case 3:
                this.loadData();

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createProduct(_x) {
        return _createProduct.apply(this, arguments);
      }

      return createProduct;
    }()),
  }, {
    key: 'render',
    value: function render() {
      const { products } = this.state;
      return /* #__PURE__ */React.createElement(React.Fragment, null, /* #__PURE__ */React.createElement('h1', null, 'My Company Inventory'), /* #__PURE__ */React.createElement(ProductTable, {
        products,
      }), /* #__PURE__ */React.createElement(ProductAdd, {
        createProduct: this.createProduct,
      }));
    },
  }]);

  return ProductList;
}(React.Component));

const element = /* #__PURE__ */React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('contents'));
