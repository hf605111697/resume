var options = {
     title: {
        text: '我的技能',
        x:'center',
		textStyle:{
			fontSize:60
			},
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['页面框架','页面布局','样式改变','简易动画','页面事件','各种插件运用','设计','抠图','修图']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:50, name:'HTML', selected:true},
                {value:50, name:'CSS'},
                {value:50, name:'JavaScript'},
                {value:50, name:'jquer'},
                {value:50, name:'Photoshop'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:50, name:'页面框架'},
                {value:20, name:'页面布局'},
                {value:30, name:'样式改变'},
                {value:25, name:'简易动画'},
                {value:25, name:'页面事件'},
                {value:50, name:'各种插件运用'},
                {value:25, name:'设计'},
                {value:15, name:'抠图'},
                {value:15, name:'修图'}
            ]
        }
    ]
};
