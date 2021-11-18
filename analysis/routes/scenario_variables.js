

var number = "number"
var text = "text"
var date = "date"
var no_data = "no_data"


var sensor_name = {
	0 : "모든 센서",
	1 : "스마트 온/습도 센서",
	2 : "스마트 에너지 미터",
	3 : "스마트 전등 스위치",
	4 : "스마트 콘센트",
	5 : "스마트 IoT레이더센서"
}

var sensor_attribute = {
	1 : ["temperature", "humidity", "battery"],
	2 : ["energy", "power", "current", "voltage"],
	3 : ["onoff"],
	4 : ["energy", "power", "current", "voltage", "threshold", "onoff", "lock"],
	5 : ["MsgID", "PositionX", "PositionY", "Type"],
	0 : ["onoff"]
}

var attribute_name = {
	1 : ["온도(C)", "습도(%)", "배터리 정상 여부"],
	2 : ["누적전력(kWh)", "순시전력(Wh)", "전압(V)", "전류(A)"],
	3 : ["전원(1=켜짐)"],
	4 : ["누적전력(kWh)", "순시전력(Wh)", "전압(V)", "전류(A)", "차단설정값(mW)", "전원(1=켜짐)", "전원제어 잠금(1=잠금)"],
	5 : ["표적 검출 정보", "표적 좌표 X", "표적 좌표 Y", "타입(0:동적 형성, 1: 고정물, 2: 지형)"],
	0 : ["고장 여부"]
}

var room_id_number = {
	1 : 2158,
	2 : 3101,
	3 : 3106,
	4 : 3107,
	5 : 3193,
	6 : 4142,
	7 : 4127,
	8 : 5141,
	9 : 5143,
	10 : 5145,
	11 : 5147,
	12 : 6141,
	13 : 6144,
	14 : 6147,

}

var condition = {
	type : ["what", "when", "range"],
	what : {
		keys : [ "sensor", "attribute", "condition", "threshold" ],
		sensor : [1,2,3,4,5,0], // 1 : 스마트 온/습도 센서, 2 : 스마트 에너지 미터, 3: 스마트 전등 스위치, 4: 스마트 콘센트, 5: 스마트 IoT레이더센서, 0: 모든 센서
		attribute : sensor_attribute,
		attribute_name : attribute_name,
		condition : ["greater", "less", "between", "equal"],
		threshold : [number, number, number, number],
		threshold_range : [1, 1, 2, 1]
	},
	when : {
		keys : ["time", "threshold"],
		time : ["after", "before", "always"],
		threshold : [date, date, no_data],
		threshold_range : [1, 1, 0]
	},
	range : {
		keys : ["room_id"],
		room_id : ["room_ids", "building_id"],
		room_id_range : [number, text]
	}
}

var action = {
	type : ["control", "notify"],
	control : {
		keys : ["device", "action"],
		device : ["device_id", "device_name", "device_target"],
		action : ["on","off","set"],
		set_attribute : attribute_name,
		set_threshold_range : [1]
	},
	notify : {
		keys : ["send_to", "content", "method"],
		send_to : ["user_group", "user_ids"],
		content : [text],
		method : ["mail", "message"]
	}
}

module.exports = {
	sensor_type : [1,2,3,4,5,0],
	sensor_name : sensor_name,
	sensor_attribute : sensor_attribute,
	condition : condition,
	action : action,
	room_id_number : room_id_number
}