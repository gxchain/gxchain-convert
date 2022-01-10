<template>
  <div class="container">
    <header-nav>
      <div slot="navRight" class="navRightWrap">
        
        <div class="navright-item">
          <a-dropdown>
            <a-menu slot="overlay" @click="changeLanguage">
              <a-menu-item key="zh-CN">
                中文
              </a-menu-item>
              <a-menu-item key="en-US">
                EN
              </a-menu-item>
              <a-menu-item key="ko-KR">
                한국어
              </a-menu-item>
            </a-menu>
            <a-button type="primary" class="btn-change-lan">{{arrLanguage[$i18n.locale]}}</a-button>
          </a-dropdown>
        </div>
      </div>
    </header-nav>
    <div class="contentWrap">
      <div class="contentContainer">
        <a-tabs type="card" :animated="false" v-model="activeKey">
          <a-tab-pane key="1" :tab="$t('index.convert')">
            <a-form-model>
              <a-form-model-item :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol" :label="$t('index.convert_type')">
                <a-row :gutter="8" class="line-bottom">
                  <a-col :span="8" class="coin-name-wrap"> <img src="../assets/images/gxc.png" class="icon-wrap" /> <span>GXC</span> </a-col>
                  <a-col :span="4">
                    <img src="../assets/images/icon-arrow.png" class="icon-wrap icon-arrow" />
                  </a-col>
                  <a-col :span="8" class="coin-name-wrap"> <img src="../assets/images/rei.svg" class="icon-wrap" /> <span>REI</span> </a-col>
                </a-row>
              </a-form-model-item>
              <div class="depositDesc">
                <div class="tips-title">{{$t('index.tips')}}</div>
                <p>{{$t('index.please_deposit_to_account')}}<strong>Memo</strong></p>
                <div class="deposit-main">
                  <div>
                    <strong>*{{$t('index.account_name')}}:&nbsp;&nbsp;</strong>
                    <span class="contract-account">gxc-convert</span>
                    <a-button class="btn-copy" type="primary" size="small" :disabled="copied" ghost @click="copyGXCAddr">{{ copied ? $t('index.already_copied') : $t('index.copy')}}</a-button>
                  </div>
                  <div>
                    <strong>*Memo/Tag({{$t('index.marked')}}):</strong>
                    <span class="contract-account">({{$t('index.your_eth_address')}})</span>
                    <a-tooltip>
                        <template slot="title">
                        {{$t('index.wallet_tip')}}
                        </template>
                        <a-icon type="question-circle" />
                    </a-tooltip>
                  </div>
                  <div><strong>{{$t('index.estimated_arrived_time')}}:</strong> <span class="contract-account">24{{$t('index.hours')}}</span></div>
                  
                </div>
              </div>
              <div class="depositDesc addReiWap">
                <div class="tips-title">{{$t('index.addtips')}}</div>
                
                <div class="tips-bottom">
                  <ul>
                    
                    <li><strong>{{$t('index.autoAdd')}}</strong> <a-button class="btn-copy" type="primary" size="small" ghost @click="addREI">点击添加</a-button></li>
                    <li><strong>{{$t('index.manualAdd')}}</strong> </li>
                    <li class="entryWrap">
                        <strong>Network Name: </strong>REI Network<br>
                        <strong>RPC URL: </strong>https://rpc.rei.network<br>
                        <strong>ChainID: </strong> 47805<br>
                        <strong>Symbol: </strong> REI<br>
                        <strong>Decimals: </strong> 18<br>
                        <strong>Explorer: </strong> https://scan.rei.network <br>
                    </li>
                  </ul>
              </div>
              </div>
            </a-form-model>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue';
import filters from '@/filters';
import { Message } from 'ant-design-vue';
import Web3 from 'web3';



