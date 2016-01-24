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
      }, React.createElement(HorizontalChineseScroll, null, React.createElement(DemoIndexPage.Cards, null)))));
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
              name: '挂号',
              desc: '预约，体检，诊疗业务操作演示',
              key: 'guahao',
              href: 'guide.html'
            }, {
              name: '医师',
              desc: '医师操作演示',
              key: 'doctor',
              href: 'doctor.html'
            }, {
              name: '体检',
              desc: '综合规范化诊断记录系统',
              key: 'tijian',
              href: 'tijian.html'
            }, {
              name: '管理',
              desc: '后台管理，维护，信息查看等功能',
              href: 'clinic.html',
              key: 'guanli'
            }
          ];
          return React.createElement("div", {
            "className": "ui cards four doubling"
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
  var SVGToucher;

  SVGToucher = React.createClass({
    displayName: 'SVGToucher',
    render: function() {
      this.points = [
        {
          x: 293,
          y: 78,
          text: '大椎'
        }, {
          x: 293,
          y: 107,
          text: '陶道'
        }, {
          x: 293,
          y: 152,
          text: '身柱'
        }, {
          x: 294,
          y: 222,
          text: '神道'
        }, {
          x: 294,
          y: 252,
          text: '灵台'
        }, {
          x: 294,
          y: 282,
          text: '至阳'
        }, {
          x: 295,
          y: 342,
          text: '筋缩'
        }, {
          x: 295,
          y: 365,
          text: '中枢'
        }, {
          x: 295,
          y: 391,
          text: '脊中'
        }, {
          x: 296,
          y: 472,
          text: '命门'
        }, {
          x: 297,
          y: 534,
          text: '腰阳关'
        }, {
          x: 274,
          y: 583,
          text: '上髎'
        }, {
          x: 273,
          y: 600,
          text: '次髎'
        }, {
          x: 274,
          y: 624,
          text: '中髎'
        }, {
          x: 277,
          y: 644,
          text: '下髎'
        }, {
          x: 298,
          y: 653,
          text: '腰俞'
        }, {
          x: 299,
          y: 722,
          text: '长强'
        }, {
          x: 344,
          y: 78,
          text: '肩中俞'
        }, {
          x: 368,
          y: 99,
          text: '肩外俞'
        }, {
          x: 396,
          y: 96,
          text: '肩井'
        }, {
          x: 397,
          y: 114,
          text: '天臑'
        }, {
          x: 396,
          y: 135,
          text: '曲坦'
        }, {
          x: 440,
          y: 133,
          text: '秉风'
        }, {
          x: 438,
          y: 192,
          text: '天宗'
        }, {
          x: 476,
          y: 153,
          text: '臑俞'
        }, {
          x: 481,
          y: 224,
          text: '肩贞'
        }, {
          x: 367,
          y: 126,
          text: '附分'
        }, {
          x: 367,
          y: 156,
          text: '魄户'
        }, {
          x: 367,
          y: 190,
          text: '膏肓'
        }, {
          x: 367,
          y: 219,
          text: '神堂'
        }, {
          x: 367,
          y: 248,
          text: '意喜'
        }, {
          x: 367,
          y: 279,
          text: '隔关'
        }, {
          x: 367,
          y: 339,
          text: '魂门'
        }, {
          x: 367,
          y: 363,
          text: '阳纲'
        }, {
          x: 368,
          y: 389,
          text: '意舍'
        }, {
          x: 368,
          y: 410,
          text: '胃仓'
        }, {
          x: 368,
          y: 436,
          text: '盲门'
        }, {
          x: 369,
          y: 466,
          text: '志室'
        }, {
          x: 372,
          y: 599,
          text: '胞盲'
        }, {
          x: 333,
          y: 106,
          text: '大杼'
        }, {
          x: 333,
          y: 129,
          text: '风门'
        }, {
          x: 331,
          y: 152,
          text: '肺俞'
        }, {
          x: 331,
          y: 188,
          text: '厥阴俞'
        }, {
          x: 332,
          y: 219,
          text: '心俞'
        }, {
          x: 332,
          y: 249,
          text: '督俞'
        }, {
          x: 331,
          y: 277,
          text: '膈俞'
        }, {
          x: 333,
          y: 335,
          text: '肝俞'
        }, {
          x: 332,
          y: 360,
          text: '胆俞'
        }, {
          x: 334,
          y: 389,
          text: '脾俞'
        }, {
          x: 334,
          y: 410,
          text: '胃俞'
        }, {
          x: 334,
          y: 435,
          text: '三焦俞'
        }, {
          x: 336,
          y: 470,
          text: '肾俞'
        }, {
          x: 334,
          y: 500,
          text: '气海俞'
        }, {
          x: 336,
          y: 531,
          text: '大肠俞'
        }, {
          x: 336,
          y: 561,
          text: '关元俞'
        }, {
          x: 336,
          y: 582,
          text: '小肠俞'
        }, {
          x: 338,
          y: 604,
          text: '膀胱俞'
        }, {
          x: 339,
          y: 622,
          text: '中膂俞'
        }, {
          x: 341,
          y: 646,
          text: '白环俞'
        }, {
          x: 314,
          y: 689,
          text: '会阳'
        }, {
          x: 369,
          y: 646,
          text: '秩边'
        }
      ];
      return React.createElement("div", {
        "className": 'svg-toucher',
        "draggable": true,
        "onDragStart": this.drag_start,
        "onMouseMove": this.drag_move,
        "onMouseUp": this.drag_end,
        "onWheel": this.do_scale,
        "onTouchStart": this.drag_start,
        "onTouchMove": this.drag_move,
        "onTouchEn": this.drag_end
      }, React.createElement(SVGToucher.PointsArea, {
        "ref": 'area',
        "template": this.props.template,
        "toucher": this,
        "points": this.points
      }));
    },
    drag_start: function(evt) {
      evt.preventDefault();
      this.origin_x = this.refs.area.state.x;
      this.origin_y = this.refs.area.state.y;
      this.on_drag = true;
      if (evt.touches != null) {
        this.mouse_start_x = evt.touches[0].pageX;
        return this.mouse_start_y = evt.touches[0].pageY;
      } else {
        this.mouse_start_x = evt.pageX;
        return this.mouse_start_y = evt.pageY;
      }
    },
    drag_move: function(evt) {
      var delta_x, delta_y;
      if (this.on_drag) {
        if (evt.touches != null) {
          delta_x = evt.touches[0].pageX - this.mouse_start_x;
          delta_y = evt.touches[0].pageY - this.mouse_start_y;
        } else {
          delta_x = evt.pageX - this.mouse_start_x;
          delta_y = evt.pageY - this.mouse_start_y;
        }
        return this.refs.area.setState({
          x: this.origin_x + delta_x,
          y: this.origin_y + delta_y
        });
      }
    },
    drag_end: function(evt) {
      return this.on_drag = false;
    },
    do_scale: function(evt) {
      var $toucher, cx, cy, offset, px, py;
      $toucher = jQuery(ReactDOM.findDOMNode(this));
      offset = $toucher.offset();
      px = evt.pageX - offset.left;
      py = evt.pageY - offset.top;
      cx = (px - this.refs.area.state.x) / this.refs.area.state.scale;
      cy = (py - this.refs.area.state.y) / this.refs.area.state.scale;
      return this.refs.area.compute_scale(evt.deltaY, cx, cy);
    },
    do_click_idx: function(idx) {
      var area_scale, area_x, area_y, point, posx, posy, ref, ref1, x, y;
      point = this.points[idx];
      ref = [point.x, point.y], x = ref[0], y = ref[1];
      ref1 = [this.refs.area.state.x, this.refs.area.state.y], area_x = ref1[0], area_y = ref1[1];
      area_scale = this.refs.area.state.scale;
      posx = area_x + x * area_scale;
      posy = area_y + y * area_scale;
      return this.props.page.show_box(point, posx, posy);
    },
    statics: {
      PointsArea: React.createClass({
        getInitialState: function() {
          return {
            origin_width: 595,
            origin_height: 841,
            x: 0,
            y: 0,
            scale: 1.0
          };
        },
        render: function() {
          var height, idx, pdata, style, width;
          width = this.state.origin_width * this.state.scale;
          height = this.state.origin_height * this.state.scale;
          style = {
            'width': width + "px",
            'height': height + "px",
            'left': this.state.x + "px",
            'top': this.state.y + "px"
          };
          return React.createElement("div", {
            "className": 'points-area',
            "style": style
          }, React.createElement(SVGToucher.SVG, {
            "name": this.props.template,
            "width": this.state.origin_width,
            "height": this.state.origin_height,
            "scale": this.state.scale
          }), (function() {
            var j, len, ref, results;
            ref = this.props.points;
            results = [];
            for (idx = j = 0, len = ref.length; j < len; idx = ++j) {
              pdata = ref[idx];
              results.push(React.createElement(SVGToucher.Point, {
                "key": idx,
                "idx": idx,
                "data": pdata,
                "scale": this.state.scale,
                "toucher": this.props.toucher
              }));
            }
            return results;
          }).call(this));
        },
        componentDidMount: function() {
          return this.aim_to_center();
        },
        aim_to_center: function() {
          var $toucher, th, tw;
          $toucher = jQuery(ReactDOM.findDOMNode(this.props.toucher));
          tw = $toucher.width();
          th = $toucher.height();
          return this.setState({
            x: (tw - this.state.origin_width) / 2,
            y: (th - this.state.origin_height) / 2
          });
        },
        compute_scale: function(dir, center_x, center_y) {
          var i, new_scale, old_scale;
          i = 1.1;
          if (dir > 0) {
            old_scale = this.state.scale;
            new_scale = this.state.scale / i;
            this.setState({
              scale: new_scale,
              x: this.state.x - center_x * (new_scale - old_scale),
              y: this.state.y - center_y * (new_scale - old_scale)
            });
          }
          if (dir < 0) {
            old_scale = this.state.scale;
            new_scale = this.state.scale * i;
            return this.setState({
              scale: new_scale,
              x: this.state.x - center_x * (new_scale - old_scale),
              y: this.state.y - center_y * (new_scale - old_scale)
            });
          }
        }
      }),
      SVG: React.createClass({
        render: function() {
          var src, style;
          src = "../svg/" + this.props.name + ".svg";
          style = {
            'transform': "scale(" + this.props.scale + ")",
            'transformOrigin': '0 0'
          };
          return React.createElement("img", {
            "src": src,
            "width": this.props.width,
            "height": this.props.height,
            "style": style
          });
        }
      }),
      Point: React.createClass({
        render: function() {
          var left, style, top;
          left = this.props.data.x * this.props.scale;
          top = this.props.data.y * this.props.scale;
          style = {
            'left': left + "px",
            'top': top + "px"
          };
          return React.createElement("div", {
            "className": 'point',
            "style": style
          }, React.createElement("div", {
            "className": 'circle',
            "onClick": this.click,
            "onTouchStart": this.click
          }), React.createElement("div", {
            "className": 'text'
          }, this.props.data.text));
        },
        click: function(evt) {
          return this.props.toucher.do_click_idx(this.props.idx);
        }
      })
    }
  });

  this.DiagnosisPage = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'diagnosis-page'
      }, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'zd-patient-info.html'
      }), React.createElement("span", null, "中医体检"), React.createElement("div", {
        "className": 'buttons'
      }, React.createElement("a", {
        "className": 'ui button brown small',
        "href": 'zd-zhenduan-result.html'
      }, React.createElement("i", {
        "className": 'icon checkmark'
      }), React.createElement("span", null, "保存体检记录")))), React.createElement(DiagnosisPage.Paper, {
        "page": this
      }), React.createElement(DiagnosisPage.Sidebar, {
        "ref": 'sidebar'
      }), React.createElement(DiagnosisPage.Popbox, {
        "page": this,
        "ref": 'popbox'
      }));
    },
    show_box: function(point, x, y) {
      return this.refs.popbox.show(point, x, y);
    },
    statics: {
      Sidebar: React.createClass({
        getInitialState: function() {
          return {
            records: []
          };
        },
        render: function() {
          var idx, record;
          return React.createElement("div", {
            "className": 'page-sidebar'
          }, React.createElement(DiagnosisPage.Logo, null), React.createElement("div", {
            "className": 'records'
          }, React.createElement("h3", {
            "className": 'ui header'
          }, "记录"), (function() {
            var j, len, ref, results;
            ref = this.state.records;
            results = [];
            for (idx = j = 0, len = ref.length; j < len; idx = ++j) {
              record = ref[idx];
              results.push(React.createElement("div", {
                "key": idx,
                "className": 'record'
              }, React.createElement("span", {
                "className": 'key'
              }, record.key), React.createElement("span", {
                "className": 'value'
              }, record.value)));
            }
            return results;
          }).call(this)), React.createElement("div", {
            "className": 'records'
          }, React.createElement("h3", {
            "className": 'ui header'
          }, "拍照"), React.createElement("a", {
            "href": 'javascript:;',
            "className": 'ui button brown take-photo labeled icon'
          }, React.createElement("i", {
            "className": 'icon photo'
          }), React.createElement("span", null, "点击拍照"))), React.createElement("div", {
            "className": 'records'
          }, React.createElement("h3", {
            "className": 'ui header'
          }, "综合结论"), React.createElement("a", {
            "href": 'javascript:;',
            "className": 'ui button brown take-photo labeled icon'
          }, React.createElement("i", {
            "className": 'icon pencil'
          }), React.createElement("span", null, "输入综合结论"))));
        },
        record: function(key, value) {
          var records;
          records = this.state.records;
          records.push({
            key: key,
            value: value
          });
          return this.setState({
            records: records
          });
        }
      }),
      Logo: React.createClass({
        render: function() {
          return React.createElement("div", {
            "className": 'title-logo'
          }, React.createElement("div", {
            "className": 'yw'
          }), React.createElement("div", {
            "className": 'img'
          }), React.createElement("div", {
            "className": 'yz'
          }));
        }
      }),
      Paper: React.createClass({
        render: function() {
          return React.createElement("div", {
            "className": 'page-paper'
          }, React.createElement(SVGToucher, {
            "template": 'back',
            "page": this.props.page
          }));
        }
      }),
      Popbox: React.createClass({
        getInitialState: function() {
          return {
            x: 0,
            y: 0,
            show: false,
            point: null,
            selected_values: {}
          };
        },
        render: function() {
          var idx, klass, ref, style, value, values;
          style = {
            left: this.state.x,
            top: this.state.y,
            display: this.state.show ? 'block' : 'none'
          };
          return React.createElement("div", {
            "className": 'popbox',
            "style": style
          }, React.createElement("div", {
            "className": 'name'
          }, React.createElement("span", null, ((ref = this.state.point) != null ? ref.text : void 0)), React.createElement("a", {
            "href": 'javascript:;',
            "className": 'ui icon button circular brown small'
          }, React.createElement("i", {
            "className": 'icon pencil'
          }))), React.createElement("div", {
            "className": 'values'
          }, ((function() {
            var j, len, results;
            values = ['阴', '阳', '虚', '实', '表', '里', '寒', '热'];
            results = [];
            for (idx = j = 0, len = values.length; j < len; idx = ++j) {
              value = values[idx];
              klass = new ClassName({
                value: true,
                active: this.state.selected_values[value] === true
              });
              results.push(React.createElement("div", {
                "key": idx,
                "className": klass,
                "onClick": this.click_value
              }, value));
            }
            return results;
          }).call(this))), React.createElement("a", {
            "className": 'ui button self brown'
          }, "输入自定义内容"), React.createElement("a", {
            "className": 'ui button self',
            "onClick": this.close
          }, "关闭"), (klass = new ClassName({
            'ui button self brown': true,
            'disabled': Object.keys(this.state.selected_values).length === 0
          }), React.createElement("a", {
            "className": klass,
            "onClick": this.submit
          }, "确定")));
        },
        show: function(point, x, y) {
          console.log(point, x, y);
          return this.setState({
            x: x,
            y: y,
            show: true,
            point: point,
            selected_values: {}
          });
        },
        close: function() {
          return this.setState({
            show: false
          });
        },
        click_value: function(evt) {
          var selected_values, value;
          value = jQuery(evt.target).text();
          selected_values = this.state.selected_values;
          if (!selected_values[value]) {
            selected_values[value] = true;
          } else {
            delete selected_values[value];
          }
          return this.setState({
            selected_values: selected_values
          });
        },
        submit: function() {
          var key, value, values;
          values = Object.keys(this.state.selected_values);
          key = this.state.point.text;
          value = values.join('');
          this.props.page.refs.sidebar.record(key, value);
          return this.close();
        }
      })
    }
  });

}).call(this);

