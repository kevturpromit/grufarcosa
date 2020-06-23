# -*- coding: utf-8 -*-

from odoo import api, fields, models, _

class sale_order(models.Model):
    _inherit = 'sale.order'

    @api.multi
    def action_cancel(self):
        
        for picking in self.picking_ids:

            if picking.state != 'cancel':
                picking.cancel_stock_picking()

        for invoice in self.invoice_ids :
            if invoice.state != 'cancel':
                invoice.action_invoice_cancel()

        res = super(sale_order, self).action_cancel()
        return res

# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4: