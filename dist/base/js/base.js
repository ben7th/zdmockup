(function() {
  this.DemoAdminHeader = React.createClass({
    displayName: 'DemoAdminHeader',
    render: function() {
      var idx, item, klass;
      return React.createElement("div", {
        "className": 'page-admin-head'
      }, React.createElement("div", {
        "className": 'ui basic segment'
      }, React.createElement("div", {
        "className": 'ui basic segment'
      }, React.createElement("h2", {
        "className": 'ui header page-title'
      }, React.createElement("span", null, this.props.data.title), React.createElement("div", {
        "className": 'sub header'
      }, this.props.data.desc))), React.createElement("div", {
        "className": 'ui basic segment'
      }, React.createElement("div", {
        "className": 'ui pointing menu'
      }, ((function() {
        var i, len, ref, results;
        idx = 0;
        ref = this.props.data.secondary_items;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          klass = ['item'];
          if (idx === 0) {
            klass.push('active');
          }
          results.push(React.createElement("a", {
            "key": idx++,
            "className": klass.join(' ')
          }, item));
        }
        return results;
      }).call(this))))));
    },
    statics: {
      Clinic: React.createClass({
        displayName: 'DemoAdminHeader.Clinic',
        render: function() {
          var data;
          data = {
            title: '店面与人员信息管理',
            desc: '设置门店机构，诊疗室，床位，以及人员信息',
            secondary_items: ['分店信息', '部门设置', '职员管理', '诊疗室管理', '床位管理']
          };
          return React.createElement(DemoAdminHeader, {
            "data": data
          });
        }
      }),
      Patient: React.createClass({
        displayName: 'DemoAdminHeader.Patient',
        render: function() {
          var data;
          data = {
            title: '患者信息管理',
            desc: '查看与管理患者档案，病历，以及诊疗回访信息',
            secondary_items: ['患者名单', '档案病历', '诊疗回访']
          };
          return React.createElement(DemoAdminHeader, {
            "data": data
          });
        }
      }),
      Register: React.createClass({
        displayName: 'DemoAdminHeader.Register',
        render: function() {
          var data;
          data = {
            title: '挂号分诊管理',
            desc: '导诊查看诊疗资源，预约与挂号信息，以及进行过号分诊处理',
            secondary_items: ['诊疗资源看板', '预约信息', '挂号信息', '分诊管理']
          };
          return React.createElement(DemoAdminHeader, {
            "data": data
          });
        }
      }),
      Charge: React.createClass({
        displayName: 'DemoAdminHeader.Charge',
        render: function() {
          var data;
          data = {
            title: '收费项目管理',
            desc: '设置收费项目， VIP 等级，以及进行会员充值',
            secondary_items: ['收费项管理', 'VIP 等级设置', '会员充值']
          };
          return React.createElement(DemoAdminHeader, {
            "data": data
          });
        }
      }),
      Plan: React.createClass({
        displayName: 'DemoAdminHeader.Plan',
        render: function() {
          var data;
          data = {
            title: '诊疗方案管理',
            desc: '设置各阶段诊疗方案录入项构成',
            secondary_items: ['方案定义', '录入项定义', '诊断模板管理']
          };
          return React.createElement(DemoAdminHeader, {
            "data": data
          });
        }
      }),
      Resource: React.createClass({
        displayName: 'DemoAdminHeader.Resource',
        render: function() {
          var data;
          data = {
            title: '药品耗材管理',
            desc: '管理药品耗材的库存信息',
            secondary_items: ['分类管理', '信息维护', '入库管理', '出库管理', '在库盘点']
          };
          return React.createElement(DemoAdminHeader, {
            "data": data
          });
        }
      }),
      System: React.createClass({
        displayName: 'DemoAdminHeader.System',
        render: function() {
          var data;
          data = {
            title: '系统基础设置',
            desc: '设置系统其它功能用到的基础数据',
            secondary_items: ['人员岗位定义', '床位类型定义', '缴费方式定义']
          };
          return React.createElement(DemoAdminHeader, {
            "data": data
          });
        }
      })
    }
  });

}).call(this);