(function() {
  this.DoctorSelectPage = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'gh-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'index.html'
      }), React.createElement("span", null, "医师")), React.createElement("div", {
        "className": 'select'
      }, React.createElement("div", {
        "className": "ui cards three"
      }, React.createElement("a", {
        "className": "card",
        "href": 'doctor-patient-list.html'
      }, React.createElement("div", {
        "className": "content"
      }, React.createElement("div", {
        "className": 'yunwen'
      }), React.createElement("div", {
        "className": "ui header"
      }, React.createElement("span", null, "患者队列")))), React.createElement("a", {
        "className": "card",
        "href": 'doctor-paiban.html'
      }, React.createElement("div", {
        "className": "content"
      }, React.createElement("div", {
        "className": 'yunwen'
      }), React.createElement("div", {
        "className": "ui header"
      }, React.createElement("span", null, "我的排班"))))))));
    }
  });

  this.DoctorPatientListPage = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'zd-patient-list-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement(DoctorPatientListPage.Dates, null), React.createElement(DoctorPatientListPage.List, null)));
    },
    statics: {
      Dates: React.createClass({
        render: function() {
          var date, dates, idx, klass;
          dates = [['12-08，星期二，上午', '8/10'], ['12-08，星期二，下午', '14/20'], ['12-09，星期三，上午', '2/10'], ['12-09，星期三，下午', '1/20']];
          return React.createElement("div", {
            "className": 'dates'
          }, React.createElement("h2", {
            "className": 'ui header topbar'
          }, React.createElement(TopbarBack, {
            "href": 'doctor.html'
          }), "就诊日期"), React.createElement("div", {
            "className": 'dlist'
          }, (function() {
            var i, len, results;
            results = [];
            for (idx = i = 0, len = dates.length; i < len; idx = ++i) {
              date = dates[idx];
              klass = new ClassName({
                'ditem': true,
                'active': idx === 0
              });
              results.push(React.createElement("a", {
                "key": idx,
                "className": klass,
                "href": 'javascript:;'
              }, React.createElement("span", null, date[0]), React.createElement("span", {
                "className": 'persons-number'
              }, React.createElement("span", null, date[1]), React.createElement("i", {
                "className": 'icon chevron right'
              }))));
            }
            return results;
          })()));
        }
      }),
      List: React.createClass({
        render: function() {
          var idx, klass, patient, patients;
          patients = [['301', '王大锤', '男'], ['302', '张本煜', '男'], ['303', '小爱', '女'], ['304', '孔连顺', '女'], ['305', '刘循子墨', '男'], ['306', '易小星', '男'], ['307', '至尊玉', '男'], ['308', '葛布', '女']];
          return React.createElement("div", {
            "className": 'list'
          }, React.createElement("h2", {
            "className": 'ui header topbar'
          }, "患者队列"), React.createElement("div", {
            "className": 'plist'
          }, (function() {
            var i, len, results;
            results = [];
            for (idx = i = 0, len = patients.length; i < len; idx = ++i) {
              patient = patients[idx];
              klass = new ClassName({
                'pitem': true
              });
              results.push(React.createElement("a", {
                "key": idx,
                "className": klass,
                "href": 'doctor-patient-info.html'
              }, React.createElement("span", {
                "className": 'ui label'
              }, patient[0]), React.createElement("span", null, " - "), React.createElement("span", null, patient[1]), React.createElement("span", null, " - "), React.createElement("span", null, patient[2]), React.createElement("span", {
                "className": 'tail'
              }, React.createElement("i", {
                "className": 'icon chevron right'
              }))));
            }
            return results;
          })()));
        }
      })
    }
  });

  this.DoctorPatientInfoPage = React.createClass({
    getInitialState: function() {
      return {
        active: 0
      };
    },
    render: function() {
      var arr, display, idx, idx1, item, klass0, klass1, klass2, klass3, timeline_data;
      return React.createElement("div", {
        "className": 'zd-patient-info-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'doctor-patient-list.html'
      }), React.createElement("span", null, "患者信息")), React.createElement("div", {
        "className": 'table-div'
      }, (klass0 = new ClassName({
        'item': true,
        'active': this.state.active === 0
      }), klass1 = new ClassName({
        'item': true,
        'active': this.state.active === 1
      }), klass2 = new ClassName({
        'item': true,
        'active': this.state.active === 2
      }), klass3 = new ClassName({
        'item': true,
        'active': this.state.active === 3
      }), React.createElement("div", {
        "className": "ui four item menu"
      }, React.createElement("a", {
        "className": klass0,
        "onClick": this.select0
      }, "首页"), React.createElement("a", {
        "className": klass1,
        "onClick": this.select1
      }, "诊断"), React.createElement("a", {
        "className": klass2,
        "onClick": this.select2
      }, "体检"), React.createElement("a", {
        "className": klass3,
        "onClick": this.select3
      }, "治疗"))), React.createElement("div", {
        "className": 'timeline'
      }, ((function() {
        var i, len, results;
        timeline_data = [
          {
            kind: '挂号',
            date: '2015-12-03',
            info: [['预约医师', '李海峰（副主任医师 - 内科）'], ['就诊时间', '2015-12-08（星期二）下午'], ['门诊类型', '专家门诊（14元）']],
            jiaofei: false
          }, {
            kind: '治疗',
            date: '2015-11-16',
            info: [
              ['预约床位', '201（双人房-东向）'], ['治疗时间', '2015-11-05 14:00'], [
                '治疗记录', React.createElement("a", {
                  "href": 'javascript:;'
                }, "查看详情")
              ]
            ],
            jiaofei: true
          }, {
            kind: '体检',
            date: '2015-11-16',
            info: [
              ['体检医师', '游琼'], ['就诊时间', '2015-11-16（星期一）上午'], [
                '体检报告', React.createElement("a", {
                  "href": 'javascript:;'
                }, "查看详情")
              ]
            ],
            jiaofei: true
          }, {
            kind: '诊断',
            date: '2015-11-05',
            info: [
              ['主治医师', '李海峰'], ['就诊时间', '2015-11-05（星期四）上午'], [
                '诊断报告', React.createElement("a", {
                  "href": 'javascript:;'
                }, "查看详情")
              ]
            ],
            jiaofei: true
          }, {
            kind: '挂号',
            date: '2015-11-03',
            info: [['预约医师', '李海峰'], ['预约时间', '2015-11-05（星期四）上午'], ['门诊类型', '专家门诊']]
          }
        ];
        results = [];
        for (idx = i = 0, len = timeline_data.length; i < len; idx = ++i) {
          item = timeline_data[idx];
          if (this.state.active === 0) {
            display = true;
          } else {
            display = ['', '诊断', '体检', '治疗'][this.state.active] === item.kind;
          }
          if (display) {
            results.push(React.createElement("div", {
              "key": idx,
              "className": 'tl-item'
            }, (item.jiaofei !== void 0 ? item.jiaofei ? React.createElement("div", {
              "className": 'jiaofei ui label green'
            }, "已缴费") : React.createElement("div", {
              "className": 'jiaofei ui label red'
            }, "未缴费") : void 0), React.createElement("div", {
              "className": 'dh'
            }, React.createElement("span", {
              "className": 'dlabel'
            }, item.kind), React.createElement("span", {
              "className": 'date'
            }, " - ", item.date)), (function() {
              var j, len1, ref, results1;
              ref = item.info;
              results1 = [];
              for (idx1 = j = 0, len1 = ref.length; j < len1; idx1 = ++j) {
                arr = ref[idx1];
                results1.push(React.createElement("div", {
                  "key": idx1
                }, React.createElement("span", null, arr[0], "："), arr[1]));
              }
              return results1;
            })()));
          } else {
            results.push(void 0);
          }
        }
        return results;
      }).call(this))))));
    },
    select0: function() {
      return this.setState({
        active: 0
      });
    },
    select1: function() {
      return this.setState({
        active: 1
      });
    },
    select2: function() {
      return this.setState({
        active: 2
      });
    },
    select3: function() {
      return this.setState({
        active: 3
      });
    }
  });

}).call(this);

