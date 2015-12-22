(function() {
  this.DemoAdminHeader = React.createClass({
    displayName: 'DemoAdminHeader',
    render: function() {
      var href, idx, item, klass, link;
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
        "className": 'ui basic segment secondry-nav'
      }, React.createElement("div", {
        "className": 'ui pointing menu'
      }, ((function() {
        var i, len, ref, ref1, results;
        idx = 0;
        ref = this.props.data.secondary_items;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          klass = ['item'];
          if ((link = (ref1 = this.props.data.links) != null ? ref1[idx] : void 0) != null) {
            href = link + ".html";
            if (window.get_page_name() === link) {
              klass.push('active');
            }
          } else {
            href = 'javascript:;';
            klass.push('disabled');
          }
          results.push(React.createElement("a", {
            "key": idx++,
            "className": klass.join(' '),
            "href": href
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
            desc: '设置分公司与门店机构，部门人员，以及诊疗室，床位信息',
            secondary_items: ['分公司信息', '店面信息', '部门信息', '人员信息', '诊疗室与床位信息'],
            links: ['clinic', 'clinic-branch', 'clinic-department', 'clinic-person', 'clinic-room']
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
            secondary_items: ['患者名单', '诊疗记录'],
            links: ['patient']
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
            desc: '设置收费项目， VIP 等级',
            secondary_items: ['收费项目定义', 'VIP 等级定义'],
            links: ['charge', 'charge-vip']
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
            secondary_items: ['库存项目定义', '入库管理', '出库管理', '在库盘点'],
            links: ['resource', 'resource-in', 'resource-out', 'resource-balance']
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
            title: '基础数据定义',
            desc: '定义系统其它功能用到的基础数据',
            secondary_items: ['人员岗位定义', '诊疗项目定义', '录入项定义'],
            links: ['system', 'system-project', 'system-input-item']
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
  this.DemoIndexPage = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'demo-index-page'
      }, React.createElement("div", {
        "className": 'ui vertical segment page-title'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement(DemoIndexPage.Header, null))), React.createElement("div", {
        "className": 'ui vertical segment'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement(DemoIndexPage.Cards, null))));
    },
    statics: {
      Header: React.createClass({
        render: function() {
          return React.createElement("h1", {
            "className": 'ui header lishu'
          }, React.createElement("span", null, "正道中医系统演示"));
        }
      }),
      Cards: React.createClass({
        render: function() {
          var data, href, idx, item;
          data = [
            {
              name: '诊断',
              desc: '综合规范化诊断记录系统',
              key: 'zhenduan'
            }, {
              name: '业务',
              desc: '预约，体检，诊疗业务操作演示',
              key: 'yewu'
            }, {
              name: '管理',
              desc: '后台管理，维护，信息查看等功能',
              href: 'clinic.html',
              key: 'guanli'
            }
          ];
          return React.createElement("div", {
            "className": "ui cards"
          }, (function() {
            var i, len, results;
            results = [];
            for (idx = i = 0, len = data.length; i < len; idx = ++i) {
              item = data[idx];
              href = item.href || 'javascript:;';
              results.push(React.createElement("a", {
                "key": idx,
                "className": "card",
                "href": href
              }, React.createElement("div", {
                "className": "content"
              }, React.createElement("div", {
                "className": 'yunwen'
              }), React.createElement("div", {
                "className": "header lishu " + item.key
              }, React.createElement("span", null, item.name)), React.createElement("div", {
                "className": "description"
              }, item.desc))));
            }
            return results;
          })());
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
      }, (this.props.data.filters != null ? React.createElement(DemoAdminTable.Filter, {
        "data": this.props.data.filters
      }) : void 0), React.createElement(DemoAdminTable.Table, {
        "data": this.props.data
      }));
    },
    statics: {
      Table: React.createClass({
        render: function() {
          var idx, link, manage, name, sdata, text, value;
          return React.createElement("div", {
            "className": 'ui basic segment table-table'
          }, React.createElement("table", {
            "className": 'ui celled table'
          }, React.createElement("thead", null, React.createElement("tr", null, (!this.props.data.no_edit ? React.createElement("th", null) : void 0), (function() {
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
          }).call(this))), React.createElement("tbody", null, ((function() {
            var i, len, ref, results;
            idx = 0;
            ref = this.props.data.sample || [{}, {}, {}];
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              sdata = ref[i];
              results.push(React.createElement("tr", {
                "key": idx++
              }, (!this.props.data.no_edit ? React.createElement(DemoAdminTable.EditTD, null) : void 0), (function() {
                var ref1, ref2, ref3, results1;
                ref1 = this.props.data.fields;
                results1 = [];
                for (name in ref1) {
                  text = ref1[name];
                  value = sdata[name];
                  if ((manage = (ref2 = this.props.data.manage) != null ? ref2[name] : void 0) != null) {
                    link = (ref3 = this.props.data.manage_links) != null ? ref3[name] : void 0;
                    results1.push(React.createElement(DemoAdminTable.ManageTD, {
                      "key": name,
                      "value": value,
                      "manage": manage,
                      "link": link
                    }));
                  } else {
                    results1.push(React.createElement(DemoAdminTable.CommonTD, {
                      "key": name,
                      "value": value
                    }));
                  }
                }
                return results1;
              }).call(this)));
            }
            return results;
          }).call(this))), React.createElement(DemoAdminTable.Tfoot, {
            "data": this.props.data
          })));
        }
      }),
      ManageTD: React.createClass({
        render: function() {
          var btn_text, icon, link, ref;
          ref = this.props.manage, icon = ref[0], btn_text = ref[1];
          link = this.props.link || 'javascript:;';
          return React.createElement("td", {
            "className": 'manage collapsing'
          }, React.createElement("a", {
            "className": 'ui compact mini manage button teal basic',
            "href": link
          }, React.createElement("i", {
            "className": "icon " + icon
          }), React.createElement("span", null, btn_text)), React.createElement(DemoAdminTable.TDValue, {
            "data": this.props.value
          }));
        }
      }),
      CommonTD: React.createClass({
        render: function() {
          return React.createElement("td", null, React.createElement(DemoAdminTable.TDValue, {
            "data": this.props.value
          }));
        }
      }),
      EditTD: React.createClass({
        render: function() {
          return React.createElement("td", {
            "className": 'collapsing'
          }, React.createElement("a", {
            "className": 'ui compact mini button edit teal'
          }, React.createElement("i", {
            "className": 'icon pencil'
          }), React.createElement("span", null, "修改")));
        }
      }),
      TDValue: React.createClass({
        render: function() {
          var key, value;
          if (this.props.data == null) {
            return React.createElement("span", {
              "className": 'value'
            }, " ");
          } else if (typeof this.props.data === 'object') {
            return React.createElement("div", {
              "className": 'value labels'
            }, (function() {
              var ref, results;
              ref = this.props.data;
              results = [];
              for (key in ref) {
                value = ref[key];
                results.push(React.createElement("div", {
                  "key": key,
                  "className": 'ui label'
                }, React.createElement("span", null, key), (value != null ? React.createElement("div", {
                  "className": 'detail'
                }, value) : void 0)));
              }
              return results;
            }).call(this));
          } else {
            return React.createElement("span", {
              "className": 'value'
            }, this.props.data);
          }
        }
      }),
      Filter: React.createClass({
        render: function() {
          var idx, key, sdata, value;
          return React.createElement("div", {
            "ref": 'filters',
            "className": 'ui basic segment table-filter'
          }, (function() {
            var ref, results;
            ref = this.props.data;
            results = [];
            for (key in ref) {
              sdata = ref[key];
              results.push(React.createElement("div", {
                "key": key,
                "className": "ui floating labeled icon dropdown button mini"
              }, React.createElement("i", {
                "className": "filter icon"
              }), React.createElement("span", {
                "className": "text disabled"
              }, "选择", sdata.text), React.createElement("div", {
                "className": "menu"
              }, React.createElement("div", {
                "className": "header"
              }, React.createElement("i", {
                "className": "tags icon"
              }), React.createElement("span", null, "根据", sdata.text, "过滤")), ((function() {
                var i, len, ref1, results1;
                idx = 0;
                ref1 = sdata.values;
                results1 = [];
                for (i = 0, len = ref1.length; i < len; i++) {
                  value = ref1[i];
                  results1.push(React.createElement(DemoAdminTable.FilterDropDownItem, {
                    "key": idx++,
                    "data": value
                  }));
                }
                return results1;
              })()))));
            }
            return results;
          }).call(this));
        },
        componentDidMount: function() {
          return jQuery(this.refs.filters).find('.ui.dropdown').dropdown();
        }
      }),
      FilterDropDownItem: React.createClass({
        render: function() {
          var idx, value;
          if (Array.isArray(this.props.data)) {
            return React.createElement("div", {
              "className": "item"
            }, React.createElement("i", {
              "className": "dropdown icon"
            }), React.createElement("span", null, this.props.data[0]), React.createElement("div", {
              "className": 'menu'
            }, ((function() {
              var i, len, ref, results;
              idx = 0;
              ref = this.props.data[1];
              results = [];
              for (i = 0, len = ref.length; i < len; i++) {
                value = ref[i];
                results.push(React.createElement(DemoAdminTable.FilterDropDownItem, {
                  "key": idx++,
                  "data": value
                }));
              }
              return results;
            }).call(this))));
          } else {
            return React.createElement("div", {
              "className": "item"
            }, React.createElement("span", null, this.props.data));
          }
        }
      }),
      Tfoot: React.createClass({
        render: function() {
          return React.createElement("tfoot", null, React.createElement("tr", null, (!this.props.data.no_edit ? React.createElement("th", null) : void 0), React.createElement("th", {
            "colSpan": (Object.keys(this.props.data.fields).length)
          }, React.createElement(DemoAdminTable.AddButton, {
            "data": this.props.data.add_button
          }), React.createElement(DemoAdminTable.Pagination, null))));
        }
      }),
      Pagination: React.createClass({
        render: function() {
          return React.createElement("div", {
            "className": 'ui right floated pagination menu'
          }, React.createElement("a", {
            "className": 'icon item'
          }, React.createElement("i", {
            "className": 'icon left chevron'
          })), React.createElement("a", {
            "className": 'item active'
          }, "1"), React.createElement("a", {
            "className": 'item'
          }, "2"), React.createElement("a", {
            "className": 'item'
          }, "3"), React.createElement("a", {
            "className": 'icon item'
          }, React.createElement("i", {
            "className": 'icon right chevron'
          })));
        }
      }),
      AddButton: React.createClass({
        render: function() {
          if (this.props.data != null) {
            return React.createElement("a", {
              "className": 'ui labeled icon button green'
            }, React.createElement("i", {
              "className": 'icon add'
            }), React.createElement("span", null, this.props.data));
          } else {
            return React.createElement("div", null);
          }
        }
      }),
      Company: React.createClass({
        render: function() {
          var data;
          data = {
            fields: {
              name: '分公司名称',
              address: '地址',
              phone: '电话',
              director: '负责人',
              underlings: '下辖店面'
            },
            manage: {
              underlings: ['list', '设置']
            },
            manage_links: {
              underlings: 'clinic-branch.html'
            },
            add_button: '增加分公司',
            sample: [
              {
                name: '苏州分公司',
                address: '江苏省苏州市园区娄东路 ** 号',
                phone: '0512-12345678',
                director: '张仲景',
                underlings: '3'
              }, {
                name: '北京分公司',
                address: '北京市朝阳区北苑路 ** 号',
                phone: '010-12345678',
                director: '孙思邈',
                underlings: '2'
              }
            ]
          };
          return React.createElement(DemoAdminTable, {
            "data": data
          });
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
              belongs_to: '所属分公司',
              beds: '床位数'
            },
            manage: {
              beds: ['list', '设置']
            },
            manage_links: {
              beds: 'clinic-room.html'
            },
            add_button: '增加店面',
            filters: {
              belongs_to: {
                text: '分公司',
                values: ['苏州分公司', '北京分公司']
              }
            },
            sample: [
              {
                name: '奥体分店',
                address: '北京朝阳区惠新西街 ** 号',
                phone: '010-12345677',
                director: '扁鹊',
                belongs_to: '北京分公司',
                beds: '100'
              }, {
                name: '芍药居分店',
                address: '北京朝阳区文学馆路 ** 号',
                phone: '010-12345676',
                director: '钱乙',
                belongs_to: '北京分公司',
                beds: '150'
              }
            ]
          };
          return React.createElement(DemoAdminTable, {
            "data": data
          });
        }
      }),
      Department: React.createClass({
        render: function() {
          var data;
          data = {
            fields: {
              name: '部门名称',
              persons: '部门人员'
            },
            manage: {
              persons: ['list', '设置']
            },
            manage_links: {
              persons: 'clinic-person.html'
            },
            add_button: '增加部门',
            filters: {
              belongs_to: {
                text: '店面',
                values: [['苏州分公司', ['园区分店', '虎丘区分店', '吴中区分店']], ['北京分公司', ['奥体分店', '芍药居分店']]]
              }
            },
            sample: [
              {
                name: '行政部',
                persons: 3
              }, {
                name: '体检部',
                persons: 10
              }, {
                name: '诊疗部',
                persons: 10
              }, {
                name: '后勤部',
                persons: 5
              }
            ]
          };
          return React.createElement(DemoAdminTable, {
            "data": data
          });
        }
      }),
      Person: React.createClass({
        render: function() {
          var data;
          data = {
            fields: {
              name: '姓名',
              age: '年龄',
              gender: '性别',
              post: '岗位',
              company: '所属分公司',
              clinic: '店面',
              department: '部门'
            },
            add_button: '增加人员',
            filters: {
              clinic: {
                text: '店面',
                values: [['苏州分公司', ['园区分店', '虎丘区分店', '吴中区分店']], ['北京分公司', ['奥体分店', '芍药居分店']]]
              },
              department: {
                text: '部门',
                values: ['行政部', '体检部', '诊疗部', '后勤部']
              }
            },
            sample: [
              {
                name: '顾慎为',
                age: '32',
                gender: '男',
                post: '体检师',
                company: '北京分公司',
                clinic: '奥体分店',
                department: '体检部'
              }, {
                name: '霍允',
                age: '29',
                gender: '女',
                post: '助理',
                company: '北京分公司',
                clinic: '奥体分店',
                department: '行政部'
              }, {
                name: '宁七味',
                age: '53',
                gender: '男',
                post: '诊疗师',
                company: '北京分公司',
                clinic: '奥体分店',
                department: '诊疗部'
              }, {
                name: '江水瑶',
                age: '42',
                gender: '女',
                post: '诊疗师',
                company: '北京分公司',
                clinic: '奥体分店',
                department: '诊疗部'
              }
            ]
          };
          return React.createElement(DemoAdminTable, {
            "data": data
          });
        }
      }),
      Room: React.createClass({
        render: function() {
          var data;
          data = {
            fields: {
              name: '诊疗室名称',
              clinic: '所属店面',
              projects: '诊疗项目与床位'
            },
            add_button: '增加诊疗室',
            manage: {
              projects: ['setting layout', '调整']
            },
            filters: {
              clinic: {
                text: '店面',
                values: [['苏州分公司', ['园区分店', '虎丘区分店', '吴中区分店']], ['北京分公司', ['奥体分店', '芍药居分店']]]
              }
            },
            sample: [
              {
                name: '第一诊疗室',
                clinic: '奥体分店',
                projects: {
                  '五官检查': null,
                  '胸腹检查': 2
                }
              }, {
                name: '第二诊疗室',
                clinic: '奥体分店',
                projects: {
                  '推拿': 10,
                  '针灸': 10
                }
              }, {
                name: '第三诊疗室',
                clinic: '奥体分店',
                projects: {
                  '刮痧': 10,
                  '火罐': 10
                }
              }
            ]
          };
          return React.createElement(DemoAdminTable, {
            "data": data
          });
        }
      }),
      Post: React.createClass({
        render: function() {
          var data;
          data = {
            fields: {
              name: '岗位名称',
              desc: '岗位描述',
              privilege: '岗位权限'
            },
            add_button: '增加岗位',
            manage: {
              privilege: ['setting layout', '调整']
            },
            sample: [
              {
                name: '行政管理',
                desc: '**********',
                privilege: {
                  '店面人员管理': null,
                  '患者信息管理': null
                }
              }, {
                name: '导诊',
                desc: '**********',
                privilege: {
                  '挂号分诊操作': null
                }
              }, {
                name: '医师',
                desc: '**********',
                privilege: {
                  '诊疗报告录入': null,
                  '收费项选取': null
                }
              }, {
                name: '诊疗师',
                desc: '**********',
                privilege: {
                  '诊疗报告录入': null,
                  '收费项选取': null
                }
              }, {
                name: '后勤助理',
                desc: '**********',
                privilege: {
                  '药品耗材管理': null
                }
              }
            ]
          };
          return React.createElement(DemoAdminTable, {
            "data": data
          });
        }
      }),
      Project: React.createClass({
        render: function() {
          var data;
          data = {
            fields: {
              name: '诊疗项目名称',
              type: '类型',
              need_bed: '需要床位',
              input_type: '报告录入方式',
              need_photo: '需要拍照',
              input_items: '包含录入项',
              template: '模板'
            },
            add_button: '增加诊疗项目',
            filters: {
              type: {
                text: '类型',
                values: ['诊断', '治疗']
              }
            },
            manage: {
              input_items: ['list', '设置'],
              template: ['setting layout', '调整']
            },
            manage_links: {
              input_items: 'system-input-item.html'
            },
            sample: [
              {
                name: '常规体检',
                type: '诊断',
                need_bed: '否',
                input_type: '普通录入',
                input_items: 44,
                need_photo: '否',
                template: '有'
              }, {
                name: '面诊',
                type: '诊断',
                need_bed: '否',
                input_type: '触点录入',
                input_items: 13,
                need_photo: '是',
                template: '有'
              }, {
                name: '背诊',
                type: '诊断',
                need_bed: '是',
                input_type: '触点录入',
                input_items: 9,
                need_photo: '是',
                template: '有'
              }, {
                name: '推拿',
                type: '治疗',
                need_bed: '是',
                input_type: '普通录入',
                input_items: 10,
                need_photo: '是',
                template: '有'
              }
            ]
          };
          return React.createElement(DemoAdminTable, {
            "data": data
          });
        }
      }),
      InputItem: React.createClass({
        render: function() {
          var data;
          data = {
            fields: {
              name: '录入项名称',
              type: '类型',
              unit: '单位',
              values: '枚举值'
            },
            add_button: '增加录入项',
            filters: {
              type: {
                text: '类型',
                values: ['填空', '长记录', '数值', '单选枚举', '多选枚举', '拍照']
              }
            },
            sample: [
              {
                name: '面部照片',
                type: '拍照',
                unit: '',
                values: ''
              }, {
                name: '舌形',
                type: '多选枚举',
                unit: '',
                values: '老舌, 嫩舌, 胖大, 瘦薄, 芒刺, 裂纹, 齿痕, 光滑'
              }, {
                name: '体重',
                type: '数值',
                unit: 'kg',
                values: ''
              }, {
                name: '健康评估',
                type: '长记录',
                unit: '',
                values: ''
              }, {
                name: '睡眠时间',
                type: '填空',
                unit: '',
                values: ''
              }
            ]
          };
          return React.createElement(DemoAdminTable, {
            "data": data
          });
        }
      }),
      ChargeItem: React.createClass({
        render: function() {
          var data;
          data = {
            fields: {
              name: '收费项名称',
              price: '单价',
              unit: '单位',
              project: '关联诊疗项',
              resource: '关联药品耗材'
            },
            add_button: '增加收费项',
            sample: [
              {
                name: '体检费',
                price: '¥ 100.00',
                unit: '次',
                project: {
                  '常规体检': null
                }
              }, {
                name: '针灸治疗费',
                price: '¥ 50.00',
                unit: '小时',
                project: {
                  '针灸': null
                }
              }, {
                name: '复诊费',
                price: '¥ 100.00',
                unit: '次',
                project: {
                  '面诊': null,
                  '背诊': null,
                  '脉诊': null
                }
              }, {
                name: '板蓝根',
                price: '¥ 8.00',
                unit: 'kg',
                resource: {
                  '板蓝根': null
                }
              }
            ]
          };
          return React.createElement(DemoAdminTable, {
            "data": data
          });
        }
      }),
      VIP: React.createClass({
        render: function() {
          var data;
          data = {
            fields: {
              name: 'VIP 等级',
              desc: '说明',
              off: '折扣'
            },
            add_button: '增加 VIP 等级',
            sample: [
              {
                name: '黄金会员',
                off: '9 折'
              }, {
                name: '白金会员',
                off: '8.5 折'
              }, {
                name: '钻石会员',
                off: '8 折'
              }
            ]
          };
          return React.createElement(DemoAdminTable, {
            "data": data
          });
        }
      }),
      ResourceItem: React.createClass({
        render: function() {
          var data;
          data = {
            fields: {
              name: '库存项目名称',
              desc: '保存方式',
              expire: '有保质期',
              unit: '单位'
            },
            add_button: '增加库存项目',
            sample: [
              {
                name: '板蓝根',
                desc: '干燥保存',
                expire: '是',
                unit: 'kg'
              }, {
                name: '医用酒精',
                desc: '密封保存',
                expire: '否',
                unit: 'kg'
              }, {
                name: '棉签',
                desc: '干燥保存',
                expire: '否',
                unit: 'kg'
              }, {
                name: '玻璃火罐',
                desc: '避光保存',
                expire: '否',
                unit: 'kg'
              }
            ]
          };
          return React.createElement(DemoAdminTable, {
            "data": data
          });
        }
      }),
      ResourceIn: React.createClass({
        render: function() {
          var data;
          data = {
            fields: {
              name: '入库项目',
              count: '入库数量',
              time: '入库时间',
              person: '操作人'
            },
            no_edit: true,
            add_button: '入库登记',
            sample: [
              {
                name: '板蓝根',
                count: '100 kg',
                time: '2015-12-18 17:30',
                person: '孙思邈'
              }, {
                name: '板蓝根',
                count: '50 kg',
                time: '2015-12-18 17:30',
                person: '孙思邈'
              }, {
                name: '医用酒精',
                count: '10 kg',
                time: '2015-12-18 17:30',
                person: '孙思邈'
              }
            ]
          };
          return React.createElement(DemoAdminTable, {
            "data": data
          });
        }
      }),
      ResourceOut: React.createClass({
        render: function() {
          var data;
          data = {
            fields: {
              name: '出库项目',
              count: '出库数量',
              time: '出库时间',
              usage: '用途',
              person: '操作人'
            },
            no_edit: true,
            sample: [
              {
                name: '板蓝根',
                count: '10 kg',
                time: '2015-12-18 17:30',
                usage: '过期销毁',
                person: '张仲景'
              }, {
                name: '医用酒精',
                count: '5 kg',
                time: '2015-12-18 17:30',
                usage: '第一诊疗室储备',
                person: '张仲景'
              }, {
                name: '玻璃火罐',
                count: '50 个',
                time: '2015-12-18 17:30',
                usage: '第二诊疗室储备',
                person: '张仲景'
              }
            ]
          };
          return React.createElement(DemoAdminTable, {
            "data": data
          });
        }
      }),
      ResourceBalance: React.createClass({
        render: function() {
          var data;
          data = {
            fields: {
              name: '库存项目',
              count: '在库数量',
              operation: '最近操作'
            },
            no_edit: true,
            manage: {
              operation: ['list', '明细']
            },
            sample: [
              {
                name: '板蓝根',
                count: '200 kg',
                operation: '2015-12-18 17:30, 出库, 孙思邈'
              }, {
                name: '医用酒精',
                count: '100 kg',
                operation: '2015-12-18 17:30, 出库, 孙思邈'
              }, {
                name: '棉签',
                count: '200 kg',
                operation: '2015-12-18 17:30, 出库, 孙思邈'
              }, {
                name: '玻璃火罐',
                count: '1000 个',
                operation: '2015-12-18 17:30, 出库, 孙思邈'
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
      }, React.createElement("a", {
        "className": 'item quit',
        "href": 'index.html'
      }, React.createElement("i", {
        "className": "icon chevron left circle"
      })), React.createElement(DemoManageSidebar.Item, {
        "icon": 'setting',
        "text": '基础定义',
        "link": 'system'
      }), React.createElement(DemoManageSidebar.Item, {
        "icon": 'hospital',
        "text": '店面人员',
        "link": 'clinic'
      }), React.createElement(DemoManageSidebar.Item, {
        "icon": 'yen',
        "text": '收费项目',
        "link": 'charge'
      }), React.createElement(DemoManageSidebar.Item, {
        "icon": 'first aid',
        "text": '药品耗材',
        "link": 'resource'
      }), React.createElement(DemoManageSidebar.Item, {
        "icon": 'user',
        "text": '患者信息',
        "link": 'patient'
      }));
    },
    statics: {
      Item: React.createClass({
        render: function() {
          var href, klass;
          href = this.props.link ? this.props.link + ".html" : 'javascript:;';
          klass = ['item blue'];
          if (window.get_page_prefix_name() === this.props.link) {
            klass.push('active');
          }
          return React.createElement("a", {
            "className": klass.join(' '),
            "href": href
          }, React.createElement("i", {
            "className": "icon " + this.props.icon
          }), React.createElement("span", null, this.props.text));
        }
      })
    }
  });

}).call(this);

(function() {
  this.DemoAdminPatientPage = React.createClass({
    render: function() {
      var i, idx;
      return React.createElement("div", {
        "className": "ui basic segment special-page"
      }, React.createElement("div", {
        "className": "ui basic segment"
      }, React.createElement("div", {
        "className": "ui five cards"
      }, ((function() {
        var j, results;
        idx = 0;
        results = [];
        for (i = j = 1; j <= 18; i = ++j) {
          results.push(React.createElement("div", {
            "key": idx++,
            "className": "ui card"
          }, React.createElement("div", {
            "className": "image"
          }, React.createElement("img", {
            "src": "http://i.teamkn.com/i/VEseRzHk.png"
          })), React.createElement("div", {
            "className": "content"
          }, React.createElement("div", {
            "className": "header"
          }, "王大锤"), React.createElement("div", {
            "className": "description"
          }, React.createElement("span", null, "男"), React.createElement("i", {
            "className": 'icon male'
          }), React.createElement("span", null, "33 岁"))), React.createElement("div", {
            "className": "extra content"
          }, React.createElement("span", null, React.createElement("i", {
            "className": 'icon first aid'
          }), React.createElement("span", null, "3 次诊疗")))));
        }
        return results;
      })()))));
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
  window.get_page_name = function() {
    var name, page;
    page = location.href.split('/demo/').pop();
    return name = page.split('.html')[0];
  };

  window.get_page_prefix_name = function() {
    var name, prefix_name;
    name = window.get_page_name();
    return prefix_name = name.split('-')[0];
  };

  if (typeof Array.isArray === !'function') {
    Array.isArray = function(arr) {
      return Object.prototype.toString.call(arr) === '[object Array]';
    };
  }

}).call(this);

//# sourceMappingURL=base.js.map
