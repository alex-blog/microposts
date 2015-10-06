// profile image collection
ProfileImages = new FS.Collection("ProfileImages", {
	stores: [new FS.Store.GridFS("ProfileImages")]
});

UserImages = new Mongo.Collection("UserImages");

Posts = new Mongo.Collection('Posts');

Posts.attachSchema(new SimpleSchema({
	body: {
		type: String,
		max: 500
	},
	userId: {
		type: String,
		autoValue: function(){
			return Meteor.userId()
		}
	},
	username: {
		type: String,
		autoValue: function(){
			return Mongo.users.findOne({_id: this.userId}).username
		}
	},
	createAt: {
		type: Date,
		autoValue: function(){
			return new Date()
		}
	}
}));