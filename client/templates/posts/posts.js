Template.posts.helpers({
	posts: function () {
		return Posts.find({}, {sort: {createAt: -1}});
	}
});