(function() {
  var ArrangeInfoItem, ConfirmYYInfoPanel, ConfirmZhiliaoYYInfoPanel, DoctorInfoItem, FormPanel, PADLeftPanel, PADPanelList, PADRightPanel, PatientInfoItem, RoomArrangeInfoItem, RoomInfoItem;

  this.GHSelectPage = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'gh-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'index.html'
      }), React.createElement("span", null, "导诊")), React.createElement("div", {
        "className": 'select'
      }, React.createElement("div", {
        "className": "ui cards three"
      }, React.createElement("a", {
        "className": "card",
        "href": 'guide-guahao.html'
      }, React.createElement("div", {
        "className": "content"
      }, React.createElement("div", {
        "className": 'yunwen'
      }), React.createElement("div", {
        "className": "ui header"
      }, React.createElement("span", null, "现场挂号")))), React.createElement("a", {
        "className": "card",
        "href": 'guide-quhao.html'
      }, React.createElement("div", {
        "className": "content"
      }, React.createElement("div", {
        "className": 'yunwen'
      }), React.createElement("div", {
        "className": "ui header"
      }, React.createElement("span", null, "预约取号")))), React.createElement("a", {
        "className": "card",
        "href": 'guide-zhiliao.html'
      }, React.createElement("div", {
        "className": "content"
      }, React.createElement("div", {
        "className": 'yunwen'
      }), React.createElement("div", {
        "className": "ui header"
      }, React.createElement("span", null, "治疗预约"))))))));
    }
  });

  this.GHXCPage = React.createClass({
    getInitialState: function() {
      return {
        active: 0
      };
    },
    render: function() {
      var inputs, klass0, klass1;
      return React.createElement("div", {
        "className": 'gh-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'guide.html'
      }), React.createElement("span", null, "现场挂号")), React.createElement("div", {
        "className": 'info-input-form'
      }, (klass0 = new ClassName({
        'item': true,
        'active': this.state.active === 0
      }), klass1 = new ClassName({
        'item': true,
        'active': this.state.active === 1
      }), React.createElement("div", {
        "className": "ui two item menu"
      }, React.createElement("a", {
        "className": klass0,
        "onClick": this.select0
      }, "新患者"), React.createElement("a", {
        "className": klass1,
        "onClick": this.select1
      }, "已注册患者"))), (this.state.active === 0 ? (inputs = ['　就诊人', '身份证号', '　手机号', '诊疗卡号', '症状描述', '个人病史', '家庭病史'], React.createElement(FormPanel, {
        "title": '输入患者信息',
        "button": '进入预约',
        "inputs": inputs,
        "to": 'guide-doctor-select.html'
      })) : this.state.active === 1 ? (inputs = ['手机号'], React.createElement(FormPanel, {
        "title": '读取患者信息',
        "button": '进入预约',
        "inputs": inputs,
        "to": 'guide-doctor-select.html'
      }, React.createElement("div", {
        "className": 'ui segment basic'
      }, React.createElement("div", {
        "className": 'ui form'
      }, React.createElement("div", {
        "className": 'grouped fields'
      }, React.createElement("div", {
        "className": 'field'
      }, React.createElement("div", {
        "className": "ui radio checkbox"
      }, React.createElement("input", {
        "type": "radio",
        "name": "radio"
      }), React.createElement("label", null, "王大锤 - 男 - 33 岁"))), React.createElement("div", {
        "className": 'field'
      }, React.createElement("div", {
        "className": "ui radio checkbox"
      }, React.createElement("input", {
        "type": "radio",
        "name": "radio"
      }), React.createElement("label", null, "王小锤 - 男 - 3 岁"))), React.createElement("div", {
        "className": 'field'
      }, React.createElement("div", {
        "className": "ui radio checkbox"
      }, React.createElement("input", {
        "type": "radio",
        "name": "radio"
      }), React.createElement("label", null, "孔连顺 - 女 - 24 岁")))))))) : void 0))));
    },
    select0: function() {
      return this.setState({
        active: 0
      });
    },
    select1: function() {
      return this.setState({
        active: 1
      });
    }
  });

  this.GHYYPage = React.createClass({
    render: function() {
      var inputs;
      return React.createElement("div", {
        "className": 'gh-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'guide.html'
      }), React.createElement("span", null, "预约取号")), React.createElement("div", {
        "className": 'info-input-form'
      }, (inputs = ['　预约号', '　手机号', '诊疗卡号'], React.createElement(FormPanel, {
        "title": '查询预约信息',
        "button": '查看信息',
        "inputs": inputs,
        "to": 'guide-quhao-confirm.html'
      })))));
    }
  });

  FormPanel = React.createClass({
    render: function() {
      var idx, input;
      return React.createElement("div", {
        "className": 'panel'
      }, React.createElement("h3", {
        "className": 'ui header'
      }, this.props.title), (function() {
        var i, len, ref, results;
        ref = this.props.inputs;
        results = [];
        for (idx = i = 0, len = ref.length; i < len; idx = ++i) {
          input = ref[idx];
          results.push(React.createElement("div", {
            "key": idx,
            "className": 'ui labeled input fluid'
          }, React.createElement("div", {
            "className": 'ui label'
          }, input), React.createElement("input", {
            "type": "text"
          })));
        }
        return results;
      }).call(this), this.props.children, React.createElement("a", {
        "className": 'ui right labeled icon button brown enter-yy',
        "href": this.props.to
      }, React.createElement("i", {
        "className": 'icon arrow right'
      }), React.createElement("span", null, this.props.button)));
    }
  });

  this.GHYYConfirmPage = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'gh-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'guide-quhao.html'
      }), React.createElement("span", null, "预约取号")), React.createElement(ConfirmYYInfoPanel, null)));
    }
  });

  ConfirmYYInfoPanel = React.createClass({
    render: function() {
      var data, idx, item;
      data = [['　就诊人', '王大锤'], ['预约医师', '叶建华（主任医师 - 体检科）'], ['就诊时间', '2015-12-08（星期二）上午'], ['门诊类型', '专家门诊']];
      return React.createElement("div", {
        "className": 'info-input-form yy-info'
      }, React.createElement("h3", {
        "className": 'ui header'
      }, "预约信息确认"), React.createElement("div", {
        "className": "ui divided list"
      }, (function() {
        var i, len, results;
        results = [];
        for (idx = i = 0, len = data.length; i < len; idx = ++i) {
          item = data[idx];
          results.push(React.createElement("div", {
            "className": 'item',
            "key": idx
          }, React.createElement("div", {
            "className": "ui horizontal label"
          }, item[0]), React.createElement("span", null, item[1])));
        }
        return results;
      })()), React.createElement("a", {
        "className": 'ui right labeled icon button brown enter-yy',
        "href": 'guide-quhao-result.html'
      }, React.createElement("i", {
        "className": 'icon arrow right'
      }), React.createElement("span", null, "确认挂号")));
    }
  });

  ConfirmZhiliaoYYInfoPanel = React.createClass({
    render: function() {
      var data, idx, item;
      data = [['　就诊人', '王大锤'], ['预约诊室', '107'], ['治疗时间', '2016-01-07 16:00-18:00'], ['治疗项目', '针刺, 艾灸']];
      return React.createElement("div", {
        "className": 'info-input-form yy-info'
      }, React.createElement("h3", {
        "className": 'ui header'
      }, "预约信息确认"), React.createElement("div", {
        "className": "ui divided list"
      }, (function() {
        var i, len, results;
        results = [];
        for (idx = i = 0, len = data.length; i < len; idx = ++i) {
          item = data[idx];
          results.push(React.createElement("div", {
            "className": 'item',
            "key": idx
          }, React.createElement("div", {
            "className": "ui horizontal label"
          }, item[0]), React.createElement("span", null, item[1])));
        }
        return results;
      })()), React.createElement("a", {
        "className": 'ui right labeled icon button brown enter-yy',
        "href": 'guide-quhao-result.html'
      }, React.createElement("i", {
        "className": 'icon arrow right'
      }), React.createElement("span", null, "确认挂号")));
    }
  });

  this.GHYYResultPage = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'gh-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("div", {
        "className": 'info-input-form result'
      }, React.createElement("h3", {
        "className": 'ui header'
      }, "挂号成功"), React.createElement("p", {
        "style": {
          'text-align': 'center'
        }
      }, "就诊号：", React.createElement("strong", null, "105")), React.createElement("a", {
        "className": 'ui right labeled icon button brown enter-yy',
        "href": 'javascript:;'
      }, React.createElement("i", {
        "className": 'icon print'
      }), React.createElement("span", null, "打印挂号单")), React.createElement("a", {
        "className": 'ui right labeled icon button enter-yy exit',
        "href": 'guide.html'
      }, React.createElement("i", {
        "className": 'icon arrow left'
      }), React.createElement("span", null, "退出")))));
    }
  });

  this.GHDoctorSelectPage = React.createClass({
    render: function() {
      var data;
      return React.createElement("div", {
        "className": 'gh-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement(PADLeftPanel, null, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'guide-guahao.html'
      }), "医师"), (data = [['李海峰', '医师'], ['廖国林', '医师'], ['周小娟', '医师'], ['杨晓勇', '医师'], ['朱杰辉', '医师'], ['叶建华', '医师'], ['游琼', '医师'], ['周丽琴', '医师']], React.createElement(PADPanelList, {
        "data": data,
        "item_component": DoctorInfoItem
      }))), React.createElement(PADRightPanel, null, React.createElement("h2", {
        "className": 'ui header topbar'
      }, "排班表"), (data = [['2015-12-08', '星期二', '上午', 0], ['2015-12-08', '星期二', '下午', 6], ['2015-12-09', '星期三', '上午', 10], ['2015-12-09', '星期三', '下午', 13]], React.createElement(PADPanelList, {
        "data": data,
        "item_component": ArrangeInfoItem
      })))));
    }
  });

  PADLeftPanel = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'pad-left-panel'
      }, this.props.children);
    }
  });

  PADRightPanel = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'pad-right-panel'
      }, this.props.children);
    }
  });

  PADPanelList = React.createClass({
    render: function() {
      var idx, item;
      return React.createElement("div", {
        "className": 'pad-panel-list'
      }, (function() {
        var i, len, ref, results;
        ref = this.props.data;
        results = [];
        for (idx = i = 0, len = ref.length; i < len; idx = ++i) {
          item = ref[idx];
          results.push(React.createElement(this.props.item_component, {
            'key': idx,
            'data': item
          }));
        }
        return results;
      }).call(this));
    }
  });

  RoomInfoItem = React.createClass({
    render: function() {
      var data;
      data = this.props.data;
      return React.createElement("a", {
        "className": 'item',
        "href": 'javascript:;'
      }, React.createElement("span", {
        "className": 'ui label'
      }, data[0]), React.createElement("span", null, " - "), React.createElement("span", null, data[1]), React.createElement("span", null, " - "), React.createElement("span", null, data[2]), React.createElement("span", {
        "className": 'tail'
      }, React.createElement("i", {
        "className": 'icon chevron right'
      })));
    }
  });

  DoctorInfoItem = React.createClass({
    render: function() {
      var data;
      data = this.props.data;
      return React.createElement("a", {
        "className": 'item',
        "href": 'javascript:;'
      }, React.createElement("strong", null, data[0]), React.createElement("span", null, " - "), React.createElement("span", {
        "className": 'ui label small'
      }, data[1]), React.createElement("span", {
        "className": 'tail'
      }, React.createElement("i", {
        "className": 'icon chevron right'
      })));
    }
  });

  RoomArrangeInfoItem = React.createClass({
    render: function() {
      var data, klass;
      data = this.props.data;
      klass = new ClassName({
        'item': true,
        'disabled': data[2] === 0,
        'full': data[2] === 0
      });
      return React.createElement("a", {
        "className": klass,
        "href": 'guide-period-select.html'
      }, React.createElement("span", null, data[0]), React.createElement("span", null, " - "), React.createElement("span", null, data[1]), React.createElement("span", {
        "className": 'tail'
      }, (data[2] === 0 ? React.createElement("span", null, "已约满") : React.createElement("span", null, "剩余时段：", data[2])), React.createElement("i", {
        "className": 'icon chevron right'
      })));
    }
  });

  ArrangeInfoItem = React.createClass({
    render: function() {
      var data, klass;
      data = this.props.data;
      klass = new ClassName({
        'item': true,
        'disabled': data[3] === 0,
        'full': data[3] === 0
      });
      return React.createElement("a", {
        "className": klass,
        "href": 'guide-doctor-selected.html'
      }, React.createElement("span", null, data[0]), React.createElement("span", null, " - "), React.createElement("span", null, data[1]), React.createElement("span", null, " - "), React.createElement("span", null, data[2]), React.createElement("span", {
        "className": 'tail'
      }, (data[3] === 0 ? React.createElement("span", null, "已约满") : React.createElement("span", null, "剩余号：", data[3])), React.createElement("i", {
        "className": 'icon chevron right'
      })));
    }
  });

  PatientInfoItem = React.createClass({
    render: function() {
      var data;
      data = this.props.data;
      return React.createElement("a", {
        "className": 'item',
        "href": 'javascript:;'
      }, React.createElement("span", {
        "className": 'ui label'
      }, data[0]), React.createElement("span", null, " - "), React.createElement("span", null, data[1]), React.createElement("span", null, " - "), React.createElement("span", null, data[2]), React.createElement("span", {
        "className": 'tail'
      }, React.createElement("i", {
        "className": 'icon chevron right'
      })));
    }
  });

  this.GHDoctorSelectedPage = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'gh-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'guide-quhao.html'
      }), React.createElement("span", null, "预约取号")), React.createElement(ConfirmYYInfoPanel, null)));
    }
  });

  this.GHZhiliaoSelectedPage = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'gh-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'guide-quhao.html'
      }), React.createElement("span", null, "治疗预约")), React.createElement(ConfirmZhiliaoYYInfoPanel, null)));
    }
  });

  this.GHZhiliao = React.createClass({
    render: function() {
      var inputs;
      return React.createElement("div", {
        "className": 'gh-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'guide.html'
      }), React.createElement("span", null, "治疗预约")), React.createElement("div", {
        "className": 'info-input-form'
      }, (inputs = ['手机号'], React.createElement(FormPanel, {
        "title": '读取患者信息',
        "button": '进入房间选择',
        "inputs": inputs,
        "to": 'guide-zhiliao-choose-room.html'
      }, React.createElement("div", {
        "className": 'ui segment basic'
      }, React.createElement("div", {
        "className": 'ui form'
      }, React.createElement("div", {
        "className": 'grouped fields'
      }, React.createElement("div", {
        "className": 'field'
      }, React.createElement("div", {
        "className": "ui radio checkbox"
      }, React.createElement("input", {
        "type": "radio",
        "name": "radio"
      }), React.createElement("label", null, React.createElement("div", null, "王大锤 - 男 - 33 岁"), React.createElement("div", {
        "style": {
          'marginTop': '10px'
        }
      }, React.createElement("span", null, "治疗项："), React.createElement("span", {
        "className": 'ui label small'
      }, "针刺"), React.createElement("span", {
        "className": 'ui label small'
      }, "艾灸"))))), React.createElement("div", {
        "className": 'field',
        "style": {
          'marginTop': '20px'
        }
      }, React.createElement("div", {
        "className": "ui radio checkbox"
      }, React.createElement("input", {
        "type": "radio",
        "name": "radio"
      }), React.createElement("label", null, React.createElement("div", null, "孔连顺 - 女 - 24 岁"), React.createElement("div", {
        "style": {
          'marginTop': '10px'
        }
      }, React.createElement("span", null, "治疗项："), React.createElement("span", {
        "className": 'ui label small'
      }, "拔罐")))))))))))));
    }
  });

  this.GHZhiliaoChooseRoom = React.createClass({
    render: function() {
      var data;
      return React.createElement("div", {
        "className": 'gh-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement(PADLeftPanel, null, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'guide-zhiliao.html'
      }), "房间"), (data = [['101', '单人', '东向'], ['102', '单人', '南向'], ['103', '双人', '东向'], ['104', '双人', '南向'], ['105', '双人', '北向'], ['106', '三人', '东向'], ['107', '三人', '南向'], ['108', '三人', '北向']], React.createElement(PADPanelList, {
        "data": data,
        "item_component": RoomInfoItem
      }))), React.createElement(PADRightPanel, null, React.createElement("h2", {
        "className": 'ui header topbar'
      }, "日期时段"), (data = [['2016-01-04', '星期一', 0], ['2016-01-05', '星期二', 4], ['2016-01-06', '星期三', 6], ['2016-01-07', '星期四', 7]], React.createElement(PADPanelList, {
        "data": data,
        "item_component": RoomArrangeInfoItem
      })))));
    }
  });

  this.GHPeriodSelectPage = React.createClass({
    render: function() {
      var data, full, idx, item, klass;
      data = [['08:00 - 10:00', true], ['10:00 - 12:00', false], ['12:00 - 14:00', false], ['14:00 - 16:00', true], ['16:00 - 18:00', true], ['18:00 - 20:00', false], ['20:00 - 22:00', true]];
      return React.createElement("div", {
        "className": 'gh-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'guide-zhiliao-choose-room.html'
      }), React.createElement("span", null, "选择床位时段")), React.createElement("div", {
        "className": 'info-input-form'
      }, React.createElement("h3", {
        "className": 'ui header'
      }, "107 房 2016-01-07"), React.createElement("h3", {
        "className": 'ui header'
      }, "请从下列时段选择"), React.createElement("div", {
        "className": 'ui divided list'
      }, (function() {
        var i, len, results;
        results = [];
        for (idx = i = 0, len = data.length; i < len; idx = ++i) {
          item = data[idx];
          full = item[1] === false;
          klass = new ClassName({
            'item': true,
            'period': true,
            'full': full
          });
          results.push(React.createElement("div", {
            "key": idx,
            "className": klass
          }, React.createElement("span", {
            "className": 'plabel',
            "style": {
              'lineHeight': '30px'
            }
          }, React.createElement("i", {
            "className": 'icon clock'
          }), item[0]), React.createElement("div", {
            "className": 'right floated'
          }, (full ? React.createElement("span", {
            "style": {
              'lineHeight': '30px'
            }
          }, "此时段已排满") : React.createElement("a", {
            "className": 'ui button brown tiny',
            "href": 'guide-zhiliao-selected.html'
          }, "选定")))));
        }
        return results;
      })()))));
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
  this.PaibanPage = React.createClass({
    render: function() {
      var arr, date, i, j, klass, paiban, pitem;
      return React.createElement("div", {
        "className": 'gh-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": this.props.back
      }), React.createElement("span", null, "我的排班")), React.createElement("div", {
        "className": 'info-input-form',
        "style": {
          'width': 'auto'
        }
      }, React.createElement("h3", {
        "className": 'ui header'
      }, "2015 年 12 月"), React.createElement("table", {
        "className": 'ui celled table paiban'
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "周一"), React.createElement("th", null, "周二"), React.createElement("th", null, "周三"), React.createElement("th", null, "周四"), React.createElement("th", null, "周五"), React.createElement("th", null, "周六"), React.createElement("th", null, "周日"))), React.createElement("tbody", null, ((function() {
        var k, results;
        arr = [30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3];
        paiban = {
          1: [1, 1, 0],
          2: [1, 1, 0],
          3: [1, 0, 1],
          4: [0, 1, 0],
          5: [1, 0, 1],
          7: [1, 1, 0],
          8: [1, 1, 0],
          9: [1, 0, 1],
          10: [0, 1, 0],
          11: [1, 0, 1],
          16: [1, 1, 0],
          17: [1, 1, 0],
          18: [1, 0, 1],
          19: [0, 1, 0],
          20: [1, 0, 1],
          22: [1, 1, 0],
          23: [1, 1, 0],
          24: [1, 0, 1],
          25: [0, 1, 0],
          26: [1, 0, 1],
          28: [1, 1, 0],
          29: [1, 1, 0],
          30: [1, 0, 1],
          31: [0, 1, 0]
        };
        results = [];
        for (i = k = 0; k < 5; i = ++k) {
          results.push(React.createElement("tr", {
            "key": i
          }, (function() {
            var l, results1;
            results1 = [];
            for (j = l = 0; l < 7; j = ++l) {
              date = arr[i * 7 + j];
              pitem = paiban[date] || [];
              klass = new ClassName({
                'pbtd': true,
                'sat': j === 5,
                'sun': j === 6,
                'p1': pitem[0] === 1,
                'p2': pitem[1] === 1,
                'p3': pitem[2] === 1
              });
              results1.push(React.createElement("td", {
                "key": j,
                "className": klass
              }, React.createElement("div", {
                "className": 'ui divided list'
              }, React.createElement("div", {
                "className": 'item date'
              }, React.createElement("div", {
                "className": 'text'
              }, date)), React.createElement("div", {
                "className": 'item p1'
              }, React.createElement("div", {
                "className": 'text'
              }, "上午")), React.createElement("div", {
                "className": 'item p2'
              }, React.createElement("div", {
                "className": 'text'
              }, "下午")), React.createElement("div", {
                "className": 'item p3'
              }, React.createElement("div", {
                "className": 'text'
              }, "晚上")))));
            }
            return results1;
          })()));
        }
        return results;
      })()))))));
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
  this.HorizontalChineseScroll = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'horizontal-chinese-scroll'
      }, React.createElement("div", {
        "className": 'handle begin'
      }, React.createElement("div", {
        "className": 'handle-border top'
      }), React.createElement("div", {
        "className": 'handle-border bottom'
      })), React.createElement("div", {
        "className": 'scroll-inner'
      }, React.createElement("div", {
        "className": 'scroll-border top'
      }), React.createElement("div", {
        "className": 'content-inner'
      }, this.props.children), React.createElement("div", {
        "className": 'scroll-border bottom'
      })), React.createElement("div", {
        "className": 'handle end'
      }, React.createElement("div", {
        "className": 'handle-border top'
      }), React.createElement("div", {
        "className": 'handle-border bottom'
      })));
    }
  });

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

  window.ClassName = (function() {
    function _Class(hash) {
      this.hash = hash;
    }

    _Class.prototype.toString = function() {
      var arr, key, ref, value;
      arr = [];
      ref = this.hash;
      for (key in ref) {
        value = ref[key];
        if (value) {
          arr.push(key);
        }
      }
      return arr.join(' ');
    };

    return _Class;

  })();

}).call(this);

