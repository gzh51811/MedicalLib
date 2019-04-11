import React from 'react';
import './detail.css'
import axios from 'axios'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {withRouter} from 'react-router-dom';
import { Tabs,BackTop  } from 'antd';
const TabPane = Tabs.TabPane;

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[],
            goodsimages:[],
            hotlist:[]
        }
    }

    componentWillMount(){
        // axios.get('http://router.111yao.com//sltRouter',{
        //        params:{
        //            method:'goodsDetailWapMINAUse',
        //            platFormType:'wap',
        //            goodsId:654,
        //            storeId:''
        //        }
        //    }).then((response)=> {
        //      // console.log(response);
        //      this.setState({
        //          data:response.data,
        //          goodsimages:[...response.data.goodsImages]
        //      })
        //
        //    })

           axios.get('http://localhost:8000/home/hot')
           .then( response => {
             response.data[0].length = 10;
             var arr = Array.from(response.data[0]);
             this.setState({
               hotlist: [...arr],
             });
           })


    }

    componentDidMount() {

        new Swiper('.swiper-container',{
          pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                  return '<span class="' + currentClass + '"></span>' +
                         ' / ' +
                         '<span class="' + totalClass + '"></span>';
                },
          },
          observer:true
        })
   }


   pinglun(){
       axios.get('http://router.111yao.com//sltRouter',{
              params:{
                  method:'goodsComments',
                  goodsId:654,
                  pageNo:1,
                  type:'',
                  pageSize:5
              }
          }).then((response)=> {
            // console.log(response.data);
            // this.setState({
            //     data:response.data,
            //     goodsimages:[...response.data.goodsImages]
            // })

          })
   }

   goback(){
       console.log(this.props)
       this.props.history.goBack()
   }


    render(){
        // console.log(this.props.msg.goodsimages);
        let {goodsimages,goods,goodsprice} = this.props.msg;
        // console.log(this.props.mag);

        // console.log(goodsprice);
        return(
            <div id='detailmain'>
                <header>
                    <span className='_head_left' onClick={this.goback.bind(this)}></span>
                    <span className='_right_sign'></span>
                </header>
                <div className='details-main'>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                goodsimages.map((item,idx)=>{
                                    return <div className="swiper-slide" key={idx}><img src={'http://img.zdfei.com/'+item.images} /></div>
                                })
                            }
                        </div>
                        <div className='jiaodiangensui'>
                        <div className="swiper-pagination" style={{borderRadius:'13px',width:'25px'}}></div></div>
                    </div>
                    <div className='_product_cont'>
                        <div className='_product_info clearfix'>
                            <a className='goodsname'>{goods.goods_name}</a>
                            <span className='_otc'>OTC</span>
                        </div>
                        <p className='_product_price clearfix'>{goodsprice.price}</p>
                        <div className='clearfix coupon_clearfix'>
                            <span className='coupon_img_span'>
                                <img src='http://img.zdfei.com/static/image/htmls/single/2019-01-31/5c52b9d55ac40.png'/>
                            </span>
                            <span className='coupon_info_span'>新人专享-160元新用户大礼包</span>
                            <span className='coupon_right_span'>领券</span>
                        </div>
                        <div className="_show_line clearfix">
                            <p className="_effect_line clearfix">
                                <span className='_effect'>功效</span>
                                <span className='gongxiao'>{goods.main_title}</span>
                            </p>
                            <p className='_show_more'></p>
                        </div>
                        <div className="_show_line clearfix">
                            <p className="_effect_line clearfix">
                                <span className='_effect'>规格</span>
                                <span className='gongxiao'>{goods.spec}</span>
                            </p>
                            <p className='_show_more'></p>
                        </div>
                    </div>
                    <div className='groom-box'>
                        <div className="_sel_spc">
                            <strong className='_left_line'></strong>
                            <span className='_sel_text'>猜你在找</span>
                            <strong className='_right_line'></strong>
                        </div>
                        <div className='guess-box'>
                        <div>
                        {
                          this.state.hotlist.map(item=>{
                            return <div className='goods-item' key={item.goods_id}>
                                                <div>
                                                    <img src={'http://img.zdfei.com/'+item.abbreviation_picture}/>
                                                    <p className='item_title'>{item.short_name}</p>
                                                    <p className='item_price'>￥{item.price}</p>
                                                </div>
                                            </div>
                          })
                        }
                        </div>
                        </div>
                    </div>
                    <div className='product-info-link'>
                        <div className='wrap'>
                        <Tabs defaultActiveKey="1" tabBarGutter={55}>
                            <TabPane tab="图文详情" key="1">
                            <p className='tuwenxiangqing'><img src="http://img.zdfei.com//static/image/public/20151224/1450949007093095048xx2.jpg" title="1450949007093095048.jpg" alt="0105117阿苯达唑片_09.jpg"/><img src="http://img.zdfei.com//static/image/public/20151224/1450949012006012644xx2.jpg" title="1450949012006012644.jpg" alt="0105117阿苯达唑片_10.jpg"/><img src="http://img.zdfei.com//static/image/public/20151224/1450949016937063734xx2.jpg" title="1450949016937063734.jpg" alt="0105117阿苯达唑片_11.jpg"/><img src="http://img.zdfei.com//static/image/public/20151224/1450949021715034187xx2.jpg" title="1450949021715034187.jpg" alt="0105117阿苯达唑片_12.jpg"/><img src="http://img.zdfei.com//static/image/public/20151224/1450949027665094894xx2.jpg" title="1450949027665094894.jpg" alt="0105117阿苯达唑片_13.jpg"/><img src="http://img.zdfei.com//static/image/public/20151224/1450949032379003032xx2.jpg" title="1450949032379003032.jpg" alt="0105117阿苯达唑片_14.jpg"/></p><p><br/></p>
                            </TabPane>
                            <TabPane tab="说明书" key="2">
                            <div className='shuomingshu'>
                                <p>
                                    <strong>【药品名称】</strong>
                                    <span>史克肠虫清</span>
                                </p>
                                <p>
                                    <strong>【通用名称】</strong>
                                    <span>阿苯达唑片</span>
                                </p>
                                <p>
                                    <strong>【化 学 名】</strong>
                                    <span>丙硫基)-1H-苯并咪唑-2-基]氨基甲酸甲酯。</span>
                                </p>
                                <p>
                                    <strong>【适 应 症】</strong>
                                    <span>本品为广谱驱虫药，除用于治疗钩虫、蛔虫、鞭虫、蛲虫、施毛虫等线虫病外，还可用于治疗囊虫和包虫病。</span>
                                </p>
                                <p>
                                    <strong>【用法用量】</strong>
                                    <span>口服。 1.成人常用量 蛔虫及蛲虫病，一次400mg顿服； 钩虫病，鞭虫病，一次400mg，一日2次，连服3日； 旋毛虫病，一次400mg，一日2次，连服7日； 囊虫病，按体重每日20mg/kg，分3次口服，10日为1个疗程，一般需1~3个疗程。疗程间隔视病情而定，多为3个月； 包虫病，按体重每日20mg/kg，分2次口服，疗程1个月，一般需5个疗程以上，疗程间隔为7~10日。 2.小儿用量：12岁以下小儿用量减半。</span>
                                </p>
                                <p>
                                    <strong>【不良反应】</strong>
                                    <span>1.少数病例有口干、乏力、思睡、头晕、头痛以及恶心，上腹不适等消化道症状。但均较轻微，不需处理可自行缓解。
                                    <br/>
                                     2.治疗囊虫病特别是脑囊虫病时，主要因囊虫死亡释出异性蛋白有关，多于服药后2~7天发生，出现头痛、发热、皮疹、肌肉酸痛、视力障碍、癫痫发作等，须采取相应措施（应用肾上腺皮质激素，降颅压、抗癫痫等治疗）。
                                     <br/>
                                      3.治疗囊虫病和包虫病，因用药剂量较大，疗程较长，可出现谷丙转氨酶升高，多于停药后逐渐恢复正常。
                                    </span>
                                </p>
                                <p>
                                    <strong>【妊娠及哺乳期妇女用药】</strong>
                                    <span>孕妇、哺乳期妇女禁用。</span>
                                </p>
                                <p>
                                    <strong>【儿童用药】</strong>
                                    <span>两岁以下儿童不宜服用。</span>
                                </p>
                                <p>
                                    <strong>【禁 忌 症】</strong>
                                    <span>1.有蛋白尿、化脓性皮炎以及各种急性疾病患者。
                                    <br/>
                                     2.严重肝、肾、心脏功能不全及活动性溃疡病患者。
                                     <br/>
                                      3.眼囊虫病手术摘除虫体前。
                                    </span>
                                </p>
                                <p>
                                    <strong>【注意事项】</strong>
                                    <span>1.蛲虫病易自身重复感染，故在治疗2周后应重复治疗一次。<br/>
                                     2. 脑囊虫病人必须住院治疗，以免发生意外。
                                     <br/>
                                       3.合并眼囊虫病时，须先行手术摘除虫体，而后进行药物治疗。
                                    </span>
                                </p>
                                <p>
                                    <strong>【药理、毒理】</strong>
                                    <span>本品系苯并咪唑类衍生物，其在体内迅速代谢为亚砜、砜醇和2-胺砜醇。对肠道线虫选择性及不可逆性地抑制寄生虫肠壁细胞胞浆微管系统的聚合，阻断其对多种营养和葡萄糖的摄取吸收，导致虫体内源性糖原耗竭，并抑制延胡索酸还原酶系统，阻止三磷酸腺苷的产生，致使虫体无法生存和繁殖。与甲苯咪唑相似，本品还可引起虫体肠细胞胞浆微管变性，并与其微管蛋白结合，造成细胞内运输堵塞，致使高尔基体内分泌颗粒积聚，胞浆逐渐溶解，吸收细胞完全变性，引起虫体死亡。本品有完全杀死钩虫卵和鞭虫卵及部分杀死蛔虫卵的作用。除可杀死驱除寄生于动物体内的各种线虫外，对绦虫及囊尾蚴亦有明显的杀死及驱除作用。 毒理试验表明，本品毒性小，安全。小鼠口服LD50大于800mg/kg，犬口服最大耐受量在400mg/kg以上。 本药对雄小白鼠的生殖功能无影响，对雌小白鼠也无致畸胎作用，在雌大白鼠和雌兔，应用较大剂量（30mg/kg/日）时，可发生胎儿吸收和骨骼畸形等。
                                    </span>
                                </p>
                                <p>
                                    <strong>【药代动力学】</strong>
                                    <span>本品不溶于水，故在肠道内吸收缓慢。原药在肝脏内转化为丙硫苯咪唑-亚砜与丙硫苯咪唑-砜，前者为杀虫成分。本品在体内分布依次为肝、肾、肌肉，可透过血脑屏障，脑组织内也有一定浓度。口服后2.5~3小时血药浓度达峰值。原药与砜衍生物在血中的浓度极低，不能测出。而丙硫苯咪唑-亚砜的浓度变化很大，自 0.04μg/ml至0.55μg/ml不等，平均0.16μg/ml。血液中半衰期（t1/2）为8.5~10.5小时。本品及其代谢产物在24小时内 87%从尿排出，13%从粪便排出，在体内无积蓄作用。
                                    </span>
                                </p><p>
                                    <strong>【药物相互作用】</strong>
                                    <span>尚不明确。
                                    </span>
                                </p><p>
                                    <strong>【规   格】</strong>
                                    <span>0.2g*10
                                    </span>
                                </p>
                                <p>
                                    <strong>【贮   藏】</strong>
                                    <span>密封保存 。
                                    </span>
                                </p>
                                <p>
                                    <strong>【批准文号】</strong>
                                    <span>国药准字H12020496
                                    </span>
                                </p>
                                <p>
                                    <strong>【生产厂家】</strong>
                                    <span>中美天津史克制药有限公司
                                    </span>
                                </p>
                            </div>
                            </TabPane>
                            <TabPane tab="评论" key="3" onClick={this.pinglun()}>
                                <div className='pinglun'>
                                    <ul className='_nav_ul'>
                                        <li className='selected'>
                                            全部
                                            <br/>
                                            <span>6</span>
                                        </li>
                                        <li className='selected'>
                                            好评
                                            <br/>
                                            <span>6</span>
                                        </li>
                                        <li className='selected'>
                                            中评
                                            <br/>
                                            <span>6</span>
                                        </li>
                                        <li className='selected'>
                                            差评
                                            <br/>
                                            <span>6</span>
                                        </li>
                                    </ul>
                                    <div id='_menu_con'>
                                        <div className='line_div'></div>
                                        <div className='_comment_list'>
                                            <div className='_user_pic'>
                                                <img src='http://img.zdfei.com/static/image/temp/20170619/4582d2eb14ceac4f9f16527f0b92a5a5.png' />
                                            </div>
                                            <div className='_comment_title'>
                                                <span className='_user_name'>734B81A699742B05D4E860DA9D83562D</span>
                                                <span className='_comment_time'>2018-07-14</span>
                                            </div>
                                            <div className='_star_bg'>
                                                <span className='_star_bg1'></span>
                                                <span className='_star_bg2'></span>
                                                <span className='_star_bg3'></span>
                                                <span className='_star_bg4'></span>
                                                <span className='_star_bg5 _star_active'></span>
                                            </div>
                                            <div className='_comment_cont'>
                                                宝贝包装得很好 无破损 正在使用 期待效果
                                            </div>
                                        </div>
                                        <div className='_comment_list'>
                                            <div className='_user_pic'>
                                                <img src='http://img.zdfei.com/static/image/temp/20170619/4582d2eb14ceac4f9f16527f0b92a5a5.png' />
                                            </div>
                                            <div className='_comment_title'>
                                                <span className='_user_name'>734B81A699742B05D4E860DA9D83562D</span>
                                                <span className='_comment_time'>2018-07-14</span>
                                            </div>
                                            <div className='_star_bg'>
                                                <span className='_star_bg1'></span>
                                                <span className='_star_bg2'></span>
                                                <span className='_star_bg3'></span>
                                                <span className='_star_bg4'></span>
                                                <span className='_star_bg5 _star_active'></span>
                                            </div>
                                            <div className='_comment_cont'>
                                                宝贝包装得很好 无破损 正在使用 期待效果
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                        </Tabs>
                        </div>
                    </div>

                </div>
                    <BackTop />
            </div>
        )
    }

}

Main = withRouter(Main)

export default Main
