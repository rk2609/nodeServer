const handleUpdateColumns = (db) => (req, res) => {
	const  column = 'Submission_Date';
	db.select('Submission_Date')
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
	handleUpdateColumns: handleUpdateColumns
};