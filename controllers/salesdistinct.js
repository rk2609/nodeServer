const handleSalesDistinct = (db) => (req, res) => {
	const  { column } = req.params;
	db('sales_final')
	.distinct('' + column)
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