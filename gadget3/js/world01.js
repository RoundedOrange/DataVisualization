var chinaConfirm;
function getData(){
	$.ajax({
		type:'post',
		url:'https://api.inews.qq.com/newsqa/v1/automation/foreign/country/ranklist',
		dataType:'json',
		success:function(res){
			var data = res.data;
			getWorldMap(data);
            var countries = data;
            var count=0;
            var countryName = [];      
            var countryConfirm = [];
            var countryDead = [];
            for(var country of countries){
                if(count==20){
                    break;
                }else{
                countryName[count]=country.name
                countryConfirm[count]=country.confirm
                countryDead[count]=country.dead
                count++
            }
            }
             getNightingaleRose(countryName,countryConfirm,countryDead);
           
		}
	});
}
getData();
setInterval(getData,1000);
function getWorldMap(data){
var myChart = echarts.init(
    document.getElementById('left1'), 'white', {renderer: 'canvas'});
let  nameComparison = {
    'Canada':'加拿大',
    'Russia':'俄罗斯',
    'China':'中国',
    'United States':'美国',
    'Singapore Rep.':'新加坡',
    'Dominican Rep.':'多米尼加',
    'Palestine':'巴勒斯坦',
    'Bahamas':'巴哈马',
    'Timor-Leste':'东帝汶',
    'Afghanistan':'阿富汗',
    'Guinea-Bissau':'几内亚比绍',
    "Côted'Ivoire":'科特迪瓦',
    'Siachen Glacier':'锡亚琴冰川',
    "Br. Indian Ocean Ter.":'英属印度洋领土',
    'Angola':'安哥拉',
    'Albania':'阿尔巴尼亚',
    'United Arab Emirates':'阿联酋',
    'Argentina':'阿根廷',
    'Armenia':'亚美尼亚',
    'French Southern and Antarctic Lands':'法属南半球和南极领地',
    'Australia':'澳大利亚',
    'Austria':'奥地利',
    'Azerbaijan':'阿塞拜疆',
    'Burundi':'布隆迪',
    'Belgium':'比利时',
    'Benin':'贝宁',
    'Burkina Faso':'布基纳法索',
    'Bangladesh':'孟加拉',
    'Bulgaria':'保加利亚',
    'The Bahamas':'巴哈马',
    'Bosnia and Herz.':'波斯尼亚和黑塞哥维那',
    'Belarus':'白俄罗斯',
    'Belize':'伯利兹',
    'Bermuda':'百慕大',
    'Bolivia':'玻利维亚',
    'Brazil':'巴西',
    'Brunei':'文莱',
    'Bhutan':'不丹',
    'Botswana':'博茨瓦纳',
    'Central African Rep.':'中非共和国',
    'Switzerland':'瑞士',
    'Chile':'智利',
    'Ivory Coast':'象牙海岸',
    'Cameroon':'喀麦隆',
    'Dem. Rep. Congo':'刚果（金）',
    'Congo':'刚果（布）',
    'Colombia':'哥伦比亚',
    'Costa Rica':'哥斯达黎加',
    'Cuba':'古巴',
    'N. Cyprus':'北塞浦路斯',
    'Cyprus':'塞浦路斯',
    'Czech Rep.':'捷克',
    'Germany':'德国',
    'Djibouti':'吉布提',
    'Denmark':'丹麦',
    'Algeria':'阿尔及利亚',
    'Ecuador':'厄瓜多尔',
    'Egypt':'埃及',
    'Eritrea':'厄立特里亚',
    'Spain':'西班牙',
    'Estonia':'爱沙尼亚',
    'Ethiopia':'埃塞俄比亚',
    'Finland':'芬兰',
    'Fiji':'斐济',
    'Falkland Islands':'福克兰群岛',
    'France':'法国',
    'Gabon':'加蓬',
    'United Kingdom':'英国',
    'Georgia':'格鲁吉亚',
    'Ghana':'加纳',
    'Guinea':'几内亚',
    'Gambia':'冈比亚',
    'Guinea Bissau':'几内亚比绍',
    'Eq. Guinea':'赤道几内亚',
    'Greece':'希腊',
    'Greenland':'格林纳达',
    'Guatemala':'危地马拉',
    'French Guiana':'法属圭亚那',
    'Guyana':'圭亚那',
    'Honduras':'洪都拉斯',
    'Croatia':'克罗地亚',
    'Haiti':'海地',
    'Hungary':'匈牙利',
    'Indonesia':'印度尼西亚',
    'India':'印度',
    'Ireland':'爱尔兰',
    'Iran':'伊朗',
    'Iraq':'伊拉克',
    'Iceland':'冰岛',
    'Israel':'以色列',
    'Italy':'意大利',
    'Jamaica':'牙买加',
    'Jordan':'约旦',
    'Japan':'日本本土',
    'Kazakhstan':'哈萨克斯坦',
    'Kenya':'肯尼亚',
    'Kyrgyzstan':'吉尔吉斯斯坦',
    'Cambodia':'柬埔寨',
    'Korea':'韩国',
    'Kosovo':'科索沃',
    'Kuwait':'科威特',
    'Lao PDR':'老挝',
    'Lebanon':'黎巴嫩',
    'Liberia':'利比里亚',
    'Libya':'利比亚',
    'Sri Lanka':'斯里兰卡',
    'Lesotho':'莱索托',
    'Lithuania':'立陶宛',
    'Luxembourg':'卢森堡',
    'Latvia':'拉脱维亚',
    'Morocco':'摩洛哥',
    'Moldova':'摩尔多瓦',
    'Madagascar':'马达加斯加',
    'Mexico':'墨西哥',
    'Macedonia':'马其顿',
    'Mali':'马里',
    'Myanmar':'缅甸',
    'Montenegro':'黑山',
    'Mongolia':'蒙古',
    'Mozambique':'莫桑比克',
    'Mauritania':'毛里塔尼亚',
    'Malawi':'马拉维',
    'Malaysia':'马来西亚',
    'Namibia':'纳米比亚',
    'New Caledonia':'新喀里多尼亚',
    'Niger':'尼日尔',
    'Nigeria':'尼日利亚',
    'Nicaragua':'尼加拉瓜',
    'Netherlands':'荷兰',
    'Norway':'挪威',
    'Nepal':'尼泊尔',
    'New Zealand':'新西兰',
    'Oman':'阿曼',
    'Pakistan':'巴基斯坦',
    'Panama':'巴拿马',
    'Peru':'秘鲁',
    'Philippines':'菲律宾',
    'Papua New Guinea':'巴布亚新几内亚',
    'Poland':'波兰',
    'Puerto Rico':'波多黎各',
    'Dem. Rep. Korea':'朝鲜',
    'Portugal':'葡萄牙',
    'Paraguay':'巴拉圭',
    'Qatar':'卡塔尔',
    'Romania':'罗马尼亚',
    'Rwanda':'卢旺达',
    'W. Sahara':'西撒哈拉',
    'Saudi Arabia':'沙特阿拉伯',
    'Sudan':'苏丹',
    'S. Sudan':'苏丹',
    'Senegal':'塞内加尔',
    'Solomon Is.':'所罗门群岛',
    'Sierra Leone':'塞拉利昂',
    'El Salvador':'萨尔瓦多',
    'Somaliland':'索马里兰',
    'Somalia':'索马里',
    'Serbia':'塞尔维亚',
    'Suriname':'苏里南',
    'Slovakia':'斯洛伐克',
    'Slovenia':'斯洛文尼亚',
    'Sweden':'瑞典',
    'Swaziland':'斯威士兰',
    'Syria':'叙利亚',
    'Chad':'乍得',
    'Togo':'多哥',
    'Thailand':'泰国',
    'Tajikistan':'塔吉克斯坦',
    'Turkmenistan':'土库曼斯坦',
    'East Timor':'东帝汶',
    'Trinidad and Tobago':'特里尼达和多巴哥',
    'Tunisia':'突尼斯',
    'Turkey':'土耳其',
    'Tanzania':'坦桑尼亚',
    'Uganda':'乌干达',
    'Ukraine':'乌克兰',
    'Uruguay':'乌拉圭',
    'Uzbekistan':'乌兹别克斯坦',
    'Venezuela':'委内瑞拉',
    'Vietnam':'越南',
    'Vanuatu':'瓦努阿图',
    'West Bank':'西岸',
    'Yemen':'也门',
    'South Africa':'南非',
    'Zambia':'赞比亚',
    'Zimbabwe':'津巴布韦',
    'Côte d\'\Ivoire':'科特迪瓦'
};
var option = {
    title:{
        text:'全球地区累计确诊分布',
			left:'center',
			textStyle: {
				fontSize: 20,
				color: 'black'
			  },
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    }, 
    visualMap:{
        show:true,
        x:'left',
        y:'bottom',
        textStyle:{
            fontSize:15,
        },
        splitList:[
            {start:1,end: 9},
            {start:10,end:99},
            {start:100,end:999},
            {start:1000,end:9999},
            {start:10000,end:99999},
            {start:100000,end:999999},
            {start:1000000,end:9999999},
            {start:10000000}],
        
        color:['#2F0000','#4D0000','#600000','#750000','#930000','#AE0000','#CE0000','#FF9797']	
    },
    tooltip: {
        show: true,
        trigger: "item",
        triggerOn: "mousemove|click",
        axisPointer: {
            type: "line"
        },
        textStyle: {
            "fontSize": 14
        },
        "borderWidth": 0
    },
    series: [{
            type:'map',
            name:'累计确诊人数',
            nameMap: nameComparison,
            roam:false,
            label: {
                show: false,
                position: "top",
                margin: 8
            },
            mapType: 'world',
            "zoom": 1,
            showLegendSymbol: false,
            itemStyle:{
				normal:{
					borderWidth: .3,
					borderColor:'#009fe8',
					areaColor:'#ffefd5',
				},
				emphasis:{
				borderWidth: .5,
				borderColor:'#4b0082',
				areaColor:'#fff',
				}
			},  
            data: [{name:'中国',value:chinaConfirm}],
    }],
    };
    var countries = data;
    for(var country of countries){
        option.series[0].data.push({
            name:country.name,
            value:country.confirm
        })
    }
    myChart.setOption(option);
}