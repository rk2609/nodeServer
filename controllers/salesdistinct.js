const handleSalesDistinct = (db) => (req, res) => {
	db.distinct('Select_Destination','Sales_Person_Email_ID','Lead_Source')
	.from('sales_final')
	.then(user => {
		if(user.length) {
			//res.render('home', {users: user});
			//console.log(user);
			res.json(user);	
		} else {
			res.status(400).json('User Not Found');
		}
	})
	.catch(err => res.status(400).json('error getting user'))
}

module.exports = {
	handleSalesDistinct: handleSalesDistinct
};