# -*- coding: utf-8 -*-

from odoo import fields, models, api
from odoo.exceptions import Warning


class StockPicking(models.Model):
    _inherit = 'stock.picking'

    location_id = fields.Many2one(
        comodel_name='stock.location',
        domain=[('usage', '=', 'internal')],
        states={
            'draft': [('readonly', True)],
            'done': [('readonly', True)],
            'cancel': [('readonly', True)],
            'confirmet': [('readonly', True)],
            'assigned': [('readonly', True)]
        }
    )
    location_dest_id = fields.Many2one(
        comodel_name='stock.location',
        domain=[('usage', '=', 'internal')])
    picking_type_id = fields.Many2one(
        comodel_name='stock.picking.type',
        domain=[('code', '=', 'internal')],
        states={
            'done': [('readonly', True)],
            'cancel': [('readonly', True)],
            'confirmet': [('readonly', True)],
            'assigned': [('readonly', True)]
        }
    )

    def action_assign(self):
        user_location_ids = ([x.id for x in self.env.user.location_ids if x])
        if not (self.location_id.id in user_location_ids):
            raise Warning(u"No tiene permisos para transferir desde 'Ubicación origen' {} ".format(self.location_id.name))
        for line in self.move_lines:
            product_name = line.product_id.display_name
            if not line.product_id.type == 'product':
                raise Warning(u"El producto {} debe ser de tipo Almacenable.".format(product_name))
            if self.location_id.id:
                obj_sq = self.env['stock.quant'].search([
                                                        ('location_id', '=', self.location_id.id),
                                                        ('product_id', '=', line.product_id.id)
                                                        ])
                product_stock_qty = sum([x.qty for x in obj_sq if x.qty])
                product_qty = line.product_uom_qty
                name_warehouse = self.location_id.name
                if product_qty > product_stock_qty:
                    messaje = u"Usted planea vender {} {} pero solo tiene {} en {} ".format(product_qty, product_name, product_stock_qty, name_warehouse)
                    raise Warning(messaje)
        res = super(StockPicking, self).action_assign()
        return res

    @api.onchange('picking_type_id', 'partner_id')
    def onchange_picking_type(self):
        if self.picking_type_id:
            if self.picking_type_id.default_location_src_id:
                location_id = self.picking_type_id.default_location_src_id.id
            elif self.partner_id:
                location_id = self.partner_id.property_stock_supplier.id
            else:
                customerloc, location_id = self.env['stock.warehouse']._get_partner_locations()

            if self.picking_type_id.default_location_dest_id:
                location_dest_id = self.picking_type_id.default_location_dest_id.id
            elif self.partner_id:
                location_dest_id = self.partner_id.property_stock_customer.id
            else:
                location_dest_id, supplierloc = self.env['stock.warehouse']._get_partner_locations()

            # self.location_id = location_id
            self.location_dest_id = location_dest_id
        # TDE CLEANME move into onchange_partner_id
        if self.partner_id:
            if self.partner_id.picking_warn == 'no-message' and self.partner_id.parent_id:
                partner = self.partner_id.parent_id
            elif self.partner_id.picking_warn not in ('no-message', 'block') and self.partner_id.parent_id.picking_warn == 'block':
                partner = self.partner_id.parent_id
            else:
                partner = self.partner_id
            if partner.picking_warn != 'no-message':
                if partner.picking_warn == 'block':
                    self.partner_id = False
                return {'warning': {
                    'title': ("Warning for %s") % partner.name,
                    'message': partner.picking_warn_msg
                }}
