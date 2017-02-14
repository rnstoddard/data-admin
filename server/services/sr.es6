import pool from './sr_pool';

class SR{
  constructor(){
    let self = this;
    pool.getConnection((err, conn)=>{
      if(err) console.log(err);
      else{
        self.conn = conn;
      }
    });
  }
  close(){
    this.conn.release();
  }

  issueInfo(id, action){
    let qString =
    `SELECT * FROM \`srs-schema\`.issue_type_status
      `;
    if(id){
      qString += ` WHERE Issue_id = ${id};`
    }
    this.query(qString,action);
  }

  equipInfo(id, action){
    let qString =
    `SELECT * FROM \`srs-schema\`.equip_info
      `;
    if(id){
      qString += ` WHERE Eq_piece_id = ${id};`
    }
    this.query(qString,action);
  }

  srInfo(num, action){
    let qString =
    `SELECT *
      FROM \`srs-schema\`.\`sr_issue\`
      `;
    if(num){
      qString += ` WHERE SR_num = ${num};`
    }
    this.query(qString,action);
  }

  //returns an array of customer information
    //if no id is given, then all customers are returned
    //if an id is specified, then returns the customer matching that id
  custInfo(id, action){
    let qString = `SELECT *
      FROM \`srs-schema\`.\`cust_info\`
      `
    if(id){
      qString += `WHERE Cust_id = ${id};`
    }
    this.query(qString,action);
  }

  query(qString, action){
    this.conn.query(qString,(err, res, fields)=>{
      action(res);
    });
  }
}

export {SR as default};
