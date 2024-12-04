// src/routes/index.js

const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// Account routes
router.get('/accounts', controllers.AccountController.getAll);
router.get('/accounts/:id', controllers.AccountController.getOne);
router.post('/accounts', controllers.AccountController.create);
router.put('/accounts/:id', controllers.AccountController.update);
router.delete('/accounts/:id', controllers.AccountController.delete);

// Account Period routes
router.get('/account-periods', controllers.AccountPeriodController.getAll);
router.get('/account-periods/:id', controllers.AccountPeriodController.getOne);
router.post('/account-periods', controllers.AccountPeriodController.create);
router.put('/account-periods/:id', controllers.AccountPeriodController.update);
router.delete('/account-periods/:id', controllers.AccountPeriodController.delete);

// Approval routes
router.get('/approvals', controllers.ApprovalController.getAll);
router.get('/approvals/:id', controllers.ApprovalController.getOne);
router.post('/approvals', controllers.ApprovalController.create);
router.put('/approvals/:id', controllers.ApprovalController.update);
router.delete('/approvals/:id', controllers.ApprovalController.delete);

// Attendance routes
router.get('/attendance', controllers.AttendanceController.getAll);
router.get('/attendance/:id', controllers.AttendanceController.getOne);
router.post('/attendance', controllers.AttendanceController.create);
router.put('/attendance/:id', controllers.AttendanceController.update);
router.delete('/attendance/:id', controllers.AttendanceController.delete);

// Bank Account routes
router.get('/bank-accounts', controllers.BankAccountController.getAll);
router.get('/bank-accounts/:id', controllers.BankAccountController.getOne);
router.post('/bank-accounts', controllers.BankAccountController.create);
router.put('/bank-accounts/:id', controllers.BankAccountController.update);
router.delete('/bank-accounts/:id', controllers.BankAccountController.delete);

// Basic Salary routes
router.get('/basic-salaries', controllers.BasicSalaryController.getAll);
router.get('/basic-salaries/:id', controllers.BasicSalaryController.getOne);
router.post('/basic-salaries', controllers.BasicSalaryController.create);
router.put('/basic-salaries/:id', controllers.BasicSalaryController.update);
router.delete('/basic-salaries/:id', controllers.BasicSalaryController.delete);

// Budget routes
router.get('/budgets', controllers.BudgetController.getAll);
router.get('/budgets/:id', controllers.BudgetController.getOne);
router.post('/budgets', controllers.BudgetController.create);
router.put('/budgets/:id', controllers.BudgetController.update);
router.delete('/budgets/:id', controllers.BudgetController.delete);

// Customer routes
router.get('/customers', controllers.CustomerController.getAll);
router.get('/customers/:id', controllers.CustomerController.getOne);
router.post('/customers', controllers.CustomerController.create);
router.put('/customers/:id', controllers.CustomerController.update);
router.delete('/customers/:id', controllers.CustomerController.delete);

// Department routes
router.get('/departments', controllers.DepartmentController.getAll);
router.get('/departments/:id', controllers.DepartmentController.getOne);
router.post('/departments', controllers.DepartmentController.create);
router.put('/departments/:id', controllers.DepartmentController.update);
router.delete('/departments/:id', controllers.DepartmentController.delete);

// Employee routes
router.get('/employees', controllers.EmployeeController.getAll);
router.get('/employees/:id', controllers.EmployeeController.getOne);
router.post('/employees', controllers.EmployeeController.create);
router.put('/employees/:id', controllers.EmployeeController.update);
router.delete('/employees/:id', controllers.EmployeeController.delete);

// Factory routes
router.get('/factories', controllers.FactoryController.getAll);
router.get('/factories/:id', controllers.FactoryController.getOne);
router.post('/factories', controllers.FactoryController.create);
router.put('/factories/:id', controllers.FactoryController.update);
router.delete('/factories/:id', controllers.FactoryController.delete);

// Inventory routes
router.get('/inventory', controllers.InventoryController.getAll);
router.get('/inventory/:id', controllers.InventoryController.getOne);
router.post('/inventory', controllers.InventoryController.create);
router.put('/inventory/:id', controllers.InventoryController.update);
router.delete('/inventory/:id', controllers.InventoryController.delete);

// Journal routes
router.get('/journals', controllers.JournalController.getAll);
router.get('/journals/:id', controllers.JournalController.getOne);
router.post('/journals', controllers.JournalController.create);
router.put('/journals/:id', controllers.JournalController.update);
router.delete('/journals/:id', controllers.JournalController.delete);

// Order routes
router.get('/orders', controllers.OrderController.getAll);
router.get('/orders/:id', controllers.OrderController.getOne);
router.post('/orders', controllers.OrderController.create);
router.put('/orders/:id', controllers.OrderController.update);
router.delete('/orders/:id', controllers.OrderController.delete);

// Payment routes
router.get('/payments', controllers.PaymentController.getAll);
router.get('/payments/:id', controllers.PaymentController.getOne);
router.post('/payments', controllers.PaymentController.create);
router.put('/payments/:id', controllers.PaymentController.update);
router.delete('/payments/:id', controllers.PaymentController.delete);

// Product routes
router.get('/products', controllers.ProductController.getAll);
router.get('/products/:id', controllers.ProductController.getOne);
router.post('/products', controllers.ProductController.create);
router.put('/products/:id', controllers.ProductController.update);
router.delete('/products/:id', controllers.ProductController.delete);

// Production routes
router.get('/production', controllers.ProductionController.getAll);
router.get('/production/:id', controllers.ProductionController.getOne);
router.post('/production', controllers.ProductionController.create);
router.put('/production/:id', controllers.ProductionController.update);
router.delete('/production/:id', controllers.ProductionController.delete);

// Project routes
router.get('/projects', controllers.ProjectController.getAll);
router.get('/projects/:id', controllers.ProjectController.getOne);
router.post('/projects', controllers.ProjectController.create);
router.put('/projects/:id', controllers.ProjectController.update);
router.delete('/projects/:id', controllers.ProjectController.delete);

// Supplier routes
router.get('/suppliers', controllers.SupplierController.getAll);
router.get('/suppliers/:id', controllers.SupplierController.getOne);
router.post('/suppliers', controllers.SupplierController.create);
router.put('/suppliers/:id', controllers.SupplierController.update);
router.delete('/suppliers/:id', controllers.SupplierController.delete);

module.exports = router;
