var express = require('express');
var router = express.Router();
var db_utils = require('./db_utils');
var eleastic = require('./elastic_utils')
var debug = require('./debugTool');


// control, notify
exports.control = async function(scenario_id, room_number, callback){
    try 
    {
        rules = await db_utils.get_actions(scenario_id);

        let control = {};
        let notify = {};
        for(var i = 0; i < rules.length; i++){
            let temp = await JSON.parse(rules[i]);
            if(temp["type"] == "control"){
                control = temp;
                var now = new Date();
                var search_time = new Date();
                search_time.setHours(now.getHours() - 24);
                device_type = control["device"]
                device_ids = await select_sensor_by_type_room(sensor_type, room_id);
                action = control["action"]
                if (action == "on")
                {
                    await set_device_on(device_ids)
                }
                else if(action == "off" )
                {
                    await set_device_off(device_ids)
                }
                else
                {
                    attribute = control["attribute"]
                    threshold = control["threshold"]
                    await set_device_attribute_threshold(device_ids, attribute, threshold)
                }
            }
            else if(temp["type"] == "notify"){
                notify = temp;
                send_to = notify["send_to"]
                content = notify["content"]
                method = notify["method"]
                if(method == "mail")
                {
                    await send_emails_notify(send_to, content)
                }
                else(method == "message")
                {
                    await send_messages_notify(send_to, content)
                }
            }
	    }
    }
    catch(err)
    {
        console.log(err)
        return callback(err, -1)
    }

    // db update fire = 0
    // 이런식으로

}

set_device_on = function(device_ids, callback)
{
    /*
    control api call
    check device has attribute called "onoff'"
    */
    return callback(null, 1)
}

set_device_off = function(device_ids, callback)
{
    /*
    control api call
    check device has attribute called "onoff'"
    */
    return callback(null, 1)
}
set_device_set_attribute_threshold = function(device_ids, callback)
{
    /*
    control api call
    find device's attribute and set that attribute to threshold value
    */
    return callback(null, 1)
}

send_emails_notify = function(send_to, content, callback)
{
    /*
    control api call
    find users and send mail in user_info
    */
   return callback(null, 1)
}
send_messages_notify = function(send_to, content, callback)
{
    /*
    control api call
    find users and send messages in user_info (가능하다면 휴대폰으로. 안되면 front end에 띄우게 하는게 조을듯)
    */
   return callback(null, 1)
}
module.exports = router;