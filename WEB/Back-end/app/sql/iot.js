module.exports = {
    selectDeviceRoom: 'SELECT a.device_id, a.device_type, b.device_name, c.room_id, d.room_name, d.room_number FROM device_info as a inner join device_type as b on a.device_type = b.device_type left join room_device as c on a.device_id = c.device_id left join room_info as d on c.room_id = d.room_id WHERE d.room_id = ? or d.room_number = ?',
    selectSensorRoom: 'SELECT a.sensor_id, a.sensor_type, b.sensor_name, c.room_id, d.room_name, d.room_number FROM sensor_info as a inner join sensor_type as b on a.sensor_type = b.sensor_type left join room_sensor as c on a.sensor_id = c.sensor_id left join room_info as d on c.room_id = d.room_id WHERE d.room_id = ? or d.room_number = ?',
    selectSensorDataByDate: 'SELECT sen_data FROM DGUSDS.tb_data where sen_mng_no=? AND DATE(ins_date) = DATE(DATE_SUB(now(), INTERVAL ? DAY))',
    selectAllSensorDataByDate: 'SELECT sen_data FROM DGUSDS.tb_data where DATE(ins_date) = DATE(DATE_SUB(now(), INTERVAL ? DAY))',
    selectTemperature: 'SELECT sen_data FROM DGUSDS.tb_data where sen_mng_no=? AND DATE(ins_date) = DATE(now()) ORDER BY ins_date DESC',
    countSensorByToday: 'SELECT count(*) FROM DGUSDS.tb_data as t where sen_mng_no=? AND DATE(t.ins_date) = DATE(now())'
}