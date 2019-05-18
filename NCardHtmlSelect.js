let NCardHtmlSelect = {
    datas: {},
    buildOption: function (selectObject, datas, key, value) {
    	let $select = $(selectObject);
    	console.log(selectObject);
    	console.log(datas);
    	console.log(key);
    	console.log(value);
    	this.datas = datas;
    	for(let index in datas) {
    		let data = datas[index];
    		let dataKey = data[key];
    		let dataValue = data[value];
    		$select.append('<option value="'+ dataKey +'">'+ dataValue +'</option>');
    	}
    }
};