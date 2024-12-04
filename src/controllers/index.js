const models = require('../models');

class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        Error.captureStackTrace(this, this.constructor);
    }
}

const createController = (Model) => ({
    getAll: async (req, res, next) => {
        try {
            const items = await Model.findAll();
            res.status(200).json({
                status: 'success',
                data: items,
            });
        } catch (err) {
            next(err);
        }
    },

    getOne: async (req, res, next) => {
        try {
            const item = await Model.findById(req.params.id, Model.idField);
            if (!item) {
                throw new ApiError(404, 'Item not found');
            }
            res.status(200).json({
                status: 'success',
                data: item,
            });
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            const result = await Model.create(req.body);
            res.status(201).json({
                status: 'success',
                data: result,
            });
        } catch (err) {
            next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const result = await Model.update(req.params.id, req.body, Model.idField);
            if (result.affectedRows === 0) {
                throw new ApiError(404, 'Item not found');
            }
            res.status(200).json({
                status: 'success',
                data: result,
            });
        } catch (err) {
            next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const result = await Model.delete(req.params.id, Model.idField);
            if (result.affectedRows === 0) {
                throw new ApiError(404, 'Item not found');
            }
            res.status(204).send();
        } catch (err) {
            next(err);
        }
    },
});

module.exports = {
    AccountController: createController(models.Account),
    AccountPeriodController: createController(models.AccountPeriod),
    ApprovalController: createController(models.Approval),
    AttendanceController: createController(models.Attendance),
    BankAccountController: createController(models.BankAccount),
    BasicSalaryController: createController(models.BasicSalary),
    BudgetController: createController(models.Budget),
    CustomerController: createController(models.Customer),
    DepartmentController: createController(models.Department),
    EmployeeController: createController(models.Employee),
    EmployeeDetailController: createController(models.EmployeeDetail),
    FactoryController: createController(models.Factory),
    InventoryController: createController(models.Inventory),
    JournalController: createController(models.Journal),
    OrderController: createController(models.Order),
    OrderProductController: createController(models.OrderProduct),
    ParticipationController: createController(models.Participation),
    PayController: createController(models.Pay),
    PayCategoryController: createController(models.PayCategory),
    PaymentController: createController(models.Payment),
    PaymentCardController: createController(models.PaymentCard),
    PermissionController: createController(models.Permission),
    PositionHistoryController: createController(models.PositionHistory),
    ProductController: createController(models.Product),
    ProductionController: createController(models.Production),
    ProjectController: createController(models.Project),
    StatusHistoryController: createController(models.StatusHistory),
    SupplierController: createController(models.Supplier),
    SupplyController: createController(models.Supply),
    TransactionController: createController(models.Transaction),
    UseAccountController: createController(models.UseAccount),
    WarehouseController: createController(models.Warehouse),
};
