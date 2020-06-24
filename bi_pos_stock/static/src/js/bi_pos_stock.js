// bi_pos_stock js
console.log("custom callleddddddddddddddddddddd")
odoo.define('bi_pos_stock.pos', function(require) {
    "use strict";

    var models = require('point_of_sale.models');
    var screens = require('point_of_sale.screens');
    var core = require('web.core');
    var gui = require('point_of_sale.gui');
    var popups = require('point_of_sale.popups');
    //var Model = require('web.DataModel');
    var field_utils = require('web.field_utils');
    var rpc = require('web.rpc');
    var session = require('web.session');
    var time = require('web.time');
    var utils = require('web.utils');


    var _t = core._t;



	models.load_models({
        model: 'stock.location',
        fields: [],
        //ids:    function(self){ return [self.config.stock_location_id[0]]; },

        loaded: function(self, locations){
            var i;
            self.locations = locations[0];
            
    	    if (self.config.show_stock_location == 'specific')
    	    {

		        // associate the Locations with their quants.
		        var ilen = locations.length;
		        for(i = 0; i < ilen; i++){
		            if(locations[i].id === self.config.stock_location_id[0]){
					    var ayaz = locations[i];
					    self.locations = ayaz;
					    //console.log("ayazzzzzzzzzzzzzzzzzzzzzzzzzzzz callleddddddddddddddddddddd",ayaz, self.config.stock_location_id[0]);
		            }
		        }
            }

        },
	});
	


    var _super_posmodel = models.PosModel.prototype;
    models.PosModel = models.PosModel.extend({
        initialize: function (session, attributes) {
            var product_model = _.find(this.models, function(model){ return model.model === 'product.product'; });
            product_model.fields.push('qty_available','incoming_qty','outgoing_qty','type');

            return _super_posmodel.initialize.call(this, session, attributes);
        },
        
        push_order: function(order, opts){
            var self = this;
            var pushed = _super_posmodel.push_order.call(this, order, opts);
            var client = order && order.get_client();
            
            if (order){
                if (this.config.pos_display_stock === true && this.config.pos_stock_type == 'onhand' || this.config.pos_stock_type == 'available')
                {
		            order.orderlines.each(function(line){
		               var qty = line.quantity;
		               var qty_available = line.product.qty_available;
		               var ayaz = line.product.qty_available - line.quantity;
		               qty_available = ayaz;
		               
		               var product = self.db.get_product_by_id(line.product.id);
		               var all = $('.product');
						$.each(all, function(index, value) {
							var product_id = $(value).data('product-id');
							if (product_id == product.id)
							{
								$(value).find('#stockqty').html(qty_available);
							}
						});
		        
		            });
		        }
            }
            return pushed;
        }
    });
    
    screens.ProductScreenWidget.include({
        show: function() {
            var self = this;
            this._super();
            
    	    if (self.pos.config.show_stock_location == 'specific')
    	    {
			    var partner_id = this.pos.get_client();
		    	var location = self.pos.locations;


                rpc.query({
				        model: 'stock.quant',
				        method: 'get_stock_location_qty',
				        args: [partner_id ? partner_id.id : 0, location],
		            
		            }).then(function(output) {
		            		        
				       var all = $('.product');
						$.each(all, function(index, value) {
							var product_id = $(value).data('product-id');
						
							for (var i = 0; i < output.length; i++) {
								var product = output[i][product_id];
								$(value).find('#stockqty').html(product);
							}
						});
		        });
            
            }
            
        },
    });    
    
    screens.ProductListWidget.include({
		init: function(parent, options) {
		    var self = this;
		    this._super(parent,options);
		    this.model = options.model;
		    this.productwidgets = [];
		    this.weight = options.weight || 0;
		    this.show_scale = options.show_scale || false;
		    this.next_screen = options.next_screen || false;

		    this.click_product_handler = function(){
		        var product = self.pos.db.get_product_by_id(this.dataset.productId);
		        //console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~product",self.pos.config)
		        
		        if (product.type == 'product')
		        {
				    // Deny POS Order When Product is Out of Stock
				    if (product.qty_available <= self.pos.config.pos_deny_order)
				    {
				    	self.gui.show_popup('error',{
							'title': _t('Deny Order'),
				            'body': _t("Deny Order." + "(" + product.display_name + ")" + " is Out of Stock.")
				        });
				    }
				     
				    
				    
				    // Allow POS Order When Product is Out of Stock
				    else if (product.qty_available <= 0 && self.pos.config.pos_allow_order == false)
				    {
						self.gui.show_popup('error',{
							'title': _t('Error: Out of Stock'),
							'body': _t("(" + product.display_name + ")" + " is Out of Stock."),
						});
				    } else {
				    	options.click_product_action(product);
				    }
		        } else {
				    	options.click_product_action(product);
				    }
		        
		        
		        
		    };

		},
   
	});
    // End GiftPopupWidget start
    

});
