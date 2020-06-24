# -*- coding: utf-8 -*-
# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.

from odoo import fields, models, api, _
from odoo.exceptions import Warning
import random
from datetime import date, datetime


class pos_config(models.Model):
    _inherit = 'pos.config'
    
    pos_display_stock = fields.Boolean(string='Display Stock in POS')
    pos_stock_type = fields.Selection([('onhand', 'Qty on Hand'), ('incoming', 'Incoming Qty'), ('outgoing', 'Outgoing Qty'), ('available', 'Qty Available')], string='Stock Type', help='Seller can display Different stock type in POS.')
    pos_allow_order = fields.Boolean(string='Allow POS Order When Product is Out of Stock')
    pos_deny_order = fields.Char(string='Deny POS Order When Product Qty is goes down to')   
    
    show_stock_location = fields.Selection([
        ('all', 'All Warehouse'),
        ('specific', 'Current Session Warehouse'),
        ], string='Show Stock Of', default='all')
        

class stock_quant(models.Model):
    _inherit = 'stock.quant'


    @api.multi
    def get_stock_location_qty(self, location):
	    res = {}
	    product_ids = self.env['product.product'].search([])
	    for product in product_ids:
	        quants = self.env['stock.quant'].search([('product_id', '=', product.id),('location_id', '=', location['id'])])
	        if len(quants) > 1:
	            quantity = 0.0
	            for quant in quants:
	                quantity += quant.quantity
	            res.update({product.id : quantity})
	        else:
	            res.update({product.id : quants.quantity})
	    return [res]

	
	

