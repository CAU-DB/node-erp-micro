const db = require('../config/db');

class BaseModel {
    constructor(tableName, idField) {
        this.tableName = tableName;
        this.idField = idField;
    }

    async findAll() {
        const [rows] = await db.query(`SELECT * FROM \`${this.tableName}\``);
        return rows;
    }

    async findById(id, idField) {
        console.log(id, idField);
        const [rows] = await db.query(`SELECT * FROM \`${this.tableName}\` WHERE ${idField} = ?`, [id]);
        return rows[0];
    }

    async create(data) {
        const [result] = await db.query(`INSERT INTO \`${this.tableName}\` SET ?`, [data]);
        return result;
    }

    async update(id, data, idField) {
        const [result] = await db.query(`UPDATE \`${this.tableName}\` SET ? WHERE ${idField} = ?`, [data, id]);
        return result;
    }

    async delete(id, idField) {
        const [result] = await db.query(`DELETE FROM \`${this.tableName}\` WHERE ${idField} = ?`, [id]);
        return result;
    }
}

// Account
class Account extends BaseModel {
    constructor() {
        super('account', 'account_code');
    }
}

// Account Period
class AccountPeriod extends BaseModel {
    constructor() {
        super('account_period', 'account_period_ID');
    }
}

// Approval
class Approval extends BaseModel {
    constructor() {
        super('approval', 'approval_ID');
    }
}

// Attendance
class Attendance extends BaseModel {
    constructor() {
        super('attendance', 'attendance_ID');
    }
}

// Bank Account
class BankAccount extends BaseModel {
    constructor() {
        super('bank_account', 'bank_account_ID');
    }
}

// Basic Salary
class BasicSalary extends BaseModel {
    constructor() {
        super('basic_salary', 'salary_ID');
    }
}

// Budget
class Budget extends BaseModel {
    constructor() {
        super('budget', 'budget_ID');
    }
}

// Customer
class Customer extends BaseModel {
    constructor() {
        super('customer', 'customer_id');
    }
}

// Department
class Department extends BaseModel {
    constructor() {
        super('departments', 'dept_ID');
    }
}

// Employee
class Employee extends BaseModel {
    constructor() {
        super('employee', 'employee_ID');
    }
}

// Employee Detail
class EmployeeDetail extends BaseModel {
    constructor() {
        super('employee_detail', 'employee_ID');
    }
}

// Factory
class Factory extends BaseModel {
    constructor() {
        super('factory', 'factory_id');
    }
}

// Inventory
class Inventory extends BaseModel {
    constructor() {
        super('inventory', 'product_id');
    }
}

// Journal
class Journal extends BaseModel {
    constructor() {
        super('journal', 'journal_ID');
    }
}

// Order
class Order extends BaseModel {
    constructor() {
        super('order', 'order_id');
    }
}

// OrderProduct
class OrderProduct extends BaseModel {
    constructor() {
        super('order_product', ['order_id', 'product_id']);
    }
}

// Participation
class Participation extends BaseModel {
    constructor() {
        super('participation', ['dept_ID', 'project_ID']);
    }
}

// Pay
class Pay extends BaseModel {
    constructor() {
        super('pay', 'pay_ID');
    }
}

// PayCategory
class PayCategory extends BaseModel {
    constructor() {
        super('pay_category', 'pay_cat_ID');
    }
}

// Payment
class Payment extends BaseModel {
    constructor() {
        super('payment', 'payment_id');
    }
}

// PaymentCard
class PaymentCard extends BaseModel {
    constructor() {
        super('payment_card', 'card_ID');
    }
}

// Permission
class Permission extends BaseModel {
    constructor() {
        super('permission', 'dept_ID');
    }
}

// PositionHistory
class PositionHistory extends BaseModel {
    constructor() {
        super('position_history', 'pos_history_ID');
    }
}

// Product
class Product extends BaseModel {
    constructor() {
        super('product', 'product_id');
    }
}

// Production
class Production extends BaseModel {
    constructor() {
        super('production', 'production_id');
    }
}

// Project
class Project extends BaseModel {
    constructor() {
        super('project', 'project_ID');
    }
}

// StatusHistory
class StatusHistory extends BaseModel {
    constructor() {
        super('status_history', 'sta_history_ID');
    }
}

// Supplier
class Supplier extends BaseModel {
    constructor() {
        super('supplier', 'supplier_id');
    }
}

// Supply
class Supply extends BaseModel {
    constructor() {
        super('supply', ['product_id', 'supplier_id']);
    }
}

// Transaction
class Transaction extends BaseModel {
    constructor() {
        super('transaction', 'trans_ID');
    }
}

// UseAccount
class UseAccount extends BaseModel {
    constructor() {
        super('use_account', ['account_code', 'budget_ID']);
    }
}

// Warehouse
class Warehouse extends BaseModel {
    constructor() {
        super('warehouse', 'warehouse_id');
    }
}

module.exports = {
    Account: new Account(),
    AccountPeriod: new AccountPeriod(),
    Approval: new Approval(),
    Attendance: new Attendance(),
    BankAccount: new BankAccount(),
    BasicSalary: new BasicSalary(),
    Budget: new Budget(),
    Customer: new Customer(),
    Department: new Department(),
    Employee: new Employee(),
    EmployeeDetail: new EmployeeDetail(),
    Factory: new Factory(),
    Inventory: new Inventory(),
    Journal: new Journal(),
    Order: new Order(),
    OrderProduct: new OrderProduct(),
    Participation: new Participation(),
    Pay: new Pay(),
    PayCategory: new PayCategory(),
    Payment: new Payment(),
    PaymentCard: new PaymentCard(),
    Permission: new Permission(),
    PositionHistory: new PositionHistory(),
    Product: new Product(),
    Production: new Production(),
    Project: new Project(),
    StatusHistory: new StatusHistory(),
    Supplier: new Supplier(),
    Supply: new Supply(),
    Transaction: new Transaction(),
    UseAccount: new UseAccount(),
    Warehouse: new Warehouse(),
};
