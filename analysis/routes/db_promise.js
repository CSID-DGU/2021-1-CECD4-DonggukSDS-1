var express = require('express');
var debug = require('./debugTool');
var mysql = require('mysql2/promise');
DB_PASSWORD = "dgu2021sds@)@!";

var pool = mysql.createPool({
  connectionLimit: 3,
  host: "1.245.223.69",
  user: "dgusds",
  password: DB_PASSWORD,
  port : 13062,
  database: "DGUSDS"
});
exports.pool = pool

/* /scenario/insert */
exports.insert_scenario = async function(scenario_name, manager_id, sequential_check, comments, update_period, active, conditions, actions, callback)
{
  current_time = new Date();
  try {
    conn = await pool.getConnection(async conn => conn)
    await conn.beginTransaction()
    const query_sce = 'INSERT INTO scenario (scenario_name, manager_id, sequential_check, comments, period, last_check, active) \
      VALUES (?, ?, ?, ?, ?, ?, ?)'
    const sce_ins = await conn.query(query_sce, [scenario_name,manager_id, sequential_check, comments, update_period, current_time, active])
    console.log(JSON.stringify(sce_ins))
    scenario_id = await sce_ins[0].insertId;

    query_cond = 'INSERT INTO DGUSDS.condition (rule) VALUES ?'
    query_act = 'INSERT INTO action (action) VALUES ?'
    inp_cons = []
    for(var i = 0; i <conditions.length; i++)
    {
      console.log(i)
      rule_stringify = [JSON.stringify(conditions[i])]
      inp_cons.push(await rule_stringify)
    }
    console.log(inp_cons)
    inp_acts = []
    for(var j = 0; j < actions.length; j++)
    {
      console.log(j)
      rule_stringify = [JSON.stringify(actions[j])]
      inp_acts.push(await rule_stringify)
    }
    console.log(inp_acts)

    const cond_ins = await conn.query(query_cond, [inp_cons])
    const act_ins = await conn.query(query_act, [inp_acts])

    console.log(JSON.stringify(cond_ins))
    cond_rows = cond_ins[0].affectedRows
    condition_ids = []
    for(var k = 0; k < cond_rows; k++){
      condition_ids.push(await cond_ins[0].insertId + k)
    }
    action_rows = act_ins[0].affectedRows
    action_ids = []
    for(var l = 0; l < action_rows; l++){
      action_ids.push(await act_ins[0].insertId + l)
    }
    query_sce_cond = 'INSERT INTO scenario_condition(scenario_id, condition_id) VALUES ?'
    query_sce_act = 'INSERT INTO scenario_action(scenario_id, action_id) VALUES ?'
    sce_cond_ids = []
    sce_act_ids = []
    for(var m of condition_ids)
    {
      cur_ids = [scenario_id]
      cur_ids.push(m)
      sce_cond_ids.push(cur_ids)
    }
    for(var n of action_ids)
    {
      cur_ids = [scenario_id]
      cur_ids.push(n)
      sce_act_ids.push(cur_ids)
    }
    const sce_cond_ins = await conn.query(query_sce_cond, [sce_cond_ids])
    const sce_act_ins = await conn.query(query_sce_act, [sce_act_ids])
    await conn.commit()
    await conn.release()
    return callback(null, scenario_id)
  } catch(err){
    console.log(err)
    await conn.rollback()
    await conn.release()
    return callback(err)
  }
}

// /sensor/get/room/type
exports.select_sensor_by_type_room = async function(room_number, sensor_type){
  try
  {
    console.log('db_util_in', room_number, sensor_type)
    const con = await pool.getConnection(async conn => conn)
    query = 'SELECT a.sensor_id, a.sensor_type, b.sensor_name, c.room_id, d.room_name, d.room_number FROM sensor_info as a \
      inner join sensor_type as b on a.sensor_type = b.sensor_type \
      left join room_sensor as c on a.sensor_id = c.sensor_id \
      left join room_info as d on c.room_id = d.room_id \
      WHERE d.room_number = ? and a.sensor_type = ?'
    result = await con.query(query, [room_number, sensor_type])
    await con.release()
    //console.log('result2 : ' + JSON.stringify(result[0]));
    if (result.length <= 0)
    {
      console.log('no_data');
      return -1;
    }
    sensors = result[0];
    return sensors
  }
  catch(err)
  {
    console.log(err)
    await con.release()
    return err
    //return callback(err)
  }
}

// mr joo
exports.get_rules = async function(scenario_id) {
  try
  {
    con = await pool.getConnection(async conn => conn)
    const rules = await con.query("select a.condition_id, rule from \
        scenario_condition as a inner join DGUSDS.condition as b \
        on a.condition_id = b.condition_id where a.scenario_id = ?;", [scenario_id])
    await con.release()
    console.log('return : ' + JSON.stringify(rules[0]));
    return rules[0]
    //return callback(null, rules);
  }
  catch(err)
  {
    console.log(err)
    await con.release()
    return err
    //return callback(err)
  }
}

// mr joo
exports.get_actions = async function(scenario_id) {
  try
  {
    con = await pool.getConnection(async conn => conn)
    const actions = await con.query("select a.action_id, action from \
        scenario_action as a inner join DGUSDS.action as b \
        on a.action_id = b.action_id where a.scenario_id = ?;", [scenario_id])
    con.release()
    console.log('return : ' + JSON.stringify(rules[0]));
    return actions[0]
    //return callback(null, actions);
  }
  catch(err)
  {
    console.log(err)
    await conn.release()
    return err
    //return callback(err)
  }
}