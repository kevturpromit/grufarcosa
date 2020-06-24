# -*- coding: utf-8 -*-
from odoo import http

# class CustomStockPickingLabel(http.Controller):
#     @http.route('/custom_stock_picking_label/custom_stock_picking_label/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/custom_stock_picking_label/custom_stock_picking_label/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('custom_stock_picking_label.listing', {
#             'root': '/custom_stock_picking_label/custom_stock_picking_label',
#             'objects': http.request.env['custom_stock_picking_label.custom_stock_picking_label'].search([]),
#         })

#     @http.route('/custom_stock_picking_label/custom_stock_picking_label/objects/<model("custom_stock_picking_label.custom_stock_picking_label"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('custom_stock_picking_label.object', {
#             'object': obj
#         })