(function() {
  this.DemoPlaceholder = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'ui segment vertical'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("div", {
        "className": 'demo-placeholder'
      }, "developing ", location.href)));
    }
  });

}).call(this);

(function() {
  this.DemoAdminTable = React.createClass({
    displayName: 'DemoAdminTable',
    render: function() {
      return React.createElement("div", {
        "className": 'demo-admin-table ui basic segment'
      }, React.createElement("div", {
        "className": 'ui basic segment'
      }, React.createElement(DemoAdminTable.Table, {
        "data": this.props.data
      })));
    },
    statics: {
      Table: React.createClass({
        render: function() {
          var btn_text, i, icon, name, text, value;
          return React.createElement("table", {
            "className": 'ui celled table'
          }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null), (function() {
            var ref, results;
            ref = this.props.data.fields;
            results = [];
            for (name in ref) {
              text = ref[name];
              results.push(React.createElement("th", {
                "key": name
              }, text));
            }
            return results;
          }).call(this))), React.createElement("tbody", null, (function() {
            var j, results;
            results = [];
            for (i = j = 0; j <= 2; i = ++j) {
              results.push(React.createElement("tr", {
                "key": i
              }, React.createElement("td", {
                "className": 'collapsing'
              }, React.createElement("a", {
                "className": 'ui mini button edit green'
              }, React.createElement("i", {
                "className": 'ui icon edit'
              }), React.createElement("span", null, "修改"))), (function() {
                var ref, ref1, ref2, ref3, results1;
                ref = this.props.data.fields;
                results1 = [];
                for (name in ref) {
                  text = ref[name];
                  value = ((ref1 = this.props.data.sample) != null ? (ref2 = ref1[i]) != null ? ref2[name] : void 0 : void 0) || React.createElement("br", null);
                  results1.push(React.createElement("td", {
                    "key": name
                  }, React.createElement("span", null, value), (this.props.data.manage[name] != null ? ((ref3 = this.props.data.manage[name], icon = ref3[0], btn_text = ref3[1], ref3), React.createElement("a", {
                    "className": 'ui mini manage button green'
                  }, React.createElement("i", {
                    "className": "ui icon " + icon
                  }), React.createElement("span", null, btn_text))) : void 0)));
                }
                return results1;
              }).call(this)));
            }
            return results;
          }).call(this)), React.createElement("tfoot", null, React.createElement("tr", null, React.createElement("th", null), React.createElement("th", {
            "colSpan": (Object.keys(this.props.data.fields).length)
          }, React.createElement("a", {
            "className": 'ui labeled icon button large blue'
          }, React.createElement("i", {
            "className": 'ui icon add'
          }), React.createElement("span", null, "增加店面")), React.createElement("div", {
            "className": 'ui right floated pagination menu'
          }, React.createElement("a", {
            "className": 'icon item'
          }, React.createElement("i", {
            "className": 'icon left chevron'
          })), React.createElement("a", {
            "className": 'item'
          }, "1"), React.createElement("a", {
            "className": 'item'
          }, "2"), React.createElement("a", {
            "className": 'item'
          }, "3"), React.createElement("a", {
            "className": 'icon item'
          }, React.createElement("i", {
            "className": 'icon right chevron'
          })))))));
        }
      }),
      Clinic: React.createClass({
        render: function() {
          var data;
          data = {
            fields: {
              name: '店面名称',
              address: '地址',
              phone: '电话',
              director: '负责人',
              underlings: '下属店面',
              beds: '床位数'
            },
            manage: {
              underlings: ['setting', '设置'],
              beds: ['setting', '设置']
            },
            sample: [
              {
                name: '朝阳区总店',
                address: '北京朝阳区健翔桥东xx号',
                phone: '010-66668888',
                director: '张仲景',
                underlings: '2',
                beds: '200'
              }, {
                name: '北苑路分店',
                address: '北京朝阳区北苑路xx号',
                phone: '010-66668889',
                director: '孙思邈',
                underlings: '0',
                beds: '100'
              }, {
                name: '芍药居分店',
                address: '北京朝阳区文学馆路xx号',
                phone: '010-66668880',
                director: '钱乙',
                underlings: '0',
                beds: '100'
              }
            ]
          };
          return React.createElement(DemoAdminTable, {
            "data": data
          });
        }
      })
    }
  });

}).call(this);

