# -*- coding: utf-8 -*-

from odoo import fields, models


class ResUsers(models.Model):
    _inherit = 'res.users'

    location_ids = fields.Many2many(
        comodel_name="stock.location",
        relation="user_location_rel",
        column1="user_id",
        column2="location_id",
        string='Asignar ubicaciones',
        help='Asigna una o muchas ubicaciones a usuario'
    )
