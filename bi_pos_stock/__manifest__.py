# -*- coding: utf-8 -*-
# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.


{
    "name" : "POS Stock",
    "version" : "11.0.0.3",
    "category" : "Point of Sale",
    "depends" : ['base','sale','stock','point_of_sale'],
    "author": "BrowseInfo",
    'summary': 'Apps help to Display Stock Quantity on POS,Allow/Deny order based on stock',
    'price': '19',
    'currency': "EUR",
    "description": """
    
    Purpose :- 
Display Stock in POS, Display Stock Quantity on POS, POS warning, Warning on POS, POS stock management, Stock management on POS, Product stock on POS, POS product stock, POS product stock on hand, Display product stock on POS, Point of sale stock, Display Stock in Point of Sales, Display Stock Quantity on Point of Sales, Point of Sales warning, Warning on Point of Sales, Point of Sales stock management, Stock management on Point of Sales, Product stock on Point of Sales, Point of sales product stock, Point of sales product stock on hand, Display product stock on Point of Sales,
    """,
    "website" : "www.browseinfo.in",
    "data": [
        'views/custom_pos_view.xml',
        'views/custom_pos_config_view.xml',
    ],
    'qweb': [
        'static/src/xml/bi_pos_stock.xml',
    ],
    "auto_install": False,
    "installable": True,
    "images":['static/description/Banner.png'],
}
# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4:
