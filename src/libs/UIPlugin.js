import { Tabs, FormModel, Input, InputNumber, Select, Col, Row, Button, Dropdown, Menu, Icon, notification, Modal, Table, Steps, List, Spin, Tooltip } from 'ant-design-vue';

export default {
  install(Vue) {
    Vue.use(Tabs);
    Vue.use(FormModel);
    Vue.use(Input);
    Vue.use(Select);
    Vue.use(Col);
    Vue.use(Row);
    Vue.use(Button);
    Vue.use(Dropdown);
    Vue.use(Menu);
    Vue.use(Icon);
    Vue.use(Modal);
    Vue.use(Table);
    Vue.use(Steps);
    Vue.use(List);
    Vue.use(InputNumber);
    Vue.use(Spin);
    Vue.use(Tooltip);

    Vue.prototype.$notification = notification;
    Vue.prototype.$confirm = Modal.confirm;
    Vue.prototype.$warning = Modal.warning;
  }
};
