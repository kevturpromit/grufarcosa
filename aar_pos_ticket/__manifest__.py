# -*- coding: utf-8 -*-
####################   AARSOL      ####################
#    AARSOL Pvt. Ltd.
#    Copyright (C) 2010-TODAY AARSOL(<http://www.aarsol.com>).
#    Author: Farooq Arif(<http://www.aarsol.com>)
#
#    It is forbidden to distribute, or sell copies of the module.
#
#    License:  OPL-1
####################   AARSOL      ####################
#
#   Send and email at features@aarsol.com  after download, so about latest updates on this module, you will be informed
#
#
{
    'name': 'POS Ticket Logo and Barcode',
    'summary': """POS Receipt with Barcode and Logo""",
    'version': '12.0.1.0',
    'description': """POS Receipt with Barcode and Logo""",
    'author': 'AARSOL (Pvt) Limited.',
    'company': 'AARSOL (Pvt) Limited.',
    'website': 'http://www.aarsol.com',
    'category': 'Point of Sale',
    'depends': ['base', 'point_of_sale'],
    'license': 'OPL-1',
    'data': [
    	'views/import.xml', 
    	'views/pos_order.xml',    	
    ],
    'qweb': ['static/src/xml/posticket.xml'],
    'images': ['static/description/banner.png'],
    'demo': [],        
    'installable': True,
    'application': True,
    'auto_install': False,

}
