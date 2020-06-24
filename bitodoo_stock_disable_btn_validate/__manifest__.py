# -*- coding: utf-8 -*-
##############################################################################
#
#    BITODOO Development SAC.
#    Copyright (C) 2016-TODAY BITODOO (<http://bitodoo.com>).
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
##############################################################################

{
    'name': 'Oculta el botón de validar en la transferencia',
    'summary': 'Oculta el botón de validar para el usuario que transfiere el producto.',
    'description': """Oculta el botón de validar para el usuario que transfiere el producto
    y muestra el botón validar para el usuario que pertenece a la ubicación de destino,
    para que realice la validación.""",
    'category': 'Stock',
    'version': '1.0',
    'website': 'http://www.bitodoo.com/',
    'author': 'Bitodoo',
    'depends': ['bitodoo_stock_assign_location_user'],
    'data': [
        'views/stock.xml',
    ],
    'application': True,
}
