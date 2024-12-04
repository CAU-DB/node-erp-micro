// src/routes/index.js

const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

const routes = [
    'account',
    'account-period',
    'approval',
    'attendance',
    'bank-account',
    'basic-salary',
    'budget',
    'customer',
    'department',
    'employee',
    'employee-detail',
    'factory',
    'inventory',
    'journal',
    'order',
    'order-product',
    'participation',
    'pay',
    'pay-category',
    'payment',
    'payment-card',
    'permission',
    'position-history',
    'product',
    'production',
    'project',
    'status-history',
    'supplier',
    'supply',
    'transaction',
    'use-account',
    'warehouse',
];
routes.forEach((r) => {
    const controllerName = `${r
        .split('-')
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .join('')}Controller`;
    router.get(`/${r}`, controllers[controllerName].getAll);
    router.get(`/${r}/:id`, controllers[controllerName].getOne);
    router.post(`/${r}`, controllers[controllerName].create);
    router.put(`/${r}/:id`, controllers[controllerName].update);
    router.delete(`/${r}/:id`, controllers[controllerName].delete);
});

module.exports = router;