export default {
  name: 'Home',
  components: {
    HeaderNav
  },
  filters,
  data() {
    return {
      copied: false,
      showModal: false,
      activeKey: '1',
      eth:{
        address:''
      },
      arrLanguage: {
        'zh-CN': '中文',
        'en-US': 'EN',
        'ko-KR': '한국어'
      },
    };
  },
  mounted() {
  },
  computed: {
    formItemLayout() {
      let _layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 }
      }
      if (this.$i18n.locale === 'en-US') {
        _layout = {
          labelCol: { span: 6 },
          wrapperCol: { span: 18 }
        }
      }
      if (this.$i18n.locale === 'ko-KR') {
        _layout = {
          labelCol: { span: 5 },
          wrapperCol: { span: 19 }
        }
      }
      return _layout
    }
  },
  methods: {
    sleep(timestamp) {
      return new Promise((resolve) => {
        setTimeout(resolve, timestamp);
      });
    },
    async copyText(text, message) {
      try {
        navigator.clipboard.writeText(text);
        this.copyToClipboard(text);
        Message.info(message);
      } catch (ex) {
        console.log(ex);
      }
    },
    async copyGXCAddr() {
      try {
        navigator.clipboard.writeText('gxc-convert');
        this.copyToClipboard('gxc-convert');
      } catch (ex) {
        console.log(ex);
      } finally {
        this.copied = true;
        await this.sleep(500);
        this.copied = false;
      }
    },
    createWallet(){

    },
    handleOk() {

    },
    copyToClipboard(str) {
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    },
    changeLanguage(e) {
      console.log(e.key)
      localStorage.setItem('_locale', e.key);
      this.$i18n.locale = e.key;
    },
    async loginEth() {
      if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        await ethereum.enable();
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
      }
      // Non-dapp browsers...
      else {
        this.$confirm({
          title: this.$t('index.tips'),
          content: this.$t('tips.you_has_not_install_metamask'),
          okText: this.$t('tips.confirm'),
          cancelText: this.$t('tips.cancel'),
          onOk() {
            window.open('https://metamask.io/');
          },
          onCancel() {}
        });
      }

      let accounts = await web3.eth.getAccounts();
      this.eth.address = accounts[0];
      web3.currentProvider.on('accountsChanged', () => {
        window.location.reload();
      });
      web3.currentProvider.on('chainChanged', () => {
        window.location.reload();
      });
      web3.currentProvider.on('message', (payload) => {
        console.log(payload, arguments);
      });
      web3.currentProvider.on('disconnect', (code, reason) => {
        console.log(`Ethereum Provider connection closed: ${reason}. Code: ${code}`);
      });
    },
    async addREI() {
        this.loginEth();
        try {
            await window.ethereum.request({
                method:'wallet_addEthereumChain',
                params:[{
                "chainId": "0xbabd",
                "chainName": "REI Network",
                "rpcUrls": ["https://rpc.rei.network"],
                "nativeCurrency": {
                    "name": "REINetwork",
                    "symbol": "REI",
                    "decimals": 18
                },
                "blockExplorerUrls": ["https://scan.rei.network/"]
                }]
            },this.eth.address)
        } catch (addError) {
            console.log('res',addError)
        }
    },
    async switchGXChainNet() {
        
        try {
            this.addREI()
            let res = await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0xbabd' }],
            });
            console.log('res',res)
            if(res && res.error){
                this.addREI()
            }
        } catch (error) {
            console.log('error',error)
            if (error.code === 4902) {
                this.addREI()
            }
        }
    },

  }
};
</script>

