const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = pool;

/*
Tables

account
account_period
approval
attendance 
bank_account
basic_salary
budget
customer
departments
employee
employee_detail
factory
inventory
journal
order
order_product
participation
pay
pay_category
payment
payment_card
permission
position_history
product
production
project
status_history
supplier
supply
transaction
use_account
warehouse

*/
