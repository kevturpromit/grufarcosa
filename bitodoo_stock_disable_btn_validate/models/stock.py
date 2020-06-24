# -*- coding: utf-8 -*-

from odoo import fields, models, api


class StockPicking(models.Model):
    _inherit = 'stock.picking'

    can_validate = fields.Boolean(
        string='Puede recibir', compute='_compute_can_validate')

    @api.depends('location_dest_id')
    @api.one
    def _compute_can_validate(self):
        if self.location_dest_id.id in self.env.user.location_ids.ids:
            self.can_validate = True
        else:
            self.can_validate = False