<style lang="postcss">
.container {
  .navright-item {
    display: inline-block;
    padding: 0 10px;
  }
  .icon-header {
    height: 30px;
  }
  .navRightWrap {
    text-align: right;
    .btn-change-lan {
      background: #69f;
      height: 24px;
    }
  }
  
}
.addr {
  .well {
    cursor: pointer;
    background: #69f;
    padding: 3px 8px;
    color: #fff;
    border-radius: 12px;
    margin: 0 5px;
  }
  .action {
    border-radius: 10px;
    background: #fff;
    padding: 5px;
    margin: 3px;
    &:hover {
      background: #ccc;
    }
  }
}
.contentContainer {
  background-color: #fff;
  width: 600px;
  margin: 1rem auto;
  border-radius: 1rem;
  box-shadow: 0 0 8px #ccc;
  .note {
    line-height: 20px;
    margin: 8px 0;
  }
  .ant-form-extra {
    font-size: 12px;
  }
  .balance-title {
    color: rgba(0, 0, 0, 0.85);
    text-align: right;
  }
  .icon-wrap {
    width: 30px;
  }
  .icon-arrow {
    width: 25px;
  }
  .coin-name-wrap {
    display: flex;
    padding: 0 0.5rem;
    line-height: 200%;
    font-size: 18px;
    font-weight: bolder;
    align-items: center;
    span {
      display: inline-block;
      padding-left: 5px;
    }
  }
  .form-item-bottom {
    width: 100%;
    margin-bottom: 0;
  }
  .line-bottom {
    border-bottom: 1px solid #d9d9d9;
  }
  .btn-normal {
    width: 50%;
    height: 54px;
    border: none;
    border-radius: 0;
  }
  .btn-submit {
    border-bottom-left-radius: 1rem;
  }
  .btn-reset {
    background-color: #f5f5f5;
    border-bottom-right-radius: 1rem;
  }
  .depositDesc {
    padding: 10px 15px;
    margin: 20px auto;
    min-height: 150px;
    width: 450px;
    background-color: #fdf7eb;
    border: 1px solid #f8f1e1;
    border-radius: 10px;
    line-height: 200%;
  }
  .entryWrap {
    padding-left: 1rem;
    border-radius: 10px;
    background-color: #e8e8e8;
  }
  .addReiWap{
      background-color: #eee;
  }
  .tips-bottom {
    padding: 20px 0 0 0;
  }
  .red {
    color: #f00;
  }
  .contract-account {
    color: #f00;
    font-weight: bolder;
  }
  .cell {
    border-radius: 5px;
    background: #f3e1b7;
    padding: 5px 10px;
  }
  .ant-input-number {
    width: 100%;
    border: none;
    border-bottom: 1px solid #d9d9d9;
    border-radius: 0;
  }
  .tips-title {
    text-align: center;
    font-weight: bolder;
    font-size: 16px;
  }
  .deposit-main {
    padding-left: 10px;
  }
}
.agreementModal {
  .ant-modal-title {
    text-align: center;
  }
  .ant-modal-footer {
    text-align: center;
  }
  .red {
    color: #f00;
  }
}
.contentContainer > .ant-tabs-card > .ant-tabs-bar .ant-tabs-nav {
  display: block;
  text-align: center;
}
.contentContainer > .ant-tabs-card > .ant-tabs-bar .ant-tabs-nav-container {
  height: 100px;
  line-height: 90px;
}
.contentContainer > .ant-tabs-card > .ant-tabs-content {
  margin-top: -32px;
}
.contentContainer > .ant-tabs-card > .ant-tabs-bar {
  border: none;
}
.contentContainer > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
  border: none;
  background: transparent;

  text-align: center;
  font-size: 24px;
  color: #666;
}
.contentContainer > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  color: #000;
}
.contentContainer .ant-input {
  border: none;
  border-bottom: 1px solid #d9d9d9;
  border-radius: 0;
}
.contentContainer .ant-input-group-addon {
  border: none;
  background: transparent;
  border-bottom: 1px solid #d9d9d9;
  border-radius: 0;
  cursor: pointer;
}
.ant-table-tbody > tr > td,
.ant-table-thead > tr > th {
  word-break: break-all;
}
.contentSteps {
  width: 600px;
  margin: 20px auto;
  padding: 0;
  background-color: #fff;
}
.rightSider {
  margin: 2rem auto 0;
  padding: 10px;
  background-color: #fff;
}
.coming-soon {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 200px;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 320px) and (max-width: 480px) {
  .ant-input {
    padding: 4px 0;
  }
  .header-nav-right {
    padding-right: 0 !important;
  }
  .contentWrap {
    padding: 0 20px;
    .addr {
      width: 100%;
    }
    .contentContainer {
      width: 100%;
      .ant-form-item {
        padding: 0 25px;
      }
      .form-item-bottom {
        padding: 0;
      }
    }
    .contentSteps {
      width: 100%;
    }
    .depositDesc {
      padding: 15px;
      margin: 20px;
      min-height: 150px;
      width: auto;
      background-color: #fdf7eb;
      border: 1px solid #f8f1e1;
      border-radius: 4px;
    }
    .addReiWap{
        background-color: #eee;
    }
  }
}
.btn-copy {
  margin-left: 10px;
}
</style>
