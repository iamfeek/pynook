import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Orders = new Mongo.Collection('orders');

if (Meteor.isServer) {
  Meteor.publish("orders.self", function(){
    return Orders.find({buyer: this.userId})
  });

  Meteor.publish("orders.forBusiness", function(){
    businessId = Meteor.call("business.getId", this.userId);
    return Orders.find({business: businessId});
  })

  Meteor.methods({
    "orders.create"(order){
      console.log("Incoming order Creation from user: " + this.userId)
      check(order.title, String);
      check(parseInt(order.price), Number);
      check(parseInt(order.quantity), Number)
      check(order.description, String);

      let shippingInfo = order.shippingInfo;
      check(shippingInfo.address, String);
      check(shippingInfo.address2, String);
      check(shippingInfo.unit, String);
      check(shippingInfo.postal, String);
      check(shippingInfo.country, String);

      order.createdAt = new Date();
      order.buyer = this.userId;
      order.buyerEmail = Meteor.call("users.getEmail", this.userId);
      order.business = Meteor.call("business.getId", this.userId);
      order.status = "pending";
      order.orderedAt = new Date();
      order.lastModified = new Date();
      order.paymentStatus = "unpaid";
      order.remarks = "";
      // console.log(JSON.stringify(order, null, 2))
      return Orders.insert(order);
    },
    'orders.updateStatus'(orderId, status){
      check(orderId, String);
      check(status, String);

      let businessId = Meteor.call("business.getId", this.userId);

      return Orders.update({_id: orderId, business: businessId}, {$set: {status: status}});
    },

    'orders.hasReceived'(orderId){
      return Orders.update({_id: orderId}, {$set: {status: "received"}})
    }
  })
}