(function() {
  this.TopbarBack = React.createClass({
    render: function() {
      return React.createElement("a", {
        "className": 'topbar-back',
        "href": this.props.href
      }, React.createElement("i", {
        "className": 'icon chevron left'
      }));
    }
  });

  this.ZDPatientInfoPage = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'zd-patient-info-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'zd-patient-list.html'
      }), React.createElement("span", null, "患者信息")), React.createElement("div", {
        "className": 'table-div'
      }, React.createElement("table", {
        "className": 'ui very basic celled table'
      }, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
        "className": 'label collapsing'
      }, "姓名："), React.createElement("td", null, "王大锤"), React.createElement("td", {
        "className": 'label collapsing'
      }, "性别："), React.createElement("td", null, "男"), React.createElement("td", {
        "className": 'label collapsing'
      }, "年龄："), React.createElement("td", null, "33")), React.createElement("tr", null, React.createElement("td", {
        "className": 'label collapsing'
      }, "日期："), React.createElement("td", null, "2015-12-08"), React.createElement("td", {
        "className": 'label collapsing'
      }, "就诊号："), React.createElement("td", null, "301"), React.createElement("td", {
        "className": 'label collapsing'
      }, "诊疗卡："), React.createElement("td", null, "1234567")), React.createElement("tr", null, React.createElement("td", {
        "className": 'label collapsing'
      }, "身高："), React.createElement("td", null, "180 cm"), React.createElement("td", {
        "className": 'label collapsing'
      }, "体重："), React.createElement("td", null, "70 kg"), React.createElement("td", {
        "className": 'label collapsing'
      }, "血压："), React.createElement("td", null, "70\x2F100 mmHg")), React.createElement("tr", null, React.createElement("td", {
        "className": 'label collapsing top aligned'
      }, "既往史："), React.createElement("td", {
        "colSpan": '5',
        "className": 'desc'
      }, React.createElement("span", null))), React.createElement("tr", null, React.createElement("td", {
        "className": 'label collapsing top aligned'
      }, "体质类型："), React.createElement("td", {
        "colSpan": '5',
        "className": 'desc'
      }, React.createElement("span", null))))), React.createElement("div", null, React.createElement("a", {
        "className": 'ui labeled icon button back',
        "href": 'zd-patient-list.html'
      }, React.createElement("i", {
        "className": 'left arrow icon'
      }), React.createElement("span", null, "返回患者队列")), React.createElement("a", {
        "className": 'ui right labeled icon button brown next',
        "href": 'zd-diagnosis.html'
      }, React.createElement("i", {
        "className": 'right arrow icon'
      }), React.createElement("span", null, "进入体检系统"))))));
    }
  });

  this.ZDPatientResultPage = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'zd-patient-info-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'zd-patient-list.html'
      }), React.createElement("span", null, "患者信息")), React.createElement("div", {
        "className": 'table-div'
      }, React.createElement("table", {
        "className": 'ui very basic celled table'
      }, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
        "className": 'label collapsing'
      }, "姓名："), React.createElement("td", null, "王大锤"), React.createElement("td", {
        "className": 'label collapsing'
      }, "性别："), React.createElement("td", null, "男"), React.createElement("td", {
        "className": 'label collapsing'
      }, "年龄："), React.createElement("td", null, "33")), React.createElement("tr", null, React.createElement("td", {
        "className": 'label collapsing'
      }, "日期："), React.createElement("td", null, "2015-12-08"), React.createElement("td", {
        "className": 'label collapsing'
      }, "就诊号："), React.createElement("td", null, "301"), React.createElement("td", {
        "className": 'label collapsing'
      }, "诊疗卡："), React.createElement("td", null, "1234567"))))), React.createElement("div", {
        "className": 'table-div'
      }, React.createElement("div", {
        "className": 'record'
      }, React.createElement("h3", {
        "className": 'ui header'
      }, "已检查项目：背诊")), React.createElement("div", null, React.createElement("a", {
        "className": 'ui labeled icon button back',
        "href": 'javascript:;'
      }, React.createElement("i", {
        "className": 'icon file'
      }), React.createElement("span", null, "查看体检记录")), React.createElement("a", {
        "className": 'ui right labeled icon button brown next',
        "href": 'zd-diagnosis.html'
      }, React.createElement("i", {
        "className": 'pencil icon'
      }), React.createElement("span", null, "修改体检记录")))), React.createElement("div", {
        "className": 'table-div'
      }, React.createElement("div", {
        "className": 'record'
      }, React.createElement("h3", {
        "className": 'ui header'
      }, "已检查项目：舌诊")), React.createElement("div", null, React.createElement("a", {
        "className": 'ui labeled icon button back',
        "href": 'javascript:;'
      }, React.createElement("i", {
        "className": 'icon file'
      }), React.createElement("span", null, "查看体检记录")), React.createElement("a", {
        "className": 'ui right labeled icon button brown next',
        "href": 'zd-diagnosis.html'
      }, React.createElement("i", {
        "className": 'pencil icon'
      }), React.createElement("span", null, "修改体检记录")))), React.createElement("div", {
        "className": 'table-div'
      }, React.createElement("div", null, React.createElement("a", {
        "className": 'ui right labeled icon button brown next',
        "href": 'zd-diagnosis.html'
      }, React.createElement("i", {
        "className": 'plus icon'
      }), React.createElement("span", null, "检查其他项目")))), React.createElement("div", {
        "className": 'table-div'
      }, React.createElement("div", null, React.createElement("a", {
        "className": 'ui right labeled icon button brown next',
        "href": 'index.html'
      }, React.createElement("i", {
        "className": 'icon check'
      }), React.createElement("span", null, "保存体检结果"))))));
    }
  });

}).call(this);