(function() {
  this.DemoTopMenu = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'ui fixed inverted menu'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("a", {
        "className": 'item',
        "onClick": this.show_sidebar
      }, React.createElement("i", {
        "className": 'icon sidebar'
      }), React.createElement("span", null, "显示侧栏菜单"))));
    },
    show_sidebar: function() {
      return jQuery('body > .sidebar').sidebar('toggle');
    }
  });

  this.DemoManageSidebar = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'ui left vertical inverted sidebar labeled icon menu visible'
      }, React.createElement(DemoManageSidebar.Item, {
        "icon": 'hospital',
        "text": '店面人员',
        "link": 'clinic'
      }), React.createElement(DemoManageSidebar.Item, {
        "icon": 'user',
        "text": '患者信息',
        "link": 'patient'
      }), React.createElement(DemoManageSidebar.Item, {
        "icon": 'treatment',
        "text": '挂号分诊',
        "link": 'register'
      }), React.createElement(DemoManageSidebar.Item, {
        "icon": 'yen',
        "text": '收费项目',
        "link": 'charge'
      }), React.createElement(DemoManageSidebar.Item, {
        "icon": 'file text outline',
        "text": '诊疗方案',
        "link": 'plan'
      }), React.createElement(DemoManageSidebar.Item, {
        "icon": 'first aid',
        "text": '药品耗材',
        "link": 'resource'
      }), React.createElement(DemoManageSidebar.Item, {
        "icon": 'setting',
        "text": '系统设置',
        "link": 'system'
      }));
    },
    statics: {
      Item: React.createClass({
        render: function() {
          var href, klass;
          href = this.props.link ? this.props.link + ".html" : 'javascript:;';
          klass = ['item blue'];
          if (this.current_sidebar_active_item() === this.props.link) {
            klass.push('active');
          }
          return React.createElement("a", {
            "className": klass.join(' '),
            "href": href
          }, React.createElement("i", {
            "className": "icon " + this.props.icon
          }), React.createElement("span", null, this.props.text));
        },
        current_sidebar_active_item: function() {
          var mark, page;
          page = location.href.split('/demo/').pop();
          return mark = page.split('.html')[0];
        }
      })
    }
  });

}).call(this);

(function() {
  jQuery(document).on('page:change', function() {
    var component_name, constructor, dom, i, len, props, ref, results;
    ref = jQuery('[data-react-class]');
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      dom = ref[i];
      component_name = dom.getAttribute('data-react-class');
      constructor = this[component_name] || eval.call(this, component_name);
      props = JSON.parse(dom.getAttribute('data-react-props'));
      results.push(ReactDOM.render(React.createElement(constructor, props), dom));
    }
    return results;
  });

}).call(this);

