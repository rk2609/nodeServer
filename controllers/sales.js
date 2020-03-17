const handleSales = (db) => (req, res) => {
	db.select('*')
	.from('sales_final')
	.then(user => {
		if(user.length) {
			//res.render('home', {users: user});
			//console.log(user);
			res.json(user);	
		} else {
			res.status(400).json('User Not Founds');
		}
	})
	.catch(err => res.status(400).json('error getting user'))
}

module.exports = {
	handleSales: handleSales
};