(function() {
  this.TijianSelectPage = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'gh-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement("h2", {
        "className": 'ui header topbar'
      }, React.createElement(TopbarBack, {
        "href": 'index.html'
      }), React.createElement("span", null, "体检")), React.createElement("div", {
        "className": 'select'
      }, React.createElement("div", {
        "className": "ui cards three"
      }, React.createElement("a", {
        "className": "card",
        "href": 'zd-patient-list.html'
      }, React.createElement("div", {
        "className": "content"
      }, React.createElement("div", {
        "className": 'yunwen'
      }), React.createElement("div", {
        "className": "ui header"
      }, React.createElement("span", null, "患者队列")))), React.createElement("a", {
        "className": "card",
        "href": 'tijian-paiban.html'
      }, React.createElement("div", {
        "className": "content"
      }, React.createElement("div", {
        "className": 'yunwen'
      }), React.createElement("div", {
        "className": "ui header"
      }, React.createElement("span", null, "我的排班"))))))));
    }
  });

  this.ZDPatientListPage = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": 'zd-patient-list-page'
      }, React.createElement("div", {
        "className": 'ui container'
      }, React.createElement(ZDPatientListPage.Dates, null), React.createElement(ZDPatientListPage.List, null)));
    },
    statics: {
      Dates: React.createClass({
        render: function() {
          var date, dates, idx, klass;
          dates = [['12-08，星期二，上午', '8/10'], ['12-08，星期二，下午', '14/20'], ['12-09，星期三，上午', '2/10'], ['12-09，星期三，下午', '1/20']];
          return React.createElement("div", {
            "className": 'dates'
          }, React.createElement("h2", {
            "className": 'ui header topbar'
          }, React.createElement(TopbarBack, {
            "href": 'tijian.html'
          }), "就诊日期"), React.createElement("div", {
            "className": 'dlist'
          }, (function() {
            var i, len, results;
            results = [];
            for (idx = i = 0, len = dates.length; i < len; idx = ++i) {
              date = dates[idx];
              klass = new ClassName({
                'ditem': true,
                'active': idx === 0
              });
              results.push(React.createElement("a", {
                "key": idx,
                "className": klass,
                "href": 'javascript:;'
              }, React.createElement("span", null, date[0]), React.createElement("span", {
                "className": 'persons-number'
              }, React.createElement("span", null, date[1]), React.createElement("i", {
                "className": 'icon chevron right'
              }))));
            }
            return results;
          })()));
        }
      }),
      List: React.createClass({
        render: function() {
          var idx, klass, patient, patients;
          patients = [['301', '王大锤', '男'], ['302', '张本煜', '男'], ['303', '小爱', '女'], ['304', '孔连顺', '女'], ['305', '刘循子墨', '男'], ['306', '易小星', '男'], ['307', '至尊玉', '男'], ['308', '葛布', '女']];
          return React.createElement("div", {
            "className": 'list'
          }, React.createElement("h2", {
            "className": 'ui header topbar'
          }, "患者队列"), React.createElement("div", {
            "className": 'plist'
          }, (function() {
            var i, len, results;
            results = [];
            for (idx = i = 0, len = patients.length; i < len; idx = ++i) {
              patient = patients[idx];
              klass = new ClassName({
                'pitem': true
              });
              results.push(React.createElement("a", {
                "key": idx,
                "className": klass,
                "href": 'zd-patient-info.html'
              }, React.createElement("span", {
                "className": 'ui label'
              }, patient[0]), React.createElement("span", null, " - "), React.createElement("span", null, patient[1]), React.createElement("span", null, " - "), React.createElement("span", null, patient[2]), React.createElement("span", {
                "className": 'tail'
              }, React.createElement("i", {
                "className": 'icon chevron right'
              }))));
            }
            return results;
          })()));
        }
      })
    }
  });

}).call(this);

//# sourceMappingURL=base.js.map