(function() {
  var CSRFToken, Click, ComponentUrl, EVENTS, Link, ProgressBar, browserIsntBuggy, browserSupportsCustomEvents, browserSupportsPushState, browserSupportsTurbolinks, bypassOnLoadPopstate, cacheCurrentPage, cacheSize, changePage, clone, constrainPageCacheTo, createDocument, crossOriginRedirect, currentState, enableProgressBar, enableTransitionCache, executeScriptTags, extractTitleAndBody, fetch, fetchHistory, fetchReplacement, historyStateIsDefined, initializeTurbolinks, installDocumentReadyPageEventTriggers, installHistoryChangeHandler, installJqueryAjaxSuccessPageUpdateTrigger, loadedAssets, manuallyTriggerHashChangeForFirefox, pageCache, pageChangePrevented, pagesCached, popCookie, processResponse, progressBar, recallScrollPosition, ref, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberReferer, removeNoscriptTags, requestMethodIsSafe, resetScrollPosition, setAutofocusElement, transitionCacheEnabled, transitionCacheFor, triggerEvent, visit, xhr,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  pageCache = {};

  cacheSize = 10;

  transitionCacheEnabled = false;

  progressBar = null;

  currentState = null;

  loadedAssets = null;

  referer = null;

  xhr = null;

  EVENTS = {
    BEFORE_CHANGE: 'page:before-change',
    FETCH: 'page:fetch',
    RECEIVE: 'page:receive',
    CHANGE: 'page:change',
    UPDATE: 'page:update',
    LOAD: 'page:load',
    RESTORE: 'page:restore',
    BEFORE_UNLOAD: 'page:before-unload',
    EXPIRE: 'page:expire'
  };

  fetch = function(url) {
    var cachedPage;
    url = new ComponentUrl(url);
    rememberReferer();
    cacheCurrentPage();
    if (progressBar != null) {
      progressBar.start();
    }
    if (transitionCacheEnabled && (cachedPage = transitionCacheFor(url.absolute))) {
      fetchHistory(cachedPage);
      return fetchReplacement(url, null, false);
    } else {
      return fetchReplacement(url, resetScrollPosition);
    }
  };

  transitionCacheFor = function(url) {
    var cachedPage;
    cachedPage = pageCache[url];
    if (cachedPage && !cachedPage.transitionCacheDisabled) {
      return cachedPage;
    }
  };

  enableTransitionCache = function(enable) {
    if (enable == null) {
      enable = true;
    }
    return transitionCacheEnabled = enable;
  };

  enableProgressBar = function(enable) {
    if (enable == null) {
      enable = true;
    }
    if (!browserSupportsTurbolinks) {
      return;
    }
    if (enable) {
      return progressBar != null ? progressBar : progressBar = new ProgressBar('html');
    } else {
      if (progressBar != null) {
        progressBar.uninstall();
      }
      return progressBar = null;
    }
  };

  fetchReplacement = function(url, onLoadFunction, showProgressBar) {
    if (showProgressBar == null) {
      showProgressBar = true;
    }
    triggerEvent(EVENTS.FETCH, {
      url: url.absolute
    });
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', url.withoutHashForIE10compatibility(), true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = function() {
      var doc;
      triggerEvent(EVENTS.RECEIVE, {
        url: url.absolute
      });
      if (doc = processResponse()) {
        reflectNewUrl(url);
        reflectRedirectedUrl();
        changePage.apply(null, extractTitleAndBody(doc));
        manuallyTriggerHashChangeForFirefox();
        if (typeof onLoadFunction === "function") {
          onLoadFunction();
        }
        return triggerEvent(EVENTS.LOAD);
      } else {
        return document.location.href = crossOriginRedirect() || url.absolute;
      }
    };
    if (progressBar && showProgressBar) {
      xhr.onprogress = (function(_this) {
        return function(event) {
          var percent;
          percent = event.lengthComputable ? event.loaded / event.total * 100 : progressBar.value + (100 - progressBar.value) / 10;
          return progressBar.advanceTo(percent);
        };
      })(this);
    }
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onerror = function() {
      return document.location.href = url.absolute;
    };
    return xhr.send();
  };

  fetchHistory = function(cachedPage) {
    if (xhr != null) {
      xhr.abort();
    }
    changePage(cachedPage.title, cachedPage.body);
    recallScrollPosition(cachedPage);
    return triggerEvent(EVENTS.RESTORE);
  };

  cacheCurrentPage = function() {
    var currentStateUrl;
    currentStateUrl = new ComponentUrl(currentState.url);
    pageCache[currentStateUrl.absolute] = {
      url: currentStateUrl.relative,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset,
      cachedAt: new Date().getTime(),
      transitionCacheDisabled: document.querySelector('[data-no-transition-cache]') != null
    };
    return constrainPageCacheTo(cacheSize);
  };

  pagesCached = function(size) {
    if (size == null) {
      size = cacheSize;
    }
    if (/^[\d]+$/.test(size)) {
      return cacheSize = parseInt(size);
    }
  };

  constrainPageCacheTo = function(limit) {
    var cacheTimesRecentFirst, i, key, len, pageCacheKeys, results;
    pageCacheKeys = Object.keys(pageCache);
    cacheTimesRecentFirst = pageCacheKeys.map(function(url) {
      return pageCache[url].cachedAt;
    }).sort(function(a, b) {
      return b - a;
    });
    results = [];
    for (i = 0, len = pageCacheKeys.length; i < len; i++) {
      key = pageCacheKeys[i];
      if (!(pageCache[key].cachedAt <= cacheTimesRecentFirst[limit])) {
        continue;
      }
      triggerEvent(EVENTS.EXPIRE, pageCache[key]);
      results.push(delete pageCache[key]);
    }
    return results;
  };

  changePage = function(title, body, csrfToken, runScripts) {
    triggerEvent(EVENTS.BEFORE_UNLOAD);
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    setAutofocusElement();
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    if (progressBar != null) {
      progressBar.done();
    }
    triggerEvent(EVENTS.CHANGE);
    return triggerEvent(EVENTS.UPDATE);
  };

  executeScriptTags = function() {
    var attr, copy, i, j, len, len1, nextSibling, parentNode, ref, ref1, script, scripts;
    scripts = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
    for (i = 0, len = scripts.length; i < len; i++) {
      script = scripts[i];
      if (!((ref = script.type) === '' || ref === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      ref1 = script.attributes;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        attr = ref1[j];
        copy.setAttribute(attr.name, attr.value);
      }
      if (!script.hasAttribute('async')) {
        copy.async = false;
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function(node) {
    node.innerHTML = node.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/ig, '');
    return node;
  };

  setAutofocusElement = function() {
    var autofocusElement, list;
    autofocusElement = (list = document.querySelectorAll('input[autofocus], textarea[autofocus]'))[list.length - 1];
    if (autofocusElement && document.activeElement !== autofocusElement) {
      return autofocusElement.focus();
    }
  };

  reflectNewUrl = function(url) {
    if ((url = new ComponentUrl(url)).absolute !== referer) {
      return window.history.pushState({
        turbolinks: true,
        url: url.absolute
      }, '', url.absolute);
    }
  };

  reflectRedirectedUrl = function() {
    var location, preservedHash;
    if (location = xhr.getResponseHeader('X-XHR-Redirected-To')) {
      location = new ComponentUrl(location);
      preservedHash = location.hasNoHash() ? document.location.hash : '';
      return window.history.replaceState(window.history.state, '', location.href + preservedHash);
    }
  };

  crossOriginRedirect = function() {
    var redirect;
    if (((redirect = xhr.getResponseHeader('Location')) != null) && (new ComponentUrl(redirect)).crossOrigin()) {
      return redirect;
    }
  };

  rememberReferer = function() {
    return referer = document.location.href;
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      url: document.location.href
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  manuallyTriggerHashChangeForFirefox = function() {
    var url;
    if (navigator.userAgent.match(/Firefox/) && !(url = new ComponentUrl).hasNoHash()) {
      window.history.replaceState(currentState, '', url.withoutHash());
      return document.location.hash = url.hash;
    }
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    if (document.location.hash) {
      return document.location.href = document.location.href;
    } else {
      return window.scrollTo(0, 0);
    }
  };

  clone = function(original) {
    var copy, key, value;
    if ((original == null) || typeof original !== 'object') {
      return original;
    }
    copy = new original.constructor();
    for (key in original) {
      value = original[key];
      copy[key] = clone(value);
    }
    return copy;
  };

  popCookie = function(name) {
    var ref, value;
    value = ((ref = document.cookie.match(new RegExp(name + "=(\\w+)"))) != null ? ref[1].toUpperCase() : void 0) || '';
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/';
    return value;
  };

  triggerEvent = function(name, data) {
    var event;
    if (typeof Prototype !== 'undefined') {
      Event.fire(document, name, data, true);
    }
    event = document.createEvent('Events');
    if (data) {
      event.data = data;
    }
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  pageChangePrevented = function(url) {
    return !triggerEvent(EVENTS.BEFORE_CHANGE, {
      url: url
    });
  };

  processResponse = function() {
    var assetsChanged, clientOrServerError, doc, extractTrackAssets, intersection, validContent;
    clientOrServerError = function() {
      var ref;
      return (400 <= (ref = xhr.status) && ref < 600);
    };
    validContent = function() {
      var contentType;
      return ((contentType = xhr.getResponseHeader('Content-Type')) != null) && contentType.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
    };
    extractTrackAssets = function(doc) {
      var i, len, node, ref, results;
      ref = doc.querySelector('head').childNodes;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        node = ref[i];
        if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
          results.push(node.getAttribute('src') || node.getAttribute('href'));
        }
      }
      return results;
    };
    assetsChanged = function(doc) {
      var fetchedAssets;
      loadedAssets || (loadedAssets = extractTrackAssets(document));
      fetchedAssets = extractTrackAssets(doc);
      return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
    };
    intersection = function(a, b) {
      var i, len, ref, results, value;
      if (a.length > b.length) {
        ref = [b, a], a = ref[0], b = ref[1];
      }
      results = [];
      for (i = 0, len = a.length; i < len; i++) {
        value = a[i];
        if (indexOf.call(b, value) >= 0) {
          results.push(value);
        }
      }
      return results;
    };
    if (!clientOrServerError() && validContent()) {
      doc = createDocument(xhr.responseText);
      if (doc && !assetsChanged(doc)) {
        return doc;
      }
    }
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, removeNoscriptTags(doc.querySelector('body')), CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  createDocument = function(html) {
    var doc;
    doc = document.documentElement.cloneNode();
    doc.innerHTML = html;
    doc.head = doc.querySelector('head');
    doc.body = doc.querySelector('body');
    return doc;
  };

  ComponentUrl = (function() {
    function ComponentUrl(original1) {
      this.original = original1 != null ? original1 : document.location.href;
      if (this.original.constructor === ComponentUrl) {
        return this.original;
      }
      this._parse();
    }

    ComponentUrl.prototype.withoutHash = function() {
      return this.href.replace(this.hash, '').replace('#', '');
    };

    ComponentUrl.prototype.withoutHashForIE10compatibility = function() {
      return this.withoutHash();
    };

    ComponentUrl.prototype.hasNoHash = function() {
      return this.hash.length === 0;
    };

    ComponentUrl.prototype.crossOrigin = function() {
      return this.origin !== (new ComponentUrl).origin;
    };

    ComponentUrl.prototype._parse = function() {
      var ref;
      (this.link != null ? this.link : this.link = document.createElement('a')).href = this.original;
      ref = this.link, this.href = ref.href, this.protocol = ref.protocol, this.host = ref.host, this.hostname = ref.hostname, this.port = ref.port, this.pathname = ref.pathname, this.search = ref.search, this.hash = ref.hash;
      this.origin = [this.protocol, '//', this.hostname].join('');
      if (this.port.length !== 0) {
        this.origin += ":" + this.port;
      }
      this.relative = [this.pathname, this.search, this.hash].join('');
      return this.absolute = this.href;
    };

    return ComponentUrl;

  })();

  Link = (function(superClass) {
    extend(Link, superClass);

    Link.HTML_EXTENSIONS = ['html'];

    Link.allowExtensions = function() {
      var extension, extensions, i, len;
      extensions = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      for (i = 0, len = extensions.length; i < len; i++) {
        extension = extensions[i];
        Link.HTML_EXTENSIONS.push(extension);
      }
      return Link.HTML_EXTENSIONS;
    };

    function Link(link1) {
      this.link = link1;
      if (this.link.constructor === Link) {
        return this.link;
      }
      this.original = this.link.href;
      this.originalElement = this.link;
      this.link = this.link.cloneNode(false);
      Link.__super__.constructor.apply(this, arguments);
    }

    Link.prototype.shouldIgnore = function() {
      return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target();
    };

    Link.prototype._anchored = function() {
      return (this.hash.length > 0 || this.href.charAt(this.href.length - 1) === '#') && (this.withoutHash() === (new ComponentUrl).withoutHash());
    };

    Link.prototype._nonHtml = function() {
      return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + (Link.HTML_EXTENSIONS.join('|')) + ")?$", 'g'));
    };

    Link.prototype._optOut = function() {
      var ignore, link;
      link = this.originalElement;
      while (!(ignore || link === document)) {
        ignore = link.getAttribute('data-no-turbolink') != null;
        link = link.parentNode;
      }
      return ignore;
    };

    Link.prototype._target = function() {
      return this.link.target.length !== 0;
    };

    return Link;

  })(ComponentUrl);

  Click = (function() {
    Click.installHandlerLast = function(event) {
      if (!event.defaultPrevented) {
        document.removeEventListener('click', Click.handle, false);
        return document.addEventListener('click', Click.handle, false);
      }
    };

    Click.handle = function(event) {
      return new Click(event);
    };

    function Click(event1) {
      this.event = event1;
      if (this.event.defaultPrevented) {
        return;
      }
      this._extractLink();
      if (this._validForTurbolinks()) {
        if (!pageChangePrevented(this.link.absolute)) {
          visit(this.link.href);
        }
        this.event.preventDefault();
      }
    }

    Click.prototype._extractLink = function() {
      var link;
      link = this.event.target;
      while (!(!link.parentNode || link.nodeName === 'A')) {
        link = link.parentNode;
      }
      if (link.nodeName === 'A' && link.href.length !== 0) {
        return this.link = new Link(link);
      }
    };

    Click.prototype._validForTurbolinks = function() {
      return (this.link != null) && !(this.link.shouldIgnore() || this._nonStandardClick());
    };

    Click.prototype._nonStandardClick = function() {
      return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey;
    };

    return Click;

  })();

  ProgressBar = (function() {
    var className;

    className = 'turbolinks-progress-bar';

    function ProgressBar(elementSelector) {
      this.elementSelector = elementSelector;
      this._trickle = bind(this._trickle, this);
      this.value = 0;
      this.content = '';
      this.speed = 300;
      this.opacity = 0.99;
      this.install();
    }

    ProgressBar.prototype.install = function() {
      this.element = document.querySelector(this.elementSelector);
      this.element.classList.add(className);
      this.styleElement = document.createElement('style');
      document.head.appendChild(this.styleElement);
      return this._updateStyle();
    };

    ProgressBar.prototype.uninstall = function() {
      this.element.classList.remove(className);
      return document.head.removeChild(this.styleElement);
    };

    ProgressBar.prototype.start = function() {
      return this.advanceTo(5);
    };

    ProgressBar.prototype.advanceTo = function(value) {
      var ref;
      if ((value > (ref = this.value) && ref <= 100)) {
        this.value = value;
        this._updateStyle();
        if (this.value === 100) {
          return this._stopTrickle();
        } else if (this.value > 0) {
          return this._startTrickle();
        }
      }
    };

    ProgressBar.prototype.done = function() {
      if (this.value > 0) {
        this.advanceTo(100);
        return this._reset();
      }
    };

    ProgressBar.prototype._reset = function() {
      var originalOpacity;
      originalOpacity = this.opacity;
      setTimeout((function(_this) {
        return function() {
          _this.opacity = 0;
          return _this._updateStyle();
        };
      })(this), this.speed / 2);
      return setTimeout((function(_this) {
        return function() {
          _this.value = 0;
          _this.opacity = originalOpacity;
          return _this._withSpeed(0, function() {
            return _this._updateStyle(true);
          });
        };
      })(this), this.speed);
    };

    ProgressBar.prototype._startTrickle = function() {
      if (this.trickling) {
        return;
      }
      this.trickling = true;
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._stopTrickle = function() {
      return delete this.trickling;
    };

    ProgressBar.prototype._trickle = function() {
      if (!this.trickling) {
        return;
      }
      this.advanceTo(this.value + Math.random() / 2);
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._withSpeed = function(speed, fn) {
      var originalSpeed, result;
      originalSpeed = this.speed;
      this.speed = speed;
      result = fn();
      this.speed = originalSpeed;
      return result;
    };

    ProgressBar.prototype._updateStyle = function(forceRepaint) {
      if (forceRepaint == null) {
        forceRepaint = false;
      }
      if (forceRepaint) {
        this._changeContentToForceRepaint();
      }
      return this.styleElement.textContent = this._createCSSRule();
    };

    ProgressBar.prototype._changeContentToForceRepaint = function() {
      return this.content = this.content === '' ? ' ' : '';
    };

    ProgressBar.prototype._createCSSRule = function() {
      return this.elementSelector + "." + className + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + (this.speed / 2) + "ms ease-in;\n  transform: translate3d(0,0,0);\n}";
    };

    return ProgressBar;

  })();

  bypassOnLoadPopstate = function(fn) {
    return setTimeout(fn, 500);
  };

  installDocumentReadyPageEventTriggers = function() {
    return document.addEventListener('DOMContentLoaded', (function() {
      triggerEvent(EVENTS.CHANGE);
      return triggerEvent(EVENTS.UPDATE);
    }), true);
  };

  installJqueryAjaxSuccessPageUpdateTrigger = function() {
    if (typeof jQuery !== 'undefined') {
      return jQuery(document).on('ajaxSuccess', function(event, xhr, settings) {
        if (!jQuery.trim(xhr.responseText)) {
          return;
        }
        return triggerEvent(EVENTS.UPDATE);
      });
    }
  };

  installHistoryChangeHandler = function(event) {
    var cachedPage, ref;
    if ((ref = event.state) != null ? ref.turbolinks : void 0) {
      if (cachedPage = pageCache[(new ComponentUrl(event.state.url)).absolute]) {
        cacheCurrentPage();
        return fetchHistory(cachedPage);
      } else {
        return visit(event.target.location.href);
      }
    }
  };

  initializeTurbolinks = function() {
    rememberCurrentUrl();
    rememberCurrentState();
    document.addEventListener('click', Click.installHandlerLast, true);
    window.addEventListener('hashchange', function(event) {
      rememberCurrentUrl();
      return rememberCurrentState();
    }, false);
    return bypassOnLoadPopstate(function() {
      return window.addEventListener('popstate', installHistoryChangeHandler, false);
    });
  };

  historyStateIsDefined = window.history.state !== void 0 || navigator.userAgent.match(/Firefox\/2[6|7]/);

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && historyStateIsDefined;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = (ref = popCookie('request_method')) === 'GET' || ref === '';

  browserSupportsTurbolinks = browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe;

  browserSupportsCustomEvents = document.addEventListener && document.createEvent;

  if (browserSupportsCustomEvents) {
    installDocumentReadyPageEventTriggers();
    installJqueryAjaxSuccessPageUpdateTrigger();
  }

  if (browserSupportsTurbolinks) {
    visit = fetch;
    initializeTurbolinks();
  } else {
    visit = function(url) {
      return document.location.href = url;
    };
  }

  this.Turbolinks = {
    visit: visit,
    pagesCached: pagesCached,
    enableTransitionCache: enableTransitionCache,
    enableProgressBar: enableProgressBar,
    allowLinkExtensions: Link.allowExtensions,
    supported: browserSupportsTurbolinks,
    EVENTS: clone(EVENTS)
  };

}).call(this);

(function() {


}).call(this);

//# sourceMappingURL=base.js.map
